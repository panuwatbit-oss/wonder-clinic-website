import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Wonder Clinic review experience", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>The Wonder Clinic \| เครื่องมือมาตรฐานสากล ดูแลโดยแพทย์<\/title>/i);
  assert.match(html, /REAL REVIEW LIBRARY/);
  assert.match(html, /รวมรีวิวจริง/);
  assert.match(html, /Discovery Pico/);
  assert.match(html, /เครื่องมือระดับโลก/);
  assert.match(html, /แผนที่ The Wonder Clinic สาขาลาดพร้าว/);
  assert.match(html, /maps\.google\.com\/maps/);
  assert.doesNotMatch(html, /RESULTS &amp; REVIEWS/);
  assert.doesNotMatch(html, /MOCKUP CASE|BEFORE · MOCKUP|AFTER · MOCKUP/);
});

test("server-renders every primary sitemap page", async () => {
  const routes = [
    ["/services", "เครื่องมือมูลค่าสูง"],
    ["/promotions", "โปรโมชั่นประจำเดือน"],
    ["/reviews", "ประสบการณ์จริง"],
    ["/articles", "WONDER JOURNAL"],
    ["/about", "ABOUT THE WONDER CLINIC"],
    ["/contact", "CONTACT &amp; BOOKING"],
  ];

  for (const [path, content] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), new RegExp(content), path);
  }
});

test("uses a dedicated generated WebP hero image on every primary page", async () => {
  const imageNames = ["services", "promotions", "reviews", "articles", "about", "contact"];
  await Promise.all(imageNames.map((name) => access(new URL(`../public/media/pages/${name}-hero.webp`, import.meta.url))));

  for (const name of imageNames) {
    const source = await readFile(new URL(`../app/${name}/page.tsx`, import.meta.url), "utf8");
    assert.match(source, new RegExp(`/media/pages/${name}-hero\\.webp`));
  }
});

test("server-renders every detailed service page with FAQ and booking actions", async () => {
  const routes = [
    ["/services/discovery-pico", "Discovery PICO", "review-031"],
    ["/services/yag-hair-removal", "Quanta Light EVO", "review-037"],
    ["/services/oligio", "Oligio", "review-017"],
    ["/services/ultraformer-iii", "Ultraformer III", "review-022"],
    ["/services/ultherapy", "Ultherapy", "review-003"],
    ["/services/injectables", "โปรแกรมฉีดโดยแพทย์", "review-107"],
  ];

  for (const [path, content, reviewAsset] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, new RegExp(content), path);
    assert.match(html, /FAQPage/, path);
    assert.match(html, /Messenger/, path);
    assert.match(html, /ผลลัพธ์แตกต่างกัน/, path);
    assert.doesNotMatch(html, /ภาพผลิตภัณฑ์จาก/, path);
    assert.match(html, new RegExp(reviewAsset), `${path} review mapping`);
  }
});

test("keeps official manufacturer WebP equipment imagery available", async () => {
  const equipment = ["discovery-pico", "cryo-6", "quanta-light-evo", "oligio", "ultraformer-iii", "ultherapy"];
  await Promise.all(equipment.map((name) => access(new URL(`../public/media/equipment/${name}-official.webp`, import.meta.url))));
});

test("keeps the complete review library and responsive gallery wired into the site", async () => {
  const [page, gallery, reviewData, css, layout, navigation] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/ReviewGallery.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/review-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/navigation.ts", import.meta.url), "utf8"),
  ]);

  assert.match(page, /reviewGalleryItems/);
  assert.match(page, /HeroPhrases/);
  assert.match(page, /รู้จัก YAG Hair Removal/);
  assert.match(page, /ผลลัพธ์ขึ้นอยู่กับสภาพผิว/);
  assert.match(page, /เปิดเส้นทางใน Google Maps/);
  assert.match(page, /loading="lazy"/);
  assert.doesNotMatch(page, /RESULTS &amp; REVIEWS/);
  assert.match(gallery, /role="dialog"/);
  assert.match(gallery, /Escape/);
  assert.match(gallery, /aria-pressed/);
  assert.match(gallery, /ยกกระชับและปรับรูปหน้า/);
  assert.match(gallery, /PAGE_SIZE = 16/);
  assert.match(gallery, /review-load-more/);
  assert.match(gallery, /Pico ทั้งหมด/);
  assert.match(gallery, /รอยดำ \/ รอยสิว/);
  assert.match(gallery, /กำจัดขนทั้งหมด/);
  assert.match(gallery, /หนวดเครา/);
  assert.match(gallery, /review-subfilters/);
  assert.match(css, /review-gallery/);
  assert.match(css, /grid-template-columns:repeat\(4,1fr\)/);
  assert.match(css, /scroll-snap-type:x mandatory/);
  assert.match(css, /object-fit:contain/);
  assert.match(css, /calc\(100vw - 56px\)/);
  assert.match(css, /\.feature-yag \.button \{ position:relative; z-index:2; \}/);
  assert.match(css, /desktop-nav-dropdown/);
  assert.match(css, /mobile-nav-group/);
  assert.match(layout, /Noto_Sans_Thai/);
  assert.match(navigation, /โปรโมชั่นประจำเดือน/);
  assert.match(navigation, /การเตรียมตัวก่อนทำ/);
  assert.doesNotMatch(navigation, /เรื่องราวของ Wonder Clinic/);
  assert.doesNotMatch(navigation, /จองคิวออนไลน์/);

  const reviewSources = [...reviewData.matchAll(/src: "([^"]+)"/g)].map((match) => match[1]);
  assert.equal(reviewSources.length, 186);
  assert.ok(reviewSources.every((src) => src.endsWith(".webp")));
  assert.match(reviewData, /group: "pico"/);
  assert.match(reviewData, /group: "hair-removal"/);
  assert.match(reviewData, /group: "facial-contouring"/);
  assert.match(reviewData, /group: "injectables"/);
  await Promise.all(reviewSources.map((src) => access(new URL(`../public${src}`, import.meta.url))));
});
