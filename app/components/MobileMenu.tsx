"use client";

import { useEffect, useState } from "react";

const menuItems = [
  ["บริการ", "#services"],
  ["โปรแกรม", "#programs"],
  ["รีวิว", "#reviews"],
  ["มาตรฐาน", "#standards"],
  ["เกี่ยวกับเรา", "#about"],
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="mobile-menu">
      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "ปิดเมนูหลัก" : "เปิดเมนูหลัก"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={isOpen ? "menu-icon is-open" : "menu-icon"} aria-hidden="true"><i /><i /><i /></span>
      </button>
      {isOpen && (
        <nav className="mobile-menu-panel" id="mobile-navigation" aria-label="เมนูหลักบนมือถือ">
          {menuItems.map(([label, href]) => <a key={href} href={href} onClick={() => setIsOpen(false)}>{label}<span>↗</span></a>)}
        </nav>
      )}
    </div>
  );
}
