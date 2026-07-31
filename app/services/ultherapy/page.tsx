import type { Metadata } from "next";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";
import { serviceDetails } from "../service-detail-data";

export const metadata: Metadata = { title: "Ultherapy MFU-V | The Wonder Clinic", description: "รู้จัก Ultherapy ระบบ Micro-focused Ultrasound with Visualization จาก Merz Aesthetics พร้อมขั้นตอน การดูแล และคำถามที่พบบ่อย" };
export default function Page() { return <ServiceDetailPage service={serviceDetails.ultherapy} />; }

