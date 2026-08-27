"use client";

import {useEffect,useRef,useState} from "react";

const stages=[
  {number:"01",eyebrow:"PRECISION MANUFACTURING",title:"Battery Manufacturing",description:"Automated production transforms engineered components into a production-ready battery pack.",video:"/process-manufacturing.mp4",poster:"/process-manufacturing.jpg"},
  {number:"02",eyebrow:"SYSTEM INTEGRATION",title:"Pack to Vehicle",description:"The battery pack becomes the energy foundation of the electric vehicle and connects to charging.",video:"/process-integration.mp4",poster:"/process-integration.jpg"},
  {number:"03",eyebrow:"ENERGY MANAGEMENT",title:"Charge & Discharge",description:"Controlled energy flow stores electricity, monitors state of charge, and releases power on demand.",video:"/process-charging.mp4",poster:"/process-charging.jpg"},
  {number:"04",eyebrow:"ELECTRIC MOBILITY",title:"Power to the Road",description:"Stored electrochemical energy becomes responsive, efficient motion in a real driving environment.",video:"/process-road.mp4",poster:"/process-road.jpg"},
];

export function EnergyJourney(){
  const [active,setActive]=useState(0);
  const [visible,setVisible]=useState(false);
  const sectionRef=useRef<HTMLElement|null>(null);
  const videos=useRef<Array<HTMLVideoElement|null>>([]);

  useEffect(()=>{
    const section=sectionRef.current;
    if(!section)return;
    const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:.28});
    observer.observe(section);
    return()=>observer.disconnect();
  },[]);

  useEffect(()=>{
    videos.current.forEach((video,index)=>{
      if(!video)return;
      if(visible&&index===active){video.currentTime=0;void video.play().catch(()=>{});}
      else video.pause();
    });
  },[active,visible]);

  const next=()=>setActive(current=>(current+1)%stages.length);

  return <section className="energy-journey section" ref={sectionRef} aria-label="Battery manufacturing to electric mobility">
    <div className="energy-journey-heading">
      <p className="section-kicker">EV BATTERIES &amp; MANUFACTURING</p>
      <h2>From Battery Manufacturing<br/><em>to the Road.</em></h2>
    </div>
    <div className={`energy-journey-grid active-${active}`}>
      {stages.map((stage,index)=><article className={`journey-stage ${active===index?"is-active":""} ${active>index?"is-complete":""}`} key={stage.number}>
        <button type="button" onClick={()=>setActive(index)} aria-pressed={active===index} aria-label={`Show step ${index+1}: ${stage.title}`}>
          <span className="journey-number">{active>index?"✓":stage.number}</span><span className="journey-dot" aria-hidden="true"/>
        </button>
        <div className="journey-media">
          <video ref={node=>{videos.current[index]=node}} muted playsInline preload={active===index?"metadata":"none"} poster={stage.poster} onEnded={next}><source src={stage.video} type="video/mp4"/></video>
          <span className="journey-media-shade" aria-hidden="true"/>
        </div>
      </article>)}
      <div className="journey-connector" aria-hidden="true"><i/><i/><i/></div>
    </div>
    <div className="journey-mobile-progress" aria-label={`Step ${active+1} of ${stages.length}`}>{stages.map((stage,index)=><button type="button" className={index===active?"is-active":""} onClick={()=>setActive(index)} key={stage.number} aria-label={`Show ${stage.title}`}><span>{stage.number}</span></button>)}</div>
  </section>
}
