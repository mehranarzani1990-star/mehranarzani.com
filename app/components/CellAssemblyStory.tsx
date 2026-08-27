"use client";

import {useEffect,useRef,useState} from "react";

const FRAME_COUNT=45;
const frameUrl=(frame:number)=>`/cell-assembly-v2/frame_${String(frame).padStart(3,"0")}.webp`;

export function CellAssemblyStory(){
  const sectionRef=useRef<HTMLElement|null>(null);
  const canvasRef=useRef<HTMLCanvasElement|null>(null);
  const framesRef=useRef<Array<HTMLImageElement|undefined>>([]);
  const currentRef=useRef(1);
  const progressRef=useRef(0);
  const [progress,setProgress]=useState(0);
  const [ready,setReady]=useState(false);

  useEffect(()=>{
    const section=sectionRef.current;
    const canvas=canvasRef.current;
    if(!section||!canvas)return;
    const context=canvas.getContext("2d");
    if(!context)return;

    let active=true;
    let started=false;
    let raf=0;
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw=(frame:number)=>{
      const image=framesRef.current[frame-1];
      if(!image)return;
      const rect=canvas.getBoundingClientRect();
      const dpr=Math.min(window.devicePixelRatio||1,2);
      const width=Math.max(1,Math.round(rect.width*dpr));
      const height=Math.max(1,Math.round(rect.height*dpr));
      if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;}
      context.setTransform(dpr,0,0,dpr,0,0);
      context.clearRect(0,0,rect.width,rect.height);

      // Paint the chamber inside the canvas so the source frames' black
      // background can be composited away without altering the metal parts.
      const chamber=context.createRadialGradient(rect.width*.5,rect.height*.52,0,rect.width*.5,rect.height*.52,Math.max(rect.width,rect.height)*.58);
      chamber.addColorStop(0,"#0b3040");
      chamber.addColorStop(.26,"#071a27");
      chamber.addColorStop(.62,"#030b14");
      chamber.addColorStop(1,"#01050a");
      context.fillStyle=chamber;
      context.fillRect(0,0,rect.width,rect.height);

      context.save();
      context.strokeStyle="rgba(104,210,239,.075)";
      context.lineWidth=1;
      const grid=72;
      for(let x=(rect.width%grid)/2;x<rect.width;x+=grid){context.beginPath();context.moveTo(x,0);context.lineTo(x,rect.height);context.stroke();}
      for(let y=(rect.height%grid)/2;y<rect.height;y+=grid){context.beginPath();context.moveTo(0,y);context.lineTo(rect.width,y);context.stroke();}
      context.strokeStyle="rgba(99,220,244,.13)";
      for(const radius of [Math.min(rect.width,rect.height)*.23,Math.min(rect.width,rect.height)*.34,Math.min(rect.width,rect.height)*.45]){
        context.beginPath();context.arc(rect.width*.5,rect.height*.52,radius,0,Math.PI*2);context.stroke();
      }
      context.restore();

      const mobile=rect.width<700;
      const baseScale=Math.min(rect.width/image.naturalWidth,rect.height/image.naturalHeight);
      const closingProgress=Math.max(0,(progressRef.current-.76)/.24);
      const easedClose=1-Math.pow(1-closingProgress,3);
      const scale=baseScale*(1+easedClose*(mobile?1.12:.68));
      const drawWidth=image.naturalWidth*scale;
      const drawHeight=image.naturalHeight*scale;
      context.imageSmoothingEnabled=true;
      context.imageSmoothingQuality="high";
      context.globalCompositeOperation="screen";
      context.drawImage(image,(rect.width-drawWidth)/2,(rect.height-drawHeight)/2,drawWidth,drawHeight);
      context.globalCompositeOperation="source-over";
      currentRef.current=frame;
    };

    const load=(frame:number)=>new Promise<void>(resolve=>{
      if(framesRef.current[frame-1]){resolve();return;}
      const image=new Image();
      image.decoding="async";
      image.onload=()=>{framesRef.current[frame-1]=image;resolve();};
      image.onerror=()=>resolve();
      image.src=frameUrl(frame);
    });

    const loadSequence=async()=>{
      if(started)return;
      started=true;
      const first=reduced?FRAME_COUNT:1;
      await load(first);
      if(!active)return;
      draw(first);
      setReady(true);
      if(reduced)return;
      for(let start=2;start<=FRAME_COUNT&&active;start+=5){
        await Promise.all(Array.from({length:5},(_,offset)=>start+offset).filter(frame=>frame<=FRAME_COUNT).map(load));
      }
    };

    const update=()=>{
      raf=0;
      if(reduced)return;
      const rect=section.getBoundingClientRect();
      const travel=Math.max(1,rect.height-window.innerHeight);
      const value=Math.max(0,Math.min(1,-rect.top/travel));
      progressRef.current=value;
      const target=Math.max(1,Math.min(FRAME_COUNT,Math.round(1+value*(FRAME_COUNT-1))));
      if(framesRef.current[target-1])draw(target);
      setProgress(Math.round(value*100));
    };

    const requestUpdate=()=>{if(!raf)raf=requestAnimationFrame(update);};
    const observer=new IntersectionObserver(entries=>{if(entries[0]?.isIntersecting)void loadSequence();},{rootMargin:"75% 0px"});
    observer.observe(section);
    window.addEventListener("scroll",requestUpdate,{passive:true});
    window.addEventListener("resize",requestUpdate);
    requestUpdate();

    return()=>{
      active=false;
      observer.disconnect();
      window.removeEventListener("scroll",requestUpdate);
      window.removeEventListener("resize",requestUpdate);
      if(raf)cancelAnimationFrame(raf);
    };
  },[]);

  return <section className="cell-assembly-story" ref={sectionRef} aria-label="Scroll-controlled cylindrical battery assembly">
    <div className="cell-assembly-pin">
      <div className="cell-assembly-copy">
        <p className="section-kicker">CELL ASSEMBLY</p>
        <h2>Build a <em>Cylindrical Battery</em></h2>
      </div>
      <div className={`cell-assembly-stage ${ready?"is-ready":""}`}>
        <span className="cell-assembly-halo" aria-hidden="true"/>
        <canvas ref={canvasRef} aria-hidden="true"/>
      </div>
      <div className="cell-assembly-phases" aria-hidden="true">
        <div><i style={{width:`${progress}%`}}/></div>
        <span className={progress<34?"is-active":""}>COMPONENTS</span>
        <span className={progress>=34&&progress<84?"is-active":""}>ASSEMBLY / DISASSEMBLY</span>
        <span className={progress>=84?"is-active":""}>COMPLETE</span>
      </div>
    </div>
  </section>;
}
