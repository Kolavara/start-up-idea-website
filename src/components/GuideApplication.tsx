'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Reveal, StaggerContainer, StaggerItem } from './Motion'

export default function GuideApplication() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
    email: '',
    specialty: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const benefits = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: 'Keep 100% of your earnings',
      description: 'No commission cuts. You earn what you deserve.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Set your own schedule',
      description: 'Work when you want. No mandatory hours.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
      title: 'Share your passion',
      description: 'Do what you love — show people your city.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      title: 'Build your brand',
      description: 'Collect reviews, grow your reputation.',
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="guides" className="relative py-28 md:py-40 bg-espresso overflow-hidden ">
      {/* Enhanced atmospheric gradient orbs */}
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
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cream/5 blur-[160px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Content */}
          <div>
            <Reveal>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-cream/[0.06] border border-cream/[0.08] text-cream/40 mb-6">
                For Guides
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.01em] text-cream mb-6">
                Turn your city into
                <br />
                your livelihood
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-cream/35 text-base leading-relaxed mb-12 max-w-md">
                You know your city better than anyone. Now share it with the world and earn a real income doing what you love. No middlemen, no commission cuts.
              </p>
            </Reveal>

            {/* Benefits grid */}
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
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
                      <p className="text-xs text-cream/25 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right: Application Form — Double-Bezel dark */}
          <Reveal delay={0.3} x={40}>
            <div className="relative rounded-[2rem] border border-cream/[0.06] bg-cream/[0.02] backdrop-blur-sm p-8 md:p-10">
              <div className="mb-8">
                <h3 className="font-display text-2xl text-cream mb-2 tracking-tight">
                  Apply as a Guide
                </h3>
                <p className="text-sm text-cream/25">
                  Join our community and start earning. Subscription starts at ₹499/month.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="text-center py-12"
                >
                  <div className="w-14 h-14 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-5">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h4 className="font-display text-xl text-cream mb-2">Application Received!</h4>
                  <p className="text-sm text-cream/35">
                    We&apos;ll review your application and get back to you within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.15em] text-cream/25 mb-2 font-medium">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream/[0.03] border border-cream/[0.06] text-cream text-sm placeholder:text-cream/15 focus:outline-none focus:border-terracotta/40 focus:bg-cream/[0.05] transition-all duration-300"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
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
                        style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
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
                        style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
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
                      style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
                      placeholder="arjun@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.15em] text-cream/25 mb-2 font-medium">Your Specialty</label>
                    <select
                      required
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream/[0.03] border border-cream/[0.06] text-cream text-sm focus:outline-none focus:border-terracotta/40 focus:bg-cream/[0.05] transition-all duration-300 appearance-none"
                      style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff30' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                    >
                      <option value="" className="bg-espresso text-cream/30">Select your specialty</option>
                      <option value="food" className="bg-espresso">Street Food & Culinary</option>
                      <option value="history" className="bg-espresso">History & Heritage</option>
                      <option value="culture" className="bg-espresso">Culture & Traditions</option>
                      <option value="art" className="bg-espresso">Art & Craft</option>
                      <option value="nature" className="bg-espresso">Nature & Outdoors</option>
                      <option value="nightlife" className="bg-espresso">Nightlife & Entertainment</option>
                      <option value="spiritual" className="bg-espresso">Spiritual & Wellness</option>
                      <option value="shopping" className="bg-espresso">Shopping & Markets</option>
                      <option value="other" className="bg-espresso">Other</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full relative px-6 py-4 bg-terracotta text-cream rounded-xl font-medium text-sm overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(196,112,79,0.3)] mt-1"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Start Earning with Yoourguide
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </motion.button>

                  <p className="text-center text-[10px] text-cream/15 mt-3">
                    No setup fees. Cancel anytime. Keep 100% of your earnings.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
