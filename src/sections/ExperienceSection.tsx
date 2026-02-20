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
          className="editorial-records"
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
              <motion.article key={`${item.period}-${item.title}`} className="editorial-entry" variants={fadeInUp}>
                <div className="entry-year">
                  <span className="entry-period">{item.period}</span>
                </div>
                <div className="entry-body">
                  <div className="entry-title-row">
                    <h3 className="entry-role">{role}</h3>
                    {logo ? (
                      <div className="entry-logo-wrap">
                        <img
                          className="brand-logo"
                          src={logo}
                          alt={`${companyName} logo`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ) : (
                      <span className="entry-logo-text">{companyName}</span>
                    )}
                  </div>
                  <p className="entry-company">{companyName}</p>
                  <p className="entry-summary">{item.summary}</p>
                  <ul className="entry-points">
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
