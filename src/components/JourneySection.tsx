'use client'

import { motion } from 'framer-motion'
import { Reveal, StaggerContainer, StaggerItem } from './Motion'
import { useTheme } from './ThemeProvider'
import Link from 'next/link'

export default function JourneySection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const paths = [
    {
      type: 'certified',
      title: 'Certified Guides',
      tagline: 'For history & monument lovers',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta">
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="10" />
          <path d="M15 9l-6 6M9 9l6 6" />
          <path d="M8 12h8" />
        </svg>
      ),
      color: 'terracotta',
      bgClass: 'from-terracotta/[0.03] to-transparent',
      borderClass: 'border-terracotta/20 hover:border-terracotta/40',
      hoverShadow: 'hover:shadow-[0_20px_60px_rgba(196,112,79,0.08)]',
      highlights: [
        { label: 'Deep historical knowledge', icon: '📜' },
        { label: 'Licensed & verified professionals', icon: '🛡️' },
        { label: 'Perfect for monuments & forts', icon: '🏛️' },
        { label: 'Structured, curated experiences', icon: '📋' },
      ],
      description: 'Explore India&apos;s greatest treasures — from the Taj Mahal to Jaipur&apos;s Amber Fort — with officially certified guides who bring centuries of history to life.',
      cta: 'Find a Certified Guide',
      ctaHref: '/search/guides',
    },
    {
      type: 'companion',
      title: 'Local Companions',
      tagline: 'For authentic cultural immersion',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      color: 'sage',
      bgClass: 'from-sage/[0.03] to-transparent',
      borderClass: 'border-sage/20 hover:border-sage/40',
      hoverShadow: 'hover:shadow-[0_20px_60px_rgba(156,175,136,0.08)]',
      highlights: [
        { label: 'Unscripted, spontaneous exploration', icon: '🎭' },
        { label: 'Hidden gems off the tourist trail', icon: '💎' },
        { label: 'Street food & local flavors', icon: '🍜' },
        { label: 'Navigate chaos like a local', icon: '🗺️' },
      ],
      description: 'Skip the guidebook. Walk through bustling bazaars, share chai with artisans, discover hole-in-the-wall eateries, and experience India through the eyes of those who live it.',
      cta: 'Book a Local Companion',
      ctaHref: '/search/companions',
    },
  ]

  return (
    <section id="journey" className={`relative py-28 md:py-40 overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#1a1410]' : 'bg-white'
    }`}>
      {/* Background pattern */}
      <div className={`absolute inset-0 opacity-[0.02] ${isDark ? 'bg-cream' : 'bg-espresso'}`} style={{
        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <Reveal>
            <span className="eyebrow mb-6 inline-flex">
              Choose Your Journey
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className={`font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] mb-6 transition-colors duration-300 ${
              isDark ? 'text-cream' : 'text-espresso'
            }`}>
              Two ways to experience
              <br />
              the real India.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={`text-base leading-relaxed max-w-lg mx-auto transition-colors duration-300 ${
              isDark ? 'text-cream/40' : 'text-charcoal/45'
            }`}>
              Whether you crave history&apos;s deep stories or the raw pulse of everyday life — your perfect India awaits.
            </p>
          </Reveal>
        </div>

        {/* Side-by-side comparison */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {paths.map((path, idx) => (
            <Reveal key={path.type} delay={0.15 + idx * 0.1} y={32}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className={`group relative rounded-[2rem] border p-8 md:p-10 h-full transition-all duration-500 ${path.borderClass} ${path.hoverShadow} ${
                  isDark
                    ? 'bg-[#221b14]'
                    : 'bg-[#faf8f4]'
                }`}
              >
                {/* Subtle gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b ${path.bgClass}`} />

                {/* Type badge */}
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center transition-all duration-500 ${
                    isDark
                      ? 'bg-[#1a1410] border-white/[0.06]'
                      : 'bg-cream border-sand/40'
                  }`}>
                    {path.icon}
                  </div>
                  <span className={`px-3.5 py-1.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-semibold border transition-all duration-500 ${
                    path.type === 'certified'
                      ? isDark
                        ? 'bg-terracotta/10 border-terracotta/20 text-terracotta/70'
                        : 'bg-terracotta/5 border-terracotta/15 text-terracotta/60'
                      : isDark
                        ? 'bg-sage/10 border-sage/20 text-sage/70'
                        : 'bg-sage/5 border-sage/15 text-sage/60'
                  }`}>
                    {path.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`relative z-10 font-display text-2xl md:text-3xl tracking-tight mb-5 transition-colors duration-300 ${
                  isDark ? 'text-cream' : 'text-espresso'
                }`}>
                  {path.title}
                </h3>

                {/* Description */}
                <p className={`relative z-10 text-sm leading-relaxed mb-8 transition-colors duration-300 ${
                  isDark ? 'text-cream/40' : 'text-charcoal/45'
                }`}>
                  {path.description}
                </p>

                {/* Highlights */}
                <div className="relative z-10 space-y-3 mb-10">
                  {path.highlights.map((h) => (
                    <div key={h.label} className="flex items-center gap-3">
                      <span className="text-lg">{h.icon}</span>
                      <span className={`text-sm transition-colors duration-300 ${
                        isDark ? 'text-cream/55' : 'text-charcoal/55'
                      }`}>{h.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="relative z-10">
                  <Link
                    href={path.ctaHref}
                    className={`group/btn relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-medium overflow-hidden transition-all duration-300 ${
                      path.type === 'certified'
                        ? 'bg-terracotta text-cream hover:shadow-[0_8px_30px_rgba(196,112,79,0.25)]'
                        : 'bg-sage text-cream hover:shadow-[0_8px_30px_rgba(156,175,136,0.25)]'
                    }`}
                  >
                    <span className="relative z-10">{path.cta}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-8 right-8 h-px transition-all duration-300 group-hover:left-0 group-hover:right-0 ${
                  isDark
                    ? 'bg-gradient-to-r from-transparent via-white/[0.06] to-transparent'
                    : 'bg-gradient-to-r from-transparent via-espresso/[0.06] to-transparent'
                }`} />
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal delay={0.4}>
          <div className="text-center mt-12 md:mt-16">
            <p className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-cream/25' : 'text-charcoal/30'
            }`}>
              Not sure which is right for you?{' '}
              <Link href="/search/guides" className="text-terracotta hover:text-terracotta/80 underline underline-offset-4 transition-colors duration-300">
                Browse all experiences
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
