import type { Metadata } from "next";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";
import { serviceDetails } from "../service-detail-data";

export const metadata: Metadata = { title: "Ultraformer III | The Wonder Clinic", description: "รู้จัก Ultraformer III จาก CLASSYS เทคโนโลยี MMFU หัวหลายระดับสำหรับยกกระชับ ขั้นตอน การดูแล และ FAQ" };
export default function Page() { return <ServiceDetailPage service={serviceDetails["ultraformer-iii"]} />; }

