"use client";

import { useEffect, useState } from "react";

type ServiceReview = { src: string; alt: string };

export function ServiceReviewGallery({ reviews }: { reviews: ServiceReview[] }) {
  const [activeReview, setActiveReview] = useState<ServiceReview | null>(null);

  useEffect(() => {
    if (!activeReview) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveReview(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeReview]);

  return (
    <>
      <div className={`service-review-grid${reviews.length === 1 ? " is-single" : ""}`} aria-label="แกลเลอรีรีวิวที่เกี่ยวข้อง">
        {reviews.map((review) => (
          <button className="service-review-card" type="button" key={review.src} aria-label={`เปิดภาพขนาดใหญ่: ${review.alt}`} onClick={() => setActiveReview(review)}>
            <img src={review.src} alt={review.alt} loading="lazy" />
            <span>ดูภาพเต็ม ↗</span>
          </button>
        ))}
      </div>

      {activeReview && (
        <div className="review-lightbox" role="dialog" aria-modal="true" aria-label={activeReview.alt} onClick={() => setActiveReview(null)}>
          <button className="review-lightbox-close" type="button" aria-label="ปิดภาพรีวิว" onClick={() => setActiveReview(null)}>×</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={activeReview.src} alt={activeReview.alt} />
            <figcaption><span>รีวิวที่เกี่ยวข้อง</span><strong>{activeReview.alt}</strong></figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
