"use client";

import {useMemo,useState} from "react";

type Publication={year:string;topic:string;journal:string;title:string;url:string};

export default function PublicationExplorer({publications}:{publications:Publication[]}){
  const [topic,setTopic]=useState("All");
  const topics=["All","Energy","MOFs","Electrocatalysis","Membranes"];
  const visible=useMemo(()=>topic==="All"?publications:publications.filter(p=>p.topic===topic),[topic,publications]);
  return <section className="publications section publication-catalog" aria-labelledby="publication-record-title">
    <div className="catalog-heading"><div><p className="section-kicker">EXPLORE THE RECORD</p><h2 id="publication-record-title">Complete publication record</h2></div><a className="text-link" href="https://scholar.google.com/citations?user=kx_AgWsAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar <span aria-hidden="true">↗</span></a></div>
    <div className="publication-filters" aria-label="Filter publications by research topic">{topics.map(item=><button type="button" key={item} className={topic===item?"is-active":""} aria-pressed={topic===item} onClick={()=>setTopic(item)}>{item}</button>)}</div>
    <p className="publication-results" aria-live="polite">Showing {visible.length} publication{visible.length===1?"":"s"}</p>
    <div className="publication-list">{visible.map((p,i)=><details className="publication-item" key={p.title}><summary><span className="pub-number">{String(i+1).padStart(2,"0")}</span><div><p>{p.journal} · {p.year} · {p.topic}</p><h3>{p.title}</h3></div><span className="pub-expand" aria-hidden="true">+</span></summary><div className="publication-detail"><span>Research area · {p.topic}</span><a href={p.url} target="_blank" rel="noreferrer">Open publication ↗</a></div></details>)}</div>
  </section>;
}
