import { useEffect, useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Link } from 'react-router';

const heroGroupVariants: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.05, staggerChildren: 0.14 },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const heroTitleVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const heroSubtitleVariants: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const heroSlides = [
  {
    title: ['Trading and', 'procurement.'],
    description: [
      'Sourcing goods, industrial supplies, and agricultural commodities with',
      'disciplined commercial execution across Malawi and Southern Africa.',
    ],
    image: '/splash.jpg',
    imagePosition: 'center 55%',
  },
  {
    title: ['Connecting', 'trusted supply.'],
    description: [
      'Linking reliable producers directly with public institutions,',
      'commercial businesses, and agricultural buyers.',
    ],
    image: '/splash2.jpg',
    imagePosition: 'center 53%',
  },
  {
    title: ['From sourcing', 'to delivery.'],
    description: [
      'A structured, auditable process from supplier verification',
      'through quality checks and confirmed delivery.',
    ],
    image: '/splash.jpg',
    imagePosition: 'left 42%',
  },
  {
    title: ['Reliable sourcing', 'and delivery.'],
    description: [
      'Predictable quality, transparent pricing, and punctual delivery',
      'across every tender, order, and commodity consignment.',
    ],
    image: '/seedlings.jpg',
    imagePosition: 'right 62%',
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [shouldAnimateContent, setShouldAnimateContent] = useState(false);
  const [isCarouselFocused, setIsCarouselFocused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    setShouldAnimateContent(true);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isCarouselFocused) return;

    const timer = window.setTimeout(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [activeSlide, isCarouselFocused, prefersReducedMotion]);

  return (
    <section
      className="hero"
      id="home"
      aria-roledescription="carousel"
      aria-label="Company highlights"
      onFocusCapture={() => setIsCarouselFocused(true)}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget;
        if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
          setIsCarouselFocused(false);
        }
      }}
    >
      <motion.div
        className="hero__image"
        key={`hero-image-${activeSlide}`}
        aria-hidden="true"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundPosition: slide.imagePosition,
        }}
        initial={shouldAnimateContent ? { opacity: 0, scale: 1.03 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__noise" aria-hidden="true" />
      <div className="hero__content">
        <motion.div
          key={`hero-content-${activeSlide}-${shouldAnimateContent}`}
          aria-live={isCarouselFocused ? 'polite' : 'off'}
          initial={shouldAnimateContent ? 'hidden' : false}
          animate="visible"
          variants={heroGroupVariants}
        >
          <motion.p className="eyebrow eyebrow--light" variants={heroItemVariants}>
            Chisinga Trading Limited
          </motion.p>
          <motion.h1 variants={heroTitleVariants}>
            <span className="hero__title-line">
              {slide.title[0]}
            </span>
            <span className="hero__title-line">
              {slide.title[1]}
            </span>
          </motion.h1>
          <motion.p className="hero__intro" variants={heroSubtitleVariants}>
            {slide.description[0]}<br className="desktop-break" />
            {' '}{slide.description[1]}
          </motion.p>
          <Link className="contact-link hero-contact" to="/contact">
            Contact Us
            <span className="contact-link__arrow" aria-hidden="true">
              <svg viewBox="0 0 20 20"><path d="M4 10h11m-5-5 5 5-5 5" /></svg>
            </span>
          </Link>
          <motion.a className="explore" href="#about" variants={heroItemVariants}>
            <span>Explore</span>
            <span className="explore__circle" aria-hidden="true">
              <motion.svg
                viewBox="0 0 20 20"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path d="m5 8 5 5 5-5" />
              </motion.svg>
            </span>
          </motion.a>
        </motion.div>
      </div>

      <nav className="hero-dots" aria-label="Carousel navigation">
        {heroSlides.map((item, index) => (
          <button
            className={`hero-dots__dot${activeSlide === index ? ' is-active' : ''}`}
            type="button"
            aria-label={`Show slide ${index + 1}: ${item.title.join(' ')}`}
            aria-pressed={activeSlide === index}
            onClick={() => {
              setActiveSlide(index);
            }}
            key={item.title[0]}
          />
        ))}
      </nav>

      <a className="scroll-medallion" href="#trust" aria-label="Scroll to explore">
        <svg className="scroll-medallion__text" viewBox="0 0 120 120" aria-hidden="true">
          <defs>
            <path
              id="medallion-text-path"
              d="M60 60m-43 0a43 43 0 1 1 86 0a43 43 0 1 1-86 0"
            />
          </defs>
          <text>
            <textPath href="#medallion-text-path" textLength="270" lengthAdjust="spacing">
              DIVERSIFIED SOURCING • EXPERT COMMERCIAL •
            </textPath>
          </text>
        </svg>
        <span className="scroll-medallion__inner">
          <svg viewBox="0 0 24 32" aria-hidden="true">
            <rect x="5" y="2" width="14" height="27" rx="7" />
            <path d="M12 8v6" />
          </svg>
        </span>
      </a>
    </section>
  );
}
