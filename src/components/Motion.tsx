'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useMemo, ReactNode } from 'react'

const cubicBezier: [number, number, number, number] = [0.32, 0.72, 0, 1]

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  x?: number
  y?: number
}

export function Reveal({ children, delay = 0, className = '', x = 0, y = 32 }: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px', amount: 0.05 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50 + delay * 200)
    return () => clearTimeout(timer)
  }, [delay])

  const show = isInView || mounted

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x, filter: 'blur(6px)' }}
      animate={show ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.5, delay: show ? delay : 0, ease: cubicBezier }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

const staggerItemVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40px 0px', amount: 0.05 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const show = isInView || mounted

  const variants = useMemo(() => ({
    hidden: {},
    visible: { transition: { staggerChildren: staggerDelay } },
  }), [staggerDelay])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={show ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div
      variants={staggerItemVariants}
      transition={{ duration: 0.45, ease: cubicBezier }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
