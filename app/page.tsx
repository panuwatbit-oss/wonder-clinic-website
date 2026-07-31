const services = [
  {
    number: "01",
    title: "Discovery Pico",
    en: "Clearer, more even-looking skin",
    description: "ดูแลปัญหาผิวหน้า ฝ้า รอยดำ และรอยแตกลาย ด้วยเลเซอร์พลังงานแม่นยำ",
    tag: "PICO LASER",
  },
  {
    number: "02",
    title: "YAG กำจัดขน",
    en: "Smooth skin, made simple",
    description: "ดูแลได้ตั้งแต่ใบหน้า รักแร้ แขน ขา ลำตัว ไปจนถึง Bikini และ Brazilian",
    tag: "YAG HAIR REMOVAL",
  },
  {
    number: "03",
    title: "ปรับรูปหน้าด้วยเลเซอร์",
    en: "Lift with technology",
    description: "ยกกระชับ กรอบหน้าชัด ลดความหย่อนคล้อย และดูแลริ้วรอยอย่างเหมาะกับแต่ละคน",
    tag: "FACIAL CONTOURING",
  },
  {
    number: "04",
    title: "โปรแกรมฉีดโดยแพทย์",
    en: "Plan made for you",
    description: "Botox, Filler, Skin Booster และ Biostimulator พร้อมการประเมินโดยแพทย์",
    tag: "DOCTOR-LED INJECTABLES",
  },
];

const programs = [
  ["DISCOVERY PICO", "ดูแลรอยดำ ฝ้า และผิวไม่เรียบเนียน"],
  ["YAG HAIR REMOVAL", "สัมผัสผิวเรียบลื่นอย่างมั่นใจ"],
  ["OLIGIO & ULTRAFORMER", "เทคโนโลยียกกระชับเพื่อกรอบหน้าที่ชัดขึ้น"],
  ["INJECTABLE PROGRAM", "วางแผนการดูแลโดยแพทย์"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Wonder Clinic หน้าแรก">
          <img src="/brand/logo/wonder-clinic-logo-ai-transparent-2048.png" alt="The Wonder Clinic" />
        </a>
        <nav aria-label="เมนูหลัก">
          <a href="#services">บริการ</a>
          <a href="#programs">โปรแกรม</a>
          <a href="#standards">มาตรฐาน</a>
          <a href="#about">เกี่ยวกับเรา</a>
        </nav>
        <a className="button button-small" href="#booking">จองคิว</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">THE WONDER CLINIC · LADPRAO SOI 4</p>
          <h1>ดูแลความงาม<br /><em>อย่างมีเหตุผล</em></h1>
          <p className="hero-description">เทคโนโลยีระดับโลก การดูแลโดยแพทย์ และแผนที่ออกแบบเพื่อคุณ</p>
          <div className="hero-actions">
            <a className="button" href="#booking">ปรึกษาและจองคิว <span>↗</span></a>
            <a className="text-link" href="#services">ดูบริการทั้งหมด <span>↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="บริการหลักของ The Wonder Clinic">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="hero-ring" />
          <div className="hero-statement">
            <span>TECHNOLOGY</span>
            <strong>MEETS<br />CARE</strong>
            <small>PICO · YAG · LIFT · INJECTABLES</small>
          </div>
          <div className="hero-badge">EST.<br />WONDER</div>
        </div>
      </section>

      <section className="intro section" id="about">
        <p className="eyebrow">WHY WONDER</p>
        <div className="intro-grid">
          <h2>ทุกการดูแล เริ่มจาก<br /><em>ความเข้าใจในตัวคุณ</em></h2>
          <p>เราเชื่อว่าความสวยที่ดี ไม่ใช่การทำให้ทุกคนเหมือนกัน แต่คือการเลือกเทคโนโลยีและโปรแกรมที่เหมาะกับผิว ความกังวล และเป้าหมายของแต่ละคน</p>
        </div>
        <div className="value-grid">
          <article><b>01</b><h3>เทคโนโลยีที่เลือกมา</h3><p>รวมเลเซอร์และเครื่องมือที่ตอบโจทย์การดูแลผิวและรูปหน้า</p></article>
          <article><b>02</b><h3>ดูแลโดยแพทย์</h3><p>ประเมินและวางแผนการดูแลที่เหมาะกับแต่ละบุคคล</p></article>
          <article><b>03</b><h3>ผลลัพธ์ที่เป็นธรรมชาติ</h3><p>ยึดความปลอดภัยและความพอดีเป็นหัวใจสำคัญ</p></article>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div><p className="eyebrow">OUR SERVICES</p><h2>4 โปรแกรมหลัก<br /><em>ที่ Wonder เลือกสรร</em></h2></div>
          <p>เริ่มต้นจากการพูดคุย เพื่อเลือกแนวทางที่ตอบโจทย์คุณที่สุด</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top"><span>{service.number}</span><span>{service.tag}</span></div>
              <div><h3>{service.title}</h3><p className="service-en">{service.en}</p><p>{service.description}</p></div>
              <a href="#booking" aria-label={`สอบถาม ${service.title}`}>สอบถามโปรแกรม <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="feature section">
        <div className="feature-pico">
          <p className="eyebrow">DISCOVERY PICO</p>
          <h2>เลเซอร์เพื่อการ<br /><em>ดูแลผิวอย่างละเอียด</em></h2>
          <p>สำหรับผิวหน้า ฝ้า รอยดำ และรอยแตกลาย พร้อมคำแนะนำการดูแลก่อนและหลังทำ</p>
          <a className="button button-dark" href="#booking">สอบถาม Discovery Pico <span>↗</span></a>
        </div>
        <div className="feature-yag">
          <p className="eyebrow">YAG HAIR REMOVAL</p>
          <div className="laser-line" />
          <h2>ผิวเรียบลื่น<br />ในแบบที่คุณเลือก</h2>
          <p>เลือกดูแลได้หลายบริเวณ ตั้งแต่ใบหน้าไปจนถึง Brazilian</p>
        </div>
      </section>

      <section className="programs section" id="programs">
        <p className="eyebrow">POPULAR PROGRAMS</p>
        <div className="programs-head"><h2>โปรแกรมที่หลายคน<br /><em>เลือกดูแลกับเรา</em></h2><a className="text-link" href="#booking">รับคำแนะนำจากทีมงาน <span>↗</span></a></div>
        <div className="program-list">
          {programs.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{detail}</p></div><span className="program-arrow">↗</span></article>)}
        </div>
      </section>

      <section className="standards section" id="standards">
        <div><p className="eyebrow">SAFETY FIRST</p><h2>มาตรฐานและ<br /><em>ความปลอดภัย</em></h2></div>
        <div className="standards-copy"><p>ทุกขั้นตอนควรเริ่มจากข้อมูลที่ครบถ้วน การประเมินโดยผู้เชี่ยวชาญ และการเลือกผลิตภัณฑ์หรือเทคโนโลยีที่เหมาะสม</p><a className="text-link" href="#booking">ปรึกษาเบื้องต้น <span>↗</span></a></div>
      </section>

      <section className="booking section" id="booking">
        <p className="eyebrow">LET&apos;S TALK</p>
        <h2>เริ่มต้นดูแล<br /><em>ในแบบของคุณ</em></h2>
        <p>สอบถามข้อมูลเพิ่มเติม หรือจองคิวล่วงหน้ากับทีม The Wonder Clinic</p>
        <div className="booking-actions"><a className="button" href="https://line.me/R/ti/p/@thewonderclinic" target="_blank" rel="noreferrer">คุยกับเราทาง LINE <span>↗</span></a><a className="outline-button" href="tel:020288399">โทร 02-028-8399</a></div>
        <p className="booking-note">Ladprao Soi 4 · เปิดบริการทุกวัน 11:00–20:00 น.</p>
      </section>

      <footer><span>© {new Date().getFullYear()} THE WONDER CLINIC</span><span>BEAUTY, WITH UNDERSTANDING</span></footer>
    </main>
  );
}
