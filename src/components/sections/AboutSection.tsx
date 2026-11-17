import { motion } from 'framer-motion';
import { revealGroupVariants, revealItemVariants } from './motionVariants';

const cards = [
  {
    number: '01',
    title: 'Who We Are',
    description:
      'Incorporated on 5 July 2024 under the Companies Act of Malawi, Chisinga Trading Limited operates as a high-capacity, diversified trade and procurement organization.',
  },
  {
    number: '02',
    title: 'Our Strategic Vision',
    description:
      'To become Southeast Africa’s premier partner in commercial procurement, industrial supply chain resilience, and regional cross-border value exchange — linking reliable producers directly with large-scale buyers.',
  },
  {
    number: '03',
    title: 'Our Operational Mission',
    description:
      'Delivering predictable product quality, transparent commercial pricing, and punctual delivery timelines across every tender, corporate order, and commodity consignment handled by our team.',
  },
];

export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="section-heading"
        variants={revealGroupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span className="eyebrow" variants={revealItemVariants}>About us</motion.span>
        <motion.p variants={revealItemVariants}>
          Formally registered and structured to supply public institutions, multinational NGOs, and
          commercial businesses across Malawi.
        </motion.p>
      </motion.div>
      <motion.div
        className="about-cards content-width"
        variants={revealGroupVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {cards.map((card) => (
          <motion.article
            className="about-card"
            key={card.number}
            variants={revealItemVariants}
            whileHover={{ y: -4 }}
          >
            <span className="number-chip">{card.number}</span>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
