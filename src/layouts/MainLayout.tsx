import { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function MainLayout() {
  const isHome = useLocation().pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`app-layout${isMenuOpen ? ' is-menu-open' : ''}`}>
      <Header isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} />
      <div className="app-content" inert={isMenuOpen}>
        <main className={isHome ? undefined : 'page-main'}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
