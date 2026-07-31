import { MobileMenu } from "./MobileMenu";
import { siteNavigation } from "../navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="The Wonder Clinic หน้าแรก">
        <img src="/brand/logo/wonder-clinic-logo-ai-transparent-2048.webp" alt="The Wonder Clinic" />
      </a>
      <nav className="desktop-nav" aria-label="เมนูหลัก">
        {siteNavigation.map((item) => (
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
        <MobileMenu />
      </div>
    </header>
  );
}
