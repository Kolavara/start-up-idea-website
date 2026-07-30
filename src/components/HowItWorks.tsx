'use client'

import { motion } from 'framer-motion'
import { Reveal, StaggerContainer, StaggerItem } from './Motion'
import { useTheme } from './ThemeProvider'

const steps = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta group-hover:text-cream transition-colors duration-300">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    label: 'Choose',
    title: 'Pick Your Path',
    description: 'Decide between a Certified Guide for deep history or a Local Companion for authentic cultural immersion — or book both!',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta group-hover:text-cream transition-colors duration-300">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: 'Connect',
    title: 'Meet Your Local Expert',
    description: 'Message your guide or companion, share what excites you, and co-create a day that\'s uniquely yours.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta group-hover:text-cream transition-colors duration-300">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    label: 'Experience',
    title: 'Feel the Real India',
    description: 'Explore majestic monuments or dive into living culture — hidden alleys, street food, untold stories, and genuine connection.',
  },
]

export default function HowItWorks() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="how-it-works" className={`relative py-28 md:py-40  transition-colors duration-300 ${
      isDark ? 'bg-[#1a1410]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <Reveal>
            <span className="eyebrow mb-6 inline-flex">
              How It Works
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className={`font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] mb-6 transition-colors duration-300 ${
              isDark ? 'text-cream' : 'text-espresso'
            }`}>
              Three steps to an
              <br />
              unforgettable journey.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={`text-base leading-relaxed max-w-md mx-auto transition-colors duration-300 ${
              isDark ? 'text-cream/40' : 'text-charcoal/45'
            }`}>
              Pick a Certified Guide for structured history tours, or a Local Companion for unscripted adventures. No rigid itineraries, no tourist traps.
            </p>
          </Reveal>
        </div>

        {/* Steps grid */}
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connecting line */}
          <div className={`hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px ${
            isDark ? 'bg-sand/10' : 'bg-sand/30'
          }`} />

          {steps.map((step, i) => (
            <StaggerItem key={step.label}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className={`group relative rounded-[2rem] border p-8 md:p-10 overflow-hidden transition-all duration-300 h-full ${
                  isDark
                    ? 'border-sand/10 bg-[#221b14] hover:border-terracotta/20 hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)]'
                    : 'border-sand/40 bg-white hover:border-terracotta/15 hover:shadow-[0_16px_48px_rgba(60,36,21,0.06)]'
                }`}
              >
                {/* Step counter */}
                <div className={`flex items-center gap-3 mb-8 ${
                  isDark ? 'text-cream/15' : 'text-charcoal/15'
                }`}>
                  <span className="block text-[10px] tracking-[0.3em] uppercase font-medium">
                    {step.label}
                  </span>
                  <div className={`hidden md:block flex-1 h-px ${isDark ? 'bg-sand/10' : 'bg-sand/30'}`} />
                  <span className="hidden md:block text-[10px] font-medium">{i + 1}/3</span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-8 transition-all duration-300 ${
                  isDark
                    ? 'bg-[#1a1410] border-sand/10 group-hover:bg-espresso group-hover:border-espresso'
                    : 'bg-cream border-sand/50 group-hover:bg-espresso group-hover:border-espresso'
                }`}>
                  {step.icon}
                </div>

                <h3 className={`font-display text-xl md:text-[1.35rem] mb-3 tracking-tight leading-snug transition-colors duration-300 ${
                  isDark ? 'text-cream' : 'text-espresso'
                }`}>
                  {step.title}
                </h3>

                <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                  isDark ? 'text-cream/40' : 'text-charcoal/45'
                }`}>
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-8 right-8 h-px transition-all duration-300 group-hover:left-0 group-hover:right-0 ${
                  isDark ? 'bg-gradient-to-r from-transparent via-terracotta/20 to-transparent' : 'bg-gradient-to-r from-transparent via-terracotta/15 to-transparent'
                }`} />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
