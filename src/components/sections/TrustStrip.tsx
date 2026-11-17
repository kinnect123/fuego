import { motion } from 'framer-motion';
import { revealItemVariants } from './motionVariants';

const partners = [
  { name: 'Malawi Bureau of Standards', logo: '/logos/mbs.png' },
  { name: 'Public Procurement and Disposal of Assets Authority', logo: '/logos/ppda.png' },
  { name: 'Malawi Revenue Authority', logo: '/logos/mra.png' },
  { name: 'AHL Group plc', logo: '/logos/ahl-group.png' },
  { name: 'Illovo Sugar Malawi', logo: '/logos/illovo.webp' },
  { name: 'Press Corporation plc', logo: '/logos/press-corp.png' },
];

function PartnerGroup({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="partner-group" aria-hidden={decorative}>
      {partners.map((partner) => (
        <img
          className="partner"
          src={partner.logo}
          alt={decorative ? '' : partner.name}
          loading="lazy"
          decoding="async"
          key={partner.name}
        />
      ))}
    </div>
  );
}

export function TrustStrip() {
  return (
    <section className="trust-strip" id="trust" aria-label="Trusted partners">
      <motion.p
        className="trust-strip__label"
        variants={revealItemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Trusted by top institutions &amp; agriculture partners
      </motion.p>
      <div className="partner-list">
        <div className="partner-track">
          <PartnerGroup />
          <PartnerGroup decorative />
        </div>
      </div>
    </section>
  );
}
