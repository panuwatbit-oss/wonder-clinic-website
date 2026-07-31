import type { Metadata } from "next";
import { headers } from "next/headers";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const thaiSans = Noto_Sans_Thai({
  variable: "--font-thai-sans",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const metadataBase = host ? new URL(`${protocol}://${host}`) : undefined;
  const title = "The Wonder Clinic | เทคโนโลยีมาตรฐานสากล ดูแลโดยแพทย์";
  const description = "เทคโนโลยีทางการแพทย์จากผู้ผลิตชั้นนำ พร้อมข้อมูลชื่อรุ่น แหล่งที่มา และมาตรฐานที่ตรวจสอบได้ โดยแพทย์ประเมินและวางแผนการดูแลเป็นรายบุคคล";

  return {
    metadataBase,
    title,
    description,
    openGraph: { title, description, images: ["/og.webp"] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.webp"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body className={thaiSans.variable}>{children}</body></html>;
}
