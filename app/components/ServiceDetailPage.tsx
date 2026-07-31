import type { ServiceDetail } from "../services/service-detail-data";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return <main>
    <SiteHeader />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

    <section className="service-detail-hero">
      <div className="service-detail-hero-copy">
        <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">หน้าแรก</a><span>›</span><a href="/services">บริการ</a><span>›</span><span>{service.title}</span></nav>
        <p className="eyebrow">{service.eyebrow}</p>
        <h1>{service.title}<br /><em>{service.highlight}</em></h1>
        <p>{service.summary}</p>
        <div className="service-badges">{service.badges.map((badge) => <span key={badge}>{badge}</span>)}</div>
        <div className="service-detail-actions"><a className="button" href="/contact">ปรึกษาโปรแกรม <span>↗</span></a><a className="text-link" href="#details">ดูรายละเอียด <span>↓</span></a></div>
      </div>
      <div className={`service-detail-hero-visual${service.imageSource ? " machine-hero-visual" : ""}`}>
        {service.imageSource
          ? <div className="machine-hero-stage"><img className="machine-hero-image" src={service.machineImage} alt={service.machineAlt} /></div>
          : <img className="service-detail-cover" src={service.heroImage} alt="" />}
      </div>
    </section>

    <section className="service-facts" aria-label={`ข้อมูลสำคัญของ ${service.title}`}>
      {service.facts.map((fact, index) => <article key={fact.label}><span>0{index + 1} · {fact.label}</span><strong>{fact.value}</strong><p>{fact.detail}</p></article>)}
    </section>

    <section className="page-section service-overview" id="details">
      <div><p className="eyebrow">HOW IT WORKS</p><h2>รู้จักเทคโนโลยี<br /><em>ก่อนตัดสินใจ</em></h2></div>
      <div>{service.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </section>

    <section className="page-section service-concerns">
      <div className="page-heading"><div><p className="eyebrow">WHO IT MAY SUIT</p><h2>เหมาะกับปัญหา<br /><em>และบริเวณใดบ้าง</em></h2></div><p>ความเหมาะสมจริงขึ้นอยู่กับการประเมินของแพทย์ สีผิว โครงสร้าง และประวัติสุขภาพของแต่ละคน</p></div>
      <div className="concern-layout">
        <div className="concern-list">{service.suitableFor.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</div>
        <div className="area-panel"><p className="eyebrow">TREATMENT AREAS</p>{service.areas.map((area) => <span key={area}>{area}</span>)}</div>
      </div>
    </section>

    <section className="service-process">
      <div className="page-heading"><div><p className="eyebrow">YOUR VISIT</p><h2>ขั้นตอนการดูแล<br /><em>อย่างเป็นระบบ</em></h2></div></div>
      <div className="process-grid">{service.process.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    </section>

    <section className="page-section care-section">
      <div className="care-column"><p className="eyebrow">BEFORE</p><h2>เตรียมตัวก่อนทำ</h2><ul>{service.beforeCare.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <div className="care-column"><p className="eyebrow">AFTER</p><h2>ดูแลหลังทำ</h2><ul>{service.afterCare.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <aside><p className="eyebrow">POSSIBLE RESPONSES</p><h3>อาการที่อาจพบ</h3><ul>{service.possibleResponses.map((item) => <li key={item}>{item}</li>)}</ul></aside>
    </section>

    <section className="page-section service-review-strip">
      <div className="page-heading"><div><p className="eyebrow">REAL CASES</p><h2>รีวิวที่เกี่ยวข้อง<br /><em>จากผู้รับบริการจริง</em></h2></div><p>ภาพรีวิวใช้เพื่อประกอบการตัดสินใจ ผลลัพธ์แตกต่างกันตามแต่ละบุคคล</p></div>
      <div className={`service-review-grid${service.reviews.length === 1 ? " is-single" : ""}`}>{service.reviews.map((review) => <img key={review.src} src={review.src} alt={review.alt} loading="lazy" />)}</div>
      <a className="text-link" href="/reviews">ดูคลังรีวิวทั้งหมด <span>↗</span></a>
    </section>

    <section className="page-section service-faq">
      <div><p className="eyebrow">FREQUENTLY ASKED</p><h2>คำถามที่พบบ่อย</h2><p>{service.caution}</p></div>
      <div>{service.faqs.map((faq, index) => <details key={faq.question}><summary><span>0{index + 1}</span>{faq.question}<i>＋</i></summary><p>{faq.answer}</p></details>)}</div>
    </section>

    <section className="page-cta"><p className="eyebrow">PERSONALIZED PLAN</p><h2>แผนที่เหมาะกับคุณ<br /><em>เริ่มจากการประเมินที่ดี</em></h2><p>ส่งรายละเอียดปัญหาให้ทีมงานนัดประเมิน พร้อมสอบถามชื่อรุ่น แหล่งที่มา และมาตรฐานที่เกี่ยวข้องก่อนตัดสินใจ</p><div className="detail-cta-actions"><a className="button" href="https://line.me/R/ti/p/@thewonderclinic" target="_blank" rel="noreferrer">LINE <span>↗</span></a><a className="outline-button" href="tel:020288399">โทร 02-028-8399</a><a className="outline-button" href="https://m.me/thewonderclinic" target="_blank" rel="noreferrer">Messenger <span>↗</span></a></div></section>
    <SiteFooter />
  </main>;
}
