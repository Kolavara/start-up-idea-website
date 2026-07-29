'use client'

import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { createScrollHandler } from '@/lib/scroll'
import { useTheme } from './ThemeProvider'

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1]

export default function Hero() {
  const pathname = usePathname()
  const router = useRouter()
  const scrollToHash = createScrollHandler(pathname, router.push)
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
        <div className="flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-24 text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-white/[0.08] border border-white/[0.12] text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
              Authentic India Experiences
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.02em] text-white mt-8 mb-8 max-w-[820px] drop-shadow-2xl [text-shadow:_-1px_-1px_0_rgba(0,0,0,0.8),_1px_-1px_0_rgba(0,0,0,0.8),_-1px_1px_0_rgba(0,0,0,0.8),_1px_1px_0_rgba(0,0,0,0.8)]"
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
            className="text-xl font-medium text-white max-w-[500px] leading-relaxed mb-10 drop-shadow-xl [text-shadow:_-1px_-1px_0_rgba(0,0,0,0.8),_1px_-1px_0_rgba(0,0,0,0.8),_-1px_1px_0_rgba(0,0,0,0.8),_1px_1px_0_rgba(0,0,0,0.8)]"
          >
            Traditional tours show you the monuments. We connect you with passionate local buddies who reveal the soul of every city.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5, ease }}
            id="hero-cta"
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => scrollToHash('#how-it-works')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium overflow-hidden bg-white text-espresso transition-all duration-300 hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]"
            >
              <span className="relative z-10">Find Your Local Buddy</span>
              <span className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center bg-espresso/10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollToHash('#cta')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-medium transition-all duration-300 bg-terracotta text-white shadow-lg shadow-terracotta/20 hover:bg-[#b06041]"
            >
              <span>Become a Guide</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6, ease }}
            className="flex items-center gap-8 mt-14 pt-8 border-t border-white/10"
          >
            {[
              { value: '500+', label: 'Local Buddies' },
              { value: '48', label: 'Cities' },
              { value: '4.9★', label: 'Avg Rating' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                {i > 0 && <div className="w-px h-10 bg-white/10" />}
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
