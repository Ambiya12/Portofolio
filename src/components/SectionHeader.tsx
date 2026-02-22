import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp } from '../lib/motion'

interface SectionHeaderProps {
  eyebrow: string
  titleStart: string
  titleAccent: string
  titleEnd?: string
  subtitle?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  titleStart,
  titleAccent,
  titleEnd,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={`fun-heading ${className}`}
      variants={fadeInUp}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.3 }}
    >
      <span className="fun-eyebrow">{eyebrow}</span>
      <h2 className="fun-title">
        {titleStart} <span className="fun-accent">{titleAccent}</span>{titleEnd ? ` ${titleEnd}` : ''}
      </h2>
      {subtitle && <p className="fun-subtitle">{subtitle}</p>}
    </motion.div>
  )
}
