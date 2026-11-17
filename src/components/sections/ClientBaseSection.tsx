import { motion } from 'framer-motion';
import { revealGroupVariants, revealItemVariants } from './motionVariants';

const clientTypes = [
  { title: 'Public Sector', description: 'Ministries, Agencies & City Councils' },
  { title: 'Private Enterprise', description: 'Banks, Telcos & Corporate Offices' },
  { title: 'Regional Trade', description: 'Zambia, Mozambique & Tanzania' },
  { title: 'Agriculture', description: 'Estates, Co-ops & Processors' },
];

export function ClientBaseSection() {
  return (
    <motion.section
      className="client-panel"
      aria-label="Our client base"
      variants={revealGroupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.span className="eyebrow eyebrow--panel" variants={revealItemVariants}>
        Our client base
      </motion.span>
      <motion.div className="client-grid" variants={revealGroupVariants}>
        {clientTypes.map((client) => (
          <motion.article
            className="client-card"
            key={client.title}
            variants={revealItemVariants}
            whileHover={{ y: -3 }}
          >
            <h2>{client.title}</h2>
            <p>{client.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
