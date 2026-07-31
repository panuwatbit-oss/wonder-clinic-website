import type { Metadata } from "next";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";
import { serviceDetails } from "../service-detail-data";

export const metadata: Metadata = { title: "Discovery PICO | The Wonder Clinic", description: "รู้จัก Discovery PICO จาก Quanta System หลักการ Picosecond Laser ปัญหาที่เหมาะ การเตรียมตัว รีวิว และคำถามที่พบบ่อย" };
export default function Page() { return <ServiceDetailPage service={serviceDetails["discovery-pico"]} />; }

