import { motion } from 'framer-motion';
import { revealGroupVariants, revealItemVariants } from './motionVariants';

const procurementSteps = [
  {
    number: '01',
    title: <>Understand<br />Requirement</>,
    description: 'Thorough technical scope analysis, specifications verification, and volume requirements.',
  },
  {
    number: '02',
    title: 'Identify Suppliers',
    description: 'Screening verified factory direct manufacturers and primary aggregators locally & abroad.',
  },
  {
    number: '03',
    title: 'Build Viable Offer',
    description: 'Competitive pricing, firm delivery timelines, warranty clarity, and transparent payment structures.',
  },
  {
    number: '04',
    title: 'Execute Contract',
    description: 'Logistics tracking, quality check upon arrival, customs clearance, and verified site delivery.',
  },
  {
    number: '05',
    title: 'Build Continuity',
    description: 'Post-delivery sign-off, supplier performance review, and proactive supply continuity frameworks.',
  },
];

export function ProcessSection() {
  return (
    <motion.section
      className="process-section"
      id="process"
      variants={revealGroupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.p className="process-intro" variants={revealItemVariants}>
        Every transaction is conducted through a structured, auditable procedure minimizing supply
        interruption risks.
      </motion.p>
      <motion.div className="process-grid" variants={revealGroupVariants}>
        {procurementSteps.map((step) => (
          <motion.article
            className="process-card"
            key={step.number}
            variants={revealItemVariants}
            whileHover={{ y: -3 }}
          >
            <span>{step.number}</span>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
