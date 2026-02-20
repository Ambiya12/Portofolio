import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/projects'
import { fadeInUp, staggerContainer } from '../lib/motion'

export function ProjectsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="projects" className="fun-section fun-bg-blue">
      <span className="fun-shape fun-shape--top" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="fun-heading"
          variants={fadeInUp}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.35 }}
        >
          <span className="fun-eyebrow">Projects</span>
          <h2 className="fun-title">Built for <span className="fun-accent">real-world</span> constraints.</h2>
          <p className="fun-subtitle">
            Focused on scalable outcomes and user experience.
          </p>
        </motion.div>

        <motion.div
          className="fun-grid"
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="fun-card project-card"
              data-index={String(i + 1).padStart(2, '0')}
              variants={fadeInUp}
            >
              <div className="project-title-row">
                <h3 className="project-title">{project.title}</h3>
                {project.statusLabel && (
                  <span className="project-status">{project.statusLabel}</span>
                )}
              </div>
              <p className="project-desc">{project.description}</p>
              <p className="project-highlight">
                {project.highlights}
              </p>

              <div className="fun-badge-wrap">
                {project.tags.map((tag) => (
                  <span key={`${project.title}-${tag}`} className="fun-badge">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="fun-button fun-button-secondary">
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
