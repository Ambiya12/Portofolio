import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function Cursor() {
  const x = useMotionValue(-40)
  const y = useMotionValue(-40)

  const sx = useSpring(x, { stiffness: 380, damping: 30, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 380, damping: 30, mass: 0.4 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  return (
    <motion.div
      className="cursor-dot"
      style={{ x: sx, y: sy }}
      aria-hidden="true"
    />
  )
}
