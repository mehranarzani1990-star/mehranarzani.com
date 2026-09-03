import {PageFooter,PageHero,SiteHeader} from "../components/SiteChrome";
import {pageMetadata} from "../seo";

export const metadata=pageMetadata("Teaching & Battery Research Mentorship","Chemical engineering instruction and hands-on battery research mentorship by Mehran Arzani, spanning electrode fabrication, cell assembly, testing, and diagnostics.","/teaching");

const areas=[
  {label:"UIC teaching",title:"Chemical engineering and interdisciplinary instruction",items:["Transport Phenomena I–III","Chemical Reaction Engineering","Renewable Energy","Entrepreneurship in Engineering","Materials Science","BIO 351"]},
  {label:"Prior instruction",title:"Engineering courses at Azad University",items:["Thermodynamics II","Statistics","Strength of Materials"]},
  {label:"Research mentorship",title:"Training researchers for reproducible battery science",items:["Cell assembly and glovebox workflows","Electrode fabrication and electrochemical testing","Safety SOPs, calibration, and troubleshooting","Undergraduate and graduate researcher development"]}
];

const mentorshipImages=[
  ["/mentorship-data-training.webp","Mentoring undergraduate researchers in battery testing and data acquisition","Data interpretation"],
  ["/mentorship-glovebox-training.webp","Researcher receiving hands-on glovebox training for battery-cell assembly","Glovebox training"],
  ["/mentorship-materials-preparation.webp","Researcher preparing battery electrode materials in the laboratory","Materials preparation"],
  ["/mentorship-lab-collaboration.webp","Undergraduate researchers collaborating during laboratory training","Collaborative learning"],
  ["/mentorship-cell-assembly.webp","Hands-on battery coin-cell assembly during research training","Cell assembly"],
  ["/mentorship-lab-hardware.webp","Split-cell hardware arranged for battery research instruction","Experimental hardware"],
  ["/mentorship-electrochemistry-station.webp","Electrochemical workstation used for teaching battery diagnostics","Electrochemical diagnostics"],
  ["/mentorship-electrode-preparation.webp","Electrode materials and prepared samples for battery fabrication","Electrode preparation"],
  ["/mentorship-coin-cells.webp","Fabricated coin cells displayed during laboratory training","Fabricated cells"],
  ["/mentorship-glovebox.webp","Organized glovebox workspace for reproducible battery fabrication","Controlled-atmosphere practice"],
  ["/mentorship-split-cell.webp","Split test cell and pressure gauge used in battery research","Split-cell testing"],
  ["/mentorship-channel-tester.webp","Multi-channel battery testing fixture used for electrochemical training","Parallel testing"],
  ["/mentorship-battery-cycler.webp","Battery cycler connected for multi-channel performance evaluation","Battery cycling"],
  ["/mentorship-glovebox-setup.webp","Preparing and checking glovebox equipment for battery research","Glovebox preparation"],
  ["/mentorship-furnace-training.webp","Researcher trained to operate a laboratory tube furnace for materials processing","Thermal processing"],
  ["/mentorship-testing-setup.webp","Researcher connecting battery cells to a multi-channel testing system","Testing setup"],
  ["/mentorship-glovebox-detail.webp","Detailed battery component handling inside a glovebox","Controlled assembly"],
];

export default function Teaching(){return <main className="profile-subpage teaching-page" id="top">
  <SiteHeader active="Teaching & Mentorship"/>
  <PageHero kicker="EDUCATION & LEADERSHIP" title="Teaching & Mentorship" icon="✧" description="Building technical confidence through rigorous instruction, hands-on laboratory training, and reproducible research practice."/>
  <section className="learning-pathway section" aria-labelledby="learning-pathway-title"><div className="learning-pathway-heading"><p className="section-kicker">LEARNING IN MOTION</p><h2 id="learning-pathway-title">From understanding to engineering impact</h2></div><div className="learning-lab"><div className="learning-flow" aria-hidden="true"/><article><span className="learning-icon learning-book" aria-hidden="true"/><b>01</b><strong>Conceptual Mastery</strong><p>Build a rigorous foundation while cultivating curiosity, critical thinking, and interdisciplinary insight.</p></article><article><span className="learning-icon learning-cell" aria-hidden="true"/><b>02</b><strong>Innovation by Design</strong><p>Translate scientific concepts into creative solutions through design, fabrication, and hands-on experimentation.</p></article><article><span className="learning-icon learning-chart" aria-hidden="true"/><b>03</b><strong>Evidence-Driven Optimization</strong><p>Analyze data, diagnose technical challenges, and iteratively improve materials, processes, and system performance.</p></article><article><span className="learning-icon learning-compass" aria-hidden="true">✦</span><b>04</b><strong>Independent Leadership</strong><p>Develop the confidence, creativity, and professional judgment to lead research and push engineering boundaries.</p></article><article><span className="learning-icon learning-star" aria-hidden="true">◎</span><b>05</b><strong>Communication &amp; Impact</strong><p>Communicate complex ideas clearly, collaborate across disciplines, and translate engineering knowledge into societal impact.</p></article></div></section>
  <section className="teaching-opening-gallery" aria-label="Featured laboratory mentorship photographs">
    <figure className="opening-wide"><img src="/mentorship-group-instruction.webp" alt="Mehran Arzani guiding undergraduate researchers during laboratory training"/><figcaption>Group instruction</figcaption></figure>
    <figure><img src="/mentorship-glovebox-assembly-2.webp" alt="Researcher assembling battery cells inside a glovebox under mentorship"/><figcaption>Glovebox cell assembly</figcaption></figure>
    <figure><img src="/mentorship-hands-on-instruction.webp" alt="Mehran Arzani leading hands-on laboratory instruction with student researchers"/><figcaption>Hands-on instruction</figcaption></figure>
  </section>
  <section className="record-section section">
    <div className="record-intro"><p className="section-kicker">TEACHING PHILOSOPHY</p><div><h2>From first principles to independent innovation</h2><p>I guide students from conceptual understanding to design, fabrication, evidence-driven analysis, and clear communication—building the creativity and confidence to develop engineering solutions independently.</p></div></div>
    <div className="teaching-grid">{areas.map((area,i)=><article key={area.label}><span>{String(i+1).padStart(2,"0")} / {area.label}</span><h3>{area.title}</h3><ul>{area.items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div>
  </section>

  <section className="teaching-feature section" aria-labelledby="teaching-feature-title">
    <div className="teaching-visual-heading"><p className="section-kicker">TEACHING IN PRACTICE</p><h2 id="teaching-feature-title">Instruction, training, and mentorship</h2></div>
    <div className="teaching-feature-grid">
      <figure className="teaching-classroom-frame"><img src="/teaching-classroom.webp" alt="Mehran Arzani teaching battery assembly and experimental methods in a classroom"/><figcaption><span>CLASSROOM INSTRUCTION</span><strong>Connecting battery engineering concepts with experimental practice</strong></figcaption></figure>
      <figure className="teaching-certificate-frame"><img src="/teaching-certificate.webp" alt="Certificate of Excellence in Training and Mentorship awarded to Mehran Arzani"/><figcaption><span>RECOGNITION · 2024</span><strong>Certificate of Excellence in Training and Mentorship</strong></figcaption></figure>
    </div>
  </section>

  <section className="mentorship-showcase section" aria-labelledby="mentorship-title">
    <div className="mentorship-heading"><div><p className="section-kicker">LABORATORY MENTORSHIP</p><h2 id="mentorship-title">Learning through research</h2></div><p>Hands-on guidance across electrode preparation, controlled-atmosphere cell assembly, electrochemical testing, and data interpretation.</p></div>
    <div className="mentorship-mosaic">{mentorshipImages.map(([src,alt],i)=><figure className={`mentorship-frame mentorship-frame-${i+1}`} key={src}><img src={src} alt={alt} loading="lazy"/></figure>)}</div>
    <aside className="profile-note teaching-recognition"><strong>Training recognition</strong><p>Certificate of Excellence in Training and Mentorship, Berry Research Laboratory, University of Illinois Chicago · August 2024.</p></aside>
  </section>
  <PageFooter/>
</main>}
