"use client";

import {useEffect} from "react";

export default function MicroInteractions(){
  useEffect(()=>{
    const root=document.documentElement;
    const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("motion-ready");

    const progress=document.querySelector<HTMLElement>(".reading-progress span");
    const updateProgress=()=>{
      if(!progress)return;
      const max=document.documentElement.scrollHeight-window.innerHeight;
      progress.style.transform=`scaleX(${max>0?Math.min(1,window.scrollY/max):0})`;
    };
    updateProgress();
    window.addEventListener("scroll",updateProgress,{passive:true});

    const targets=Array.from(document.querySelectorAll<HTMLElement>(
      "main > section, .record-list > *, .publication-item, .award-grid article, .news-grid article, .conference-photos figure, .award-photos figure, .teaching-grid article, .book-card, .patent-card"
    ));
    targets.forEach((el,index)=>{
      el.classList.add("micro-reveal");
      el.style.setProperty("--reveal-delay",`${Math.min(index%4,3)*70}ms`);
    });
    const observer=!reduce?new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:.08,rootMargin:"0px 0px -5%"}):null;
    targets.forEach(el=>observer?observer.observe(el):el.classList.add("is-visible"));

    const reactive=Array.from(document.querySelectorAll<HTMLElement>(
      ".publication-item, .award-grid article, .news-grid article, .conference-photos figure, .award-photos figure, .teaching-grid article, .book-card, .patent-card, .profile-link, .about-profile-links a"
    ));
    const move=(event:PointerEvent)=>{
      const el=event.currentTarget as HTMLElement;
      const rect=el.getBoundingClientRect();
      el.style.setProperty("--pointer-x",`${event.clientX-rect.left}px`);
      el.style.setProperty("--pointer-y",`${event.clientY-rect.top}px`);
    };
    reactive.forEach(el=>el.addEventListener("pointermove",move));

    const buttons=Array.from(document.querySelectorAll<HTMLElement>(".button, .text-link, .chat-launcher"));
    const press=(event:PointerEvent)=>{
      const el=event.currentTarget as HTMLElement;
      const rect=el.getBoundingClientRect();
      const ripple=document.createElement("span");
      ripple.className="interaction-ripple";
      ripple.style.left=`${event.clientX-rect.left}px`;
      ripple.style.top=`${event.clientY-rect.top}px`;
      el.appendChild(ripple);
      window.setTimeout(()=>ripple.remove(),650);
    };
    buttons.forEach(el=>el.addEventListener("pointerdown",press));

    return()=>{
      window.removeEventListener("scroll",updateProgress);
      observer?.disconnect();
      reactive.forEach(el=>el.removeEventListener("pointermove",move));
      buttons.forEach(el=>el.removeEventListener("pointerdown",press));
      root.classList.remove("motion-ready");
    };
  },[]);

  return <div className="reading-progress" aria-hidden="true"><span/></div>;
}
