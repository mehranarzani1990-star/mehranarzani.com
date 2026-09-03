import {PageFooter,PageHero,SiteHeader} from "../components/SiteChrome";
import {pageMetadata} from "../seo";

export const metadata=pageMetadata("Drinking-Water Ceramic Membrane Patent","Mehran Arzani's patented multichannel mullite ceramic membrane for drinking-water treatment, microfiltration, and reverse-osmosis pretreatment.","/patents");

export default function Patents(){return <main className="profile-subpage patent-page" id="top">
  <SiteHeader active="Patents"/>
  <PageHero kicker="ENGINEERING INNOVATION" title="Patents" icon="◇" description="Applied membrane engineering translated into protectable, production-relevant water-treatment technology." metric="1" metricLabel="registered invention"/>
  <section className="patent-spotlight section">
    <div className="patent-title-row"><div><p className="section-kicker">PATENT 01</p><h2>Multi-Channel Mullite<br/>Ceramic Membrane</h2></div><span className="patent-year">2023</span></div>
    <section className="patent-application" aria-labelledby="drinking-water-title">
      <div className="patent-application-heading"><h2 id="drinking-water-title">Drinking Water</h2></div>
      <p className="patent-process-intro">The patented multichannel ceramic membrane provides robust pretreatment before cartridge filtration and reverse osmosis.</p>
      <div className="patent-application-grid">
        <figure className="patent-application-image"><img src="/patent-material-characterization.png" alt="Material characterization and schematic of a multi-channel mullite ceramic membrane"/><figcaption><span>01</span>Patented multichannel ceramic membrane</figcaption></figure>
        <div className="patent-process-animation"><iframe src="/drinking-water-process.html" title="Animated drinking-water treatment process using a patented multichannel ceramic membrane" loading="lazy" scrolling="no" sandbox="allow-scripts" referrerPolicy="no-referrer"/></div>
      </div>
    </section>
    <div className="patent-visual-grid patent-supporting-grid">
      <figure><img src="/patent-lab-hardware.png" alt="Laboratory membrane modules and multi-channel ceramic samples"/><figcaption><span>02</span>Laboratory hardware</figcaption></figure>
      <figure><img src="/patent-multichannel-membrane.png" alt="Close view of the fabricated multi-channel mullite ceramic membrane"/><figcaption><span>03</span>Fabricated membrane</figcaption></figure>
    </div>
    <div className="patent-story"><p className="patent-lead">The present invention evaluates the structure and performance of a cost-effective multi-channel ceramic membrane designed for drinking-water pretreatment.</p><p>As drought intensifies water scarcity, wastewater purification has become an increasingly vital concern. In response, the inventors developed a multi-channel ceramic-membrane technology manufactured from locally sourced raw materials, connecting resource availability with scalable water-treatment engineering.</p></div>
    <dl className="patent-dossier">
      <div className="patent-info-card patent-number-card"><span className="patent-card-index">01</span><dt>Patent number</dt><dd>140250140003004069</dd></div>
      <div className="patent-info-card patent-year-card"><span className="patent-card-index">02</span><dt>Year registered</dt><dd className="patent-year-light">2023</dd></div>
      <div className="patent-info-card patent-inventors-card"><span className="patent-card-index">03</span><dt>Inventors</dt><dd><span>Mehran Arzani</span><span>Hamidreza Mahdavi</span><span>Toraj Mohammadi</span><span>Omid Bakhtiari</span></dd></div>
    </dl>
  </section>
  <PageFooter/>
</main>}
