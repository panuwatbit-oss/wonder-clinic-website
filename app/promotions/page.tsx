import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "โปรโมชั่น | The Wonder Clinic", description: "โปรโมชั่นและแพ็กเกจประจำเดือนของ The Wonder Clinic" };
const promos = [
  { id: "pico", title: "Discovery Pico", image: "/media/services/discovery-pico-cover.webp", text: "แพ็กเกจดูแลฝ้า รอยดำ รอยสิว และสีผิวไม่สม่ำเสมอ" },
  { id: "yag", title: "YAG Hair Removal", image: "/media/services/yag-hair-removal-cover.webp", text: "แพ็กเกจกำจัดขนสำหรับหลายบริเวณและจำนวนครั้งที่เลือกได้" },
  { id: "facial-contouring", title: "Facial Contouring", image: "/media/services/facial-contour-cover.webp", text: "แพ็กเกจเทคโนโลยียกกระชับและดูแลกรอบหน้า" },
  { id: "injectables", title: "Doctor-led Injectables", image: "/media/services/injectable-cover.webp", text: "โปรแกรมฉีดที่เริ่มจากการประเมินรูปหน้าโดยแพทย์" },
];
export default function PromotionsPage() { return <main><SiteHeader /><PageHero eyebrow="MONTHLY OFFERS" title="เลือกแพ็กเกจ" highlight="ให้ตรงกับสิ่งที่อยากดูแล" description="รวมข้อเสนอประจำเดือน แยกตามกลุ่มบริการ เพื่อให้เปรียบเทียบและสอบถามรายละเอียดได้ง่าย" image="/media/pages/promotions-hero.webp" />
  <section className="page-section" id="monthly"><div className="page-heading"><div><p className="eyebrow">CURRENT HIGHLIGHTS</p><h2>โปรโมชั่น<br /><em>ประจำเดือน</em></h2></div><p>ราคาและเงื่อนไขอาจเปลี่ยนแปลง กรุณาสอบถามทีมงานเพื่อยืนยันรายละเอียดก่อนจอง</p></div><div className="promo-grid">{promos.map(promo => <article id={promo.id} key={promo.id}><img src={promo.image} alt="" /><div><span>MONTHLY PACKAGE</span><h3>{promo.title}</h3><p>{promo.text}</p><a href="/contact">สอบถามโปรล่าสุด <span>↗</span></a></div></article>)}</div></section>
  <section className="page-cta"><p className="eyebrow">CHECK BEFORE BOOKING</p><h2>ให้ทีมงานช่วยเช็ก<br /><em>แพ็กเกจที่เหมาะกับคุณ</em></h2><a className="button" href="/contact">สอบถามโปรโมชั่น <span>↗</span></a></section><SiteFooter /></main>; }
