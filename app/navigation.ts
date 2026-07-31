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
        href: "/services/discovery-pico",
        children: [
          { label: "ผิวหน้า", href: "/services/discovery-pico#details" },
          { label: "ฝ้า", href: "/services/discovery-pico#details" },
          { label: "รอยดำ", href: "/services/discovery-pico#details" },
          { label: "รอยแตกลาย", href: "/services/discovery-pico#details" },
        ],
      },
      {
        label: "Quanta Light EVO กำจัดขน",
        href: "/services/yag-hair-removal",
        children: [
          { label: "ใบหน้า หนวด และเครา", href: "/services/yag-hair-removal#details" },
          { label: "รักแร้", href: "/services/yag-hair-removal#details" },
          { label: "แขนและขา", href: "/services/yag-hair-removal#details" },
          { label: "ลำตัว", href: "/services/yag-hair-removal#details" },
          { label: "Bikini และ Brazilian", href: "/services/yag-hair-removal#details" },
        ],
      },
      {
        label: "ยกกระชับและปรับรูปหน้าด้วยเทคโนโลยี",
        href: "/services#facial-contouring",
        children: [
          { label: "Oligio", href: "/services/oligio" },
          { label: "Ultraformer III", href: "/services/ultraformer-iii" },
          { label: "Ultherapy", href: "/services/ultherapy" },
        ],
      },
      {
        label: "โปรแกรมฉีดโดยแพทย์",
        href: "/services/injectables",
        children: [
          { label: "Botox", href: "/services/injectables#details" },
          { label: "Filler", href: "/services/injectables#details" },
          { label: "Skin Booster", href: "/services/injectables#details" },
          { label: "Biostimulator", href: "/services/injectables#details" },
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
