import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'
import { SectionHeader } from '../components/SectionHeader'
import nomadPhoto from '../assets/nomad.jpg'

export function AboutSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="fun-section fun-bg-mint">
      <span className="fun-shape fun-shape--top" aria-hidden="true" />
      <div className="container about-layout">
        <motion.div
          className="profile-placeholder fun-card about-media"
          variants={fadeInUp}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.35 }}
        >
          <img
            src={nomadPhoto}
            alt="Ambiya presenting Nomad Connect project"
            className="about-photo"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <motion.div
          className="about-copy"
          variants={fadeInUp}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.08 }}
        >
          <SectionHeader
            eyebrow="About"
            titleStart="Engineering with"
            titleAccent="clarity and focus"
            titleEnd="."
            subtitle="I am passionate about software engineering and I enjoy building systems that remain clean as they scale. I focus on readable code, strong architectural boundaries, and pragmatic delivery."
          />
          <p className="about-note">
            My mindset is continuous learning: improving technical depth, communicating clearly in Agile teams, and
            collaborating across product, design, and engineering stakeholders.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
