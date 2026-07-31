"use client";

import { useEffect, useState } from "react";
import { siteNavigation } from "../navigation";

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
          {siteNavigation.map((item) => item.children ? (
            <details className="mobile-nav-group" key={item.label}>
              <summary>{item.label}<span aria-hidden="true">＋</span></summary>
              <div className="mobile-nav-children">
                <a href={item.href} onClick={() => setIsOpen(false)}>ดูทั้งหมด {item.label}<span>↗</span></a>
                {item.children.map((child) => (
                  <div className="mobile-nav-section" key={child.label}>
                    <a href={child.href} onClick={() => setIsOpen(false)}>{child.label}<span>↗</span></a>
                    {child.children?.map((subItem) => (
                      <a className="mobile-nav-subitem" href={subItem.href} key={subItem.label} onClick={() => setIsOpen(false)}>{subItem.label}</a>
                    ))}
                  </div>
                ))}
              </div>
            </details>
          ) : (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>{item.label}<span>↗</span></a>
          ))}
        </nav>
      )}
    </div>
  );
}
