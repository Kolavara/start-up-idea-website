'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useTheme } from './ThemeProvider'

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1]

export default function Hero() {
  const router = useRouter()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="hero" className="relative min-h-[100dvh] w-full overflow-hidden">
      {/* Background Video — no poster to prevent old image flash */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://pollen-batch-41236914.figma.site/_components/v2/f0ee2dae7671c170c34f12e31c4cb41418976c98/769c564298c132f7919405cd9f17c1b1231f341d.769c5642.mp4"
          type="video/mp4"
        />
      </video>

      {/* Fallback background while video loads — dark gradient */}
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #0f0c0a 0%, #1a1410 50%, #0f0c0a 100%)'
            : 'linear-gradient(135deg, #1a1410 0%, #2a221a 50%, #1a1410 100%)',
        }}
      />

      {/* Subtle top vignette for nav area */}
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 100%)',
        }}
      />

      {/* Bottom gradient for smooth scroll transition to next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-56 pointer-events-none z-[1]"
        style={{
          background: isDark
            ? 'linear-gradient(0deg, rgba(15,12,10,1) 0%, rgba(15,12,10,0.4) 60%, transparent 100%)'
            : 'linear-gradient(0deg, rgba(21,17,16,1) 0%, rgba(21,17,16,0.5) 50%, transparent 100%)',
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-[2] max-w-[1360px] mx-auto min-h-[100dvh] flex flex-col">
        {/* Hero Content — centered */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-8 text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-[rgba(21,17,16,0.65)] backdrop-blur-md border border-white/20 text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
              Authentic India Experiences
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.02em] text-white mt-2 mb-2 max-w-[820px] drop-shadow-2xl [text-shadow:_-1px_-1px_0_rgba(0,0,0,0.8),_1px_-1px_0_rgba(0,0,0,0.8),_-1px_1px_0_rgba(0,0,0,0.8),_1px_1px_0_rgba(0,0,0,0.8)]"
          >
            You travel thousands of miles to see India.
            <br />
            <span className="text-terracotta italic">But do you feel it?</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 32, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, delay: 0.4, ease }}
            className="text-lg md:text-xl font-medium text-terracotta max-w-[580px] leading-relaxed mb-4"
          >
            Explore India&apos;s majestic history with Govt. Certified Guides, or feel the heartbeat of the streets with passionate Local Companions.
          </motion.p>

          {/* Dual Path Cards — The Divergent Path */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5, ease }}
            id="hero-cta"
            className="w-full max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-5">
              {/* Option A: Certified Guides */}
              <motion.button
                onClick={() => router.push('/search/guides')}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex-1 flex flex-col items-center text-center px-6 py-4 md:py-6 rounded-[2rem] border border-white/20 bg-[rgba(21,17,16,0.75)] backdrop-blur-xl transition-all duration-500 hover:bg-[rgba(21,17,16,0.85)] hover:border-terracotta/40 hover:shadow-[0_20px_60px_rgba(196,112,79,0.15)] overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-terracotta/[0.06] to-transparent" />
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-terracotta/15 border border-terracotta/25 flex items-center justify-center mb-3 group-hover:bg-terracotta/25 group-hover:border-terracotta/40 transition-all duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta">
                    <path d="M12 2v20M2 12h20" />
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15 9l-6 6M9 9l6 6" />
                    <path d="M8 12h8" />
                  </svg>
                </div>

                <h3 className="font-display text-xl md:text-2xl text-white mb-2 tracking-tight">
                  Deep Dive into History
                </h3>
                <p className="text-sm text-white/60 max-w-xs leading-relaxed mb-3">
                  Govt. Certified Guides — licensed professionals who bring India&apos;s monuments, forts, and stories to life.
                </p>

                {/* Badge */}
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[9px] uppercase tracking-[0.15em] font-semibold bg-white/[0.08] border border-white/[0.12] text-white/50 group-hover:text-terracotta group-hover:border-terracotta/30 group-hover:bg-terracotta/10 transition-all duration-500">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Certified & Verified
                </span>
              </motion.button>

              {/* Or Divider */}
              <div className="flex items-center justify-center md:flex-col gap-2 shrink-0">
                <div className="hidden md:block w-px h-8 bg-white/10" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/25">Or</span>
                <div className="hidden md:block w-px h-8 bg-white/10" />
                <div className="md:hidden h-px w-8 bg-white/10" />
              </div>

              {/* Option B: Local Companions */}
              <motion.button
                onClick={() => router.push('/search/companions')}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex-1 flex flex-col items-center text-center px-6 py-4 md:py-6 rounded-[2rem] border border-white/20 bg-[rgba(21,17,16,0.75)] backdrop-blur-xl transition-all duration-500 hover:bg-[rgba(21,17,16,0.85)] hover:border-sage/40 hover:shadow-[0_20px_60px_rgba(156,175,136,0.15)] overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-sage/[0.06] to-transparent" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-sage/15 border border-sage/25 flex items-center justify-center mb-3 group-hover:bg-sage/25 group-hover:border-sage/40 transition-all duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>

                <h3 className="font-display text-xl md:text-2xl text-white mb-2 tracking-tight">
                  Feel the City&apos;s Pulse
                </h3>
                <p className="text-sm text-white/60 max-w-xs leading-relaxed mb-3">
                  Local Companions — passionate insiders for unscripted street food, hidden gems, and authentic cultural connection.
                </p>

                {/* Badge */}
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[9px] uppercase tracking-[0.15em] font-semibold bg-white/[0.08] border border-white/[0.12] text-white/50 group-hover:text-sage group-hover:border-sage/30 group-hover:bg-sage/10 transition-all duration-500">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                  Authentic & Personal
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7, ease }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-4 pt-4 border-t border-white/10 w-full max-w-3xl mx-auto"
          >
            {[
              { value: '200+', label: 'Certified Guides' },
              { value: '500+', label: 'Local Companions' },
              { value: '48', label: 'Cities' },
              { value: '4.9★', label: 'Avg Rating' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 md:gap-8">
                {i > 0 && <div className="hidden sm:block w-px h-10 bg-white/10" />}
                <div>
                  <span className="block text-xl md:text-2xl font-display text-white">{stat.value}</span>
                  <span className="text-[10px] text-white/40 tracking-wider uppercase">{stat.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2]"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent"
        />
      </motion.div>
    </section>
  )
}
