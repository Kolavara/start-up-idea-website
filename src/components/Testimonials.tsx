'use client'

import { motion } from 'framer-motion'
import { Reveal, StaggerContainer, StaggerItem } from './Motion'
import { useTheme } from './ThemeProvider'

const testimonials = [
  {
    quote: 'I\'ve traveled to 30 countries, but nothing compares to the experience Ravi gave us in Jaipur. He showed us a world hidden behind the tourist facades.',
    name: 'Sarah Chen',
    role: 'Travel Blogger',
    city: 'San Francisco',
  },
  {
    quote: 'Priya turned a simple food walk into a cultural odyssey. We tasted Mumbai\'s soul, one dish at a time. This is how travel should feel.',
    name: 'Marcus Weber',
    role: 'Food Critic',
    city: 'Berlin',
  },
  {
    quote: 'Arjun didn\'t just show us Varanasi — he helped us feel it. The ceremonies, the stories, the quiet moments at dawn. Life-changing.',
    name: 'Yuki Tanaka',
    role: 'Photographer',
    city: 'Tokyo',
  },
]

export default function Testimonials() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="testimonials" className={`relative py-28 md:py-40 overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#1a1410]' : 'bg-white'
    }`}>
      {/* Dot pattern */}
      <div className={`absolute inset-0 opacity-[0.02] ${
        isDark ? 'bg-cream' : 'bg-espresso'
      }`} style={{
        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <Reveal>
            <span className="eyebrow mb-6 inline-flex">
              Stories
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className={`font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] transition-colors duration-300 ${
              isDark ? 'text-cream' : 'text-espresso'
            }`}>
              Travelers who found
              <br />
              the real India.
            </h2>
          </Reveal>
        </div>

        {/* Testimonial cards */}
        <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className={`relative rounded-[2rem] border p-8 md:p-10 h-full transition-all duration-300 ${
                  isDark
                    ? 'border-sand/10 bg-[#221b14] hover:border-terracotta/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]'
                    : 'border-sand/35 bg-white hover:border-terracotta/15 hover:shadow-[0_12px_40px_rgba(60,36,21,0.04)]'
                }`}
              >
                {/* Decorative quote */}
                <div className="decorative-quote">&ldquo;</div>

                {/* Quote */}
                <blockquote className={`text-sm leading-relaxed mb-8 relative z-10 transition-colors duration-300 ${
                  isDark ? 'text-cream/55' : 'text-charcoal/55'
                }`}>
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 relative z-10">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-terracotta/10 to-sage/10 flex items-center justify-center text-xs font-semibold shrink-0 transition-colors duration-300 ${isDark ? 'text-cream/50' : 'text-espresso/50'}`}>
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <span className={`block text-sm font-semibold transition-colors duration-300 ${
                      isDark ? 'text-cream' : 'text-espresso'
                    }`}>{testimonial.name}</span>
                    <span className={`text-[11px] transition-colors duration-300 ${
                      isDark ? 'text-cream/35' : 'text-charcoal/35'
                    }`}>{testimonial.role} · {testimonial.city}</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
