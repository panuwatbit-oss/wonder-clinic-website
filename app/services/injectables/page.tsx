import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = { title: "โปรแกรมฉีดโดยแพทย์ | The Wonder Clinic", description: "เลือกอ่านข้อมูล Botox, Filler, Skin Booster และ Biostimulator แยกตามเป้าหมาย พร้อมการประเมินโดยแพทย์และผลิตภัณฑ์ที่ตรวจสอบได้" };

const programs = [
  { number: "01", title: "Botox / Botulinum Toxin", href: "/services/injectables/botox", description: "วางแผนตามกล้ามเนื้อ การแสดงสีหน้า และเป้าหมายของแต่ละคน", items: ["ริ้วรอยจากการแสดงสีหน้า", "กล้ามเนื้อกราม", "สมดุลการเคลื่อนไหว"] },
  { number: "02", title: "Filler", href: "/services/injectables/filler", description: "ประเมินโครงสร้างและเลือกคุณสมบัติของผลิตภัณฑ์ให้เหมาะกับตำแหน่ง", items: ["เติมและพยุงโครงสร้าง", "ปรับสัดส่วนใบหน้า", "วางแผนความปลอดภัยด้านหลอดเลือด"] },
  { number: "03", title: "Skin Booster", href: "/services/injectables/skin-booster", description: "ดูแลคุณภาพผิวโดยระบุชื่อ ส่วนประกอบ และเป้าหมายของผลิตภัณฑ์ให้ชัดเจน", items: ["ความชุ่มชื้น", "ผิวสัมผัส", "ริ้วรอยเล็กตามผลิตภัณฑ์"] },
  { number: "04", title: "Biostimulator", href: "/services/injectables/biostimulator", description: "วางแผนการตอบสนองของผิวและคอลลาเจนอย่างค่อยเป็นค่อยไป", items: ["ความแน่นของผิว", "โครงสร้างเนื้อเยื่อ", "การติดตามผลต่อเนื่อง"] },
];

export default function Page() {
  return <main>
    <SiteHeader />
    <PageHero eyebrow="DOCTOR-LED INJECTABLES" title="โปรแกรมฉีดโดยแพทย์" highlight="เลือกอ่านตามโปรแกรม" description="แต่ละโปรแกรมมีหลักการ ผลิตภัณฑ์ ความเสี่ยง และวิธีดูแลต่างกัน เลือกดูข้อมูลแยกก่อนนัดประเมินกับแพทย์" image="/media/services/injectable-cover.webp" />
    <section className="page-section">
      <div className="page-heading"><div><p className="eyebrow">CHOOSE A PROGRAM</p><h2>4 โปรแกรม<br /><em>4 แนวทางการดูแล</em></h2></div><p>ชื่อทางการตลาดอาจครอบคลุมผลิตภัณฑ์หลายชนิด ควรตรวจสอบชื่อรุ่น ส่วนประกอบ แหล่งที่มา และข้อบ่งใช้ก่อนตัดสินใจ</p></div>
      <div className="injectable-program-grid">
        {programs.map((program) => <a className="injectable-program-card" href={program.href} key={program.href}>
          <span>{program.number}</span><h2>{program.title}</h2><p>{program.description}</p><ul>{program.items.map((item) => <li key={item}>{item}</li>)}</ul><strong>อ่านรายละเอียด <i>↗</i></strong>
        </a>)}
      </div>
    </section>
    <section className="page-cta"><p className="eyebrow">DOCTOR ASSESSMENT</p><h2>ไม่แน่ใจว่าโปรแกรมไหน<br /><em>เหมาะกับเป้าหมายของคุณ?</em></h2><p>ส่งรายละเอียดให้ทีมงานนัดประเมินกับแพทย์ พร้อมสอบถามข้อมูลผลิตภัณฑ์ก่อนตัดสินใจ</p><a className="button" href="/contact">ปรึกษาและจองคิว <span>↗</span></a></section>
    <SiteFooter />
  </main>;
}
