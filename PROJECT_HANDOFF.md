# The Wonder Clinic Website — Project Handoff

อัปเดตล่าสุด: 1 สิงหาคม 2026

## 1. เป้าหมายโครงการ

เว็บไซต์ภาษาไทยสำหรับ The Wonder Clinic เน้นภาพลักษณ์คลินิกที่ใช้เทคโนโลยีจากผู้ผลิตชั้นนำ เครื่องแท้ แหล่งที่มาตรวจสอบได้ และหลายรุ่นมีมาตรฐานระดับสากลตามรุ่นและข้อบ่งใช้

แนวทางเนื้อหา:

- อ่านง่ายสำหรับลูกค้าทั่วไป ไม่ใช้ภาษาการตลาดที่คลุมเครือ เช่น “ลงทุนกับเครื่องมือ” หรือ “เครื่องมือมูลค่าสูง”
- ใช้คำว่า “เทคโนโลยีจากผู้ผลิตชั้นนำ”, “เครื่องแท้และแหล่งที่มาตรวจสอบได้” และ “มาตรฐานตามรุ่นและข้อบ่งใช้”
- หลีกเลี่ยงการรับประกันผลลัพธ์และข้อความทางการแพทย์ที่เกินจริง
- เน้นการประเมินโดยแพทย์ ความเหมาะสมรายบุคคล และผลลัพธ์ที่แตกต่างกัน

## 2. ที่อยู่และสถานะระบบ

- โฟลเดอร์โปรเจกต์: `/Users/benz/Website_Project/The Wonder Clinic Web`
- GitHub: `https://github.com/panuwatbit-oss/wonder-clinic-website`
- เว็บไซต์เผยแพร่: `https://the-wonder-clinic-th.panuwat-bit.chatgpt.site`
- Sites project ID: `appgprj_6a6c5e42b5cc8191a9d108aaa8d39f81`
- Commit ล่าสุด ณ เวลาส่งต่อ: `13f29ed86d686fa12e1c086c09de2fe44c2d9f26`
- Build ล่าสุดผ่านครบทุก route

โปรเจกต์ปัจจุบันใช้โครงสร้าง React/Next-style ในโฟลเดอร์ `app/` และ build ด้วย Vinext สำหรับการเผยแพร่บน Cloudflare/Sites แม้แนวคิดเริ่มต้นของโครงการจะเคยวางไว้เป็น Astro

## 3. ไฟล์สำคัญ

- `app/page.tsx` — หน้าแรกและการ์ดบริการหลัก
- `app/globals.css` — Design system และ responsive styles ทั้งเว็บไซต์
- `app/navigation.ts` — โครงสร้างเมนู desktop/mobile
- `app/components/SiteHeader.tsx` — Header และ dropdown navigation
- `app/components/ServiceDetailPage.tsx` — Template หน้ารายละเอียดบริการ
- `app/services/service-detail-data.ts` — ข้อมูลบริการ ราคา รีวิว FAQ และเนื้อหาทางเทคนิค
- `app/review-data.ts` — ข้อมูลคลังรีวิว
- `.openai/hosting.json` — การตั้งค่า Sites hosting

## 4. การตัดสินใจด้านแบรนด์

- ห้ามออกแบบโลโก้ใหม่หรือเปลี่ยนองค์ประกอบ/สีของโลโก้เดิม
- ใช้โลโก้เดิมที่ผ่านการทำพื้นหลังโปร่งใสและเก็บเวอร์ชันที่ดีที่สุดไว้แล้ว
- ฟอนต์ทั้งเว็บไซต์: Noto Sans Thai
- โทนสีหลัก: ดำ/น้ำตาลดำ, ครีม/งาช้าง, เหลืองทองของแบรนด์, เทาอ่อน
- Mood & tone: premium, clean, modern medical aesthetics, อบอุ่นแต่ได้มาตรฐาน
- รูปภาพเว็บไซต์ควรใช้ WebP เพื่อลดขนาดไฟล์
- ภาพบริการหลักใช้สัดส่วน 4:3 ขนาด 1200×900 px

## 5. โครงสร้างหน้าเว็บไซต์ที่ทำแล้ว

- `/` หน้าแรก
- `/services` รวมบริการ
- `/services/discovery-pico`
- `/services/yag-hair-removal`
- `/services/oligio`
- `/services/ultraformer-iii`
- `/services/ultherapy`
- `/services/injectables`
- `/services/injectables/botox`
- `/services/injectables/filler`
- `/services/injectables/skin-booster`
- `/services/injectables/biostimulator`
- `/promotions`
- `/reviews`
- `/articles`
- `/about`
- `/contact`

## 6. เมนูและ UX ที่ตกลงแล้ว

- โลโก้อยู่กึ่งกลางเหนือเมนู
- “เกี่ยวกับเรา”, “ติดต่อ”, “รีวิว” และ “โปรโมชั่น” ไม่มี dropdown
- dropdown ของบริการแก้ปัญหาหายก่อนเลื่อนเมาส์ถึงเมนูแล้ว
- CTA หลักใช้ LINE, โทรศัพท์ และ Messenger
- เอาปุ่มจองคิวโดดเดี่ยวด้านบนออกแล้ว
- ภาพและ headline ของการ์ดบริการคลิกไปยังหน้าที่เกี่ยวข้องได้
- Case review ในหน้ารายละเอียดกดขยายได้
- Footer มี Google Maps

## 7. หน้าแรกและ Responsive

- Hero หน้าแรกใช้ภาพรวมเครื่อง 5 เครื่อง โดย Discovery PICO เด่นที่สุด
- การ์ด 4 โปรแกรมหลักใช้ภาพจริง/ภาพประกอบเครื่องแทนนางแบบ
- Desktop แสดงบริการ รีวิวภาพ และวิดีโอ 4 คอลัมน์ตามที่ตกลง
- Tablet ใช้ 2 คอลัมน์ในส่วนที่เหมาะสม
- Mobile การ์ดบริการใช้ภาพ 4:3 และ `object-fit: contain` เพื่อไม่ให้เครื่องถูก crop
- คลังรีวิวบนมือถือเป็น horizontal slider เพื่อให้ภาพใหญ่และอ่านง่าย
- Before/After เป็นสัดส่วน 1:1
- เมนูมือถือและแท็บเล็ตได้รับการปรับแล้ว

## 8. ภาพบริการหลักล่าสุด

- `public/media/services/discovery-pico-cover.webp` — เครื่อง Discovery PICO ที่ผู้ใช้ส่งมา
- `public/media/services/yag-hair-removal-cover.webp` — เครื่อง Quanta Light EVO ที่ผู้ใช้ส่งมา ใช้เป็นภาพบริการ Quanta YAG Laser
- `public/media/services/facial-contour-cover.webp` — Oligio, Ultraformer III และ Ultherapy อยู่ในภาพเดียวกัน
- `public/media/services/injectable-cover.webp` — กล่องผลิตภัณฑ์ ขวด และ vial แบบสมจริง ไม่มีชื่อสินค้า/โลโก้
- `public/media/generated/home-machines-hero.webp` — Hero รวมเครื่อง 5 เครื่อง

ภาพเครื่องหน้ารายละเอียด:

- `public/media/equipment/discovery-pico-official.webp`
- `public/media/equipment/quanta-light-evo-official.webp`
- `public/media/equipment/oligio-official.webp`
- `public/media/equipment/ultraformer-iii-official.webp`
- `public/media/equipment/ultherapy-official.webp`
- `public/media/equipment/cryo-6-official.webp`

ข้อสำคัญ: ภาพเครื่องที่ผู้ใช้ส่งมาถูกนำมาวางบนพื้นหลังใหม่โดยคงตัวเครื่องให้ตรงรุ่น ห้ามใช้ ImageGen วาดตัวเครื่องใหม่แทนเมื่อมีไฟล์ต้นฉบับจากผู้ใช้

## 9. ชื่อบริการล่าสุด

ชื่อที่ใช้ต่อผู้ใช้ต้องเป็น **Quanta YAG Laser** แทน **Quanta Light EVO** ในหน้าแรก เมนู หน้ารวมบริการ ชื่อหน้า และ SEO

คำว่า **Light EVO** ให้เหลือเฉพาะบริบทเชิงเทคนิคเพื่ออธิบายชื่อแพลตฟอร์ม/รุ่นเครื่องจริงเท่านั้น

## 10. ราคาเริ่มต้นล่าสุด

ต้องแสดงเด่นในหน้าแรกและหน้า Hero ของหน้ารายละเอียดบริการ:

- Discovery PICO — เริ่ม 1,990 บาท
- Quanta YAG Laser — เริ่ม 2,990 บาท / 12 ครั้ง / ปี
- Oligio — เริ่ม 2,990 บาท / 100 shots
- Ultraformer III — เริ่ม 2,990 บาท / 100 shots
- Ultherapy — เริ่ม 9,990 บาท / 100 shots

มีข้อความกำกับว่าราคาและจำนวนครั้งอาจเปลี่ยนตามโปรโมชั่นและการประเมิน และควรสอบถามคลินิกก่อนรับบริการ

## 11. รีวิวและสื่อ

- หน้าแรกใช้ REAL REVIEW LIBRARY เพียงส่วนเดียว ไม่ทำ RESULTS & REVIEWS ซ้ำ
- มี filter แยกตามบริการ
- Pico แยกตามตำแหน่ง/ปัญหาที่รักษา
- YAG แยกตามตำแหน่งกำจัดขน
- หน้ารายละเอียดแต่ละบริการแสดงรีวิวหลายภาพ
- วิดีโอรีวิวหน้าแรกดึงจาก YouTube ของ The Wonder Clinic
- รีวิวและผลลัพธ์ต้องมี disclaimer ว่าผลลัพธ์แตกต่างกันในแต่ละบุคคล

## 12. ไฟล์ของผู้ใช้ที่ต้องระวัง

มีไฟล์ untracked ที่เป็นของผู้ใช้ ห้ามลบหรือเพิ่มเข้า Git โดยไม่จำเป็น:

- `ภาพคลินิก/10.jpg`
- โฟลเดอร์ `ภาพเครื่อง/`

ก่อนแก้ไขทุกครั้งควรตรวจ `git status` และอย่าแตะไฟล์อื่นที่ไม่เกี่ยวข้อง

## 13. วิธีทำงานต่อ

1. อ่านไฟล์นี้ก่อนเริ่มงาน
2. ตรวจ `git status` และรักษาไฟล์ untracked ของผู้ใช้
3. แก้เฉพาะไฟล์ที่เกี่ยวข้องด้วย patch
4. รัน build หลังแก้ไข
5. ตรวจ responsive เพิ่มเมื่อผู้ใช้ร้องขอ
6. Commit และ push เฉพาะไฟล์งาน
7. เผยแพร่ผ่าน Sites project เดิม และส่งลิงก์ production เดิมกลับให้ผู้ใช้

## 14. งานที่ควรพิจารณาต่อ

- ตรวจข้อความโปรโมชั่นและวันหมดอายุก่อนเปิดใช้งานจริง
- ยืนยันชื่อผลิตภัณฑ์ฉีดและรูปสินค้าจริงกับคลินิก หากต้องการสื่อชื่อแบรนด์
- ยืนยันเอกสารมาตรฐาน/ข้อบ่งใช้ของแต่ละเครื่องกับคลินิกก่อนเปิดสู่สาธารณะเต็มรูปแบบ
- ตรวจข้อมูลติดต่อ เวลาเปิดทำการ และพิกัด Google Maps อีกครั้ง
- ทำ final content proofread และทดสอบทุกลิงก์หลังเนื้อหาจริงครบ

## 15. Prompt สำหรับเริ่มแชทใหม่

```text
ช่วยทำงานต่อในโปรเจกต์ The Wonder Clinic Website ที่อยู่ที่:
/Users/benz/Website_Project/The Wonder Clinic Web

ก่อนเริ่มงาน ให้เปิดและอ่านไฟล์ PROJECT_HANDOFF.md ทั้งไฟล์ก่อน เพราะมีสรุปการตัดสินใจ สถานะเว็บไซต์ ชื่อบริการ ราคา รูปภาพ และข้อควรระวังจากแชทเดิม

เว็บไซต์ production ปัจจุบัน:
https://the-wonder-clinic-th.panuwat-bit.chatgpt.site

GitHub:
https://github.com/panuwatbit-oss/wonder-clinic-website

ข้อกำหนดสำคัญ:
- ห้ามออกแบบหรือเปลี่ยนโลโก้เดิม
- ใช้ Noto Sans Thai ทั้งเว็บไซต์
- ชื่อบริการที่แสดงต่อลูกค้าคือ “Quanta YAG Laser”; ใช้ “Light EVO” เฉพาะคำอธิบายชื่อรุ่นเชิงเทคนิค
- รักษาไฟล์ untracked ของผู้ใช้ในโฟลเดอร์ ภาพคลินิก และ ภาพเครื่อง ห้ามลบหรือ commit โดยไม่จำเป็น
- หลังแก้เว็บ ให้ build ตรวจสอบและเผยแพร่ผ่าน Sites project เดิม เว้นแต่ฉันระบุว่าให้ทำเฉพาะในเครื่อง

งานใหม่ที่ต้องการให้ทำ:
[เขียนคำสั่งงานใหม่ตรงนี้]
```
