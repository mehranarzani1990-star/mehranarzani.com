import {PageFooter,PageHero,SiteHeader} from "../components/SiteChrome";
import {pageMetadata} from "../seo";

export const metadata=pageMetadata("Chemical Engineering Books","Chemical engineering books by Mehran Arzani covering fluid mechanics and gas separation using liquid-membrane technologies.","/books");

const books=[
  {title:"Fluid Mechanics",year:"2015",publisher:"Azad University of Shahreza",authors:"Mehdi Reiszadeh · Mehran Arzani",image:"/book-fluid-mechanics.png",alt:"Farsi cover of the Fluid Mechanics textbook by Mehdi Reiszadeh and Mehran Arzani",description:"The subject matter and properties of fluids—liquids and gases—as well as the forces that influence them are investigated in fluid mechanics. Published by Azad University of Shahreza, this academic book aims to provide undergraduate students with a comprehensive understanding of fluid-mechanics principles."},
  {title:"Gases Separation Using Liquid Membrane",year:"",publisher:"Taymaz Publishing",authors:"Hamid Reza Mahdavi · Mehran Arzani",image:"/book-gases-separation-liquid-membrane.png",alt:"Farsi cover of Gases Separation Using Liquid Membrane by Hamid Reza Mahdavi and Mehran Arzani",description:"Air pollution is a worldwide challenge that requires every available approach to control and improve environmental conditions. Published by Taymaz, this book provides an introductory overview of gas separation using liquid membranes for removing hazardous gases originating from various sources."},
];

export default function Books(){return <main className="profile-subpage" id="top">
  <SiteHeader active="Books"/>
  <PageHero kicker="ACADEMIC AUTHORSHIP" title="Books" icon="▱" description="Farsi-language academic books connecting chemical-engineering fundamentals with practical environmental applications." metric="2" metricLabel="published books"/>
  <section className="books-section section"><div className="record-intro"><p className="section-kicker">BOOK COLLECTION</p><h2>Engineering knowledge made accessible</h2></div><div className="book-showcase">{books.map((book,i)=><article key={book.title}><figure><img src={book.image} alt={book.alt}/><span aria-hidden="true">{String(i+1).padStart(2,"0")}</span></figure><div className="book-details"><p className="book-publisher">{book.publisher}{book.year&&` · ${book.year}`}</p><h3>{book.title}</h3><p className="book-authors">{book.authors}</p><p className="book-description">{book.description}</p><div className="book-tags"><span>Written in Farsi</span><span>Academic publication</span></div></div></article>)}</div></section>
  <PageFooter/>
</main>}
