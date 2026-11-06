import { ReviewGallery } from "./components/ReviewGallery";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { reviewGalleryItems } from "./review-data";


const programs = [
  { title: "DISCOVERY PICO", detail: "ดูแลรอยดำ ฝ้า และผิวไม่เรียบเนียน", href: "/services/discovery-pico" },
  { title: "YAG HAIR REMOVAL", detail: "สัมผัสผิวเรียบลื่นอย่างมั่นใจ", href: "/services/yag-hair-removal" },
  { title: "OLIGIO & ULTRAFORMER", detail: "เทคโนโลยียกกระชับเพื่อกรอบหน้าที่ชัดขึ้น", href: "/services#facial-contouring" },
  { title: "INJECTABLE PROGRAM", detail: "วางแผนการดูแลโดยแพทย์", href: "/services/injectables" },
];

const heroServices = [
  {
    title: "DISCOVERY PICO",
    detail: "เลเซอร์ดูแลรอยสิว ฝ้า กระ และจุดด่างดำ",
    image: "/media/services/discovery-pico-cover.webp",
    href: "/services/discovery-pico",
  },
  {
    title: "QUANTA YAG LASER",
    detail: "เลเซอร์กำจัดขน พร้อมระบบลมเย็น Cryo 6",
    image: "/media/services/yag-hair-removal-cover.webp",
    href: "/services/yag-hair-removal",
  },
  {
    title: "OLIGIO & ULTHERAPY",
    detail: "ยกกระชับและดูแลความหย่อนคล้อย",
    image: "/media/services/facial-contour-cover.webp",
    href: "/services#facial-contouring",
  },
  {
    title: "โปรแกรมฉีดโดยแพทย์",
    detail: "Botox · Filler · Skin Booster · Biostimulator",
    image: "/media/services/injectable-cover.webp",
    href: "/services/injectables",
  },
];

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="home-hero" id="top">
        <div className="home-hero-copy">
          <p className="eyebrow">THE WONDER CLINIC · LADPRAO SOI 4</p>
          <h1><strong>ความมั่นใจ</strong> เริ่มจาก<br /><em>การเลือกที่เหมาะกับคุณ.</em></h1>
          <p className="home-hero-description">เทคโนโลยีทางการแพทย์ที่คัดสรร<br />พร้อมการประเมินโดยแพทย์เฉพาะบุคคล</p>
          <div className="home-hero-actions">
            <a className="home-primary-action" href="#booking"><CalendarIcon />ปรึกษาและจองคิว <span>›</span></a>
            <a className="home-secondary-action" href="/services">ดูโปรแกรมทั้งหมด <span>›</span></a>
          </div>
        </div>
        <div className="home-hero-visual">
          <img src="/media/samples/hero-beauty-reference-v4.png" alt="ภาพประกอบความงาม โทนครีมอบอุ่น" fetchPriority="high" />
          <div className="home-hero-glow" aria-hidden="true" />
        </div>
      </section>

      <section className="home-service-showcase" aria-label="บริการเด่นของ The Wonder Clinic">
        {heroServices.map((service) => (
          <a className="home-service-tile" href={service.href} key={service.title}>
            <img src={service.image} alt={`ภาพ ${service.title}`} />
            <div>
              <h2>{service.title}</h2>
              <p>{service.detail}</p>
              <span aria-hidden="true">›</span>
            </div>
          </a>
        ))}
      </section>

      <section className="home-trust-strip" aria-label="มาตรฐานการดูแลของ The Wonder Clinic">
        <article><strong>01</strong><div><h2>เทคโนโลยีจากผู้ผลิตชั้นนำ</h2><p>เครื่องแท้และแหล่งที่มาตรวจสอบได้</p></div></article>
        <article><strong>02</strong><div><h2>วางแผนโดยแพทย์</h2><p>ประเมินและดูแลอย่างใกล้ชิด</p></div></article>
        <article><strong>03</strong><div><h2>ข้อมูลโปร่งใส</h2><p>แจ้งรายละเอียดก่อนรับบริการ</p></div></article>
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
