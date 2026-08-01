import { HeroPhrases } from "./components/HeroPhrases";
import { ReviewGallery } from "./components/ReviewGallery";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { reviewGalleryItems } from "./review-data";

const services = [
  {
    number: "01",
    title: "Discovery Pico",
    en: "Clearer, more even-looking skin",
    description: "Picosecond Laser จาก Quanta System ประเทศอิตาลี สำหรับวางแผนดูแลสีผิวและผิวไม่เรียบเนียน",
    tag: "PICO LASER",
    image: "/media/services/discovery-pico-cover.webp",
    href: "/services/discovery-pico",
  },
  {
    number: "02",
    title: "Quanta Light EVO",
    en: "Smooth skin, made simple",
    description: "Long-pulsed Nd:YAG 1064 nm จาก Quanta System ทำงานร่วมกับระบบลมเย็น Cryo 6",
    tag: "YAG HAIR REMOVAL",
    image: "/media/services/yag-hair-removal-cover.webp",
    href: "/services/yag-hair-removal",
  },
  {
    number: "03",
    title: "ปรับรูปหน้าด้วยเลเซอร์",
    en: "Lift with technology",
    description: "รวม Oligio, Ultraformer III และ Ultherapy เพื่อเลือกพลังงานให้เหมาะกับแต่ละปัญหา",
    tag: "FACIAL CONTOURING",
    image: "/media/services/facial-contour-cover.webp",
    href: "/services#facial-contouring",
  },
  {
    number: "04",
    title: "โปรแกรมฉีดโดยแพทย์",
    en: "Plan made for you",
    description: "Botox, Filler, Skin Booster และ Biostimulator พร้อมการประเมินโดยแพทย์",
    tag: "DOCTOR-LED INJECTABLES",
    image: "/media/services/injectable-cover.webp",
    href: "/services/injectables",
  },
];

const programs = [
  { title: "DISCOVERY PICO", detail: "ดูแลรอยดำ ฝ้า และผิวไม่เรียบเนียน", href: "/services/discovery-pico" },
  { title: "YAG HAIR REMOVAL", detail: "สัมผัสผิวเรียบลื่นอย่างมั่นใจ", href: "/services/yag-hair-removal" },
  { title: "OLIGIO & ULTRAFORMER", detail: "เทคโนโลยียกกระชับเพื่อกรอบหน้าที่ชัดขึ้น", href: "/services#facial-contouring" },
  { title: "INJECTABLE PROGRAM", detail: "วางแผนการดูแลโดยแพทย์", href: "/services/injectables" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">THE WONDER CLINIC · LADPRAO SOI 4</p>
          <HeroPhrases />
          <div className="hero-actions">
            <a className="button" href="#booking">ปรึกษาและจองคิว <span>↗</span></a>
            <a className="text-link" href="#services">ดู 4 โปรแกรมหลัก <span>↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="บริการหลักของ The Wonder Clinic">
          <img className="hero-photo" src="/media/samples/hero-beauty-reference-v2.webp" alt="นางแบบในภาพฮีโร่ของ The Wonder Clinic" />
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
          <h2>ความมั่นใจ เริ่มจาก<br /><em>เทคโนโลยีที่ได้มาตรฐาน</em></h2>
          <p>Wonder Clinic คัดสรรเทคโนโลยีทางการแพทย์จากผู้ผลิตชั้นนำ โดยให้ความสำคัญกับเครื่องแท้ แหล่งที่มา และมาตรฐานของแต่ละรุ่น เพื่อให้แพทย์เลือกแนวทางที่เหมาะกับแต่ละบุคคล</p>
        </div>
        <div className="value-grid">
          <article><b>01</b><h3>เทคโนโลยีจากผู้ผลิตชั้นนำ</h3><p>คัดสรรจาก Quanta System, WONTECH, CLASSYS, Merz Aesthetics และ Zimmer</p></article>
          <article><b>02</b><h3>มาตรฐานที่ตรวจสอบได้</h3><p>หลายเครื่องได้รับมาตรฐาน US FDA ตามรุ่นและข้อบ่งใช้ พร้อมข้อมูลแหล่งที่มาชัดเจน</p></article>
          <article><b>03</b><h3>เลือกให้เหมาะกับแต่ละบุคคล</h3><p>แพทย์ประเมินปัญหา สภาพผิว และเป้าหมายก่อนวางแผนการดูแล</p></article>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div><p className="eyebrow">OUR SERVICES</p><h2>4 โปรแกรมหลัก<br /><em>ที่ Wonder เลือกสรร</em></h2></div>
          <div className="section-heading-action">
            <p>เริ่มต้นจากการพูดคุย เพื่อเลือกแนวทางที่ตอบโจทย์คุณที่สุด</p>
            <a className="text-link" href="/services">ดูบริการทั้งหมด <span>↗</span></a>
          </div>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top"><span>{service.number}</span><span>{service.tag}</span></div>
              <a className="service-cover-link" href={service.href} aria-label={`ดูรายละเอียด ${service.title}`}>
                <img className="service-cover" src={service.image} alt={`ภาพตัวอย่าง ${service.title}`} />
              </a>
              <div className="service-copy"><h3><a className="service-title-link" href={service.href}>{service.title}</a></h3><p className="service-en">{service.en}</p><p>{service.description}</p></div>
              <a className="service-detail-link" href={service.href} aria-label={`อ่านรายละเอียด ${service.title}`}>อ่านรายละเอียด <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="feature section">
        <div className="feature-pico" id="discovery-pico">
          <img className="feature-image" src="/media/samples/discovery-pico-sample.webp" alt="ภาพตัวอย่าง Discovery Pico" />
          <div className="feature-copy">
            <p className="eyebrow">DISCOVERY PICO</p>
            <h2>เลเซอร์เพื่อการ<br /><em>ดูแลผิวอย่างละเอียด</em></h2>
            <p>Picosecond Laser จาก Quanta System ประเทศอิตาลี แพลตฟอร์มพลังงานสูงที่มีหัวและโหมดสำหรับวางแผนดูแลปัญหาผิวแตกต่างกัน</p>
            <a className="button button-dark" href="/services/discovery-pico">รู้จัก Discovery PICO <span>↗</span></a>
          </div>
        </div>
        <div className="feature-yag" id="yag-hair-removal">
          <img className="feature-image" src="/media/samples/yag-hair-removal-sample.webp" alt="ภาพตัวอย่าง YAG กำจัดขน" />
          <div className="feature-copy">
            <p className="eyebrow">YAG HAIR REMOVAL</p>
            <div className="laser-line" />
            <h2>ผิวเรียบลื่น<br />ในแบบที่คุณเลือก</h2>
            <p>Long-pulsed Nd:YAG จาก Quanta System พร้อมเครื่องเป่าลมเย็น Cryo 6 จาก Zimmer เพื่อช่วยเพิ่มความสบายระหว่างทำ</p>
            <a className="button button-dark" href="/services/yag-hair-removal">รู้จัก YAG Hair Removal <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="video-reviews section" id="reviews">
        <div className="section-heading">
          <div><p className="eyebrow">WONDER ON YOUTUBE</p><h2>ดูวิดีโอรีวิว<br /><em>และประสบการณ์จริง</em></h2></div>
        </div>
        <div className="video-grid">
          <article><div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/kpeeYnGT_Sw?rel=0" title="เลเซอร์กำจัดขนรักแร้ จาก The Wonder Clinic" loading="lazy" allowFullScreen /></div><p>YAG HAIR REMOVAL</p><h3>เลเซอร์กำจัดขนรักแร้ ทำแล้วปังยังไง</h3></article>
          <article><div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/FMdT3UKOZOo?rel=0" title="Discovery Pico ลดหลุมสิว จาก The Wonder Clinic" loading="lazy" allowFullScreen /></div><p>DISCOVERY PICO</p><h3>ดูแลหลุมสิวและรูขุมขนกว้าง</h3></article>
          <article><div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/SnBF8rjRV30?rel=0" title="Discovery Pico ครั้งแรก จาก The Wonder Clinic" loading="lazy" allowFullScreen /></div><p>DISCOVERY PICO</p><h3>Discovery Pico ครั้งแรก</h3></article>
          <article><div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/E52kQeEzzP4?rel=0" title="4 หัตถการดูแลรูขุมขน จาก The Wonder Clinic" loading="lazy" allowFullScreen /></div><p>DOCTOR&apos;S ADVICE</p><h3>4 หัตถการตัวท็อปเพื่อดูแลรูขุมขน</h3></article>
        </div>
        <a className="text-link" href="https://www.youtube.com/@TheWonderClinic" target="_blank" rel="noreferrer">ดูวิดีโอทั้งหมดบน YouTube <span>↗</span></a>
      </section>

      <section className="review-library section" id="review-gallery">
        <div className="section-heading">
          <div><p className="eyebrow">REAL REVIEW LIBRARY</p><h2>รวมรีวิวจริง<br /><em>จากหลายโปรแกรม</em></h2></div>
        </div>
        <ReviewGallery items={reviewGalleryItems} />
        <p className="review-library-note">ผลลัพธ์ขึ้นอยู่กับสภาพผิว ปัญหาเฉพาะบุคคล และแผนการดูแลของแต่ละคน</p>
      </section>

      <section className="programs section" id="programs">
        <p className="eyebrow">POPULAR PROGRAMS</p>
        <div className="programs-head"><h2>โปรแกรมที่หลายคน<br /><em>เลือกดูแลกับเรา</em></h2><a className="text-link" href="#booking">รับคำแนะนำจากทีมงาน <span>↗</span></a></div>
        <div className="program-list">
          {programs.map((program, index) => <a className="program-item" href={program.href} key={program.title}><span>0{index + 1}</span><div><h3>{program.title}</h3><p>{program.detail}</p></div><span className="program-arrow">↗</span></a>)}
        </div>
      </section>

      <section className="standards section" id="standards">
        <div><p className="eyebrow">GLOBAL STANDARD TECHNOLOGY</p><h2>เทคโนโลยีที่ได้มาตรฐาน<br /><em>เพื่อความมั่นใจของคุณ</em></h2></div>
        <div className="standards-copy"><p>Wonder Clinic คัดสรรเทคโนโลยีจากผู้ผลิตชั้นนำ หลายรุ่นได้รับมาตรฐาน US FDA ตามข้อบ่งใช้ พร้อมให้ตรวจสอบชื่อรุ่น แหล่งที่มา และเอกสารรับรองก่อนตัดสินใจ</p><a className="text-link" href="/about">ดูมาตรฐานของเรา <span>↗</span></a></div>
        <div className="technology-proof" aria-label="เทคโนโลยีหลักของ The Wonder Clinic">
          <article><span>ITALY</span><strong>QUANTA SYSTEM</strong><p>Discovery PICO · Long-pulsed Nd:YAG</p></article>
          <article><span>KOREA</span><strong>WONTECH · CLASSYS</strong><p>Oligio · Ultraformer III</p></article>
          <article><span>USA · GERMANY</span><strong>MERZ · ZIMMER</strong><p>Ultherapy · Cryo 6</p></article>
        </div>
        <p className="standards-note">มาตรฐานและข้อบ่งใช้แตกต่างกันตามรุ่นเครื่อง ประเทศที่ขึ้นทะเบียน และแผนการรักษาที่แพทย์ประเมิน</p>
      </section>

      <section className="booking section" id="booking">
        <p className="eyebrow">LET&apos;S TALK</p>
        <h2>เริ่มต้นดูแล<br /><em>ในแบบของคุณ</em></h2>
        <p>สอบถามข้อมูลเพิ่มเติม หรือจองคิวล่วงหน้ากับทีม The Wonder Clinic</p>
        <div className="booking-actions">
          <a className="button" href="https://line.me/R/ti/p/@thewonderclinic" target="_blank" rel="noreferrer">LINE <span>↗</span></a>
          <a className="outline-button" href="tel:020288399">โทร 02-028-8399</a>
          <a className="outline-button messenger-button" href="https://m.me/thewonderclinic" target="_blank" rel="noreferrer">Messenger <span>↗</span></a>
        </div>
        <p className="booking-note">Ladprao Soi 4 · เปิดบริการทุกวัน 11:00–20:00 น.</p>
      </section>

      <section className="location" id="location" aria-labelledby="location-title">
        <div className="location-copy">
          <p className="eyebrow">VISIT THE WONDER CLINIC</p>
          <h2 id="location-title">เดินทางมาหาเรา<br /><em>ได้ง่ายกว่าที่คิด</em></h2>
          <address>150 ซอยลาดพร้าว 4 แขวงจอมพล<br />เขตจตุจักร กรุงเทพมหานคร 10900</address>
          <p>ตรงข้าม Union Mall · เปิดบริการทุกวัน 11:00–20:00 น.</p>
          <a
            className="button"
            href="https://www.google.com/maps/search/?api=1&query=The+Wonder+Clinic+150+Lat+Phrao+4+Bangkok"
            target="_blank"
            rel="noreferrer"
          >
            เปิดเส้นทางใน Google Maps <span>↗</span>
          </a>
        </div>
        <div className="location-map">
          <iframe
            title="แผนที่ The Wonder Clinic สาขาลาดพร้าว"
            src="https://maps.google.com/maps?q=The%20Wonder%20Clinic%20150%20Lat%20Phrao%204%20Bangkok&t=&z=16&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
