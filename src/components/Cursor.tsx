import { useEffect } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export function Cursor() {
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(-40)
  const y = useMotionValue(-40)

  const sx = useSpring(x, { stiffness: 380, damping: 30, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 380, damping: 30, mass: 0.4 })

  useEffect(() => {
    if (reduceMotion) {
      return
    }

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduceMotion, x, y])

  if (reduceMotion) {
    return null
  }

  return (
    <motion.div
      className="cursor-dot"
      style={{ x: sx, y: sy }}
      aria-hidden="true"
    />
  )
}
