import type { Metadata } from "next";
import { ServiceDetailPage } from "../../components/ServiceDetailPage";
import { serviceDetails } from "../service-detail-data";

export const metadata: Metadata = { title: "โปรแกรมฉีดโดยแพทย์ | The Wonder Clinic", description: "Botox, Filler, Skin Booster และ Biostimulator พร้อมการประเมินโดยแพทย์ ผลิตภัณฑ์ตรวจสอบได้ และแผนเฉพาะบุคคล" };
export default function Page() { return <ServiceDetailPage service={serviceDetails.injectables} />; }

