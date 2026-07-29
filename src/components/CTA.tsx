'use client'

import { motion } from 'framer-motion'
import { Reveal } from './Motion'
import { usePathname, useRouter } from 'next/navigation'
import { createScrollHandler } from '@/lib/scroll'
import { useTheme } from './ThemeProvider'

export default function CTA() {
  const pathname = usePathname()
  const router = useRouter()
  const scrollToHash = createScrollHandler(pathname, router.push)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="cta" className="relative py-28 md:py-40 overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-br from-[#0f0c0a] via-[#1a1410] to-sand/10'
          : 'bg-gradient-to-br from-cream via-linen to-sand/30'
      }`} />

      {/* Atmospheric gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-terracotta/10 blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-sage/15 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-espresso/5 blur-[160px]"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <Reveal>
          <span className="eyebrow mb-6 inline-flex">
            Your journey starts here
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className={`font-display text-[clamp(2rem,5vw,4rem)] leading-[1.06] tracking-[-0.02em] mb-8 transition-colors duration-300 ${
            isDark ? 'text-cream' : 'text-espresso'
          }`}>
            Ready to experience
            <br />
            the real India?
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className={`text-lg max-w-xl mx-auto mb-12 leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-cream/40' : 'text-charcoal/45'
          }`}>
            Skip the tourist traps. Find your local buddy and discover the India that lives beyond the guidebooks.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={() => router.push('/guides')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
            >
              <span className="relative z-10">Find Your Local Buddy</span>
              <span className="btn-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cream">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
              <span className="btn-fill" />
            </motion.button>

            <motion.button
              onClick={() => scrollToHash('#guides')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`inline-flex items-center gap-2 px-6 py-4 rounded-full font-medium transition-all duration-300 border ${
                isDark
                  ? 'border-cream/10 text-cream/70 hover:border-cream/30 hover:text-cream'
                  : 'border-espresso/10 text-espresso/70 hover:border-espresso/30 hover:text-espresso'
              }`}
            >
              Become a Guide
            </motion.button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className={`flex flex-wrap items-center justify-center gap-5 mt-12 text-xs transition-colors duration-300 ${
            isDark ? 'text-cream/30' : 'text-charcoal/30'
          }`}>
            {['No credit card required', 'Free for travelers', 'Cancel anytime'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
