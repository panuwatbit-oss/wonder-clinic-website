import type { Metadata } from "next";
import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import { serviceDetails } from "../../service-detail-data";

export const metadata: Metadata = { title: "Filler โดยแพทย์ | The Wonder Clinic", description: "ข้อมูลโปรแกรม Filler การประเมินโครงสร้าง ผลิตภัณฑ์ที่ตรวจสอบได้ ความเสี่ยง การเตรียมตัว และรีวิวที่เกี่ยวข้อง" };
export default function Page() { return <ServiceDetailPage service={serviceDetails.filler} />; }
