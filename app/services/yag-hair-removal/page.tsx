import type { Metadata } from "next";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";
import { serviceDetails } from "../service-detail-data";

export const metadata: Metadata = { title: "Quanta Light EVO กำจัดขน | The Wonder Clinic", description: "Quanta Light EVO พร้อม Long-pulsed Nd:YAG 1064 nm และ Zimmer Cryo 6 สำหรับวางแผนลดเส้นขนหลายบริเวณ พร้อมขั้นตอน การเตรียมตัว และคำถามที่พบบ่อย" };
export default function Page() { return <ServiceDetailPage service={serviceDetails["yag-hair-removal"]} />; }
