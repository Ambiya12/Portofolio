import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../lib/motion'

const mindsetItems = [
  {
    title: 'Continuous Learning',
    description:
      'I maintain a growth loop through documentation, feedback, and iterative improvement after each sprint.',
  },
  {
    title: 'Code Quality Awareness',
    description:
      'I value testability, readable abstractions, and static analysis to keep systems maintainable over time.',
  },
  {
    title: 'Scalable Systems Interest',
    description:
      'I am curious about service boundaries, performance trade-offs, and architecture decisions that support growth.',
  },
  {
    title: 'DevOps Curiosity',
    description:
      'I actively explore container workflows, CI/CD reliability, and deployment observability to reduce delivery risk.',
  },
]

export function MindsetSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="mindset" className="fun-section fun-bg-rose">
      <span className="fun-shape fun-shape--bottom" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="fun-heading"
          variants={fadeInUp}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="fun-eyebrow">Approach</span>
          <h2 className="fun-title">Engineering <span className="fun-accent">Principles</span>.</h2>
          <p className="fun-subtitle">Long-term technical practice beyond short-term feature output.</p>
        </motion.div>

        <motion.div
          className="fun-grid"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          {mindsetItems.map((item) => (
            <motion.article key={item.title} className="fun-card mindset-card" variants={fadeInUp}>
              <h3 className="mindset-title">{item.title}</h3>
              <p className="mindset-desc">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
