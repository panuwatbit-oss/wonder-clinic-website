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
          { label: "ผิวหน้า", href: "/services/discovery-pico#pico-face" },
          { label: "ฝ้า", href: "/services/discovery-pico#pico-melasma" },
          { label: "รอยดำ", href: "/services/discovery-pico#pico-dark-spots" },
          { label: "รอยแตกลาย", href: "/services/discovery-pico#pico-stretch-marks" },
        ],
      },
      {
        label: "Quanta Light EVO กำจัดขน",
        href: "/services/yag-hair-removal",
        children: [
          { label: "ใบหน้า หนวด และเครา", href: "/services/yag-hair-removal#yag-face" },
          { label: "รักแร้", href: "/services/yag-hair-removal#yag-underarm" },
          { label: "แขนและขา", href: "/services/yag-hair-removal#yag-arms-legs" },
          { label: "ลำตัว", href: "/services/yag-hair-removal#yag-body" },
          { label: "Bikini และ Brazilian", href: "/services/yag-hair-removal#yag-bikini-brazilian" },
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
          { label: "Botox", href: "/services/injectables/botox" },
          { label: "Filler", href: "/services/injectables/filler" },
          { label: "Skin Booster", href: "/services/injectables/skin-booster" },
          { label: "Biostimulator", href: "/services/injectables/biostimulator" },
        ],
      },
    ],
  },
  { label: "โปรโมชั่น", href: "/promotions" },
  { label: "รีวิว", href: "/reviews" },
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
