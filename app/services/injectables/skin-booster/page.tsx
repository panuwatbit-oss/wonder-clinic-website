import type { Metadata } from "next";
import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import { serviceDetails } from "../../service-detail-data";

export const metadata: Metadata = { title: "Skin Booster โดยแพทย์ | The Wonder Clinic", description: "ข้อมูลโปรแกรม Skin Booster ความแตกต่างของผลิตภัณฑ์ การประเมินคุณภาพผิว การเตรียมตัว และรีวิวที่เกี่ยวข้อง" };
export default function Page() { return <ServiceDetailPage service={serviceDetails["skin-booster"]} />; }
