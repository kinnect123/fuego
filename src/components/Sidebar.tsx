import { NavLink } from 'react-router';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <button
          className="menu-backdrop"
          type="button"
          aria-label="Dismiss navigation overlay"
          onClick={onClose}
        />
      )}
      <nav
        className={`main-nav${isOpen ? ' is-open' : ''}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >

        <NavLink to="/about" onClick={onClose}>About Us</NavLink>
        <NavLink to="/products" onClick={onClose}>Products</NavLink>
        <NavLink
          className="contact-link main-nav__contact"
          to="/contact"
          onClick={onClose}
        >
          Contact Us
          <span className="contact-link__arrow" aria-hidden="true">
            <svg viewBox="0 0 20 20"><path d="M4 10h11m-5-5 5 5-5 5" /></svg>
          </span>
        </NavLink>
        <div className="main-nav__footer">
          <span>Chisinga Trading Limited</span>
          <span>Lilongwe, Malawi</span>
        </div>
      </nav>
    </>
  );
}
