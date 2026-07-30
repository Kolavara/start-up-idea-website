'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'

const cities = [
  { name: 'Jaipur', emoji: '🏰' },
  { name: 'Mumbai', emoji: '🌊' },
  { name: 'Varanasi', emoji: '🪔' },
  { name: 'Kerala', emoji: '🌴' },
  { name: 'Delhi', emoji: '🕌' },
  { name: 'Goa', emoji: '🏖️' },
  { name: 'Udaipur', emoji: '⛵' },
  { name: 'Rishikesh', emoji: '🧘' },
]

const stats = [
  { value: '2,500+', label: 'Experiences Completed', accent: false },
  { value: '4.9', label: 'Average Rating', accent: true },
  { value: '48', label: 'Cities Across India', accent: false },
  { value: '100%', label: 'Revenue to Guides', accent: true },
]

export default function TrustBar() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="trust" className={`relative py-20 md:py-28 overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#151110]' : 'bg-linen'
    }`}>
      {/* Top gradient — blends from hero's dark bottom into this section */}
      <div
        className="absolute inset-x-0 top-0 h-48 pointer-events-none"
        style={{
          background: isDark
            ? 'linear-gradient(180deg, rgba(15,12,10,1) 0%, transparent 100%)'
            : 'none',
        }}
      />

      {/* Gradient fade edges */}
      <div className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r pointer-events-none ${
        isDark ? 'from-[#151110] to-transparent' : 'from-linen to-transparent'
      }`} />
      <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l pointer-events-none ${
        isDark ? 'from-[#151110] to-transparent' : 'from-linen to-transparent'
      }`} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* City tags marquee */}
        <div className="mb-16 overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="flex gap-3 whitespace-nowrap"
          >
            {[...cities, ...cities].map((city, i) => (
              <div
                key={`${city.name}-${i}`}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border transition-all duration-300 cursor-default ${
                  isDark
                    ? 'bg-[#221b14]/70 border-sand/10 hover:border-terracotta/25 hover:bg-[#2a221a]'
                    : 'bg-white/70 border-sand/40 hover:border-terracotta/25 hover:bg-white'
                }`}
              >
                <span className="text-lg">{city.emoji}</span>
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  isDark ? 'text-cream/65' : 'text-charcoal/65'
                }`}>{city.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <span className={`block text-2xl md:text-3xl font-display mb-1 transition-colors duration-300 ${
                stat.accent ? 'text-terracotta' : isDark ? 'text-cream' : 'text-espresso'
              }`}>
                {stat.value}
              </span>
              <span className={`text-[10px] tracking-wider uppercase transition-colors duration-300 ${
                isDark ? 'text-cream/40' : 'text-charcoal/40'
              }`}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
