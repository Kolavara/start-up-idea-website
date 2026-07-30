'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTheme } from '@/components/ThemeProvider'

interface Companion {
  id: number
  name: string
  city: string
  vibe: string
  rating: number
  reviews: number
  bio: string
  avatar: string
  languages: string[]
  rate: string
  available: boolean
  featured: boolean
  female: boolean
  persona: string
  age: number
}

const companions: Companion[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    city: 'Mumbai',
    vibe: 'Street Food',
    rating: 4.9,
    reviews: 156,
    bio: 'Food blogger by passion, companion by heart. I know every hole-in-the-wall eatery from Mohammed Ali Road to Fort. Come hungry!',
    avatar: 'PS',
    languages: ['Hindi', 'English', 'Marathi'],
    rate: '₹1,200',
    available: true,
    featured: true,
    female: true,
    persona: 'Food Blogger & Culinary Explorer',
    age: 27,
  },
  {
    id: 2,
    name: 'Rahul Verma',
    city: 'Jaipur',
    vibe: 'Photography',
    rating: 4.8,
    reviews: 123,
    bio: 'Architecture student and Instagrammer. I know the most photogenic corners of Jaipur — from sunrise at Hawa Mahal to golden hour at Nahargarh.',
    avatar: 'RV',
    languages: ['Hindi', 'English', 'Rajasthani'],
    rate: '₹1,000',
    available: true,
    featured: true,
    female: false,
    persona: 'Architecture Student & Street Photographer',
    age: 22,
  },
  {
    id: 3,
    name: 'Ananya Gupta',
    city: 'Delhi',
    vibe: 'Shopping',
    rating: 4.7,
    reviews: 98,
    bio: 'Fashion designer and market whisperer. From Chandni Chowk to Hauz Khas Village — I will find you treasures you will never find alone.',
    avatar: 'AG',
    languages: ['Hindi', 'English', 'Punjabi'],
    rate: '₹1,100',
    available: true,
    featured: false,
    female: true,
    persona: 'Fashion Designer & Vintage Hunter',
    age: 29,
  },
  {
    id: 4,
    name: 'Vikram Joshi',
    city: 'Goa',
    vibe: 'Nightlife',
    rating: 4.9,
    reviews: 178,
    bio: 'Goa nightlife insider. Beach parties, silent discos, hidden reggae bars, and sunrise chai spots that no tourist knows about.',
    avatar: 'VJ',
    languages: ['Konkani', 'English', 'Hindi'],
    rate: '₹1,500',
    available: true,
    featured: false,
    female: false,
    persona: 'Music Producer & Beach Hopper',
    age: 25,
  },
  {
    id: 5,
    name: 'Meera Nair',
    city: 'Kerala',
    vibe: 'Nature',
    rating: 4.8,
    reviews: 134,
    bio: 'Tea plantation worker turned nature guide. I know the backwaters, the spice gardens, and the quietest spots to watch a Kerala sunset.',
    avatar: 'MN',
    languages: ['Malayalam', 'English', 'Tamil'],
    rate: '₹900',
    available: true,
    featured: false,
    female: true,
    persona: 'Tea Planter & Nature Lover',
    age: 34,
  },
  {
    id: 6,
    name: 'Arjun Kapoor',
    city: 'Varanasi',
    vibe: 'Spiritual',
    rating: 5.0,
    reviews: 201,
    bio: 'Third-generation boatman on the Ganges. I take you beyond the tourist ghats — to the real Varanasi, the one that lives in its narrow alleys and ancient rituals.',
    avatar: 'AK',
    languages: ['Hindi', 'English', 'Bhojpuri'],
    rate: '₹800',
    available: true,
    featured: true,
    female: false,
    persona: 'Boatman & Spiritual Storyteller',
    age: 31,
  },
  {
    id: 7,
    name: 'Kavita Reddy',
    city: 'Hyderabad',
    vibe: 'Street Food',
    rating: 4.7,
    reviews: 89,
    bio: 'Hyderabadi foodie through and through. From the best biryani in Old City to hidden Irani chai spots — I will feed you through the city.',
    avatar: 'KR',
    languages: ['Telugu', 'Hindi', 'English', 'Urdu'],
    rate: '₹1,000',
    available: true,
    featured: false,
    female: true,
    persona: 'Home Chef & Food Historian',
    age: 26,
  },
  {
    id: 8,
    name: 'Ali Hussain',
    city: 'Lucknow',
    vibe: 'Shopping',
    rating: 4.6,
    reviews: 76,
    bio: 'Embroidery artist and Lucknow&apos;s best-kept secret. I will take you through chikankari workshops, heritage bakeries, and poetry gatherings.',
    avatar: 'AH',
    languages: ['Hindi', 'Urdu', 'English'],
    rate: '₹1,100',
    available: false,
    featured: false,
    female: false,
    persona: 'Embroidery Artist & Cultural Curator',
    age: 38,
  },
  {
    id: 9,
    name: 'Sarah D\'Souza',
    city: 'Goa',
    vibe: 'Arts',
    rating: 4.8,
    reviews: 112,
    bio: 'Painter and gallery owner. I know every street art mural, every indie gallery, and every creative corner of Goa beyond the beaches.',
    avatar: 'SD',
    languages: ['English', 'Konkani', 'Portuguese'],
    rate: '₹1,300',
    available: true,
    featured: false,
    female: true,
    persona: 'Painter & Gallery Curator',
    age: 30,
  },
  {
    id: 10,
    name: 'Rohan Desai',
    city: 'Mumbai',
    vibe: 'Nightlife',
    rating: 4.6,
    reviews: 67,
    bio: 'Bandra boy through and through. Rooftop bars, underground music venues, and late-night chai at the best tapris in the city.',
    avatar: 'RD',
    languages: ['Hindi', 'English', 'Marathi'],
    rate: '₹1,400',
    available: true,
    featured: false,
    female: false,
    persona: 'Music Curator & Night Owl',
    age: 24,
  },
  {
    id: 11,
    name: 'Deepika Roy',
    city: 'Delhi',
    vibe: 'Photography',
    rating: 4.9,
    reviews: 145,
    bio: 'Travel photographer and Delhi chronicler. From Lodi Gardens at dawn to the chaotic beauty of Chandni Chowk — I will help you capture Delhi.',
    avatar: 'DR',
    languages: ['Hindi', 'English'],
    rate: '₹1,200',
    available: true,
    featured: true,
    female: true,
    persona: 'Travel Photographer & Storyteller',
    age: 28,
  },
  {
    id: 12,
    name: 'Lakshmi Patel',
    city: 'Udaipur',
    vibe: 'Arts',
    rating: 4.7,
    reviews: 93,
    bio: 'Miniature painter from a family of Mewar artists. I will show you the City of Lakes through the eyes of its artists — from Pichwai paintings to sunset boat rides.',
    avatar: 'LP',
    languages: ['Hindi', 'English', 'Mewari'],
    rate: '₹1,000',
    available: true,
    featured: false,
    female: true,
    persona: 'Miniature Artist & Lake Lover',
    age: 35,
  },
]

const cities = ['All Cities', 'Mumbai', 'Jaipur', 'Delhi', 'Goa', 'Varanasi', 'Kerala', 'Hyderabad', 'Lucknow', 'Udaipur']
const vibes = ['All Vibes', 'Street Food', 'Photography', 'Shopping', 'Nightlife', 'Nature', 'Spiritual', 'Arts']
const languageOptions = ['All Languages', 'Hindi', 'English', 'Marathi', 'Rajasthani', 'Punjabi', 'Konkani', 'Malayalam', 'Telugu', 'Urdu', 'Bhojpuri', 'Mewari', 'Tamil', 'Portuguese']

export default function SearchCompanionsPage() {
  const [selectedCity, setSelectedCity] = useState('All Cities')
  const [selectedVibe, setSelectedVibe] = useState('All Vibes')
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages')
  const [showFemaleOnly, setShowFemaleOnly] = useState(false)
  const [sortBy, setSortBy] = useState<'rating' | 'reviews'>('rating')
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const filteredCompanions = useMemo(() => {
    let result = [...companions]

    if (selectedCity !== 'All Cities') {
      result = result.filter((c) => c.city === selectedCity)
    }
    if (selectedVibe !== 'All Vibes') {
      result = result.filter((c) => c.vibe === selectedVibe)
    }
    if (selectedLanguage !== 'All Languages') {
      result = result.filter((c) => c.languages.includes(selectedLanguage))
    }
    if (showFemaleOnly) {
      result = result.filter((c) => c.female === true)
    }

    result = result.filter((c) => c.available)

    result.sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'reviews') return b.reviews - a.reviews
      return 0
    })

    return result
  }, [selectedCity, selectedVibe, selectedLanguage, showFemaleOnly, sortBy])

  const selectClasses = `px-4 py-2.5 pr-10 rounded-xl text-sm focus:outline-none transition-colors appearance-none cursor-pointer ${
    isDark
      ? 'bg-[#221b14] border border-sand/10 text-cream focus:border-sage/50'
      : 'bg-white border border-sand/40 text-espresso focus:border-sage/50'
  }`

  const vibeEmojis: Record<string, string> = {
    'Street Food': '🍜',
    'Photography': '📸',
    'Shopping': '🛍️',
    'Nightlife': '🌙',
    'Nature': '🌿',
    'Spiritual': '🕉️',
    'Arts': '🎨',
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#0f0c0a]' : 'bg-cream'}`}>
      <Navbar />

      {/* Hero */}
      <section className={`relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-gradient-to-b from-[#1a1410] to-[#0f0c0a]' : 'bg-gradient-to-b from-linen to-cream'
      }`}>
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-sage/15 blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-terracotta/10 blur-[80px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <Link href="/" className={`inline-flex items-center gap-2 text-sm transition-colors mb-8 ${
              isDark ? 'text-cream/40 hover:text-cream' : 'text-charcoal/40 hover:text-espresso'
            }`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </Reveal>

          <Reveal>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 bg-sage/10 border border-sage/20 text-sage">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Verified Local Companions
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={`font-display text-[clamp(2rem,5vw,4rem)] leading-[1.08] tracking-tight mb-4 transition-colors duration-500 ${
              isDark ? 'text-cream' : 'text-espresso'
            }`}>
              Feel the City&apos;s Pulse
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`text-lg max-w-2xl leading-relaxed mb-6 transition-colors duration-500 ${
              isDark ? 'text-cream/50' : 'text-charcoal/50'
            }`}>
              Meet authentic Local Companions — students, artists, foodies, and storytellers who want to share their city with you. No scripts, no schedules. Just real connection.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className={`flex items-center gap-3 text-sm transition-colors duration-500 ${
              isDark ? 'text-cream/40' : 'text-charcoal/40'
            }`}>
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              {filteredCompanions.length} companions available now
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className={`sticky top-20 z-20 backdrop-blur-xl border-b transition-colors duration-500 ${
        isDark ? 'bg-[#0f0c0a]/80 border-sand/10' : 'bg-cream/80 border-sand/30'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 md:py-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* City */}
            <div className="relative">
              <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className={selectClasses}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239E9E9E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Vibe / Interest */}
            <div className="relative">
              <select value={selectedVibe} onChange={(e) => setSelectedVibe(e.target.value)} className={selectClasses}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239E9E9E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
                {vibes.map((v) => (
                  <option key={v} value={v}>{v === 'All Vibes' ? v : `${vibeEmojis[v] || ''} ${v}`}</option>
                ))}
              </select>
            </div>

            {/* Language */}
            <div className="relative">
              <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className={selectClasses}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239E9E9E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
                {languageOptions.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>

            {/* Sort */}
            <div className="relative">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)} className={selectClasses}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239E9E9E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
                <option value="rating">Top Rated</option>
                <option value="reviews">Most Reviewed</option>
              </select>
            </div>

            {/* Female-only toggle */}
            <label
              onClick={() => setShowFemaleOnly(!showFemaleOnly)}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm cursor-pointer select-none transition-all duration-300 border ${
              showFemaleOnly
                ? isDark
                  ? 'bg-sage/10 border-sage/30 text-sage'
                  : 'bg-sage/10 border-sage/30 text-sage'
                : isDark
                  ? 'bg-transparent border-sand/10 text-cream/50 hover:border-sand/20'
                  : 'bg-transparent border-sand/30 text-charcoal/50 hover:border-sand/50'
            }`}>
              <div className={`relative w-9 h-5 rounded-full transition-colors duration-300 ${
                showFemaleOnly ? 'bg-sage' : isDark ? 'bg-sand/20' : 'bg-sand/40'
              }`}>
                <motion.div
                  animate={{ x: showFemaleOnly ? 16 : 2 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  className="absolute top-1 w-3.5 h-3.5 rounded-full bg-white shadow-sm"
                />
              </div>
              <span className="text-[11px] font-medium whitespace-nowrap">Show Female Companions Only</span>
            </label>

            {/* Clear */}
            {(selectedCity !== 'All Cities' || selectedVibe !== 'All Vibes' || selectedLanguage !== 'All Languages' || showFemaleOnly) && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => {
                  setSelectedCity('All Cities')
                  setSelectedVibe('All Vibes')
                  setSelectedLanguage('All Languages')
                  setShowFemaleOnly(false)
                }}
                className="text-xs text-sage hover:text-sage/80 font-medium transition-colors whitespace-nowrap"
              >
                Clear filters ×
              </motion.button>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {filteredCompanions.length === 0 ? (
            <Reveal>
              <div className="text-center py-20">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${isDark ? 'bg-sand/10' : 'bg-sand/30'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={isDark ? 'text-cream/30' : 'text-charcoal/30'}>
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
                <h3 className={`font-display text-xl mb-2 transition-colors duration-500 ${isDark ? 'text-cream' : 'text-espresso'}`}>No companions found</h3>
                <p className={`text-sm transition-colors duration-500 ${isDark ? 'text-cream/40' : 'text-charcoal/40'}`}>Try adjusting your filters to find more companions.</p>
              </div>
            </Reveal>
          ) : (
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanions.map((companion) => (
                <StaggerItem key={companion.id}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className={`group relative rounded-[2rem] border overflow-hidden transition-all duration-500 ${
                      isDark
                        ? 'bg-[#221b14] border-sand/10 hover:border-sage/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]'
                        : 'bg-white border-sand/30 hover:border-sage/30 hover:shadow-[0_12px_40px_rgba(60,36,21,0.06)]'
                    }`}
                  >
                    {/* Verified Local badge */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-sage/10 border border-sage/20 backdrop-blur-sm flex items-center gap-1.5">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span className="text-[8px] uppercase tracking-[0.15em] font-semibold text-sage">Verified Local</span>
                    </div>

                    {companion.featured && (
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-terracotta/10 border border-terracotta/20 text-[10px] uppercase tracking-[0.15em] font-semibold text-terracotta">
                        Popular
                      </div>
                    )}

                    {/* Header — colorful gradient with persona */}
                    <div className="relative h-40 bg-gradient-to-br from-sage/70 to-espresso flex items-end p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-cream/10 backdrop-blur-sm border border-cream/20 flex items-center justify-center text-lg font-display text-cream shadow-lg">
                          {companion.avatar}
                        </div>
                        <div>
                          <h3 className="font-display text-lg text-cream tracking-tight">{companion.name}</h3>
                          <p className="text-xs text-cream/60 flex items-center gap-1.5">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cream/40">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {companion.city}
                            <span className="w-1 h-1 rounded-full bg-cream/20" />
                            {companion.age} yrs
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Persona & Rating */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[11px] font-medium transition-colors duration-500 ${isDark ? 'text-sage/80' : 'text-sage'}`}>
                          {companion.persona}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-sage">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          <span className={`text-sm font-semibold ${isDark ? 'text-cream' : 'text-espresso'}`}>{companion.rating}</span>
                          <span className={`text-xs ${isDark ? 'text-cream/30' : 'text-charcoal/30'}`}>({companion.reviews})</span>
                        </div>
                      </div>

                      {/* Vibe tag */}
                      <div className="mb-3">                          <span className="text-[10px] px-2.5 py-1 rounded-full font-medium transition-colors duration-500 bg-sage/10 text-sage/70">
                          {vibeEmojis[companion.vibe] || ''} {companion.vibe}
                        </span>
                      </div>

                      <p className={`text-sm leading-relaxed mb-4 line-clamp-2 transition-colors duration-500 ${isDark ? 'text-cream/50' : 'text-charcoal/50'}`}>
                        {companion.bio}
                      </p>

                      {/* Languages */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {companion.languages.map((lang) => (
                          <span key={lang} className={`text-[10px] px-2 py-0.5 rounded-full transition-colors duration-500 ${
                            isDark ? 'text-cream/40 bg-sand/10' : 'text-charcoal/40 bg-sand/30'
                          }`}>
                            {lang}
                          </span>
                        ))}
                      </div>

                      {/* Bottom row */}
                      <div className={`flex items-center justify-between pt-5 border-t transition-colors duration-500 ${isDark ? 'border-sand/10' : 'border-sand/30'}`}>
                        <div>
                          <span className={`block text-xs transition-colors duration-500 ${isDark ? 'text-cream/30' : 'text-charcoal/30'}`}>Starts at</span>
                          <span className={`text-sm font-semibold transition-colors duration-500 ${isDark ? 'text-cream' : 'text-espresso'}`}>{companion.rate}/exp</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={!companion.available}
                          className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                            companion.available
                              ? 'bg-sage text-cream hover:shadow-[0_4px_16px_rgba(156,175,136,0.25)]'
                              : isDark ? 'bg-sand/10 text-cream/30 cursor-not-allowed' : 'bg-sand/30 text-charcoal/30 cursor-not-allowed'
                          }`}
                        >
                          {companion.available ? 'Book Experience' : 'Unavailable'}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <div className="p-10 md:p-14 rounded-[2rem] bg-espresso relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-sage/20 blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-terracotta/20 blur-[50px]" />
              <div className="relative">
                <h2 className="font-display text-2xl md:text-3xl text-cream mb-4 tracking-tight">
                  Can&apos;t find your vibe?
                </h2>
                <p className="text-sm text-cream/40 mb-8 max-w-md mx-auto">
                  Tell us what kind of experience you&apos;re looking for and we&apos;ll match you with the perfect local companion.
                </p>
                <motion.a
                  href="mailto:hello@yoourguide.com"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-cream text-espresso rounded-full font-medium text-sm transition-shadow hover:shadow-[0_8px_30px_rgba(253,251,247,0.15)]"
                >
                  Get a Personal Match
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
