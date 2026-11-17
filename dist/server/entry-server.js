import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { Link, NavLink, useLocation, Outlet, Routes, Route, StaticRouter } from "react-router";
import { motion, useReducedMotion, MotionConfig } from "framer-motion";
import { useState, useEffect } from "react";
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "site-footer", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-main content-width", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer-brand", children: [
        /* @__PURE__ */ jsx("img", { className: "footer-logo", src: "/brand-mark.svg", alt: "Chisinga Trading Limited" }),
        /* @__PURE__ */ jsx("p", { className: "footer-summary", children: "Disciplined commercial procurement, commodities trading, and regional supply chain coordination headquartered in Lilongwe, Malawi." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-nav", children: [
        /* @__PURE__ */ jsx("h2", { children: "Quick Navigation" }),
        /* @__PURE__ */ jsx(Link, { to: "/about", children: "About Us" }),
        /* @__PURE__ */ jsx(Link, { to: "/products", children: "Our Process" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Contact Us" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-address", children: [
        /* @__PURE__ */ jsx("h2", { children: "Head Office & Inquiries" }),
        /* @__PURE__ */ jsx("b", { children: "Chisinga Trading Limited" }),
        /* @__PURE__ */ jsx("span", { children: "Area 43 Mango Crescent, Lilongwe, Malawi" }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Phone: ",
          /* @__PURE__ */ jsx("a", { href: "tel:+265885817985", children: "+265 885 817 985" })
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Procurement: ",
          /* @__PURE__ */ jsx("a", { href: "mailto:info@chisingatrading.mw", children: "info@chisingatrading.mw" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "footer-bottom content-width", children: [
      /* @__PURE__ */ jsx("span", { children: "© 2026 Chisinga Trading Limited. All rights reserved." }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Terms of Procurement" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Privacy Statement" })
      ] })
    ] })
  ] });
}
function Sidebar({ isOpen, onClose }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    isOpen && /* @__PURE__ */ jsx(
      "button",
      {
        className: "menu-backdrop",
        type: "button",
        "aria-label": "Dismiss navigation overlay",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxs(
      "nav",
      {
        className: `main-nav${isOpen ? " is-open" : ""}`,
        id: "primary-navigation",
        "aria-label": "Main navigation",
        children: [
          /* @__PURE__ */ jsx(NavLink, { to: "/about", onClick: onClose, children: "About Us" }),
          /* @__PURE__ */ jsx(NavLink, { to: "/products", onClick: onClose, children: "Products" }),
          /* @__PURE__ */ jsxs(
            NavLink,
            {
              className: "contact-link main-nav__contact",
              to: "/contact",
              onClick: onClose,
              children: [
                "Contact Us",
                /* @__PURE__ */ jsx("span", { className: "contact-link__arrow", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M4 10h11m-5-5 5 5-5 5" }) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "main-nav__footer", children: [
            /* @__PURE__ */ jsx("span", { children: "Chisinga Trading Limited" }),
            /* @__PURE__ */ jsx("span", { children: "Lilongwe, Malawi" })
          ] })
        ]
      }
    )
  ] });
}
function Header({ isMenuOpen, onMenuOpenChange }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    function updateScrollState() {
      setIsScrolled(window.scrollY > 24);
    }
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);
  useEffect(() => {
    onMenuOpenChange(false);
  }, [location.pathname, onMenuOpenChange]);
  useEffect(() => {
    if (!isMenuOpen) return;
    function closeOnEscape(event) {
      if (event.key === "Escape") onMenuOpenChange(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen, onMenuOpenChange]);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `site-header ${isHome ? "site-header--home" : "site-header--page"}${isScrolled ? " is-scrolled" : ""}`,
      children: /* @__PURE__ */ jsxs("div", { className: "hero__topbar", children: [
        /* @__PURE__ */ jsx(Link, { className: "brand", to: "/", "aria-label": "Chisinga Trading home", children: /* @__PURE__ */ jsx("img", { src: "/brand-mark.svg", alt: "Chisinga Trading" }) }),
        /* @__PURE__ */ jsx(Sidebar, { isOpen: isMenuOpen, onClose: () => onMenuOpenChange(false) }),
        /* @__PURE__ */ jsxs(Link, { className: "contact-link", to: "/contact", children: [
          "Contact Us",
          /* @__PURE__ */ jsx("span", { className: "contact-link__arrow", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M4 10h11m-5-5 5 5-5 5" }) }) })
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: `menu-toggle${isMenuOpen ? " is-open" : ""}`,
            type: "button",
            "aria-label": isMenuOpen ? "Close navigation menu" : "Open navigation menu",
            "aria-expanded": isMenuOpen,
            "aria-controls": "primary-navigation",
            onClick: () => onMenuOpenChange(!isMenuOpen),
            children: [
              /* @__PURE__ */ jsx("span", {}),
              /* @__PURE__ */ jsx("span", {}),
              /* @__PURE__ */ jsx("span", {})
            ]
          }
        )
      ] })
    }
  );
}
function MainLayout() {
  const isHome = useLocation().pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: `app-layout${isMenuOpen ? " is-menu-open" : ""}`, children: [
    /* @__PURE__ */ jsx(Header, { isMenuOpen, onMenuOpenChange: setIsMenuOpen }),
    /* @__PURE__ */ jsxs("div", { className: "app-content", inert: isMenuOpen, children: [
      /* @__PURE__ */ jsx("main", { className: isHome ? void 0 : "page-main", children: /* @__PURE__ */ jsx(Outlet, {}) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
const revealGroupVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};
const revealItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" }
  }
};
const cards = [
  {
    number: "01",
    title: "Who We Are",
    description: "Incorporated on 5 July 2024 under the Companies Act of Malawi, Chisinga Trading Limited operates as a high-capacity, diversified trade and procurement organization."
  },
  {
    number: "02",
    title: "Our Strategic Vision",
    description: "To become Southeast Africa’s premier partner in commercial procurement, industrial supply chain resilience, and regional cross-border value exchange — linking reliable producers directly with large-scale buyers."
  },
  {
    number: "03",
    title: "Our Operational Mission",
    description: "Delivering predictable product quality, transparent commercial pricing, and punctual delivery timelines across every tender, corporate order, and commodity consignment handled by our team."
  }
];
function AboutSection() {
  return /* @__PURE__ */ jsxs("section", { className: "about-section", id: "about", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "section-heading",
        variants: revealGroupVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.3 },
        children: [
          /* @__PURE__ */ jsx(motion.span, { className: "eyebrow", variants: revealItemVariants, children: "About us" }),
          /* @__PURE__ */ jsx(motion.p, { variants: revealItemVariants, children: "Formally registered and structured to supply public institutions, multinational NGOs, and commercial businesses across Malawi." })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "about-cards content-width",
        variants: revealGroupVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
        children: cards.map((card) => /* @__PURE__ */ jsxs(
          motion.article,
          {
            className: "about-card",
            variants: revealItemVariants,
            whileHover: { y: -4 },
            children: [
              /* @__PURE__ */ jsx("span", { className: "number-chip", children: card.number }),
              /* @__PURE__ */ jsx("h2", { children: card.title }),
              /* @__PURE__ */ jsx("p", { children: card.description })
            ]
          },
          card.number
        ))
      }
    )
  ] });
}
const clientTypes = [
  { title: "Public Sector", description: "Ministries, Agencies & City Councils" },
  { title: "Private Enterprise", description: "Banks, Telcos & Corporate Offices" },
  { title: "Regional Trade", description: "Zambia, Mozambique & Tanzania" },
  { title: "Agriculture", description: "Estates, Co-ops & Processors" }
];
function ClientBaseSection() {
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      className: "client-panel",
      "aria-label": "Our client base",
      variants: revealGroupVariants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.25 },
      children: [
        /* @__PURE__ */ jsx(motion.span, { className: "eyebrow eyebrow--panel", variants: revealItemVariants, children: "Our client base" }),
        /* @__PURE__ */ jsx(motion.div, { className: "client-grid", variants: revealGroupVariants, children: clientTypes.map((client) => /* @__PURE__ */ jsxs(
          motion.article,
          {
            className: "client-card",
            variants: revealItemVariants,
            whileHover: { y: -3 },
            children: [
              /* @__PURE__ */ jsx("h2", { children: client.title }),
              /* @__PURE__ */ jsx("p", { children: client.description })
            ]
          },
          client.title
        )) })
      ]
    }
  );
}
const procurementSteps = [
  {
    number: "01",
    title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Understand",
      /* @__PURE__ */ jsx("br", {}),
      "Requirement"
    ] }),
    description: "Thorough technical scope analysis, specifications verification, and volume requirements."
  },
  {
    number: "02",
    title: "Identify Suppliers",
    description: "Screening verified factory direct manufacturers and primary aggregators locally & abroad."
  },
  {
    number: "03",
    title: "Build Viable Offer",
    description: "Competitive pricing, firm delivery timelines, warranty clarity, and transparent payment structures."
  },
  {
    number: "04",
    title: "Execute Contract",
    description: "Logistics tracking, quality check upon arrival, customs clearance, and verified site delivery."
  },
  {
    number: "05",
    title: "Build Continuity",
    description: "Post-delivery sign-off, supplier performance review, and proactive supply continuity frameworks."
  }
];
function ProcessSection() {
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      className: "process-section",
      id: "process",
      variants: revealGroupVariants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.2 },
      children: [
        /* @__PURE__ */ jsx(motion.p, { className: "process-intro", variants: revealItemVariants, children: "Every transaction is conducted through a structured, auditable procedure minimizing supply interruption risks." }),
        /* @__PURE__ */ jsx(motion.div, { className: "process-grid", variants: revealGroupVariants, children: procurementSteps.map((step) => /* @__PURE__ */ jsxs(
          motion.article,
          {
            className: "process-card",
            variants: revealItemVariants,
            whileHover: { y: -3 },
            children: [
              /* @__PURE__ */ jsx("span", { children: step.number }),
              /* @__PURE__ */ jsx("h2", { children: step.title }),
              /* @__PURE__ */ jsx("p", { children: step.description })
            ]
          },
          step.number
        )) })
      ]
    }
  );
}
function ClientProcess() {
  return /* @__PURE__ */ jsxs("div", { className: "client-process", children: [
    /* @__PURE__ */ jsx(ClientBaseSection, {}),
    /* @__PURE__ */ jsx(ProcessSection, {})
  ] });
}
function ContactSection() {
  const [status, setStatus] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const subject = `Procurement inquiry from ${fields.get("name")}`;
    const body = [
      `Name: ${fields.get("name")}`,
      `Organization / Department: ${fields.get("organization")}`,
      `Business email: ${fields.get("email")}`,
      `Telephone: ${fields.get("telephone")}`,
      "",
      `Message: ${fields.get("message") || "No message provided."}`
    ].join("\n");
    setStatus("Opening your email app to send this inquiry.");
    window.location.href = `mailto:info@chisingatrading.mw?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return /* @__PURE__ */ jsx("section", { className: "contact-section", id: "contact", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "contact-layout content-width",
      variants: revealGroupVariants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.15 },
      children: [
        /* @__PURE__ */ jsxs(motion.div, { className: "contact-details", variants: revealItemVariants, children: [
          /* @__PURE__ */ jsx("h2", { className: "contact-title", children: "Contact Us" }),
          /* @__PURE__ */ jsxs("div", { className: "office-card", children: [
            /* @__PURE__ */ jsx("h3", { children: "Lilongwe Corporate Office" }),
            /* @__PURE__ */ jsx("div", { className: "office-rule" }),
            /* @__PURE__ */ jsxs("p", { className: "office-item", children: [
              /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: [
                /* @__PURE__ */ jsx("path", { d: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" }),
                /* @__PURE__ */ jsx("circle", { cx: "12", cy: "10", r: "2" })
              ] }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("b", { children: "Physical Location:" }),
                /* @__PURE__ */ jsx("br", {}),
                "Area 43 Mango Crescent, Lilongwe, Republic of Malawi"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "office-item", children: [
              /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M7 3h3l2 5-2 2a15 15 0 0 0 4 4l2-2 5 2v3c0 1-1 2-2 2C10 19 5 14 4 5c0-1 1-2 3-2Z" }) }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("b", { children: "Commercial Inquiries :" }),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("a", { href: "tel:+265885817985", children: "+265 885 817 985" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "office-item", children: [
              /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: [
                /* @__PURE__ */ jsx("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
                /* @__PURE__ */ jsx("path", { d: "m4 7 8 6 8-6" })
              ] }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("b", { children: "Official Email:" }),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("a", { href: "mailto:info@chisingatrading.mw", children: "info@chisingatrading.mw" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(motion.form, { className: "contact-form", onSubmit: handleSubmit, variants: revealItemVariants, children: [
          /* @__PURE__ */ jsx("h2", { children: "Get in touch." }),
          /* @__PURE__ */ jsxs("div", { className: "form-grid", children: [
            /* @__PURE__ */ jsxs("label", { children: [
              "Contact Full Name ",
              /* @__PURE__ */ jsx("span", { children: "*" }),
              /* @__PURE__ */ jsx("input", { name: "name", type: "text", placeholder: "e.g. Konwani Phiri", autoComplete: "name", required: true })
            ] }),
            /* @__PURE__ */ jsxs("label", { children: [
              "Organization / Department ",
              /* @__PURE__ */ jsx("span", { children: "*" }),
              /* @__PURE__ */ jsx("input", { name: "organization", type: "text", placeholder: "e.g. Ministry / Corporate Entity", required: true })
            ] }),
            /* @__PURE__ */ jsxs("label", { children: [
              "Business Email ",
              /* @__PURE__ */ jsx("span", { children: "*" }),
              /* @__PURE__ */ jsx("input", { name: "email", type: "email", placeholder: "procurement@organisation.mw", autoComplete: "email", required: true })
            ] }),
            /* @__PURE__ */ jsxs("label", { children: [
              "Telephone Contact ",
              /* @__PURE__ */ jsx("span", { children: "*" }),
              /* @__PURE__ */ jsx("input", { name: "telephone", type: "tel", placeholder: "+265 99X XXX XXX", autoComplete: "tel", required: true })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "message-label", children: [
            "Message",
            /* @__PURE__ */ jsx("textarea", { name: "message", rows: 4, placeholder: "Specify technical requirements, tender reference, delivery location, or timeline..." })
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "send-button", type: "submit", children: [
            "Send ",
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "form-status", role: "status", "aria-live": "polite", children: status })
        ] })
      ]
    }
  ) });
}
const heroGroupVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.05, staggerChildren: 0.14 }
  }
};
const heroItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
const heroTitleVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};
const heroSubtitleVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};
const heroSlides = [
  {
    title: ["Trading and", "procurement."],
    description: [
      "Sourcing goods, industrial supplies, and agricultural commodities with",
      "disciplined commercial execution across Malawi and Southern Africa."
    ],
    image: "/splash.jpg",
    imagePosition: "center 55%"
  },
  {
    title: ["Connecting", "trusted supply."],
    description: [
      "Linking reliable producers directly with public institutions,",
      "commercial businesses, and agricultural buyers."
    ],
    image: "/splash2.jpg",
    imagePosition: "center 53%"
  },
  {
    title: ["From sourcing", "to delivery."],
    description: [
      "A structured, auditable process from supplier verification",
      "through quality checks and confirmed delivery."
    ],
    image: "/splash.jpg",
    imagePosition: "left 42%"
  },
  {
    title: ["Reliable sourcing", "and delivery."],
    description: [
      "Predictable quality, transparent pricing, and punctual delivery",
      "across every tender, order, and commodity consignment."
    ],
    image: "/seedlings.jpg",
    imagePosition: "right 62%"
  }
];
function Hero() {
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
    }, 5e3);
    return () => window.clearTimeout(timer);
  }, [activeSlide, isCarouselFocused, prefersReducedMotion]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "hero",
      id: "home",
      "aria-roledescription": "carousel",
      "aria-label": "Company highlights",
      onFocusCapture: () => setIsCarouselFocused(true),
      onBlurCapture: (event) => {
        const nextTarget = event.relatedTarget;
        if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
          setIsCarouselFocused(false);
        }
      },
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "hero__image",
            "aria-hidden": "true",
            style: {
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: slide.imagePosition
            },
            initial: shouldAnimateContent ? { opacity: 0, scale: 1.03 } : false,
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.5, ease: "easeOut" }
          },
          `hero-image-${activeSlide}`
        ),
        /* @__PURE__ */ jsx("div", { className: "hero__shade", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "hero__noise", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "hero__content", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            "aria-live": isCarouselFocused ? "polite" : "off",
            initial: shouldAnimateContent ? "hidden" : false,
            animate: "visible",
            variants: heroGroupVariants,
            children: [
              /* @__PURE__ */ jsx(motion.p, { className: "eyebrow eyebrow--light", variants: heroItemVariants, children: "Chisinga Trading Limited" }),
              /* @__PURE__ */ jsxs(motion.h1, { variants: heroTitleVariants, children: [
                /* @__PURE__ */ jsx("span", { className: "hero__title-line", children: slide.title[0] }),
                /* @__PURE__ */ jsx("span", { className: "hero__title-line", children: slide.title[1] })
              ] }),
              /* @__PURE__ */ jsxs(motion.p, { className: "hero__intro", variants: heroSubtitleVariants, children: [
                slide.description[0],
                /* @__PURE__ */ jsx("br", { className: "desktop-break" }),
                " ",
                slide.description[1]
              ] }),
              /* @__PURE__ */ jsxs(Link, { className: "contact-link hero-contact", to: "/contact", children: [
                "Contact Us",
                /* @__PURE__ */ jsx("span", { className: "contact-link__arrow", "aria-hidden": "true", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M4 10h11m-5-5 5 5-5 5" }) }) })
              ] }),
              /* @__PURE__ */ jsxs(motion.a, { className: "explore", href: "#about", variants: heroItemVariants, children: [
                /* @__PURE__ */ jsx("span", { children: "Explore" }),
                /* @__PURE__ */ jsx("span", { className: "explore__circle", "aria-hidden": "true", children: /* @__PURE__ */ jsx(
                  motion.svg,
                  {
                    viewBox: "0 0 20 20",
                    animate: { y: [0, 4, 0] },
                    transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut" },
                    children: /* @__PURE__ */ jsx("path", { d: "m5 8 5 5 5-5" })
                  }
                ) })
              ] })
            ]
          },
          `hero-content-${activeSlide}-${shouldAnimateContent}`
        ) }),
        /* @__PURE__ */ jsx("nav", { className: "hero-dots", "aria-label": "Carousel navigation", children: heroSlides.map((item, index) => /* @__PURE__ */ jsx(
          "button",
          {
            className: `hero-dots__dot${activeSlide === index ? " is-active" : ""}`,
            type: "button",
            "aria-label": `Show slide ${index + 1}: ${item.title.join(" ")}`,
            "aria-pressed": activeSlide === index,
            onClick: () => {
              setActiveSlide(index);
            }
          },
          item.title[0]
        )) }),
        /* @__PURE__ */ jsxs("a", { className: "scroll-medallion", href: "#trust", "aria-label": "Scroll to explore", children: [
          /* @__PURE__ */ jsxs("svg", { className: "scroll-medallion__text", viewBox: "0 0 120 120", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
              "path",
              {
                id: "medallion-text-path",
                d: "M60 60m-43 0a43 43 0 1 1 86 0a43 43 0 1 1-86 0"
              }
            ) }),
            /* @__PURE__ */ jsx("text", { children: /* @__PURE__ */ jsx("textPath", { href: "#medallion-text-path", textLength: "270", lengthAdjust: "spacing", children: "DIVERSIFIED SOURCING • EXPERT COMMERCIAL •" }) })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "scroll-medallion__inner", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 32", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsx("rect", { x: "5", y: "2", width: "14", height: "27", rx: "7" }),
            /* @__PURE__ */ jsx("path", { d: "M12 8v6" })
          ] }) })
        ] })
      ]
    }
  );
}
const partners = [
  { name: "Malawi Bureau of Standards", logo: "/logos/mbs.png" },
  { name: "Public Procurement and Disposal of Assets Authority", logo: "/logos/ppda.png" },
  { name: "Malawi Revenue Authority", logo: "/logos/mra.png" },
  { name: "AHL Group plc", logo: "/logos/ahl-group.png" },
  { name: "Illovo Sugar Malawi", logo: "/logos/illovo.webp" },
  { name: "Press Corporation plc", logo: "/logos/press-corp.png" }
];
function PartnerGroup({ decorative = false }) {
  return /* @__PURE__ */ jsx("div", { className: "partner-group", "aria-hidden": decorative, children: partners.map((partner) => /* @__PURE__ */ jsx(
    "img",
    {
      className: "partner",
      src: partner.logo,
      alt: decorative ? "" : partner.name,
      loading: "lazy",
      decoding: "async"
    },
    partner.name
  )) });
}
function TrustStrip() {
  return /* @__PURE__ */ jsxs("section", { className: "trust-strip", id: "trust", "aria-label": "Trusted partners", children: [
    /* @__PURE__ */ jsx(
      motion.p,
      {
        className: "trust-strip__label",
        variants: revealItemVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.3 },
        children: "Trusted by top institutions & agriculture partners"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "partner-list", children: /* @__PURE__ */ jsxs("div", { className: "partner-track", children: [
      /* @__PURE__ */ jsx(PartnerGroup, {}),
      /* @__PURE__ */ jsx(PartnerGroup, { decorative: true })
    ] }) })
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(TrustStrip, {}),
    /* @__PURE__ */ jsx(AboutSection, {}),
    /* @__PURE__ */ jsx(ClientProcess, {}),
    /* @__PURE__ */ jsx(ContactSection, {})
  ] });
}
function AboutPage() {
  return /* @__PURE__ */ jsx(AboutSection, {});
}
function ProductsPage() {
  return /* @__PURE__ */ jsx(ClientProcess, {});
}
function ContactPage() {
  return /* @__PURE__ */ jsx(ContactSection, {});
}
function NotFoundPage() {
  return /* @__PURE__ */ jsxs("section", { className: "not-found-page", children: [
    /* @__PURE__ */ jsx("h1", { children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { children: "The page you’re looking for doesn’t exist." }),
    /* @__PURE__ */ jsx(Link, { to: "/", children: "Return home" })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, { element: /* @__PURE__ */ jsx(MainLayout, {}), children: [
    /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(HomePage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "about", element: /* @__PURE__ */ jsx(AboutPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "products", element: /* @__PURE__ */ jsx(ProductsPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "contact", element: /* @__PURE__ */ jsx(ContactPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFoundPage, {}) })
  ] }) }) });
}
function render(url) {
  return renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) })
  );
}
export {
  render
};
