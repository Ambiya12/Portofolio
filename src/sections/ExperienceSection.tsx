import { motion, useReducedMotion } from 'framer-motion'
import { experienceTimeline } from '../data/experience'
import { fadeInUp, staggerContainer } from '../lib/motion'
import geodisLogo from '../assets/Geodis.svg.png'

function getCompanyLogo(title: string) {
  if (title.includes('GEODIS')) return geodisLogo
  return null
}

export function ExperienceSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="experience" className="fun-section fun-bg-lemon">
      <span className="fun-shape fun-shape--bottom" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="fun-heading"
          variants={fadeInUp}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="fun-eyebrow">Experience</span>
          <h2 className="fun-title">Professional <span className="fun-accent">Record</span></h2>
          <p className="fun-subtitle">
            Delivery, collaboration, and engineering discipline across recent roles.
          </p>
        </motion.div>

        <motion.div
          className="fun-timeline"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
        >
          {experienceTimeline.map((item) => {
            const logo = getCompanyLogo(item.title)
            const [role, company] = item.title.split('—').map((part) => part.trim())
            const companyName = company ?? 'Company'

            return (
              <motion.article key={`${item.period}-${item.title}`} className="fun-timeline-item" variants={fadeInUp}>
                <aside className="chronicle-aside">
                  <span className="fun-period-badge">{item.period}</span>
                  <div className="brand-logo-wrap timeline-brand-logo-wrap">
                    {logo ? (
                      <img
                        className="brand-logo"
                        src={logo}
                        alt={`${companyName} logo`}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="brand-logo-fallback">{companyName}</span>
                    )}
                  </div>
                </aside>

                <div className="chronicle-main">
                  <h3 className="timeline-title">{role}</h3>
                  <p className="timeline-company">{companyName}</p>
                  <p className="timeline-summary">{item.summary}</p>
                  <ul className="timeline-points">
                    {item.points.map((point, index) => (
                      <li key={`${item.title}-${index}`}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
