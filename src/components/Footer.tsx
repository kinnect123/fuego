import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main content-width">
        <div className="footer-brand">
          <img className="footer-logo" src="/brand-mark.svg" alt="Chisinga Trading Limited" />
          <p className="footer-summary">
            Disciplined commercial procurement, commodities trading, and regional supply chain coordination
            headquartered in Lilongwe, Malawi.
          </p>
        </div>
        <div className="footer-nav">
          <h2>Quick Navigation</h2>
          <Link to="/about">About Us</Link>
          <Link to="/products">Our Process</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer-address">
          <h2>Head Office &amp; Inquiries</h2>
          <b>Chisinga Trading Limited</b>
          <span>Area 43 Mango Crescent, Lilongwe, Malawi</span>
          <span>Phone: <a href="tel:+265885817985">+265 885 817 985</a></span>
          <span>Procurement: <a href="mailto:info@chisingatrading.mw">info@chisingatrading.mw</a></span>
        </div>
      </div>
      <div className="footer-bottom content-width">
        <span>© 2026 Chisinga Trading Limited. All rights reserved.</span>
        <div>
          <Link to="/contact">Terms of Procurement</Link>
          <Link to="/contact">Privacy Statement</Link>
        </div>
      </div>
    </footer>
  );
}
