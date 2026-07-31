import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "บทความ | The Wonder Clinic", description: "ความรู้เกี่ยวกับเลเซอร์ การปรับรูปหน้า โปรแกรมฉีด และการดูแลก่อนหลังทำ" };
const articles = [
  { id:"pico", category:"DISCOVERY PICO", title:"Pico Laser แต่ละโหมดต่างกันอย่างไร", text:"ทำความเข้าใจการเลือกหัวเลเซอร์และโหมดตามปัญหาผิว", image:"/media/services/discovery-pico-cover.webp" },
  { id:"yag", category:"YAG HAIR REMOVAL", title:"เตรียมตัวก่อนเลเซอร์กำจัดขน", text:"สิ่งที่ควรรู้เรื่องการโกนขน แสงแดด และการดูแลผิว", image:"/media/services/yag-hair-removal-cover.webp" },
  { id:"facial-contouring", category:"FACIAL CONTOURING", title:"เลือกเทคโนโลยียกกระชับจากอะไร", text:"ทำความเข้าใจปัญหา ชั้นผิว และเป้าหมายก่อนเลือกเครื่อง", image:"/media/services/facial-contour-cover.webp" },
  { id:"injectables", category:"INJECTABLES", title:"ก่อนทำโปรแกรมฉีดควรถามอะไรบ้าง", text:"เช็กลิสต์ผลิตภัณฑ์ การประเมิน และการติดตามผล", image:"/media/services/injectable-cover.webp" },
  { id:"before-care", category:"BEFORE CARE", title:"เช็กลิสต์ก่อนเข้ารับบริการ", text:"ข้อมูลสุขภาพ ยาที่ใช้ และสิ่งที่ควรแจ้งทีมแพทย์", image:"/media/samples/hero-beauty-sample.webp" },
  { id:"after-care", category:"AFTER CARE", title:"ดูแลผิวหลังทำอย่างเป็นขั้นตอน", text:"หลักการดูแลผิวและสัญญาณที่ควรติดต่อคลินิก", image:"/media/samples/discovery-pico-sample.webp" },
];
export default function ArticlesPage() { return <main><SiteHeader /><PageHero eyebrow="WONDER JOURNAL" title="เข้าใจก่อนเลือก" highlight="ดูแลได้อย่างมั่นใจ" description="บทความที่ช่วยให้รู้จักเทคโนโลยี เตรียมตัวก่อนทำ และดูแลตัวเองหลังรับบริการ" image="/media/pages/articles-hero.webp" /><section className="page-section"><div className="article-grid">{articles.map(article => <article id={article.id} key={article.id}><img src={article.image} alt="" /><div><span>{article.category}</span><h2>{article.title}</h2><p>{article.text}</p><a href="/contact">สอบถามเพิ่มเติม <span>↗</span></a></div></article>)}</div></section><SiteFooter /></main>; }
