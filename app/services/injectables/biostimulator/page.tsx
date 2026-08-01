import type { Metadata } from "next";
import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import { serviceDetails } from "../../service-detail-data";

export const metadata: Metadata = { title: "Biostimulator โดยแพทย์ | The Wonder Clinic", description: "ข้อมูลโปรแกรม Biostimulator การวางแผนฟื้นฟูโครงสร้างผิว ผลิตภัณฑ์ที่ตรวจสอบได้ การติดตาม และรีวิวที่เกี่ยวข้อง" };
export default function Page() { return <ServiceDetailPage service={serviceDetails.biostimulator} />; }
