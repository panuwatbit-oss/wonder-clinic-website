import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const thaiSans = Noto_Sans_Thai({
  variable: "--font-thai-sans",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "The Wonder Clinic | เทคโนโลยีมาตรฐานสากล ดูแลโดยแพทย์";
const description = "เทคโนโลยีทางการแพทย์จากผู้ผลิตชั้นนำ พร้อมข้อมูลชื่อรุ่น แหล่งที่มา และมาตรฐานที่ตรวจสอบได้ โดยแพทย์ประเมินและวางแผนการดูแลเป็นรายบุคคล";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://the-wonder-clinic-th.panuwat-bit.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: { title, description, images: ["/og.webp"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.webp"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body className={thaiSans.variable}>{children}</body></html>;
}
