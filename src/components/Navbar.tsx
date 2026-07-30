'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
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

/* ── Dropdown menu for "Explore" and "Join Us" ── */
function NavDropdown({
  label,
  items,
  isDark,
  pathname,
  align = 'center',
}: {
  label: string
  items: { label: string; href: string; desc: string; icon: React.ReactNode }[]
  isDark: boolean
  pathname: string
  align?: 'left' | 'right' | 'center'
}) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  const isAnyActive = items.some((i) => pathname === i.href)

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 80)
  }

  const alignClass =
    align === 'left'
      ? 'left-0'
      : align === 'right'
      ? 'right-0'
      : 'left-1/2 -translate-x-1/2'

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={`flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium transition-all duration-300 rounded-full ${
          isAnyActive
            ? isDark
              ? 'text-cream bg-sand/20'
              : 'text-espresso bg-sand/40'
            : isDark
            ? 'text-cream/55 hover:text-cream hover:bg-sand/15'
            : 'text-charcoal/55 hover:text-espresso hover:bg-sand/30'
        }`}
      >
        {label}
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className={`absolute top-full ${alignClass} mt-2 w-[340px] rounded-[1.25rem] border p-2 z-50 ${
              isDark
                ? 'bg-espresso/95 backdrop-blur-2xl border-sand/15 shadow-[0_12px_48px_rgba(0,0,0,0.4)]'
                : 'bg-white/95 backdrop-blur-2xl border-sand/30 shadow-[0_12px_48px_rgba(60,36,21,0.1)]'
            }`}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`group flex items-start gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                  pathname === item.href
                    ? isDark
                      ? 'bg-sand/15 text-cream'
                      : 'bg-sand/30 text-espresso'
                    : isDark
                    ? 'text-cream/70 hover:bg-sand/10 hover:text-cream'
                    : 'text-charcoal/70 hover:bg-sand/20 hover:text-espresso'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 ${
                    pathname === item.href
                      ? isDark ? 'bg-terracotta/20 text-terracotta' : 'bg-terracotta/15 text-terracotta'
                      : isDark ? 'bg-sand/10 group-hover:bg-sand/20' : 'bg-sand/20 group-hover:bg-sand/40'
                  }`}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <span className="block text-[14px] font-semibold mb-1">{item.label}</span>
                  <span
                    className={`block text-[12px] leading-relaxed ${
                      isDark ? 'text-cream/50' : 'text-charcoal/60'
                    }`}
                  >
                    {item.desc}
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Dropdown data ── */
const exploreItems = [
  {
    label: 'Certified Guides',
    href: '/search/guides',
    desc: 'Licensed experts for monuments & history',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: 'Local Companions',
    href: '/search/companions',
    desc: 'Passionate insiders for authentic culture',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

const joinItems = [
  {
    label: 'Become a Guide',
    href: '/become-a-guide',
    desc: 'Apply as a certified heritage guide',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    label: 'Become a Companion',
    href: '/become-a-companion',
    desc: 'Share your city with travelers',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
]

/* ── Mobile nav links (flat list) ── */
const mobileNavLinks = [
  { label: 'Home', href: '/', isAnchor: false },
  { label: 'How It Works', href: '/#how-it-works', isAnchor: true },
  { label: 'Certified Guides', href: '/search/guides', isAnchor: false },
  { label: 'Local Companions', href: '/search/companions', isAnchor: false },
  { label: 'Become a Guide', href: '/become-a-guide', isAnchor: false },
  { label: 'Become a Companion', href: '/become-a-companion', isAnchor: false },
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

  // Simple active check for the flat links
  const isLinkActive = (href: string, isAnchor?: boolean) => {
    if (href === '/') {
      return pathname === '/' && (!activeSection || activeSection === 'hero')
    }
    if (isAnchor) {
      return pathname === '/' && activeSection === href.split('#')[1]
    }
    return pathname === href
  }

  return (
    <>
      {/* Floating Glass Pill Nav */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] w-[calc(100%-2rem)] max-w-4xl rounded-full ${
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

          {/* Desktop Links — compact with dropdowns */}
          <div className="hidden lg:flex items-center gap-0.5">
            {/* Home */}
            <Link
              href="/"
              className={`px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 rounded-full ${
                isLinkActive('/')
                  ? isDark ? 'text-cream bg-sand/20' : 'text-espresso bg-sand/40'
                  : isDark ? 'text-cream/55 hover:text-cream hover:bg-sand/15' : 'text-charcoal/55 hover:text-espresso hover:bg-sand/30'
              }`}
            >
              Home
            </Link>

            {/* How It Works */}
            <Link
              href="/#how-it-works"
              className={`px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 rounded-full ${
                isLinkActive('/#how-it-works', true)
                  ? isDark ? 'text-cream bg-sand/20' : 'text-espresso bg-sand/40'
                  : isDark ? 'text-cream/55 hover:text-cream hover:bg-sand/15' : 'text-charcoal/55 hover:text-espresso hover:bg-sand/30'
              }`}
            >
              How It Works
            </Link>

            {/* Explore Dropdown */}
            <NavDropdown
              label="Explore"
              items={exploreItems}
              isDark={isDark}
              pathname={pathname}
              align="left"
            />

            {/* Join Us Dropdown */}
            <NavDropdown
              label="Join Us"
              items={joinItems}
              isDark={isDark}
              pathname={pathname}
              align="left"
            />
          </div>

          {/* Desktop Right — Theme toggle */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle isDark={isDark} />
          </div>

          {/* Mobile: Theme toggle + Hamburger */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle isDark={isDark} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative flex items-center gap-2 px-3 py-2 rounded-full z-50 transition-colors ${
                isDark ? 'hover:bg-sand/20 text-cream' : 'hover:bg-sand/30 text-espresso'
              }`}
              aria-label="Toggle menu"
            >
              <span className="text-sm font-medium">Menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
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
              {mobileNavLinks.map((link, i) => {
                const isMobileActive = isLinkActive(link.href, link.isAnchor)
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
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3, delay: 0.05 + mobileNavLinks.length * 0.03, ease: [0.32, 0.72, 0, 1] }}
                className="mt-4"
              >
                <Link
                  href="/search/guides"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium bg-terracotta text-cream transition-all duration-300 hover:shadow-[0_8px_30px_rgba(196,112,79,0.3)]"
                >
                  Start Planning
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
