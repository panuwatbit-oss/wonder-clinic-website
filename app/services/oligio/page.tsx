import type { Metadata } from "next";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";
import { serviceDetails } from "../service-detail-data";

export const metadata: Metadata = { title: "Oligio Monopolar RF | The Wonder Clinic", description: "รู้จัก Oligio จาก WONTECH เทคโนโลยี Monopolar RF 6.78 MHz การยกกระชับ ขั้นตอน การดูแล และคำถามที่พบบ่อย" };
export default function Page() { return <ServiceDetailPage service={serviceDetails.oligio} />; }

