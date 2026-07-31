export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[];
};

export const siteNavigation: NavigationItem[] = [
  { label: "หน้าแรก", href: "/" },
  {
    label: "บริการ",
    href: "/services",
    children: [
      {
        label: "Discovery Pico",
        href: "/services#discovery-pico",
        children: [
          { label: "ผิวหน้า", href: "/services#discovery-pico" },
          { label: "ฝ้า", href: "/services#discovery-pico" },
          { label: "รอยดำ", href: "/services#discovery-pico" },
          { label: "รอยแตกลาย", href: "/services#discovery-pico" },
        ],
      },
      {
        label: "YAG กำจัดขน",
        href: "/services#yag-hair-removal",
        children: [
          { label: "ใบหน้า หนวด และเครา", href: "/services#yag-hair-removal" },
          { label: "รักแร้", href: "/services#yag-hair-removal" },
          { label: "แขนและขา", href: "/services#yag-hair-removal" },
          { label: "ลำตัว", href: "/services#yag-hair-removal" },
          { label: "Bikini และ Brazilian", href: "/services#yag-hair-removal" },
        ],
      },
      {
        label: "ปรับรูปหน้าด้วย World-Class Laser",
        href: "/services#facial-contouring",
        children: [
          { label: "ยกกระชับ", href: "/services#facial-contouring" },
          { label: "กระชับกรอบหน้า", href: "/services#facial-contouring" },
          { label: "ลดความหย่อนคล้อย", href: "/services#facial-contouring" },
          { label: "ดูแลริ้วรอย", href: "/services#facial-contouring" },
        ],
      },
      {
        label: "โปรแกรมฉีดโดยแพทย์",
        href: "/services#injectables",
        children: [
          { label: "Botox", href: "/services#injectables" },
          { label: "Filler", href: "/services#injectables" },
          { label: "Skin Booster", href: "/services#injectables" },
          { label: "Biostimulator", href: "/services#injectables" },
        ],
      },
    ],
  },
  {
    label: "โปรโมชั่น",
    href: "/promotions",
    children: [
      { label: "โปรโมชั่นประจำเดือน", href: "/promotions#monthly" },
      { label: "แพ็กเกจ Discovery Pico", href: "/promotions#pico" },
      { label: "แพ็กเกจ YAG", href: "/promotions#yag" },
      { label: "แพ็กเกจปรับรูปหน้า", href: "/promotions#facial-contouring" },
      { label: "โปรโมชั่นโปรแกรมฉีด", href: "/promotions#injectables" },
    ],
  },
  {
    label: "รีวิว",
    href: "/reviews",
    children: [
      { label: "รีวิว Discovery Pico", href: "/reviews" },
      { label: "รีวิว YAG กำจัดขน", href: "/reviews" },
      { label: "รีวิวปรับรูปหน้า", href: "/reviews" },
      { label: "รีวิวโปรแกรมฉีดโดยแพทย์", href: "/reviews" },
    ],
  },
  {
    label: "บทความ",
    href: "/articles",
    children: [
      { label: "Discovery Pico", href: "/articles#pico" },
      { label: "YAG และการกำจัดขน", href: "/articles#yag" },
      { label: "การปรับรูปหน้าด้วยเทคโนโลยี", href: "/articles#facial-contouring" },
      { label: "โปรแกรมฉีด", href: "/articles#injectables" },
      { label: "การเตรียมตัวก่อนทำ", href: "/articles#before-care" },
      { label: "การดูแลหลังทำ", href: "/articles#after-care" },
    ],
  },
  {
    label: "เกี่ยวกับเรา",
    href: "/about",
  },
  {
    label: "ติดต่อและจองคิว",
    href: "/contact",
  },
];
