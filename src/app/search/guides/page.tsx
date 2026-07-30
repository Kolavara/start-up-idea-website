'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTheme } from '@/components/ThemeProvider'

interface CertifiedGuide {
  id: number
  name: string
  city: string
  state: string
  monument: string
  specialties: string[]
  rating: number
  reviews: number
  experience: string
  bio: string
  avatar: string
  languages: string[]
  hourlyRate: string
  available: boolean
  featured: boolean
  licenseNumber: string
}

const certifiedGuides: CertifiedGuide[] = [
  {
    id: 1,
    name: 'Dr. Ravi Sharma',
    city: 'Jaipur',
    state: 'Rajasthan',
    monument: 'Amber Fort',
    specialties: ['Mughal Architecture', 'Ancient History', 'Rajput Heritage'],
    rating: 4.9,
    reviews: 284,
    experience: '12 years',
    bio: 'Historian with a PhD in Mughal Architecture. I bring every stone of Amber Fort to life with stories spanning four centuries.',
    avatar: 'RS',
    languages: ['Hindi', 'English', 'Rajasthani', 'Urdu'],
    hourlyRate: '₹1,500',
    available: true,
    featured: true,
    licenseNumber: 'GUIDE-RJ-2012-0042',
  },
  {
    id: 2,
    name: 'Prof. Arjun Mehta',
    city: 'Agra',
    state: 'Uttar Pradesh',
    monument: 'Taj Mahal',
    specialties: ['Mughal History', 'Islamic Architecture', 'Gemology'],
    rating: 5.0,
    reviews: 412,
    experience: '18 years',
    bio: 'Former university professor specializing in Mughal history. My Taj Mahal tours reveal secrets most guides never mention.',
    avatar: 'AM',
    languages: ['Hindi', 'English', 'Persian'],
    hourlyRate: '₹2,000',
    available: true,
    featured: true,
    licenseNumber: 'GUIDE-UP-2006-0017',
  },
  {
    id: 3,
    name: 'Sunita Verma',
    city: 'Delhi',
    state: 'Delhi',
    monument: 'Red Fort',
    specialties: ['Colonial History', 'Mughal Architecture', 'Heritage Walks'],
    rating: 4.8,
    reviews: 198,
    experience: '8 years',
    bio: 'Delhi history expert with a focus on the Red Fort and Old Delhi. Every alley has a story, and I know them all.',
    avatar: 'SV',
    languages: ['Hindi', 'English', 'Punjabi'],
    hourlyRate: '₹1,200',
    available: true,
    featured: false,
    licenseNumber: 'GUIDE-DL-2016-0091',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    city: 'Jaipur',
    state: 'Rajasthan',
    monument: 'Hawa Mahal',
    specialties: ['Rajput History', 'Astronomy in Architecture', 'Photography'],
    rating: 4.7,
    reviews: 156,
    experience: '10 years',
    bio: 'Architectural historian who reads buildings like books. The Hawa Mahal has 953 windows — I know why each one was built.',
    avatar: 'VS',
    languages: ['Hindi', 'English', 'Rajasthani'],
    hourlyRate: '₹1,300',
    available: false,
    featured: false,
    licenseNumber: 'GUIDE-RJ-2014-0056',
  },
  {
    id: 5,
    name: 'Priya Nair',
    city: 'Mumbai',
    state: 'Maharashtra',
    monument: 'Gateway of India',
    specialties: ['Colonial History', 'Maritime Heritage', 'Art Deco Architecture'],
    rating: 4.9,
    reviews: 223,
    experience: '9 years',
    bio: 'Mumbai through the eyes of a trained historian. From the Gateway of India to the Art Deco district — a journey through coastal Bombay.',
    avatar: 'PN',
    languages: ['Hindi', 'English', 'Marathi', 'Malayalam'],
    hourlyRate: '₹1,400',
    available: true,
    featured: true,
    licenseNumber: 'GUIDE-MH-2015-0034',
  },
  {
    id: 6,
    name: 'Mohammad Irfan',
    city: 'Agra',
    state: 'Uttar Pradesh',
    monument: 'Taj Mahal',
    specialties: ['Mughal History', 'Islamic Calligraphy', 'Gardens & Water Systems'],
    rating: 4.9,
    reviews: 345,
    experience: '15 years',
    bio: 'Fifth-generation Agra resident. My great-grandfather worked in the gardens here. The Taj Mahal is not just a monument — it is family history.',
    avatar: 'MI',
    languages: ['Hindi', 'English', 'Urdu', 'Arabic'],
    hourlyRate: '₹1,800',
    available: true,
    featured: false,
    licenseNumber: 'GUIDE-UP-2009-0028',
  },
  {
    id: 7,
    name: 'Lakshmi Devi',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    monument: 'Kashi Vishwanath Temple',
    specialties: ['Spiritual History', 'Ancient Rituals', 'Ghat Architecture'],
    rating: 4.8,
    reviews: 267,
    experience: '14 years',
    bio: 'Varanasi born and raised. I guide you through 3,000 years of living history — from the ghats to the temples, from dawn aarti to midnight stories.',
    avatar: 'LD',
    languages: ['Hindi', 'English', 'Bhojpuri', 'Sanskrit'],
    hourlyRate: '₹1,100',
    available: true,
    featured: false,
    licenseNumber: 'GUIDE-UP-2010-0039',
  },
  {
    id: 8,
    name: 'Raj Kapoor',
    city: 'Delhi',
    state: 'Delhi',
    monument: 'Qutub Minar',
    specialties: ['Medieval History', 'Archaeology', 'Indo-Islamic Architecture'],
    rating: 4.7,
    reviews: 189,
    experience: '11 years',
    bio: 'Archaeologist and guide. The Qutub Minar complex holds layers of Delhi&apos;s history — I uncover them layer by layer.',
    avatar: 'RK',
    languages: ['Hindi', 'English'],
    hourlyRate: '₹1,250',
    available: false,
    featured: false,
    licenseNumber: 'GUIDE-DL-2013-0078',
  },
  {
    id: 9,
    name: 'Ananya Gupta',
    city: 'Udaipur',
    state: 'Rajasthan',
    monument: 'City Palace Udaipur',
    specialties: ['Rajput Heritage', 'Miniature Painting', 'Palace Architecture'],
    rating: 4.8,
    reviews: 178,
    experience: '7 years',
    bio: 'Art historian specializing in Rajput miniature paintings. The City Palace is a living gallery — let me walk you through it.',
    avatar: 'AG',
    languages: ['Hindi', 'English', 'Mewari'],
    hourlyRate: '₹1,300',
    available: true,
    featured: false,
    licenseNumber: 'GUIDE-RJ-2017-0065',
  },
]

const cities = ['All Cities', 'Agra', 'Jaipur', 'Delhi', 'Varanasi', 'Mumbai', 'Udaipur']
const monuments = ['All Monuments', 'Taj Mahal', 'Amber Fort', 'Red Fort', 'Hawa Mahal', 'Gateway of India', 'Qutub Minar', 'City Palace Udaipur', 'Kashi Vishwanath Temple']
const languageOptions = ['All Languages', 'Hindi', 'English', 'Rajasthani', 'Marathi', 'Malayalam', 'Urdu', 'Bhojpuri', 'Sanskrit', 'Persian', 'Arabic', 'Punjabi', 'Mewari']
const experienceRanges = ['Any Experience', '0-5 years', '5-10 years', '10-15 years', '15+ years']

export default function SearchGuidesPage() {
  const [selectedCity, setSelectedCity] = useState('All Cities')
  const [selectedMonument, setSelectedMonument] = useState('All Monuments')
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages')
  const [selectedExperience, setSelectedExperience] = useState('Any Experience')
  const [sortBy, setSortBy] = useState<'rating' | 'reviews' | 'experience'>('rating')
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const filteredGuides = useMemo(() => {
    let result = [...certifiedGuides]

    if (selectedCity !== 'All Cities') {
      result = result.filter((g) => g.city === selectedCity)
    }
    if (selectedMonument !== 'All Monuments') {
      result = result.filter((g) => g.monument === selectedMonument)
    }
    if (selectedLanguage !== 'All Languages') {
      result = result.filter((g) => g.languages.includes(selectedLanguage))
    }
    if (selectedExperience !== 'Any Experience') {
      result = result.filter((g) => {
        const years = parseInt(g.experience)
        if (selectedExperience === '0-5 years') return years <= 5
        if (selectedExperience === '5-10 years') return years > 5 && years <= 10
        if (selectedExperience === '10-15 years') return years > 10 && years <= 15
        if (selectedExperience === '15+ years') return years > 15
        return true
      })
    }

    result.sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'reviews') return b.reviews - a.reviews
      return parseInt(b.experience) - parseInt(a.experience)
    })

    return result
  }, [selectedCity, selectedMonument, selectedLanguage, selectedExperience, sortBy])

  const selectClasses = `px-4 py-2.5 pr-10 rounded-xl text-sm focus:outline-none transition-colors appearance-none cursor-pointer ${
    isDark
      ? 'bg-[#221b14] border border-sand/10 text-cream focus:border-terracotta/50'
      : 'bg-white border border-sand/40 text-espresso focus:border-terracotta/50'
  }`

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#0f0c0a]' : 'bg-cream'}`}>
      <Navbar />

      {/* Hero */}
      <section className={`relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-gradient-to-b from-[#1a1410] to-[#0f0c0a]' : 'bg-gradient-to-b from-linen to-cream'
      }`}>
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-terracotta/10 blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-sage/10 blur-[80px]" />

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
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 bg-terracotta/10 border border-terracotta/20 text-terracotta">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Govt. Certified Guides
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={`font-display text-[clamp(2rem,5vw,4rem)] leading-[1.08] tracking-tight mb-4 transition-colors duration-500 ${
              isDark ? 'text-cream' : 'text-espresso'
            }`}>
              Deep Dive into History
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`text-lg max-w-2xl leading-relaxed mb-6 transition-colors duration-500 ${
              isDark ? 'text-cream/50' : 'text-charcoal/50'
            }`}>
              Browse India&apos;s finest Govt. Certified Guides — licensed professionals with deep expertise in monuments, forts, and the stories that shaped this extraordinary land.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className={`flex items-center gap-3 text-sm transition-colors duration-500 ${
              isDark ? 'text-cream/40' : 'text-charcoal/40'
            }`}>
              <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              {filteredGuides.filter(g => g.available).length} certified guides available now
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
            <div className="relative">
              <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className={selectClasses}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239E9E9E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="relative">
              <select value={selectedMonument} onChange={(e) => setSelectedMonument(e.target.value)} className={selectClasses}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239E9E9E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
                {monuments.map((m) => <option key={m} value={m}>{m === 'All Monuments' ? 'All Monuments' : `🏛️ ${m}`}</option>)}
              </select>
            </div>

            <div className="relative">
              <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className={selectClasses}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239E9E9E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
                {languageOptions.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>

            <div className="relative">
              <select value={selectedExperience} onChange={(e) => setSelectedExperience(e.target.value)} className={selectClasses}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239E9E9E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
                {experienceRanges.map((e) => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>

            <div className="relative">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as typeof sortBy)} className={selectClasses}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239E9E9E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
                <option value="rating">Top Rated</option>
                <option value="reviews">Most Reviewed</option>
                <option value="experience">Most Experienced</option>
              </select>
            </div>

            {(selectedCity !== 'All Cities' || selectedMonument !== 'All Monuments' || selectedLanguage !== 'All Languages' || selectedExperience !== 'Any Experience') && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => {
                  setSelectedCity('All Cities')
                  setSelectedMonument('All Monuments')
                  setSelectedLanguage('All Languages')
                  setSelectedExperience('Any Experience')
                }}
                className="text-xs text-terracotta hover:text-terracotta/80 font-medium transition-colors whitespace-nowrap"
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
          {filteredGuides.length === 0 ? (
            <Reveal>
              <div className="text-center py-20">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${isDark ? 'bg-sand/10' : 'bg-sand/30'}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={isDark ? 'text-cream/30' : 'text-charcoal/30'}>
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
                <h3 className={`font-display text-xl mb-2 transition-colors duration-500 ${isDark ? 'text-cream' : 'text-espresso'}`}>No guides found</h3>
                <p className={`text-sm transition-colors duration-500 ${isDark ? 'text-cream/40' : 'text-charcoal/40'}`}>Try adjusting your filters to find more certified guides.</p>
              </div>
            </Reveal>
          ) : (
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.map((guide) => (
                <StaggerItem key={guide.id}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className={`group relative rounded-[2rem] border overflow-hidden transition-all duration-500 ${
                      isDark
                        ? 'bg-[#221b14] border-sand/10 hover:border-terracotta/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]'
                        : 'bg-white border-sand/30 hover:border-terracotta/20 hover:shadow-[0_12px_40px_rgba(60,36,21,0.06)]'
                    }`}
                  >
                    {/* Govt Certified Badge */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-terracotta/10 border border-terracotta/20 backdrop-blur-sm flex items-center gap-1.5">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-terracotta">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      <span className="text-[8px] uppercase tracking-[0.15em] font-semibold text-terracotta">Govt. Certified</span>
                    </div>

                    {guide.featured && (
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-sage/10 border border-sage/20 text-[10px] uppercase tracking-[0.15em] font-semibold text-sage">
                        Featured
                      </div>
                    )}

                    {/* Header with avatar */}
                    <div className="relative h-36 bg-gradient-to-br from-terracotta/80 to-espresso flex items-end p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-cream/10 backdrop-blur-sm border border-cream/20 flex items-center justify-center text-lg font-display text-cream shadow-lg">
                          {guide.avatar}
                        </div>
                        <div>
                          <h3 className="font-display text-lg text-cream tracking-tight">{guide.name}</h3>
                          <p className="text-xs text-cream/60 flex items-center gap-1.5">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cream/40">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {guide.city}, {guide.state}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Monument & Rating */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full transition-colors duration-500 ${
                          isDark ? 'bg-cream/5 text-cream/50' : 'bg-espresso/5 text-charcoal/50'
                        }`}>
                          🏛️ {guide.monument}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-terracotta">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          <span className={`text-sm font-semibold ${isDark ? 'text-cream' : 'text-espresso'}`}>{guide.rating}</span>
                          <span className={`text-xs ${isDark ? 'text-cream/30' : 'text-charcoal/30'}`}>({guide.reviews})</span>
                        </div>
                      </div>

                      {/* Specialties */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {guide.specialties.map((s) => (
                          <span key={s} className={`text-[10px] px-2 py-0.5 rounded-full transition-colors duration-500 ${
                            isDark ? 'text-terracotta/70 bg-terracotta/10' : 'text-terracotta/70 bg-terracotta/5'
                          }`}>
                            {s}
                          </span>
                        ))}
                      </div>

                      <p className={`text-sm leading-relaxed mb-4 line-clamp-2 transition-colors duration-500 ${isDark ? 'text-cream/50' : 'text-charcoal/50'}`}>
                        {guide.bio}
                      </p>

                      {/* Languages */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {guide.languages.slice(0, 3).map((lang) => (
                          <span key={lang} className={`text-[10px] px-2 py-0.5 rounded-full transition-colors duration-500 ${
                            isDark ? 'text-cream/40 bg-sand/10' : 'text-charcoal/40 bg-sand/30'
                          }`}>
                            {lang}
                          </span>
                        ))}
                        {guide.languages.length > 3 && (
                          <span className={`text-[10px] px-2 py-0.5 rounded-full transition-colors duration-500 ${
                            isDark ? 'text-cream/30 bg-sand/5' : 'text-charcoal/30 bg-sand/20'
                          }`}>
                            +{guide.languages.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Bottom row */}
                      <div className={`flex items-center justify-between pt-5 border-t transition-colors duration-500 ${isDark ? 'border-sand/10' : 'border-sand/30'}`}>
                        <div>
                          <span className={`block text-xs transition-colors duration-500 ${isDark ? 'text-cream/30' : 'text-charcoal/30'}`}>License since</span>
                          <span className={`text-sm font-medium transition-colors duration-500 ${isDark ? 'text-cream' : 'text-espresso'}`}>{guide.experience}</span>
                        </div>
                        <div className="text-right">
                          <span className={`block text-xs transition-colors duration-500 ${isDark ? 'text-cream/30' : 'text-charcoal/30'}`}>Starts at</span>
                          <span className={`text-sm font-semibold transition-colors duration-500 ${isDark ? 'text-cream' : 'text-espresso'}`}>{guide.hourlyRate}/hr</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={!guide.available}
                          className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                            guide.available
                              ? 'bg-terracotta text-cream hover:shadow-[0_4px_16px_rgba(196,112,79,0.25)]'
                              : isDark ? 'bg-sand/10 text-cream/30 cursor-not-allowed' : 'bg-sand/30 text-charcoal/30 cursor-not-allowed'
                          }`}
                        >
                          {guide.available ? 'Book a Tour' : 'Unavailable'}
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
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-terracotta/20 blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-sage/20 blur-[50px]" />
              <div className="relative">
                <h2 className="font-display text-2xl md:text-3xl text-cream mb-4 tracking-tight">
                  Don&apos;t see your monument?
                </h2>
                <p className="text-sm text-cream/40 mb-8 max-w-md mx-auto">
                  We work with certified guides at every major historical site across India. Tell us where you&apos;re going and we&apos;ll find the perfect guide.
                </p>
                <motion.a
                  href="mailto:hello@yoourguide.com"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-cream text-espresso rounded-full font-medium text-sm transition-shadow hover:shadow-[0_8px_30px_rgba(253,251,247,0.15)]"
                >
                  Request a Guide Match
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
