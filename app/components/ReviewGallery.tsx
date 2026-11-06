"use client";

import { useEffect, useRef, useState } from "react";

export type ReviewItem = {
  src: string;
  title: string;
  category: string;
  group: "pico" | "hair-removal" | "facial-contouring" | "injectables";
  alt: string;
};

const filters = [
  { value: "all", label: "ทั้งหมด" },
  { value: "pico", label: "Pico Laser" },
  { value: "hair-removal", label: "กำจัดขน" },
  { value: "facial-contouring", label: "ยกกระชับและปรับรูปหน้า" },
  { value: "injectables", label: "โปรแกรมฉีด" },
] as const;

const picoFilters = [
  { value: "all", label: "Pico ทั้งหมด" },
  { value: "acne-scars", label: "หลุมสิว" },
  { value: "melasma", label: "ฝ้าและกระ" },
  { value: "dark-spots", label: "รอยดำ / รอยสิว" },
  { value: "scars", label: "รอยแผลเป็น" },
  { value: "underarm", label: "รักแร้" },
  { value: "general", label: "รีวิวทั่วไป" },
] as const;

const hairRemovalFilters = [
  { value: "all", label: "กำจัดขนทั้งหมด" },
  { value: "legs", label: "ขา" },
  { value: "arms", label: "แขน" },
  { value: "underarm", label: "รักแร้" },
  { value: "facial-hair", label: "หนวดเครา" },
] as const;

const PAGE_SIZE = 16;

function getPicoFilter(item: ReviewItem) {
  if (item.title.includes("หลุมสิว")) return "acne-scars";
  if (item.title.includes("ฝ้า")) return "melasma";
  if (item.title.includes("รอยดำ") || item.title.includes("รอยสิว")) return "dark-spots";
  if (item.title.includes("รอยแผลเป็น")) return "scars";
  if (item.title.includes("รักแร้")) return "underarm";
  return "general";
}

function getHairRemovalFilter(item: ReviewItem) {
  if (item.title.includes("รักแร้")) return "underarm";
  if (item.title.includes("หนวดเครา")) return "facial-hair";
  if (item.title.includes("ขา")) return "legs";
  if (item.title.includes("แขน")) return "arms";
  return "all";
}

export function ReviewGallery({ items }: { items: ReviewItem[] }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activeReview, setActiveReview] = useState<ReviewItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["value"]>("all");
  const [activePicoFilter, setActivePicoFilter] = useState<(typeof picoFilters)[number]["value"]>("all");
  const [activeHairRemovalFilter, setActiveHairRemovalFilter] = useState<(typeof hairRemovalFilters)[number]["value"]>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const serviceItems = activeFilter === "all" ? items : items.filter((item) => item.group === activeFilter);
  const filteredItems = activeFilter === "pico" && activePicoFilter !== "all"
    ? serviceItems.filter((item) => getPicoFilter(item) === activePicoFilter)
    : activeFilter === "hair-removal" && activeHairRemovalFilter !== "all"
      ? serviceItems.filter((item) => getHairRemovalFilter(item) === activeHairRemovalFilter)
      : serviceItems;
  const visibleItems = filteredItems.slice(0, visibleCount);

  useEffect(() => {
    if (!activeReview) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveReview(null);
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      previousFocus?.focus();
    };
  }, [activeReview]);

  return (
    <>
      <div className="review-filters" aria-label="กรองรีวิวตามบริการ">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter.value ? "is-active" : ""}
            type="button"
            key={filter.value}
            aria-pressed={activeFilter === filter.value}
            onClick={() => {
              setActiveFilter(filter.value);
              setActivePicoFilter("all");
              setActiveHairRemovalFilter("all");
              setVisibleCount(PAGE_SIZE);
            }}
          >
            {filter.label}
          </button>
        ))}
        <span aria-live="polite">{filteredItems.length} รีวิว</span>
      </div>
      {activeFilter === "pico" && (
        <div className="review-subfilters" aria-label="กรองรีวิว Pico ตามปัญหาที่ดูแล">
          {picoFilters.map((filter) => (
            <button
              className={activePicoFilter === filter.value ? "is-active" : ""}
              type="button"
              key={filter.value}
              aria-pressed={activePicoFilter === filter.value}
              onClick={() => {
                setActivePicoFilter(filter.value);
                setVisibleCount(PAGE_SIZE);
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}
      {activeFilter === "hair-removal" && (
        <div className="review-subfilters" aria-label="กรองรีวิวกำจัดขนตามตำแหน่ง">
          {hairRemovalFilters.map((filter) => (
            <button
              className={activeHairRemovalFilter === filter.value ? "is-active" : ""}
              type="button"
              key={filter.value}
              aria-pressed={activeHairRemovalFilter === filter.value}
              onClick={() => {
                setActiveHairRemovalFilter(filter.value);
                setVisibleCount(PAGE_SIZE);
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}
      <div className="review-gallery" aria-label="แกลเลอรีรีวิวจากผู้รับบริการ">
        {visibleItems.map((item) => (
          <button className="review-gallery-card" key={item.src} type="button" onClick={() => setActiveReview(item)}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <span className="review-gallery-overlay">
              <small>{item.category}</small>
              <strong>{item.title}</strong>
              <i>ดูภาพเต็ม ↗</i>
            </span>
          </button>
        ))}
      </div>
      {visibleItems.length < filteredItems.length && (
        <button className="review-load-more" type="button" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}>
          ดูรีวิวเพิ่มเติม <span>{filteredItems.length - visibleItems.length} ภาพ</span>
        </button>
      )}

      {activeReview && (
        <div className="review-lightbox" role="dialog" aria-modal="true" aria-label={`รีวิว ${activeReview.title}`} onClick={() => setActiveReview(null)}>
          <button ref={closeButtonRef} className="review-lightbox-close" type="button" aria-label="ปิดภาพรีวิว" onClick={() => setActiveReview(null)}>×</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={activeReview.src} alt={activeReview.alt} />
            <figcaption><span>{activeReview.category}</span><strong>{activeReview.title}</strong></figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
