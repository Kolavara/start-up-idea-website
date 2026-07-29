'use client'

import { motion } from 'framer-motion'
import { Reveal, StaggerContainer, StaggerItem } from './Motion'
import { usePathname, useRouter } from 'next/navigation'
import { createScrollHandler } from '@/lib/scroll'
import { useTheme } from './ThemeProvider'

export default function Pricing() {
  const pathname = usePathname()
  const router = useRouter()
  const scrollToHash = createScrollHandler(pathname, router.push)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const plans = [
    {
      name: 'Explorer',
      price: '₹499',
      period: '/month',
      description: 'Perfect for guides just starting out. Get your profile live and connect with your first travelers.',
      features: [
        'Your own profile page',
        'Up to 10 bookings/month',
        'Basic analytics dashboard',
        'Payment processing included',
        'Community support',
      ],
      cta: 'Start Exploring',
      popular: false,
    },
    {
      name: 'Storyteller',
      price: '₹999',
      period: '/month',
      description: 'For experienced guides ready to scale. Premium visibility and advanced tools to grow your business.',
      features: [
        'Everything in Explorer',
        'Unlimited bookings',
        'Priority listing placement',
        'Advanced analytics & insights',
        'Custom experience creation',
        'Priority support',
        'Featured guide badge',
      ],
      cta: 'Become a Storyteller',
      popular: true,
    },
    {
      name: 'Legend',
      price: '₹1,999',
      period: '/month',
      description: 'The full package for guides who want to build a brand. Maximum exposure and premium tools.',
      features: [
        'Everything in Storyteller',
        'Personal brand page',
        'Multi-city listings',
        'Team & group experiences',
        'Marketing support',
        'Dedicated account manager',
        'Revenue analytics',
      ],
      cta: 'Become a Legend',
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="relative py-28 md:py-40 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <Reveal>
            <span className="eyebrow mb-6 inline-flex">
              Guide Pricing
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className={`font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] mb-6 transition-colors duration-300 ${
              isDark ? 'text-cream' : 'text-espresso'
            }`}>
              Simple pricing.
              <br />
              You keep what you earn.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={`text-base leading-relaxed max-w-lg mx-auto transition-colors duration-300 ${
              isDark ? 'text-cream/40' : 'text-charcoal/45'
            }`}>
              No commissions. No hidden fees. Pay a flat monthly subscription and keep 100% of every booking. The more you guide, the more you profit.
            </p>
          </Reveal>
        </div>

        {/* Pricing cards */}
        <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-3 gap-5 md:gap-6 items-start">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: plan.popular ? -14 : -6 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className={`relative rounded-[2rem] border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-espresso text-cream border-espresso shadow-[0_20px_60px_rgba(60,36,21,0.18)] md:-translate-y-4'
                    : isDark
                      ? 'bg-[#221b14] text-cream border-sand/10 hover:border-sand/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]'
                      : 'bg-white border-sand/35 hover:border-sand hover:shadow-[0_12px_40px_rgba(60,36,21,0.05)]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-terracotta text-cream text-[9px] uppercase tracking-[0.2em] font-semibold shadow-[0_4px_16px_rgba(196,112,79,0.3)]">
                    Most Popular
                  </div>
                )}

                <div className="p-8 md:p-10">
                  <span className={`block text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 ${
                    plan.popular ? 'text-cream/35' : isDark ? 'text-cream/35' : 'text-charcoal/35'
                  }`}>
                    {plan.name}
                  </span>

                  <div className="flex items-baseline gap-1 mb-3">
                    <span className={`font-display text-4xl md:text-5xl tracking-tight ${
                      plan.popular ? 'text-cream' : isDark ? 'text-cream' : 'text-espresso'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${
                      plan.popular ? 'text-cream/35' : isDark ? 'text-cream/35' : 'text-charcoal/35'
                    }`}>
                      {plan.period}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed mb-8 ${
                    plan.popular ? 'text-cream/45' : isDark ? 'text-cream/40' : 'text-charcoal/45'
                  }`}>
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5 text-sage">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className={`text-sm ${
                          plan.popular ? 'text-cream/65' : isDark ? 'text-cream/55' : 'text-charcoal/55'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    onClick={() => scrollToHash('#guides')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block w-full py-3.5 rounded-xl text-center text-sm font-medium transition-shadow duration-300 ${
                      plan.popular
                        ? 'bg-cream text-espresso hover:shadow-[0_8px_30px_rgba(253,251,247,0.15)]'
                        : 'bg-espresso text-cream hover:bg-espresso/90 hover:shadow-[0_8px_30px_rgba(60,36,21,0.12)]'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}
