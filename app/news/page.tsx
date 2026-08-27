import type { Metadata } from "next";
import { PageFooter, PageHero, SiteHeader } from "../components/SiteChrome";
import PorousIonAnimation from "./PorousIonAnimation";
import "./news.css";

export const metadata: Metadata = {title:"Battery Research News & Publications",description:"Research updates and recent publications from Mehran Arzani in batteries, porous materials, membranes, and electrocatalysis.",alternates:{canonical:"/news"}};

const news = [
  {
    date: "2026",
    source: "UIC College of Engineering",
    title: "Excellence in Teaching Assistance recognition",
    url: "https://www.linkedin.com/posts/mehran-arzani-b9228624b_i-am-truly-honored-to-receive-the-college-ugcPost-7458527746806190080-PxA4/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3Mfx4Bv2_m_vaWLc4N76NtAXZCPOq7HoI",
  },
  {
    date: "Fall 2025",
    source: "UIC Graduate College",
    title: "Recipients of Fall 2025 Awards",
    url: "https://grad.uic.edu/news-stories/recipients-of-fall-2025-awards/",
  },
  {
    date: "2025",
    source: "UIC Chemical Engineering",
    title: "Graduate student receives Chicago Consular Corps Professional Development Award",
    url: "https://che.uic.edu/news-stories/grad-student-receives-chicago-consular-corps-professional-development-award/",
  },
  {
    date: "2025",
    source: "Tau Beta Pi",
    title: "Inducted into the Engineering Honor Society among the top 5%",
    url: "https://www.linkedin.com/posts/mehran-arzani-b9228624b_last-friday-i-had-the-honor-of-being-inducted-activity-7403921248323395584-M5FD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3Mfx4Bv2_m_vaWLc4N76NtAXZCPOq7HoI",
  },
];

export default function News() {
  return (
    <main className="profile-subpage news-page" id="top">
      <SiteHeader active="News" />
      <PageHero
        kicker="LATEST UPDATES"
        title="News"
        icon="◈"
        description="Research milestones, university recognition, professional honors, and selected developments in battery technology."
      />

      <section className="news-editorial-banner section" aria-label="Battery technology news">
        <div className="news-editorial-copy">
          <span>BATTERY TECHNOLOGY · RESEARCH · INDUSTRY</span>
          <h2>Tracking the science and engineering shaping next-generation energy storage</h2>
        </div>
      </section>

      <section className="research-news section" aria-labelledby="porous-liquid-news-title">
        <div className="research-news-heading">
          <p className="section-kicker">NEW PERSPECTIVE · ACS ENERGY LETTERS</p>
          <time dateTime="2025-06-16">JUNE 16, 2025</time>
        </div>
        <article className="research-news-feature">
          <figure>
            <div className="research-news-image">
              <img
                src="/porous-liquid-electrolyte-news.webp"
                alt="Conceptual pathway from porous precursors and solvent to porous liquid-based electrolytes for batteries"
              />
            </div>
            <PorousIonAnimation />
            <figcaption>
              Porous liquid-based electrolytes create a molecularly engineered environment for ion transport.
            </figcaption>
          </figure>
          <div className="research-news-story">
            <span className="research-news-type">PUBLICATION NEWS · PERSPECTIVE</span>
            <h2 id="porous-liquid-news-title">
              Porous Liquid Electrolytes Open a New Design Space for Safer, More Efficient Batteries
            </h2>
            <p className="research-news-lede">
              A new Perspective by Mehran Arzani, Hamidreza Mahdavi, and Vikas Berry introduces porous
              liquid-based electrolytes as a molecularly engineered platform for next-generation ion batteries.
            </p>
            <p>
              Unlike conventional liquid electrolytes, porous liquids can contain permanent, accessible molecular
              cavities. These cavities may be tailored to selectively coordinate and shield mobile ions, creating new
              opportunities to improve ion mobility and conductivity while addressing dendrite growth, thermal
              instability, and safety.
            </p>
            <p>
              Rather than presenting a single finished formulation, the article establishes design principles for the
              field. It connects porous molecular architecture, targeted electrochemical mechanisms, and computational
              screening with the requirements of specific battery chemistries.
            </p>
            <p>
              The proposed roadmap outlines how porous liquid electrolytes could support batteries with higher energy
              density, longer cycle life, and improved reliability.
            </p>
            <div className="research-news-citation">
              <strong>Engineering Porous Liquids for Enhanced Ion Mobility and Stable Battery Electrolytes</strong>
              <span>ACS Energy Letters 2025, 10 (7), 3259–3268</span>
              <span>Mehran Arzani · Hamidreza Mahdavi · Vikas Berry</span>
            </div>
            <a
              className="research-news-link"
              href="https://doi.org/10.1021/acsenergylett.5c01446"
              target="_blank"
              rel="noreferrer"
            >
              Read the Perspective <b>↗</b>
            </a>
          </div>
        </article>
      </section>

      <section className="mof-news section" aria-labelledby="mof-news-title">
        <div className="mof-news-visual" aria-hidden="true">
          <div className="mof-orbit mof-orbit-one"><i /><i /><i /><i /><i /></div>
          <div className="mof-orbit mof-orbit-two"><i /><i /><i /><i /><i /><i /></div>
          <div className="mof-core">
            <span>MOF</span>
            <small>BEYOND<br />CRYSTALLINITY</small>
          </div>
          <p>ORDER ↔ DISORDER</p>
        </div>
        <article className="mof-news-story">
          <div className="research-news-heading">
            <p className="section-kicker">NEW REVIEW · ADVANCED MATERIALS</p>
            <time dateTime="2025-07-28">JULY 28, 2025</time>
          </div>
          <span className="research-news-type">PUBLICATION NEWS · REVIEW</span>
          <h2 id="mof-news-title">
            Beyond Crystallinity: Mapping the Future of Non-Crystalline Metal–Organic Frameworks
          </h2>
          <p className="mof-news-lede">
            A comprehensive review co-authored by Mehran Arzani examines how metal–organic frameworks can retain
            useful structure and function even when conventional long-range crystallinity is absent.
          </p>
          <p>
            The article brings together the fundamental concepts, design strategies, synthetic routes, and emerging
            forms of non-crystalline MOFs. It shows how disorder is not simply a structural limitation, but a design
            variable that can unlock distinctive processing behavior and application opportunities.
          </p>
          <p>
            Looking beyond laboratory synthesis, the review charts a pathway toward industrial use. It identifies the
            practical challenges that must be resolved—including reproducible preparation, structural characterization,
            performance control, and scale-up—while highlighting opportunities for the next stage of the field.
          </p>
          <div className="publication-footer">
            <div className="research-news-citation">
              <strong>Practical Considerations in the Design and Use of Non-Crystalline Metal–Organic Frameworks</strong>
              <span>Advanced Materials 2025, 37 (41), e05579</span>
              <span>Review article · Co-authored by Mehran Arzani</span>
            </div>
            <a
              className="research-news-link"
              href="https://doi.org/10.1002/adma.202505579"
              target="_blank"
              rel="noreferrer"
            >
              Read the Paper <b>↗</b>
            </a>
          </div>
        </article>
      </section>

      <section className="nitrate-news section" aria-labelledby="nitrate-news-title">
        <div className="nitrate-news-copy">
          <div className="research-news-heading">
            <p className="section-kicker">NEW ARTICLE · ACS APPLIED MATERIALS &amp; INTERFACES</p>
            <time dateTime="2026-04-21">APRIL 21, 2026</time>
          </div>
          <span className="research-news-type">PUBLICATION NEWS · ENERGY CONVERSION</span>
          <h2 id="nitrate-news-title">
            A Zinc–Nitrate Battery Turns a Water Pollutant into Ammonia—and Electrical Power
          </h2>
          <p className="nitrate-news-lede">
            A conductive Co<sub>3</sub>(HITP)<sub>2</sub> catalyst couples nitrate remediation with an energy-producing
            zinc–nitrate battery, showing how electrochemical systems can deliver more than stored electricity alone.
          </p>
          <p>
            The layered material combines electrically conductive π–d conjugation with abundant Co–N<sub>4</sub>
            catalytic sites. In nitrate electroreduction, it reaches a maximum ammonia yield rate of 56.8 mg cm
            <sup>−2</sup> h<sup>−1</sup> and approximately 91% Faradaic efficiency, supporting selective conversion of
            nitrate into a useful chemical product.
          </p>
          <p>
            For energy technology, the central advance is the zinc–nitrate battery demonstration. The device uses
            nitrate reduction as the cathodic reaction and zinc oxidation as the anodic reaction, producing an
            open-circuit potential of approximately 1.45 V and a maximum power density of 5.3 mW cm<sup>−2</sup>.
          </p>
          <div className="nitrate-news-focus">
            <strong>Why this matters for energy storage</strong>
            <p>
              The study points toward multifunctional electrochemical devices that can generate power while treating
              nitrate-contaminated water and producing ammonia. The conductive, molecularly defined catalyst also
              provides a design strategy for faster charge transfer and controlled reactions at battery electrodes.
              Further work on rechargeability, cycle life, system efficiency, nitrate supply, and ammonia recovery will
              be needed before this concept becomes a practical energy-storage platform.
            </p>
          </div>
          <div className="publication-footer">
            <div className="research-news-citation">
              <strong>
                Intrinsically Conductive π–d Conjugated Layers with Co–N<sub>4</sub> Active Sites for Efficient Nitrate
                Electrocatalysis and Zinc-Nitrate Batteries
              </strong>
              <span>ACS Applied Materials &amp; Interfaces 2026, 18 (17), 24433–24443</span>
              <span>Shahriar Namvar · Mehran Arzani · and collaborators</span>
            </div>
            <a
              className="research-news-link"
              href="https://doi.org/10.1021/acsami.6c00231"
              target="_blank"
              rel="noreferrer"
            >
              Read the Paper <b>↗</b>
            </a>
          </div>
        </div>
        <div className="nitrate-battery" aria-label="Conceptual zinc-nitrate battery diagram">
          <div className="nitrate-terminal nitrate-terminal-left"><b>−</b><span>ZINC</span></div>
          <div className="nitrate-cell">
            <span className="nitrate-flow">e<sup>−</sup> FLOW</span>
            <div className="nitrate-reaction">
              <small>INPUT</small><strong>NO<sub>3</sub><sup>−</sup></strong><i>→</i><strong>NH<sub>3</sub></strong><small>PRODUCT</small>
            </div>
            <div className="nitrate-power"><b>1.45 V</b><span>OPEN CIRCUIT</span></div>
          </div>
          <div className="nitrate-terminal nitrate-terminal-right"><b>+</b><span>Co–N<sub>4</sub></span></div>
          <div className="nitrate-metrics">
            <div><strong>5.3</strong><span>mW cm<sup>−2</sup><br />MAX POWER</span></div>
            <div><strong>≈91%</strong><span>FARADAIC<br />EFFICIENCY</span></div>
          </div>
        </div>
      </section>

      <section className="record-section section">
        <div className="record-intro">
          <p className="section-kicker">FEATURED STORIES</p>
          <h2>Recent recognition and milestones</h2>
        </div>
        <div className="news-grid">
          {news.map((item, i) => (
            <a href={item.url} target="_blank" rel="noreferrer" key={item.url}>
              <span className="record-number">{String(i + 1).padStart(2, "0")}</span>
              <p>{item.source} · {item.date}</p>
              <h3>{item.title}</h3>
              <strong>Read story ↗</strong>
            </a>
          ))}
        </div>
      </section>
      <PageFooter />
    </main>
  );
}
