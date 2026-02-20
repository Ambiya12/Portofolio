import { motion, useReducedMotion } from 'framer-motion'
import { schoolHistory } from '../data/school'
import { fadeInUp, staggerContainer } from '../lib/motion'
import heticLogo from '../assets/Hetic.jpg'
import academy3wLogo from '../assets/3WAcademy.jpg'
import upcLogo from '../assets/UniversiteParisCite.jpg'
import '../styles/school.css'

function getSchoolLogo(institution: string) {
  if (institution.includes('HETIC')) return heticLogo
  if (institution.includes('3W Academy')) return academy3wLogo
  if (institution.includes('Université Paris Cité')) return upcLogo
  return null
}

export function SchoolSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="school" className="fun-section fun-bg-lavender school-section">
      <span className="fun-shape fun-shape--bottom" aria-hidden="true" />
      <div className="container">
        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="fun-heading">
            <span className="fun-eyebrow">Education</span>
            <h2 className="fun-title">Education <span className="fun-accent">Record</span></h2>
            <p className="fun-subtitle">
              Formal training in software engineering and web design.
            </p>
          </motion.div>

          <motion.div className="school-grid" variants={staggerContainer}>
            {schoolHistory.map((item) => {
              const logo = getSchoolLogo(item.institution)

              return (
                <motion.article
                  key={`${item.period}-${item.institution}`}
                  className="school-card"
                  variants={fadeInUp}
                >
                  <aside className="chronicle-aside school-chronicle-aside">
                    <div className="school-period">{item.period}</div>
                    {logo && (
                      <div className="brand-logo-wrap school-brand-logo-wrap">
                        <img
                          className="brand-logo"
                          src={logo}
                          alt={`${item.institution} logo`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    )}
                  </aside>
                  <div className="chronicle-main school-chronicle-main">
                    <h3 className="school-institution">{item.institution}</h3>
                    <div className="school-degree">{item.degree}</div>
                    <ul className="school-details">
                      {item.details.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
