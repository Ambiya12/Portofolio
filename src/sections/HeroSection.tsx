import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { NAV_ITEMS } from '../shared/navigation'
import featurePortrait from '../assets/portrait.jpg'

const HERO_MENU_ITEMS = NAV_ITEMS.filter((item) => item.id !== 'home')
const SKILL_HIGHLIGHTS = [
  'React + TypeScript Frontend',
  'Node.js and Fastify APIs',
  'Clean Architecture mindset',
  'CI/CD and DevOps workflows',
]

export function HeroSection() {
  const rm = useReducedMotion()

  return (
    <section id="home" className="hero section">
      <div className="container hero-editorial">
        <motion.div
          className="hero-meta"
          variants={fadeInUp}
          initial={rm ? false : 'hidden'}
          whileInView={rm ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="hero-mark" aria-hidden="true">≈≈≈</span>
          <span className="hero-meta-list" aria-label="Section navigation">
            {HERO_MENU_ITEMS.map((item, index) => (
              <span key={item.id}>
                <a className="hero-meta-link" href={`#${item.id}`}>
                  {item.label}
                </a>
                {index < HERO_MENU_ITEMS.length - 1 && (
                  <span className="hero-meta-separator" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </span>
        </motion.div>

        <motion.div
          className="hero-grid"
          variants={staggerContainer}
          initial={rm ? false : 'hidden'}
          whileInView={rm ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div className="hero-copy" variants={fadeInUp}>
            <div className="hero-copy-head">
              <p className="hero-kicker">Digital edition</p>
              <p className="hero-year">Issue 2026</p>
            </div>
            <h1 className="hero-title editorial-serif">
              Galystan<br />
              Ambiya Dimas<br />
            </h1>
            <p className="hero-role">Software Engineer Apprentice</p>
            <p className="hero-description">
              Building clean web systems with a focus on scalable architecture,
              modern delivery workflows, and thoughtful user experience.
            </p>
          </motion.div>

          <motion.div className="hero-visual" variants={fadeInUp}>
            <div className="hero-visual-image">
              <img className="hero-portrait" src={featurePortrait} alt="Galystan portrait" loading="eager" decoding="async" />
            </div>
          </motion.div>

          <motion.div className="hero-metric" variants={fadeInUp}>
            <div className="hero-opportunity" aria-label="Availability status">
              <span className="hero-opportunity-logo" aria-hidden="true">◎</span>
              <div>
                <p className="hero-opportunity-label">Status</p>
                <p className="hero-opportunity-text">Open to opportunities</p>
              </div>
            </div>

            <div>
              <p className="hero-highlight-title">Core Skill Highlights</p>
              <ul className="hero-highlight-list" aria-label="Core skill highlights">
                {SKILL_HIGHLIGHTS.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href="https://www.linkedin.com/in/galystan" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="btn btn-secondary" href="#contact">Reach Out</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
