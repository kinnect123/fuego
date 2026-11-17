import { Link, Route, Routes } from 'react-router';
import { MotionConfig } from 'framer-motion';
import { MainLayout } from './layouts/MainLayout';
import { AboutSection } from './components/sections/AboutSection';
import { ClientProcess } from './components/sections/ClientProcess';
import { ContactSection } from './components/sections/ContactSection';
import { Hero } from './components/sections/Hero';
import { TrustStrip } from './components/sections/TrustStrip';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <ClientProcess />
      <ContactSection />
    </>
  );
}

function AboutPage() {
  return <AboutSection />;
}

function ProductsPage() {
  return <ClientProcess />;
}

function ContactPage() {
  return <ContactSection />;
}

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <h1>Page not found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/">Return home</Link>
    </section>
  );
}

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MotionConfig>
  );
}
