import { MobileMenu } from "./MobileMenu";
import { siteNavigation } from "../navigation";

const headerNavigation = [
  siteNavigation.find((item) => item.label === "บริการ")!,
  { label: "เทคโนโลยี", href: "/#standards" },
  siteNavigation.find((item) => item.label === "รีวิว")!,
  siteNavigation.find((item) => item.label === "โปรโมชั่น")!,
  siteNavigation.find((item) => item.label === "บทความ")!,
  { label: "ติดต่อ", href: "/contact" },
];

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="The Wonder Clinic หน้าแรก">
        <img src="/brand/logo/wonder-clinic-logo-ai-transparent-2048.webp" alt="The Wonder Clinic" />
      </a>
      <nav className="desktop-nav" aria-label="เมนูหลัก">
        {headerNavigation.map((item) => (
          <div className="desktop-nav-item" key={item.label}>
            <a href={item.href}>{item.label}{item.children ? <span aria-hidden="true">⌄</span> : null}</a>
            {item.children ? (
              <div className="desktop-nav-dropdown">
                <div className="desktop-nav-dropdown-head">
                  <strong>{item.label}</strong>
                  <a href={item.href}>ดูทั้งหมด <span>↗</span></a>
                </div>
                <div className="desktop-nav-groups">
                  {item.children.map((child) => (
                    <div className="desktop-nav-group" key={child.label}>
                      <a className="desktop-nav-group-title" href={child.href}>{child.label}</a>
                      {child.children?.map((subItem) => <a href={subItem.href} key={subItem.label}>{subItem.label}</a>)}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </nav>
      <div className="header-actions">
        <a className="header-consult-button" href="/#booking"><CalendarIcon />ปรึกษาแพทย์</a>
        <MobileMenu />
      </div>
    </header>
  );
}
