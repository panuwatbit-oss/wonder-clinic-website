import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "โปรโมชั่น | The Wonder Clinic", description: "โปรโมชั่นและแพ็กเกจประจำเดือนของ The Wonder Clinic" };
type PromoPrice = { label: string; price: string; detail?: string };
type Promo = { id: string; title: string; image: string; text: string; prices?: PromoPrice[] };
const promos: Promo[] = [
  { id: "pico", title: "Discovery PICO", image: "/media/services/discovery-pico-cover.webp", text: "แพ็กเกจดูแลฝ้า รอยดำ รอยสิว และสีผิวไม่สม่ำเสมอ", prices: [{ label: "เริ่มต้น", price: "1,990 บาท" }] },
  { id: "yag", title: "Quanta YAG Laser", image: "/media/services/yag-hair-removal-cover.webp", text: "แพ็กเกจกำจัดขนสำหรับหลายบริเวณและจำนวนครั้งที่เลือกได้", prices: [{ label: "เริ่มต้น", price: "2,990 บาท", detail: "12 ครั้ง / ปี" }] },
  { id: "facial-contouring", title: "Facial Contouring", image: "/media/services/facial-contour-cover.webp", text: "แพ็กเกจเทคโนโลยียกกระชับและดูแลกรอบหน้า", prices: [
    { label: "Oligio", price: "2,990 บาท", detail: "100 shots" },
    { label: "Ultraformer III", price: "2,990 บาท", detail: "100 shots" },
    { label: "Ultherapy", price: "9,990 บาท", detail: "100 shots" },
  ] },
  { id: "injectables", title: "Doctor-led Injectables", image: "/media/services/injectable-cover.webp", text: "โปรแกรมฉีดที่เริ่มจากการประเมินรูปหน้าโดยแพทย์" },
];
export default function PromotionsPage() { return <main><SiteHeader /><PageHero eyebrow="MONTHLY OFFERS" title="เลือกแพ็กเกจ" highlight="ให้ตรงกับสิ่งที่อยากดูแล" description="รวมข้อเสนอประจำเดือน แยกตามกลุ่มบริการ เพื่อให้เปรียบเทียบและสอบถามรายละเอียดได้ง่าย" image="/media/pages/promotions-hero.webp" />
  <section className="page-section" id="monthly"><div className="page-heading"><div><p className="eyebrow">CURRENT HIGHLIGHTS</p><h2>โปรโมชั่น<br /><em>ประจำเดือน</em></h2></div><p>ราคาเริ่มต้นและเงื่อนไขอาจเปลี่ยนแปลงตามโปรโมชั่นและการประเมิน กรุณาสอบถามทีมงานเพื่อยืนยันรายละเอียดก่อนจอง</p></div><div className="promo-grid">{promos.map(promo => <article id={promo.id} key={promo.id}><img src={promo.image} alt="" /><div><span>MONTHLY PACKAGE</span><h3>{promo.title}</h3><p>{promo.text}</p>{promo.prices && <div className="promo-prices" aria-label={`ราคาเริ่มต้น ${promo.title}`}>{promo.prices.map(item => <div className="promo-price" key={`${item.label}-${item.price}`}><span>{item.label}</span><strong>{item.price}</strong>{item.detail && <small>{item.detail}</small>}</div>)}</div>}<a href="/contact">สอบถามโปรล่าสุด <span>↗</span></a></div></article>)}</div></section>
  <section className="page-cta"><p className="eyebrow">CHECK BEFORE BOOKING</p><h2>ให้ทีมงานช่วยเช็ก<br /><em>แพ็กเกจที่เหมาะกับคุณ</em></h2><a className="button" href="/contact">สอบถามโปรโมชั่น <span>↗</span></a></section><SiteFooter /></main>; }
