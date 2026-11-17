import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Sidebar } from './Sidebar';

interface HeaderProps {
  isMenuOpen: boolean;
  onMenuOpenChange: (isOpen: boolean) => void;
}

export function Header({ isMenuOpen, onMenuOpenChange }: HeaderProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function updateScrollState() {
      setIsScrolled(window.scrollY > 24);
    }

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    onMenuOpenChange(false);
  }, [location.pathname, onMenuOpenChange]);

  useEffect(() => {
    if (!isMenuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') onMenuOpenChange(false);
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen, onMenuOpenChange]);

  return (
    <header
      className={`site-header ${isHome ? 'site-header--home' : 'site-header--page'}${isScrolled ? ' is-scrolled' : ''}`}
    >
      <div className="hero__topbar">
        <Link className="brand" to="/" aria-label="Chisinga Trading home">
          <img src="/brand-mark.svg" alt="Chisinga Trading" />
        </Link>
        <Sidebar isOpen={isMenuOpen} onClose={() => onMenuOpenChange(false)} />
        <Link className="contact-link" to="/contact">
          Contact Us
          <span className="contact-link__arrow" aria-hidden="true">
            <svg viewBox="0 0 20 20"><path d="M4 10h11m-5-5 5 5-5 5" /></svg>
          </span>
        </Link>
        <button
          className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => onMenuOpenChange(!isMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
