'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
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

function EarningsCalculator({ isDark }: { isDark: boolean }) {
  const [rate, setRate] = useState(1000)
  const [trips, setTrips] = useState(8)
  const commission = 0.15
  const perTrip = Math.round(rate * (1 - commission))
  const monthlyEarnings = perTrip * trips

  return (
    <div className={`rounded-[2rem] border p-8 md:p-10 transition-all duration-500 ${
      isDark
        ? 'bg-[#221b14] border-sage/20'
        : 'bg-[#faf8f4] border-sage/30'
    }`}>
      <h3 className={`font-display text-xl md:text-2xl mb-8 tracking-tight transition-colors duration-300 ${isDark ? 'text-cream' : 'text-[#3C2415]'}`}>
        Your earning potential
      </h3>

      {/* Rate slider */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-cream/50' : 'text-charcoal/50'}`}>Charge per trip</span>
          <span className={`font-display text-2xl transition-colors duration-300 ${isDark ? 'text-sage' : 'text-sage'}`}>₹{rate.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="500"
          max="3000"
          step="100"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className={`w-full h-2 rounded-full appearance-none cursor-pointer ${isDark ? 'bg-sand/20' : ''}`}
          style={{
            background: isDark
              ? `linear-gradient(to right, #9CAF88 0%, #9CAF88 ${((rate - 500) / 2500 * 100)}%, rgba(255,255,255,0.1) ${((rate - 500) / 2500 * 100)}%, rgba(255,255,255,0.1) 100%)`
              : `linear-gradient(to right, #9CAF88 0%, #9CAF88 ${((rate - 500) / 2500 * 100)}%, #DDD0BC ${((rate - 500) / 2500 * 100)}%, #DDD0BC 100%)`,
            WebkitAppearance: 'none',
            outline: 'none',
          }}
        />
        <div className={`flex justify-between text-[10px] mt-1 transition-colors duration-300 ${isDark ? 'text-cream/20' : 'text-charcoal/30'}`}>
          <span>₹500</span>
          <span>₹3,000</span>
        </div>
      </div>

      {/* Trips slider */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-cream/50' : 'text-charcoal/50'}`}>Trips per month</span>
          <span className={`font-display text-2xl transition-colors duration-300 ${isDark ? 'text-sage' : 'text-sage'}`}>{trips}</span>
        </div>
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={trips}
          onChange={(e) => setTrips(Number(e.target.value))}
          className={`w-full h-2 rounded-full appearance-none cursor-pointer ${isDark ? 'bg-sand/20' : ''}`}
          style={{
            background: isDark
              ? `linear-gradient(to right, #9CAF88 0%, #9CAF88 ${((trips - 1) / 29 * 100)}%, rgba(255,255,255,0.1) ${((trips - 1) / 29 * 100)}%, rgba(255,255,255,0.1) 100%)`
              : `linear-gradient(to right, #9CAF88 0%, #9CAF88 ${((trips - 1) / 29 * 100)}%, #DDD0BC ${((trips - 1) / 29 * 100)}%, #DDD0BC 100%)`,
            WebkitAppearance: 'none',
            outline: 'none',
          }}
        />
        <div className={`flex justify-between text-[10px] mt-1 transition-colors duration-300 ${isDark ? 'text-cream/20' : 'text-charcoal/30'}`}>
          <span>1</span>
          <span>30</span>
        </div>
      </div>

      {/* Result */}
      <div className={`p-6 rounded-xl border transition-colors duration-300 ${
        isDark ? 'border-sand/10 bg-[#1a1410]' : 'bg-white border-sand/30'
      }`}>
        <div className="flex items-center justify-between mb-2">
          <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-cream/50' : 'text-charcoal/50'}`}>Your rate</span>
          <span className={`text-sm font-semibold transition-colors duration-300 ${isDark ? 'text-cream' : 'text-espresso'}`}>₹{rate.toLocaleString()}/trip</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-cream/50' : 'text-charcoal/50'}`}>Platform fee (15%)</span>
          <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-cream/30' : 'text-charcoal/30'}`}>-₹{Math.round(rate * commission).toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className={`text-sm transition-colors duration-300 ${isDark ? 'text-cream/50' : 'text-charcoal/50'}`}>You earn per trip</span>
          <span className={`text-sm font-semibold transition-colors duration-300 text-sage`}>₹{perTrip.toLocaleString()}</span>
        </div>
        <div className={`h-px transition-colors duration-300 ${isDark ? 'bg-sand/10' : 'bg-sand/30'}`} />
        <div className="flex items-center justify-between mt-4">
          <span className={`text-sm font-semibold transition-colors duration-300 ${isDark ? 'text-cream' : 'text-espresso'}`}>Monthly earnings</span>
          <span className={`font-display text-3xl transition-colors duration-300 text-sage`}>₹{monthlyEarnings.toLocaleString()}</span>
        </div>
        <p className={`text-[10px] mt-2 transition-colors duration-300 ${isDark ? 'text-cream/20' : 'text-charcoal/25'}`}>
          * Estimated earnings based on your inputs. Actual earnings may vary.
        </p>
      </div>
    </div>
  )
}

export default function BecomeACompanionPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#0f0c0a]' : 'bg-cream'}`}>
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className={`absolute inset-0 transition-colors duration-500 ${
          isDark
            ? 'bg-gradient-to-br from-[#1a1410] via-[#0f0c0a] to-espresso/80'
            : 'bg-gradient-to-br from-linen via-cream to-sand/40'
        }`} />

        {/* Orbs — warm, vibrant */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.06, 0.1, 0.06] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 right-20 w-96 h-96 rounded-full bg-sage/15 blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.09, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-terracotta/15 blur-[120px]"
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
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 bg-sage/10 border border-sage/20 text-sage">
                For Local Companions
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className={`font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.05] tracking-[-0.02em] mb-6 transition-colors duration-500 ${
                isDark ? 'text-cream' : 'text-espresso'
              }`}>
                Get paid to{' '}
                <span className="text-sage">show off your city.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className={`text-lg max-w-xl leading-relaxed mb-10 transition-colors duration-500 ${
                isDark ? 'text-cream/50' : 'text-charcoal/50'
              }`}>
                Become a Local Companion. Take travelers to your favorite street food spots, hidden cafes, and local markets. No upfront fees, total flexibility.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection('apply-companion')}
                  className="btn-primary"
                >
                  <span className="relative z-10">Apply to be a Companion</span>
                  <span className="btn-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cream">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </span>
                  <span className="btn-fill" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('vetting-safety')}
                  className={`inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium transition-all duration-300 border ${
                    isDark
                      ? 'border-cream/10 text-cream/70 hover:border-cream/30 hover:text-cream'
                      : 'border-espresso/10 text-espresso/70 hover:border-espresso/30 hover:text-espresso'
                  }`}
                >
                  How It Works
                </motion.button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== VALUE PROPOSITION — 3-column ===== */}
      <section className={`relative py-28 md:py-36 transition-colors duration-500 ${
        isDark ? 'bg-[#1a1410]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="eyebrow mb-6 inline-flex mx-auto justify-center w-fit">
              Why Become a Companion
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className={`font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] mb-16 md:mb-20 text-center transition-colors duration-500 ${
              isDark ? 'text-cream' : 'text-espresso'
            }`}>
              Zero risk. Zero upfront cost.
              <br />
              <span className="text-sage">100% you.</span>
            </h2>
          </Reveal>

          <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                ),
                title: 'Zero Upfront Costs',
                description: 'It\'s completely free to join. We only succeed when you succeed — our platform takes a standard commission on successful trips. No monthly fees, no hidden charges.',
                accent: 'sage',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: 'Total Flexibility',
                description: 'You are in control. Work every day or just one weekend a month. You choose which requests to accept, your own hours, and your own pricing. No minimums.',
                accent: 'terracotta',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: 'Global Friendships',
                description: 'Meet fascinating people from all over the world while doing what you already love in your city. Every booking is a chance to connect, share stories, and make lifelong memories.',
                accent: 'sage',
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`group relative rounded-[2rem] border p-8 md:p-10 h-full transition-all duration-300 ${
                    isDark
                      ? 'border-sand/10 bg-[#221b14] hover:border-sage/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)]'
                      : 'border-sand/35 bg-[#faf8f4] hover:border-sage/30 hover:shadow-[0_16px_48px_rgba(60,36,21,0.04)]'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-all duration-300 ${
                    isDark
                      ? 'bg-[#1a1410] border-sand/10 group-hover:bg-sage/10 group-hover:border-sage/30'
                      : 'bg-cream border-sand/50 group-hover:bg-sage/5 group-hover:border-sage/20'
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
                  <div className={`absolute bottom-0 left-8 right-8 h-px transition-all duration-300 group-hover:left-0 group-hover:right-0 ${
                    isDark
                      ? 'bg-gradient-to-r from-transparent via-sage/15 to-transparent'
                      : 'bg-gradient-to-r from-transparent via-sage/10 to-transparent'
                  }`} />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== EARNINGS CALCULATOR ===== */}
      <section className={`relative py-28 md:py-36 transition-colors duration-500 ${
        isDark ? 'bg-[#0f0c0a]' : 'bg-cream'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <Reveal>
              <span className="eyebrow mb-6 inline-flex">
                Calculate Your Earnings
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className={`font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] mb-6 transition-colors duration-500 ${
                isDark ? 'text-cream' : 'text-espresso'
              }`}>
                See what you could earn.
                <br />
                <span className="text-sage">You set the numbers.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className={`text-base leading-relaxed max-w-lg mx-auto transition-colors duration-500 ${
                isDark ? 'text-cream/40' : 'text-charcoal/45'
              }`}>
                Slide to choose your rate and how often you want to guide. We&apos;ll show you what that means for your pocket.
              </p>
            </Reveal>
          </div>

          <div className="max-w-2xl mx-auto">              <Reveal>
              <EarningsCalculator isDark={isDark} />
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <p className={`text-center text-xs mt-6 transition-colors duration-500 ${
              isDark ? 'text-cream/20' : 'text-charcoal/25'
            }`}>
              Most companions charge between ₹500–₹1,500 per trip and average 8–15 trips per month.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== VETTING & SAFETY ===== */}
      <section id="vetting-safety" className={`relative py-28 md:py-36 transition-colors duration-500 ${
        isDark ? 'bg-[#1a1410]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <Reveal x={-20}>
              <span className="eyebrow mb-6 inline-flex">
                Trust & Safety
              </span>
              <h2 className={`font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] mb-6 transition-colors duration-500 ${
                isDark ? 'text-cream' : 'text-espresso'
              }`}>
                A community built on trust.
                <br />
                <span className="text-sage">Every companion is vetted.</span>
              </h2>
              <p className={`text-base leading-relaxed mb-8 transition-colors duration-500 ${
                isDark ? 'text-cream/40' : 'text-charcoal/45'
              }`}>
                We maintain a high-trust community. Not everyone can become a companion — and that&apos;s intentional. Here&apos;s what every companion goes through before their profile goes live.
              </p>
            </Reveal>

            <Reveal x={20}>
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    ),
                    title: 'Step 1: ID Verification',
                    desc: 'All companions must complete ID verification using Aadhar or DigiLocker. This ensures every profile is backed by a real, verifiable identity.',
                  },
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" y1="19" x2="12" y2="23" />
                        <line x1="8" y1="23" x2="16" y2="23" />
                      </svg>
                    ),
                    title: 'Step 2: Video Introduction Call',
                    desc: 'A brief 10-minute video call with our team where we get to know you, your city, and your communication style. It&apos;s casual, not an exam.',
                  },
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    ),
                    title: 'Step 3: Profile Goes Live',
                    desc: 'Once verified, your profile is published. Travelers can book with confidence knowing you&apos;ve been screened and approved by our team.',
                  },
                ].map((step) => (
                  <div key={step.title} className={`flex gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                    isDark
                      ? 'border-sand/10 bg-[#221b14]/70 hover:border-sage/20'
                      : 'border-sand/30 bg-[#faf8f4] hover:border-sage/20'
                  }`}>
                    <div className="shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center"
                      style={{
                        borderColor: isDark ? 'rgba(156,175,136,0.2)' : 'rgba(156,175,136,0.3)',
                        backgroundColor: isDark ? 'rgba(156,175,136,0.05)' : 'rgba(156,175,136,0.08)',
                      }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h4 className={`text-sm font-semibold mb-1 ${isDark ? 'text-cream' : 'text-espresso'}`}>{step.title}</h4>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-cream/40' : 'text-charcoal/45'}`}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Trust badges */}
          <Reveal delay={0.3}>
            <div className={`flex flex-wrap items-center justify-center gap-8 mt-16 pt-10 border-t transition-colors duration-500 ${
              isDark ? 'border-sand/10' : 'border-sand/30'
            }`}>
              {[
                { label: 'Aadhar Verified', icon: '🪪' },
                { label: 'Video Screened', icon: '🎥' },
                { label: 'Identity Confirmed', icon: '✅' },
                { label: 'Community Rated', icon: '⭐' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <span className="text-lg">{badge.icon}</span>
                  <span className={`text-xs font-medium transition-colors duration-500 ${isDark ? 'text-cream/50' : 'text-charcoal/50'}`}>
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== HOW IT WORKS — For Companions ===== */}
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
                Start in minutes.
                <br />
                No red tape.
              </h2>
            </Reveal>
          </div>

          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
            <div className={`hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px ${
              isDark ? 'bg-sand/10' : 'bg-sand/30'
            }`} />

            {[
              {
                step: '01',
                label: 'Sign Up',
                title: 'Create Your Companion Profile',
                description: 'Tell travelers about yourself — your favorite neighborhoods, hidden spots, and what makes your city special. No license needed.',
              },
              {
                step: '02',
                label: 'Connect',
                title: 'Get Matched with Travelers',
                description: 'Travelers browse companion profiles and reach out directly. Chat, share interests, and plan an authentic experience together.',
              },
              {
                step: '03',
                label: 'Earn',
                title: 'Guide & Get Paid',
                description: 'Show travelers your city your way. After each booking, you earn 85% of your rate — paid directly to your account within 48 hours.',
              },
            ].map((step, i) => (
              <StaggerItem key={step.label}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`group relative rounded-[2rem] border p-8 md:p-10 h-full transition-all duration-300 ${
                    isDark
                      ? 'border-sand/10 bg-[#221b14] hover:border-sage/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)]'
                      : 'border-sand/40 bg-white hover:border-sage/30 hover:shadow-[0_16px_48px_rgba(60,36,21,0.06)]'
                  }`}
                >
                  <div className={`flex items-center gap-3 mb-8 ${
                    isDark ? 'text-cream/15' : 'text-charcoal/15'
                  }`}>
                    <span className="block text-[10px] tracking-[0.3em] uppercase font-medium">
                      {step.label}
                    </span>
                    <div className={`hidden md:block flex-1 h-px ${isDark ? 'bg-sand/10' : 'bg-sand/30'}`} />
                    <span className="hidden md:block text-[10px] font-medium">{step.step}/{3}</span>
                  </div>

                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-8 font-display text-2xl transition-all duration-300 ${
                    isDark
                      ? 'bg-[#1a1410] border-sand/10 text-cream/30 group-hover:bg-sage/10 group-hover:border-sage/30 group-hover:text-sage'
                      : 'bg-cream border-sand/50 text-charcoal/30 group-hover:bg-sage/5 group-hover:border-sage/20 group-hover:text-sage'
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
                      ? 'bg-gradient-to-r from-transparent via-sage/15 to-transparent'
                      : 'bg-gradient-to-r from-transparent via-sage/10 to-transparent'
                  }`} />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== PERFECT FOR SECTION ===== */}
      <section className={`relative py-28 md:py-36 transition-colors duration-500 ${
        isDark ? 'bg-[#1a1410]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="eyebrow mb-6 inline-flex mx-auto justify-center w-fit">
              Who It&apos;s For
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className={`font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] mb-16 md:mb-20 text-center transition-colors duration-500 ${
              isDark ? 'text-cream' : 'text-espresso'
            }`}>
              Perfect for people who
              <br />
              <span className="text-sage">love their city.</span>
            </h2>
          </Reveal>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              { emoji: '🎓', title: 'Students', desc: 'Earn money while showing travelers your city. Flexible hours around your class schedule.' },
              { emoji: '🎨', title: 'Artists & Creatives', desc: 'Share your creative scene — street art, music venues, indie galleries only locals know.' },
              { emoji: '🍜', title: 'Food Enthusiasts', desc: 'Turn your love for street food into income. Take travelers to the best hidden eateries.' },
              { emoji: '🧘', title: 'Retirees & Storytellers', desc: 'Share a lifetime of stories and local wisdom with curious travelers from around the world.' },
              { emoji: '💼', title: 'Side Hustlers', desc: 'Already have a job? Guide on weekends or evenings for extra income on your own terms.' },
              { emoji: '📸', title: 'Photographers', desc: 'Show travelers the most Instagrammable spots while building your portfolio along the way.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className={`flex gap-4 p-5 rounded-2xl border transition-all duration-300 h-full ${
                    isDark
                      ? 'border-sand/10 bg-[#221b14]/50 hover:border-sage/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]'
                      : 'border-sand/30 bg-[#faf8f4] hover:border-sage/20 hover:shadow-[0_8px_24px_rgba(60,36,21,0.04)]'
                  }`}
                >
                  <span className="text-2xl shrink-0 mt-0.5">{item.emoji}</span>
                  <div>
                    <h4 className={`text-sm font-semibold mb-1 ${isDark ? 'text-cream' : 'text-espresso'}`}>{item.title}</h4>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-cream/40' : 'text-charcoal/40'}`}>{item.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={`relative py-28 md:py-36 transition-colors duration-500 ${
        isDark ? 'bg-[#0f0c0a]' : 'bg-cream'
      }`}>
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="eyebrow mb-6 inline-flex mx-auto justify-center w-fit">
              Common Questions
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className={`font-display text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.01em] mb-16 text-center transition-colors duration-500 ${
              isDark ? 'text-cream' : 'text-espresso'
            }`}>
              Everything you need to know.
            </h2>
          </Reveal>

          <div className="space-y-4">
            {[
              { q: 'Do I need a license or certification?', a: 'No! Local Companions don\'t need any license or formal certification. If you know your city and love sharing it, you\'re qualified.' },
              { q: 'How much can I earn?', a: 'You set your own hourly rate. Most companions charge between ₹500–₹1,500 per hour. With a 15% platform fee, you keep 85% of every booking.' },
              { q: 'How does the vetting process work?', a: 'All companions complete ID verification via Aadhar/DigiLocker and a brief 10-minute video introduction call with our team. It\'s quick and casual.' },
              { q: 'How do I get paid?', a: 'Earnings are deposited directly to your bank account within 48 hours after each completed experience.' },
              { q: 'Can I guide in multiple cities?', a: 'Absolutely! You can create companion profiles for any city you know well. Great for travelers, students, or multi-city locals.' },
              { q: 'What if I don\'t get any bookings?', a: 'You owe nothing. There are no subscription fees or minimums. You only pay the 15% fee when you actually earn.' },
            ].map((faq) => (
              <div key={faq.q} className={`rounded-2xl border p-6 transition-all duration-300 ${
                isDark
                  ? 'border-sand/10 bg-[#221b14] hover:border-sage/20'
                  : 'border-sand/30 bg-white hover:border-sage/20'
              }`}>
                <h3 className={`text-sm font-semibold mb-2 ${isDark ? 'text-cream' : 'text-espresso'}`}>{faq.q}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-cream/40' : 'text-charcoal/40'}`}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPLICATION SECTION ===== */}
      <section id="apply-companion" className="relative py-28 md:py-36 bg-espresso overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 right-20 w-96 h-96 rounded-full bg-sage/20 blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-terracotta/20 blur-[120px]"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left: Content */}
            <div>
              <Reveal>
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-cream/[0.06] border border-cream/[0.08] text-cream/40 mb-6">
                  Join Free
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] text-cream mb-6">
                  Ready to get paid
                  <br />
                  showing off your city?
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-cream/35 text-base leading-relaxed mb-10 max-w-md">
                  No license, no subscription, no risk. Sign up in minutes and start earning by doing what you already love — showing people your city.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex items-center gap-6 text-sm">
                  {[
                    { value: '0', label: 'Setup Fee' },
                    { value: '0', label: 'Monthly Min' },
                    { value: '15%', label: 'Per Booking' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <span className="block font-display text-2xl text-sage">{stat.value}</span>
                      <span className="text-[10px] text-cream/25 tracking-wider uppercase">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: Application Form */}
            <CompanionApplyForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function CompanionApplyForm() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
    email: '',
    whyYou: '',
  })
  const [submitted, setSubmitted] = useState(false)

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
          <h3 className="font-display text-2xl text-cream mb-3">You&apos;re In!</h3>
          <p className="text-sm text-cream/35 max-w-sm mx-auto">
            Welcome to the Yoourguide Companion community. Check your email — we&apos;ve sent you everything you need to get started.
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
            Apply to be a Companion
          </h3>
          <p className="text-sm text-cream/25">
            Free to join. Start earning when you&apos;re ready.
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
              className="w-full px-4 py-3 rounded-xl bg-cream/[0.03] border border-cream/[0.06] text-cream text-sm placeholder:text-cream/15 focus:outline-none focus:border-sage/40 focus:bg-cream/[0.05] transition-all duration-300"
              placeholder="Priya Sharma"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.15em] text-cream/25 mb-2 font-medium">Your City</label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-cream/[0.03] border border-cream/[0.06] text-cream text-sm placeholder:text-cream/15 focus:outline-none focus:border-sage/40 focus:bg-cream/[0.05] transition-all duration-300"
                placeholder="Mumbai"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.15em] text-cream/25 mb-2 font-medium">WhatsApp</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-cream/[0.03] border border-cream/[0.06] text-cream text-sm placeholder:text-cream/15 focus:outline-none focus:border-sage/40 focus:bg-cream/[0.05] transition-all duration-300"
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
              className="w-full px-4 py-3 rounded-xl bg-cream/[0.03] border border-cream/[0.06] text-cream text-sm placeholder:text-cream/15 focus:outline-none focus:border-sage/40 focus:bg-cream/[0.05] transition-all duration-300"
              placeholder="priya@example.com"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.15em] text-cream/25 mb-2 font-medium">Why would you make a great companion?</label>
            <textarea
              required
              value={formData.whyYou}
              onChange={(e) => setFormData({ ...formData, whyYou: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-cream/[0.03] border border-cream/[0.06] text-cream text-sm placeholder:text-cream/15 focus:outline-none focus:border-sage/40 focus:bg-cream/[0.05] transition-all duration-300 resize-none"
              placeholder="I know Mumbai's best street food spots that no tourist ever finds..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full relative px-6 py-4 bg-sage text-cream rounded-xl font-medium text-sm overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(156,175,136,0.3)] mt-2"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Apply to be a Companion
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </motion.button>

          <p className="text-center text-[10px] text-cream/15 mt-3">
            Free to join. No subscription. 15% commission only when you earn.
          </p>
        </form>
      </div>
    </Reveal>
  )
}
