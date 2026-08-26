"use client";

import {FormEvent,useState} from "react";

type Message={from:"assistant"|"visitor";text:string};

const suggestions=["Research focus","Publications","Collaboration","Postdoctoral opportunities","Job opportunities"];

function replyTo(input:string){
  const q=input.toLowerCase();
  if(q.includes("publication")||q.includes("paper")||q.includes("journal")) return "Mehran has published work spanning battery electrolytes, electrochemical interfaces, functional materials, and membrane science. You can explore the Publications page or view his Google Scholar profile.";
  if(q.includes("teach")||q.includes("mentor")||q.includes("student")) return "Mehran teaches chemical engineering and mentors researchers in battery fabrication, glovebox practice, electrochemical testing, safety, and reproducible research workflows.";
  if(q.includes("award")) return "Mehran’s recognitions include research, teaching, mentoring, professional-development, and engineering honor-society awards. The Awards page includes details and source links.";
  if(q.includes("news")||q.includes("daily")||q.includes("latest")) return "The News page includes a live feed of current battery-technology and energy-storage headlines. It refreshes throughout the day and links to original publishers.";
  if(q.includes("job")||q.includes("postdoc")||q.includes("position")||q.includes("opportunit")||q.includes("hire")) return "Mehran welcomes relevant job, postdoctoral, research, and industry opportunities in battery engineering, electrode fabrication, process engineering, materials, and advanced manufacturing. Please email him with the position, organization, and a short introduction.";
  if(q.includes("collaborat")||q.includes("contact")||q.includes("email")||q.includes("message")) return "Mehran welcomes discussions about battery research, electrolyte design, advanced materials, and scalable energy storage. Use the Email Mehran button below to contact him directly.";
  if(q.includes("research")||q.includes("battery")||q.includes("electrolyte")) return "Mehran develops next-generation battery materials through electrolyte engineering, electrode design, electrochemical-interface science, rigorous cell testing, and scalable manufacturing approaches.";
  return "I can help with questions about Mehran’s research, publications, teaching, awards, collaboration, or career opportunities. For a personal response, please email Mehran directly.";
}

export default function ChatAssistant(){
  const [open,setOpen]=useState(false);
  const [input,setInput]=useState("");
  const [copied,setCopied]=useState(false);
  const [messages,setMessages]=useState<Message[]>([{from:"assistant",text:"Hello — I’m Mehran’s automated site assistant. Ask me about his research, publications, teaching, collaboration interests, or job opportunities."}]);
  const ask=(value:string)=>{const clean=value.trim();if(!clean)return;setMessages(m=>[...m,{from:"visitor",text:clean},{from:"assistant",text:replyTo(clean)}]);setInput("");};
  const submit=(event:FormEvent)=>{event.preventDefault();ask(input)};
  const copyEmail=async()=>{try{await navigator.clipboard.writeText("mehranarzani@yahoo.com");setCopied(true);setTimeout(()=>setCopied(false),2200)}catch{window.prompt("Copy Mehran’s email address:","mehranarzani@yahoo.com")}};
  return <aside className={`site-chat ${open?"is-open":""}`} aria-label="Automated site assistant">
    {open&&<section className="chat-panel">
      <header><div><span className="chat-status"/> <strong>Ask about Mehran</strong><small>Automated site assistant</small></div><button type="button" onClick={()=>setOpen(false)} aria-label="Close assistant">×</button></header>
      <div className="chat-messages" aria-live="polite">{messages.map((message,i)=><p className={message.from} key={`${message.from}-${i}`}>{message.text}</p>)}</div>
      <div className="chat-suggestions">{suggestions.map(item=><button type="button" onClick={()=>ask(item)} key={item}>{item}</button>)}</div>
      <form onSubmit={submit}><label className="sr-only" htmlFor="site-chat-input">Ask a question</label><input id="site-chat-input" value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask a question…"/><button type="submit" aria-label="Send question">↑</button></form>
      <div className="chat-contact-actions">
        <a className="chat-email" href="https://mail.google.com/mail/?view=cm&fs=1&to=mehranarzani%40yahoo.com&su=Message%20from%20your%20website" target="_blank" rel="noreferrer">Compose in Gmail <span>↗</span></a>
        <button className="chat-copy" type="button" onClick={copyEmail}>{copied?"Email copied ✓":"Copy email address"}</button>
        <a className="chat-mail-app" href="mailto:mehranarzani@yahoo.com?subject=Message%20from%20your%20website">Open email app</a>
      </div>
    </section>}
    <button className="chat-launcher" type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open}><span aria-hidden="true">{open?"×":"✦"}</span><b>{open?"Close":"Ask or message"}</b></button>
  </aside>;
}
