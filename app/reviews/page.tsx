import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";
import { ReviewGallery } from "../components/ReviewGallery";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { reviewGalleryItems } from "../review-data";

export const metadata: Metadata = { title: "รีวิว | The Wonder Clinic", description: "รวมรีวิวจริงจากหลายโปรแกรมของ The Wonder Clinic" };
export default function ReviewsPage() { return <main><SiteHeader /><PageHero eyebrow="REAL REVIEW LIBRARY" title="ประสบการณ์จริง" highlight="จากหลายโปรแกรม" description="เลือกดูรีวิวตามบริการและตำแหน่งที่สนใจ พร้อมเปิดภาพต้นฉบับในขนาดใหญ่" image="/media/pages/reviews-hero.webp" /><section className="page-section review-page"><div className="page-heading"><div><p className="eyebrow">186 REVIEW IMAGES</p><h2>ค้นหารีวิว<br /><em>ที่ใกล้กับปัญหาของคุณ</em></h2></div><p>ภาพรีวิวใช้เพื่อประกอบการให้ข้อมูล ผลลัพธ์ขึ้นอยู่กับสภาพผิวและแผนการดูแลของแต่ละบุคคล</p></div><ReviewGallery items={reviewGalleryItems} /></section><SiteFooter /></main>; }
