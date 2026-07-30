'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTheme } from '@/components/ThemeProvider'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

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

export default function BecomeAGuidePage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // Handle hash-based scrolling on mount
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 300)
    }
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#0f0c0a]' : 'bg-cream'}`}>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Background */}
        <div className={`absolute inset-0 transition-colors duration-500 ${
          isDark
            ? 'bg-gradient-to-br from-[#1a1410] via-[#0f0c0a] to-espresso/80'
            : 'bg-gradient-to-br from-linen via-cream to-sand/40'
        }`} />

        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.06, 0.1, 0.06] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 right-20 w-96 h-96 rounded-full bg-terracotta/15 blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-sage/20 blur-[120px]"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <Link
              href="/"
              className={`inline-flex items-center gap-2 text-sm transition-colors mb-8 ${
                isDark ? 'text-cream/40 hover:text-cream' : 'text-charcoal/40 hover:text-espresso'
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </Reveal>

          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 bg-terracotta/10 border border-terracotta/20 text-terracotta">
                For Certified Guides
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className={`font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.05] tracking-[-0.02em] mb-6 transition-colors duration-500 ${
                isDark ? 'text-cream' : 'text-espresso'
              }`}>
                Stop giving away your commissions.{' '}
                <span className="text-terracotta italic">Keep 100% of what you earn.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className={`text-lg max-w-xl leading-relaxed mb-10 transition-colors duration-500 ${
                isDark ? 'text-cream/50' : 'text-charcoal/50'
              }`}>
                Join India&apos;s first subscription-based platform for Govt. Certified Tour Guides. Manage your bookings, deal directly with travelers, and grow your own brand — no middlemen, no commission cuts.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection('pricing')}
                  className="btn-primary"
                >
                  <span className="relative z-10">Start Your Subscription</span>
                  <span className="btn-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cream">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="btn-fill" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('apply')}
                  className={`inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium transition-all duration-300 border ${
                    isDark
                      ? 'border-cream/10 text-cream/70 hover:border-cream/30 hover:text-cream'
                      : 'border-espresso/10 text-espresso/70 hover:border-espresso/30 hover:text-espresso'
                  }`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  Upload Your License
                </motion.button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION — 3-column grid */}
      <section className={`relative py-28 md:py-36 transition-colors duration-500 ${
        isDark ? 'bg-[#1a1410]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="eyebrow mb-6 inline-flex mx-auto justify-center w-fit">
              Why Subscribe
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className={`font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] mb-16 md:mb-20 text-center transition-colors duration-500 ${
              isDark ? 'text-cream' : 'text-espresso'
            }`}>
              Built for professionals.
              <br />
              Designed for your success.
            </h2>
          </Reveal>

          <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta">
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                ),
                title: 'Zero Commissions',
                description: 'You charge what you want, and the traveler pays you directly. We never take a cut. Keep 100% of every booking.',
                accent: 'terracotta',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                ),
                title: 'Direct Connection',
                description: 'Chat directly with travelers before they arrive. Build your own itinerary, set expectations, and establish rapport in advance.',
                accent: 'sage',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: 'Professional Respect',
                description: 'We exclusively feature government-certified guides in this tier. Your credentials are highlighted, earning immediate trust from travelers.',
                accent: 'terracotta',
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`group relative rounded-[2rem] border p-8 md:p-10 h-full transition-all duration-300 ${
                    isDark
                      ? 'border-sand/10 bg-[#221b14] hover:border-terracotta/20 hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)]'
                      : 'border-sand/35 bg-[#faf8f4] hover:border-terracotta/15 hover:shadow-[0_16px_48px_rgba(60,36,21,0.04)]'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-all duration-300 ${
                    isDark
                      ? 'bg-[#1a1410] border-sand/10 group-hover:bg-terracotta/10 group-hover:border-terracotta/30'
                      : 'bg-cream border-sand/50 group-hover:bg-terracotta/5 group-hover:border-terracotta/20'
                  }`}>
                    {item.icon}
                  </div>
                  <h3 className={`font-display text-xl mb-3 tracking-tight transition-colors duration-300 ${
                    isDark ? 'text-cream' : 'text-espresso'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-cream/40' : 'text-charcoal/45'
                  }`}>
                    {item.description}
                  </p>
                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-8 right-8 h-px transition-all duration-300 group-hover:left-0 group-hover:right-0 ${
                    isDark
                      ? 'bg-gradient-to-r from-transparent via-terracotta/15 to-transparent'
                      : 'bg-gradient-to-r from-transparent via-terracotta/10 to-transparent'
                  }`} />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* HOW IT WORKS — For Guides */}
      <section className={`relative py-28 md:py-36 transition-colors duration-500 ${
        isDark ? 'bg-[#0f0c0a]' : 'bg-cream'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <Reveal>
              <span className="eyebrow mb-6 inline-flex">
                How It Works
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className={`font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] mb-6 transition-colors duration-500 ${
                isDark ? 'text-cream' : 'text-espresso'
              }`}>
                Three steps to
                <br />
                guiding on your terms.
              </h2>
            </Reveal>
          </div>

          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
            {/* Connecting line */}
            <div className={`hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px ${
              isDark ? 'bg-sand/10' : 'bg-sand/30'
            }`} />

            {[
              {
                step: '01',
                label: 'Profile',
                title: 'Create Your Professional Profile',
                description: 'Upload your Govt. Guide License for verification, showcase your expertise, and set your own pricing. Your credentials earn instant trust.',
              },
              {
                step: '02',
                label: 'Subscribe',
                title: 'Choose Your Subscription Tier',
                description: 'Pick a plan that matches your volume — from Explorer (₹499/mo) for starters to Legend (₹1,999/mo) for full-scale professionals.',
              },
              {
                step: '03',
                label: 'Earn',
                title: 'Guide on Your Terms',
                description: 'Receive direct inquiries, negotiate your fee freely, and guide travelers through India\'s wonders — keeping every rupee you earn.',
              },
            ].map((step, i) => (
              <StaggerItem key={step.label}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`group relative rounded-[2rem] border p-8 md:p-10 h-full transition-all duration-300 ${
                    isDark
                      ? 'border-sand/10 bg-[#221b14] hover:border-terracotta/20 hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)]'
                      : 'border-sand/40 bg-white hover:border-terracotta/15 hover:shadow-[0_16px_48px_rgba(60,36,21,0.06)]'
                  }`}
                >
                  {/* Step number */}
                  <div className={`flex items-center gap-3 mb-8 ${
                    isDark ? 'text-cream/15' : 'text-charcoal/15'
                  }`}>
                    <span className="block text-[10px] tracking-[0.3em] uppercase font-medium">
                      {step.label}
                    </span>
                    <div className={`hidden md:block flex-1 h-px ${isDark ? 'bg-sand/10' : 'bg-sand/30'}`} />
                    <span className="hidden md:block text-[10px] font-medium">{step.step}/{3}</span>
                  </div>

                  {/* Number display */}
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-8 font-display text-2xl transition-all duration-300 ${
                    isDark
                      ? 'bg-[#1a1410] border-sand/10 text-cream/30 group-hover:bg-terracotta/10 group-hover:border-terracotta/30 group-hover:text-terracotta'
                      : 'bg-cream border-sand/50 text-charcoal/30 group-hover:bg-terracotta/5 group-hover:border-terracotta/20 group-hover:text-terracotta'
                  }`}>
                    {step.step}
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

                  <div className={`absolute bottom-0 left-8 right-8 h-px transition-all duration-300 group-hover:left-0 group-hover:right-0 ${
                    isDark
                      ? 'bg-gradient-to-r from-transparent via-terracotta/15 to-transparent'
                      : 'bg-gradient-to-r from-transparent via-terracotta/10 to-transparent'
                  }`} />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className={`relative py-28 md:py-36 transition-colors duration-500 ${
        isDark ? 'bg-[#1a1410]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <Reveal>
              <span className="eyebrow mb-6 inline-flex">
                Guide Pricing
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className={`font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] mb-6 transition-colors duration-500 ${
                isDark ? 'text-cream' : 'text-espresso'
              }`}>
                Simple pricing.
                <br />
                You keep what you earn.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className={`text-base leading-relaxed max-w-lg mx-auto transition-colors duration-500 ${
                isDark ? 'text-cream/40' : 'text-charcoal/45'
              }`}>
                No commissions. No hidden fees. Pay a flat monthly subscription and keep 100% of every booking. The more you guide, the more you profit.
              </p>
            </Reveal>
          </div>

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
                      onClick={() => scrollToSection('apply')}
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

      {/* APPLICATION SECTION */}
      <section id="apply" className="relative py-28 md:py-36 bg-espresso overflow-hidden">
        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 right-20 w-96 h-96 rounded-full bg-terracotta/20 blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-sage/25 blur-[120px]"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left: Content */}
            <div>
              <Reveal>
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-cream/[0.06] border border-cream/[0.08] text-cream/40 mb-6">
                  For Certified Guides
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] text-cream mb-6">
                  Turn your expertise
                  <br />
                  into your empire.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-cream/35 text-base leading-relaxed mb-12 max-w-md">
                  You&apos;ve earned your credentials. Now earn what you&apos;re worth. Join India&apos;s first subscription platform for certified guides and take control of your career.
                </p>
              </Reveal>

              {/* Benefits list */}
              <StaggerContainer staggerDelay={0.1} className="space-y-6">
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    ),
                    title: 'Keep 100% of your earnings',
                    desc: 'No commission cuts. You earn what you deserve.',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    ),
                    title: 'Verified license badge',
                    desc: 'Your certification displayed prominently.',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    ),
                    title: 'Set your own schedule & pricing',
                    desc: 'Complete control over your business.',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    ),
                    title: 'Direct traveler messaging',
                    desc: 'Build rapport before they arrive.',
                  },
                ].map((benefit) => (
                  <StaggerItem key={benefit.title}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                      className="group flex gap-3.5"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-cream/[0.04] border border-cream/[0.08] flex items-center justify-center group-hover:bg-cream/[0.08] transition-all duration-300">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cream/85 mb-0.5">{benefit.title}</h4>
                        <p className="text-xs text-cream/25 leading-relaxed">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Right: Application Form */}
            <ApplyForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ApplyForm() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
    email: '',
    licenseNumber: '',
    specialty: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Reveal delay={0.3} x={40}>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="relative rounded-[2rem] border border-cream/[0.06] bg-cream/[0.02] backdrop-blur-sm p-10 md:p-14 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 className="font-display text-2xl text-cream mb-3">Application Received!</h3>
          <p className="text-sm text-cream/35 max-w-sm mx-auto">
            We&apos;ll review your credentials and get back to you within 48 hours. Welcome to the community of professional guides.
          </p>
        </motion.div>
      </Reveal>
    )
  }

  return (
    <Reveal delay={0.3} x={40}>
      <div className="relative rounded-[2rem] border border-cream/[0.06] bg-cream/[0.02] backdrop-blur-sm p-8 md:p-10">
        <div className="mb-8">
          <h3 className="font-display text-2xl text-cream mb-2 tracking-tight">
            Apply as a Certified Guide
          </h3>
          <p className="text-sm text-cream/25">
            Upload your credentials and start earning. Subscription starts at ₹499/month.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.15em] text-cream/25 mb-2 font-medium">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-cream/[0.03] border border-cream/[0.06] text-cream text-sm placeholder:text-cream/15 focus:outline-none focus:border-terracotta/40 focus:bg-cream/[0.05] transition-all duration-300"
              placeholder="Arjun Mehta"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.15em] text-cream/25 mb-2 font-medium">City</label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-cream/[0.03] border border-cream/[0.06] text-cream text-sm placeholder:text-cream/15 focus:outline-none focus:border-terracotta/40 focus:bg-cream/[0.05] transition-all duration-300"
                placeholder="Jaipur"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.15em] text-cream/25 mb-2 font-medium">Phone</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-cream/[0.03] border border-cream/[0.06] text-cream text-sm placeholder:text-cream/15 focus:outline-none focus:border-terracotta/40 focus:bg-cream/[0.05] transition-all duration-300"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.15em] text-cream/25 mb-2 font-medium">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-cream/[0.03] border border-cream/[0.06] text-cream text-sm placeholder:text-cream/15 focus:outline-none focus:border-terracotta/40 focus:bg-cream/[0.05] transition-all duration-300"
              placeholder="arjun@example.com"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.15em] text-cream/25 mb-2 font-medium">Govt. License Number</label>
            <input
              type="text"
              required
              value={formData.licenseNumber}
              onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-cream/[0.03] border border-cream/[0.06] text-cream text-sm placeholder:text-cream/15 focus:outline-none focus:border-terracotta/40 focus:bg-cream/[0.05] transition-all duration-300"
              placeholder="GUIDE-2024-JP-0042"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.15em] text-cream/25 mb-2 font-medium">Your Specialty</label>
            <select
              required
              value={formData.specialty}
              onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-cream/[0.03] border border-cream/[0.06] text-cream text-sm focus:outline-none focus:border-terracotta/40 focus:bg-cream/[0.05] transition-all duration-300 appearance-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff30' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
            >
              <option value="" className="bg-espresso text-cream/30">Select your specialty</option>
              <option value="history" className="bg-espresso">History & Heritage</option>
              <option value="culture" className="bg-espresso">Culture & Traditions</option>
              <option value="art" className="bg-espresso">Art & Craft</option>
              <option value="nature" className="bg-espresso">Nature & Outdoors</option>
              <option value="spiritual" className="bg-espresso">Spiritual & Wellness</option>
              <option value="shopping" className="bg-espresso">Shopping & Markets</option>
              <option value="food" className="bg-espresso">Street Food & Culinary</option>
              <option value="other" className="bg-espresso">Other</option>
            </select>
          </div>

          {/* License upload */}
          <div>
            <label className="block text-[10px] uppercase tracking-[0.15em] text-cream/25 mb-2 font-medium">Upload License (PDF/Image)</label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-full px-4 py-6 rounded-xl border border-dashed border-cream/[0.08] bg-cream/[0.02] text-center cursor-pointer hover:bg-cream/[0.04] hover:border-terracotta/30 transition-all duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-2 text-cream/20">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <p className="text-[11px] text-cream/20">{fileName || 'Click to upload or drag & drop'}</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) setFileName(file.name)
                }}
              />
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full relative px-6 py-4 bg-terracotta text-cream rounded-xl font-medium text-sm overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(196,112,79,0.3)] mt-2"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Submit Application
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </motion.button>

          <p className="text-center text-[10px] text-cream/15 mt-3">
            No setup fees. Cancel anytime. Keep 100% of your earnings.
          </p>
        </form>
      </div>
    </Reveal>
  )
}
