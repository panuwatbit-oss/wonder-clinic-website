export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>THE WONDER CLINIC</strong>
        <p>เทคโนโลยีทางการแพทย์จากผู้ผลิตชั้นนำ พร้อมการประเมินเป็นรายบุคคลและข้อมูลที่ตรวจสอบได้</p>
      </div>
      <nav aria-label="เมนูส่วนท้าย">
        <a href="/services">บริการ</a>
        <a href="/promotions">โปรโมชั่น</a>
        <a href="/reviews">รีวิว</a>
        <a href="/articles">บทความ</a>
        <a href="/about">เกี่ยวกับเรา</a>
        <a href="/contact">ติดต่อ</a>
      </nav>
      <div className="site-footer-meta"><span>© {new Date().getFullYear()} THE WONDER CLINIC</span><span>BEAUTY, WITH UNDERSTANDING</span></div>
    </footer>
  );
}
