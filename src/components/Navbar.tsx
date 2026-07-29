'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'

function ThemeToggle({ isDark }: { isDark: boolean }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="relative w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-sand/30"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.svg
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-espresso"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cream"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

const navLinks = [
  { label: 'Home', href: '/', isAnchor: false },
  { label: 'How It Works', href: '/#how-it-works', isAnchor: true },
  { label: 'For Travelers', href: '/#features', isAnchor: true },
  { label: 'Browse Guides', href: '/guides', isAnchor: false },
  { label: 'Become a Guide', href: '/#cta', isAnchor: true },
  { label: 'Pricing', href: '/#pricing', isAnchor: true },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const pathname = usePathname()
  const { theme } = useTheme()

  // Track active section using IntersectionObserver
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(null)
      return
    }

    const sections = document.querySelectorAll('section[id]')
    const visible = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio)
          } else {
            visible.delete(entry.target.id)
          }
        })

        // Find the section with highest visibility ratio
        let bestId = ''
        let bestRatio = 0
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })

        setActiveSection(bestId || null)
      },
      {
        // Trigger when section is anywhere in the middle 60% of viewport
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const isDark = theme === 'dark'

  return (
    <>
      {/* Floating Glass Pill Nav */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] w-[calc(100%-2rem)] max-w-5xl rounded-full ${
          isDark
            ? 'bg-espresso/80 backdrop-blur-2xl shadow-[0_4px_40px_rgba(0,0,0,0.2)] border border-sand/20'
            : 'bg-cream/80 backdrop-blur-2xl shadow-[0_4px_40px_rgba(60,36,21,0.06)] border border-sand/40'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-2.5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.08, rotate: -8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 overflow-hidden bg-white ${
                isDark ? 'shadow-sm shadow-white/20' : 'border border-charcoal/10'
              }`}
            >
              <img src="/logo.png" alt="Yoourguide Logo" className="w-full h-full object-contain p-1" />
            </motion.div>
            <span className={`font-display text-lg tracking-tight hidden sm:block transition-colors duration-300 ${
              isDark ? 'text-cream' : 'text-espresso'
            }`}>
              Yoourguide
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              let isActive = false

              if (link.href === '/') {
                // Home: active on homepage when at hero or no section visible
                isActive = pathname === '/' && (!activeSection || activeSection === 'hero')
              } else if (link.isAnchor) {
                // Section links: active only on homepage when their section is most visible
                isActive = pathname === '/' && activeSection === link.href.split('#')[1]
              } else {
                // Page links (e.g. /guides): active when pathname matches
                isActive = pathname === link.href
              }

              const activeClass = isDark
                ? 'text-cream bg-sand/20'
                : 'text-espresso bg-sand/40'
              const inactiveClass = isDark
                ? 'text-cream/55 hover:text-cream hover:bg-sand/15'
                : 'text-charcoal/55 hover:text-espresso hover:bg-sand/30'

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 rounded-full ${
                    isActive ? activeClass : inactiveClass
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Desktop Right — Theme toggle only */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle isDark={isDark} />
          </div>

          {/* Mobile: Theme toggle + Hamburger */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle isDark={isDark} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center z-50"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <motion.span
                  animate={isOpen ? { top: '50%', y: '-50%', rotate: 45 } : { top: 0, y: 0, rotate: 0 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`absolute left-0 w-full h-[2px] origin-center transition-colors duration-300 ${isDark ? 'bg-cream' : 'bg-espresso'}`}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] transition-colors duration-300 ${isDark ? 'bg-cream' : 'bg-espresso'}`}
                />
                <motion.span
                  animate={isOpen ? { top: '50%', y: '-50%', rotate: -45 } : { bottom: 0, top: 'auto', y: 0, rotate: 0 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`absolute left-0 w-full h-[2px] origin-center transition-colors duration-300 ${isDark ? 'bg-cream' : 'bg-espresso'}`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30"
          >
            <div className={`absolute inset-0 backdrop-blur-3xl transition-colors duration-300 ${
              isDark ? 'bg-espresso/95' : 'bg-cream/95'
            }`} onClick={() => setIsOpen(false)} />
            <div className="relative h-full flex flex-col items-center justify-center gap-6 px-8">
              {navLinks.map((link, i) => {
                let isMobileActive = false
                if (link.href === '/') {
                  isMobileActive = pathname === '/' && (!activeSection || activeSection === 'hero')
                } else if (link.isAnchor) {
                  isMobileActive = pathname === '/' && activeSection === link.href.split('#')[1]
                } else {
                  isMobileActive = pathname === link.href
                }

                const mobileActiveClass = 'text-terracotta'
                const mobileBaseClass = isDark ? 'text-cream' : 'text-espresso'

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.3, delay: 0.05 + i * 0.03, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-display block py-2 transition-colors duration-300 ${
                        isMobileActive ? mobileActiveClass : mobileBaseClass
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
