import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "บริการและเทคโนโลยีมาตรฐานสากล | The Wonder Clinic", description: "รวม Discovery PICO และ Quanta YAG Laser จากอิตาลี พร้อม Oligio, Ultraformer III, Ultherapy และโปรแกรมฉีดโดยแพทย์" };

const services = [
  { id: "discovery-pico", number: "01", title: "Discovery PICO", en: "QUANTA SYSTEM · ITALY", href: "/services/discovery-pico", image: "/media/services/discovery-pico-cover.webp", description: "Picosecond Laser จาก Quanta System ประเทศอิตาลี มีหัวและโหมดให้แพทย์เลือกใช้ตามปัญหาผิวและบริเวณที่ต้องการดูแล", items: ["ผิวหน้าและสีผิวไม่สม่ำเสมอ", "ฝ้า กระ และรอยดำ", "รอยสิวและผิวไม่เรียบเนียน", "รอยแตกลายและผิวเฉพาะบริเวณ"] },
  { id: "yag-hair-removal", number: "02", title: "Quanta YAG Laser", en: "LONG-PULSED ND:YAG · ITALY", href: "/services/yag-hair-removal", image: "/media/services/yag-hair-removal-cover.webp", description: "แพลตฟอร์ม Light EVO จาก Quanta System ทำงานร่วมกับ Cryo 6 จาก Zimmer เพื่อวางแผนลดเส้นขนและช่วยลดความรู้สึกร้อนระหว่างรับบริการ", items: ["ใบหน้า หนวด และเครา", "รักแร้ แขน และขา", "ลำตัวและบริเวณเฉพาะ", "Bikini และ Brazilian"] },
  { id: "facial-contouring", number: "03", title: "ปรับรูปหน้าด้วยเทคโนโลยี", en: "GLOBAL LIFTING TECHNOLOGIES", href: "/services/oligio", image: "/media/services/facial-contour-cover.webp", description: "เลือกใช้พลังงานต่างชนิดจากเครื่อง Oligio, Ultraformer III และ Ultherapy ตามระดับความหย่อนคล้อย ชั้นผิว และเป้าหมายของแต่ละคน", items: ["Oligio · Monopolar RF", "Ultraformer III · MMFU", "Ultherapy · MFU-V", "ประเมินและวางแผนโดยแพทย์"], links: [{ label: "Oligio", href: "/services/oligio" }, { label: "Ultraformer III", href: "/services/ultraformer-iii" }, { label: "Ultherapy", href: "/services/ultherapy" }] },
  { id: "injectables", number: "04", title: "โปรแกรมฉีดโดยแพทย์", en: "DOCTOR-LED INJECTABLES", href: "/services/injectables", image: "/media/services/injectable-cover.webp", description: "ประเมินรูปหน้าเป็นรายเคส พร้อมผลิตภัณฑ์ที่ตรวจสอบได้และแผนการดูแลเฉพาะบุคคล", items: ["Botox", "Filler", "Skin Booster", "Biostimulator"], links: [{ label: "Botox", href: "/services/injectables/botox" }, { label: "Filler", href: "/services/injectables/filler" }, { label: "Skin Booster", href: "/services/injectables/skin-booster" }, { label: "Biostimulator", href: "/services/injectables/biostimulator" }] },
];

export default function ServicesPage() {
  return <main><SiteHeader /><PageHero eyebrow="MEDICAL AESTHETIC TECHNOLOGY" title="เทคโนโลยีมาตรฐานสากล" highlight="เลือกให้เหมาะกับคุณ" description="คัดสรรเทคโนโลยีจากผู้ผลิตชั้นนำ พร้อมข้อมูลชื่อรุ่น แหล่งที่มา และมาตรฐานที่เกี่ยวข้องให้ตรวจสอบก่อนรับบริการ" image="/media/pages/services-hero.webp" />
    <section className="page-section service-catalog">
      {services.map((service, index) => <article className={index % 2 ? "catalog-item is-reverse" : "catalog-item"} id={service.id} key={service.id}>
        <img src={service.image} alt={`ภาพตัวอย่าง ${service.title}`} />
        <div><span>{service.number} · {service.en}</span><h2>{service.title}</h2><p>{service.description}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul>{"links" in service && service.links && <div className="catalog-links">{service.links.map(link => <a key={link.href} href={link.href}>{link.label} <span>↗</span></a>)}</div>}<a className="button" href={service.href}>อ่านรายละเอียด <span>↗</span></a></div>
      </article>)}
    </section>
    <section className="page-cta"><p className="eyebrow">PERSONALIZED PLAN</p><h2>ไม่แน่ใจว่าควรเริ่ม<br /><em>จากโปรแกรมไหน?</em></h2><p>ส่งรายละเอียดปัญหาหรือเป้าหมายให้ทีมงานช่วยแนะนำแนวทางเบื้องต้น</p><a className="button" href="/contact">ปรึกษาและจองคิว <span>↗</span></a></section><SiteFooter /></main>;
}
