import type { Metadata } from "next";
import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import { serviceDetails } from "../../service-detail-data";

export const metadata: Metadata = { title: "Botox และ Botulinum Toxin | The Wonder Clinic", description: "ข้อมูลโปรแกรม Botox และ Botulinum Toxin การประเมินกล้ามเนื้อ ผลิตภัณฑ์ที่ตรวจสอบได้ การเตรียมตัว และรีวิวที่เกี่ยวข้อง" };
export default function Page() { return <ServiceDetailPage service={serviceDetails.botox} />; }
