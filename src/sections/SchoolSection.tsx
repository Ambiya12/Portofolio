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

          <motion.div className="editorial-records" variants={staggerContainer}>
            {schoolHistory.map((item) => {
              const logo = getSchoolLogo(item.institution)

              return (
                <motion.article
                  key={`${item.period}-${item.institution}`}
                  className="editorial-entry"
                  variants={fadeInUp}
                >
                  <div className="entry-year">
                    <span className="entry-period">{item.period}</span>
                  </div>
                  <div className="entry-body">
                    <div className="entry-title-row">
                      <h3 className="entry-role">{item.institution}</h3>
                      {logo && (
                        <div className="entry-logo-wrap">
                          <img
                            className="brand-logo"
                            src={logo}
                            alt={`${item.institution} logo`}
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}
                    </div>
                    <p className="entry-company">{item.degree}</p>
                    <ul className="entry-points">
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
