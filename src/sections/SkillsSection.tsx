import { motion, useReducedMotion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import { fadeInUp, staggerContainer } from '../lib/motion'

export function SkillsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="skills" className="fun-section fun-bg-lavender">
      <span className="fun-shape fun-shape--top" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="fun-heading"
          variants={fadeInUp}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="fun-eyebrow">Technical Skills</span>
          <h2 className="fun-title">Cross-stack <span className="fun-accent">capabilities</span>.</h2>
          <p className="fun-subtitle">Structured knowledge across frontend, backend, DevOps, and management tooling.</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map((group) => (
            <motion.article key={group.title} className="fun-card" variants={fadeInUp}>
              <h3 className="skills-card-title">{group.title}</h3>
              <div className="fun-badge-wrap">
                {group.items.map((item) => (
                  <span key={item} className="fun-badge">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
