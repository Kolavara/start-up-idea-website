'use client'

import { motion } from 'framer-motion'
import { Reveal, StaggerContainer, StaggerItem } from './Motion'
import { useTheme } from './ThemeProvider'

const features = [
  {
    title: 'Hidden Gems',
    description: 'Secret rooftops, local markets, and spots guidebooks never mention.',
    image: '/features/hidden-gems.jpg',
    gradient: 'from-espresso/95 to-espresso/80',
  },
  {
    title: 'Untold Stories',
    description: 'Every street has a history. Every corner has a tale. Your buddy shares them all.',
    image: '/features/untold-stories.jpg',
    gradient: 'from-terracotta/90 to-espresso/85',
  },
  {
    title: 'Genuine Connection',
    description: 'Not a transaction — a friendship. Share chai, share stories, share laughter.',
    image: '/features/genuine-connection.jpg',
    gradient: 'from-espresso/90 to-sage/70',
  },
]

export default function Features() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="features" className="relative py-28 md:py-40 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <Reveal>
            <span className="eyebrow mb-6 inline-flex">
              For Travelers
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className={`font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] mb-6 transition-colors duration-300 ${
              isDark ? 'text-cream' : 'text-espresso'
            }`}>
              See the India
              <br />
              that guidebooks miss.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={`text-base leading-relaxed max-w-md mx-auto transition-colors duration-300 ${
              isDark ? 'text-cream/40' : 'text-charcoal/45'
            }`}>
              Your local buddy reveals the layers of culture, flavor, and soul that make every city extraordinary.
            </p>
          </Reveal>
        </div>

        {/* Feature cards */}
        <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, i) => (
            <StaggerItem key={feature.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className={`group relative overflow-hidden rounded-[2rem] border transition-all duration-300 h-full ${
                  isDark
                    ? 'border-sand/10 hover:border-terracotta/20 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)]'
                    : 'border-sand/35 hover:border-terracotta/15 hover:shadow-[0_16px_48px_rgba(60,36,21,0.06)]'
                }`}
              >
                {/* Image */}
                <div className="relative h-52 md:h-full overflow-hidden min-h-[280px]">
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-[1.4s] group-hover:scale-110`}
                    style={{
                      backgroundImage: `url('${feature.image}')`,
                      transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)',
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} transition-all duration-300 group-hover:from-espresso/95`} />

                  {/* Content overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    {/* Accent line */}
                    <div className="w-8 h-px bg-cream/30 mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-cream/50" />
                    <h3 className="font-display text-xl md:text-2xl text-cream mb-2.5 tracking-tight leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-cream/55 leading-relaxed max-w-sm group-hover:text-cream/70 transition-colors duration-300">
                      {feature.description}
                    </p>
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
