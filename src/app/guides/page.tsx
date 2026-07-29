'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useTheme } from '@/components/ThemeProvider'

interface Guide {
  id: number
  name: string
  city: string
  specialty: string
  rating: number
  reviews: number
  experience: string
  bio: string
  avatar: string
  languages: string[]
  hourlyRate: string
  available: boolean
  featured: boolean
}

const guides: Guide[] = [
  {
    id: 1,
    name: 'Ravi Sharma',
    city: 'Jaipur',
    specialty: 'History & Heritage',
    rating: 4.9,
    reviews: 284,
    experience: '8 years',
    bio: 'Born and raised in the Pink City. I know every hidden haveli, secret rooftop, and the best chai wallahs that tourists never find.',
    avatar: 'RS',
    languages: ['Hindi', 'English', 'Rajasthani'],
    hourlyRate: '₹1,200',
    available: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Priya Menon',
    city: 'Mumbai',
    specialty: 'Street Food & Culinary',
    rating: 4.9,
    reviews: 198,
    experience: '5 years',
    bio: 'Food writer turned local guide. I take you through Mumbai\'s incredible street food scene — from Mohammed Ali Road to hidden Irani cafes.',
    avatar: 'PM',
    languages: ['Hindi', 'English', 'Marathi'],
    hourlyRate: '₹1,500',
    available: true,
    featured: true,
  },
  {
    id: 3,
    name: 'Arjun Das',
    city: 'Varanasi',
    specialty: 'Spiritual & Wellness',
    rating: 5.0,
    reviews: 312,
    experience: '12 years',
    bio: 'Third-generation Varanasi resident. I share the spiritual depth of this ancient city — the ceremonies, the rituals, the stories behind every ghat.',
    avatar: 'AD',
    languages: ['Hindi', 'English', 'Bhojpuri'],
    hourlyRate: '₹1,000',
    available: true,
    featured: false,
  },
  {
    id: 4,
    name: 'Meera Iyer',
    city: 'Kerala',
    specialty: 'Nature & Outdoors',
    rating: 4.8,
    reviews: 156,
    experience: '6 years',
    bio: 'Backwater explorer and wildlife enthusiast. From houseboat stays to elephant sanctuaries, I show you the wild heart of Kerala.',
    avatar: 'MI',
    languages: ['Malayalam', 'English', 'Tamil'],
    hourlyRate: '₹1,300',
    available: true,
    featured: false,
  },
  {
    id: 5,
    name: 'Vikram Singh',
    city: 'Delhi',
    specialty: 'Art & Craft',
    rating: 4.7,
    reviews: 203,
    experience: '10 years',
    bio: 'Artist and historian. Delhi is a canvas of Mughal grandeur and modern creativity. I connect you with both worlds.',
    avatar: 'VS',
    languages: ['Hindi', 'English', 'Punjabi'],
    hourlyRate: '₹1,400',
    available: false,
    featured: false,
  },
  {
    id: 6,
    name: 'Ananya Rao',
    city: 'Goa',
    specialty: 'Nightlife & Entertainment',
    rating: 4.9,
    reviews: 178,
    experience: '4 years',
    bio: 'Beyond the beaches. I show you Goa\'s Portuguese heritage, silent forest trails, and the real music scene that locals love.',
    avatar: 'AR',
    languages: ['Konkani', 'English', 'Hindi'],
    hourlyRate: '₹1,100',
    available: true,
    featured: false,
  },
  {
    id: 7,
    name: 'Karan Patel',
    city: 'Udaipur',
    specialty: 'Culture & Traditions',
    rating: 4.8,
    reviews: 145,
    experience: '7 years',
    bio: 'The City of Lakes is my home. I take you behind palace walls, into artisan workshops, and to sunset points only locals know.',
    avatar: 'KP',
    languages: ['Hindi', 'English', 'Mewari'],
    hourlyRate: '₹1,200',
    available: true,
    featured: false,
  },
  {
    id: 8,
    name: 'Deepa Nair',
    city: 'Rishikesh',
    specialty: 'Spiritual & Wellness',
    rating: 4.9,
    reviews: 221,
    experience: '9 years',
    bio: 'Yoga teacher and mountain lover. From the Ganga aarti to hidden waterfalls, I guide you through Rishikesh\'s spiritual landscape.',
    avatar: 'DN',
    languages: ['Hindi', 'English', 'Malayalam'],
    hourlyRate: '₹900',
    available: true,
    featured: true,
  },
  {
    id: 9,
    name: 'Rohit Gupta',
    city: 'Jaipur',
    specialty: 'Shopping & Markets',
    rating: 4.7,
    reviews: 132,
    experience: '6 years',
    bio: 'Textile expert and market navigator. From Johari Bazaar to hidden block-printing studios, I help you find authentic treasures.',
    avatar: 'RG',
    languages: ['Hindi', 'English'],
    hourlyRate: '₹1,100',
    available: true,
    featured: false,
  },
]

const cities = ['All Cities', 'Jaipur', 'Varanasi', 'Mumbai', 'Delhi', 'Kerala', 'Goa', 'Udaipur', 'Rishikesh']
const specialties = ['All Specialties', 'History & Heritage', 'Street Food & Culinary', 'Spiritual & Wellness', 'Nature & Outdoors', 'Art & Craft', 'Nightlife & Entertainment', 'Culture & Traditions', 'Shopping & Markets']

export default function GuidesPage() {
  const [selectedCity, setSelectedCity] = useState('All Cities')
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties')
  const [sortBy, setSortBy] = useState<'rating' | 'reviews' | 'experience'>('rating')
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const filteredGuides = useMemo(() => {
    let result = [...guides]

    if (selectedCity !== 'All Cities') {
      result = result.filter((g) => g.city === selectedCity)
    }
    if (selectedSpecialty !== 'All Specialties') {
      result = result.filter((g) => g.specialty === selectedSpecialty)
    }

    result.sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'reviews') return b.reviews - a.reviews
      return parseInt(b.experience) - parseInt(a.experience)
    })

    return result
  }, [selectedCity, selectedSpecialty, sortBy])

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
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-terracotta/5 blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-sage/8 blur-[80px]" />

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

          <Reveal delay={0.1}>
            <h1 className={`font-display text-[clamp(2rem,5vw,4rem)] leading-[1.08] tracking-tight mb-4 transition-colors duration-500 ${
              isDark ? 'text-cream' : 'text-espresso'
            }`}>
              Find Your Local Buddy
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={`text-lg max-w-xl leading-relaxed mb-8 transition-colors duration-500 ${
              isDark ? 'text-cream/50' : 'text-charcoal/50'
            }`}>
              Browse our community of passionate local guides. Each one is verified, reviewed, and ready to show you the real India.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className={`flex items-center gap-3 text-sm transition-colors duration-500 ${
              isDark ? 'text-cream/40' : 'text-charcoal/40'
            }`}>
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              {filteredGuides.filter(g => g.available).length} guides available now
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className={`sticky top-20 z-20 backdrop-blur-xl border-b transition-colors duration-500 ${
        isDark
          ? 'bg-[#0f0c0a]/80 border-sand/10'
          : 'bg-cream/80 border-sand/30'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className={selectClasses}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239E9E9E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
              >
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className={selectClasses}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239E9E9E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
              >
                {specialties.map((spec) => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className={selectClasses}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239E9E9E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
              >
                <option value="rating">Top Rated</option>
                <option value="reviews">Most Reviewed</option>
                <option value="experience">Most Experienced</option>
              </select>
            </div>

            {(selectedCity !== 'All Cities' || selectedSpecialty !== 'All Specialties') && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => {
                  setSelectedCity('All Cities')
                  setSelectedSpecialty('All Specialties')
                }}
                className="text-xs text-terracotta hover:text-terracotta/80 font-medium transition-colors"
              >
                Clear filters ×
              </motion.button>
            )}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {filteredGuides.length === 0 ? (
            <Reveal>
              <div className="text-center py-20">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  isDark ? 'bg-sand/10' : 'bg-sand/30'
                }`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={isDark ? 'text-cream/30' : 'text-charcoal/30'}>
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
                <h3 className={`font-display text-xl mb-2 transition-colors duration-500 ${isDark ? 'text-cream' : 'text-espresso'}`}>No guides found</h3>
                <p className={`text-sm transition-colors duration-500 ${isDark ? 'text-cream/40' : 'text-charcoal/40'}`}>Try adjusting your filters to find more guides.</p>
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
                        ? 'bg-[#221b14] border-sand/10 hover:border-sand/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]'
                        : 'bg-white border-sand/30 hover:border-sand hover:shadow-[0_12px_40px_rgba(60,36,21,0.06)]'
                    }`}
                  >
                    {guide.featured && (
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-terracotta/10 border border-terracotta/20 text-[10px] uppercase tracking-[0.15em] font-semibold text-terracotta">
                        Featured
                      </div>
                    )}

                    <div className="relative h-32 bg-gradient-to-br from-espresso to-espresso/80 flex items-end p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-cream/10 backdrop-blur-sm border border-cream/20 flex items-center justify-center text-lg font-display text-cream">
                          {guide.avatar}
                        </div>
                        <div>
                          <h3 className="font-display text-lg text-cream tracking-tight">{guide.name}</h3>
                          <p className="text-xs text-cream/50 flex items-center gap-1.5">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cream/40">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {guide.city}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-terracotta">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          <span className={`text-sm font-semibold transition-colors duration-500 ${isDark ? 'text-cream' : 'text-espresso'}`}>{guide.rating}</span>
                          <span className={`text-xs transition-colors duration-500 ${isDark ? 'text-cream/30' : 'text-charcoal/30'}`}>({guide.reviews})</span>
                        </div>
                        <span className={`text-[10px] uppercase tracking-[0.15em] font-medium px-2.5 py-1 rounded-full transition-colors duration-500 ${
                          isDark ? 'text-cream/40 bg-cream/5' : 'text-charcoal/40 bg-espresso/5'
                        }`}>
                          {guide.specialty}
                        </span>
                      </div>

                      <p className={`text-sm leading-relaxed mb-5 line-clamp-3 transition-colors duration-500 ${
                        isDark ? 'text-cream/50' : 'text-charcoal/50'
                      }`}>
                        {guide.bio}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {guide.languages.map((lang) => (
                          <span key={lang} className={`text-[10px] px-2 py-0.5 rounded-full transition-colors duration-500 ${
                            isDark ? 'text-cream/40 bg-sand/10' : 'text-charcoal/40 bg-sand/30'
                          }`}>
                            {lang}
                          </span>
                        ))}
                      </div>

                      <div className={`flex items-center justify-between pt-5 border-t transition-colors duration-500 ${
                        isDark ? 'border-sand/10' : 'border-sand/30'
                      }`}>
                        <div>
                          <span className={`block text-xs transition-colors duration-500 ${isDark ? 'text-cream/30' : 'text-charcoal/30'}`}>Experience</span>
                          <span className={`text-sm font-medium transition-colors duration-500 ${isDark ? 'text-cream' : 'text-espresso'}`}>{guide.experience}</span>
                        </div>
                        <div className="text-right">
                          <span className={`block text-xs transition-colors duration-500 ${isDark ? 'text-cream/30' : 'text-charcoal/30'}`}>From</span>
                          <span className={`text-sm font-semibold transition-colors duration-500 ${isDark ? 'text-cream' : 'text-espresso'}`}>{guide.hourlyRate}/hr</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          disabled={!guide.available}
                          className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                            guide.available
                              ? 'bg-espresso text-cream hover:bg-terracotta hover:shadow-[0_4px_16px_rgba(196,112,79,0.25)]'
                              : isDark
                                ? 'bg-sand/10 text-cream/30 cursor-not-allowed'
                                : 'bg-sand/30 text-charcoal/30 cursor-not-allowed'
                          }`}
                        >
                          {guide.available ? 'Book Now' : 'Unavailable'}
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

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <div className="p-10 md:p-14 rounded-[2rem] bg-espresso relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-terracotta/20 blur-[60px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-sage/20 blur-[50px]" />

              <div className="relative">
                <h2 className="font-display text-2xl md:text-3xl text-cream mb-4 tracking-tight">
                  Can&apos;t find the right guide?
                </h2>
                <p className="text-sm text-cream/40 mb-8 max-w-md mx-auto">
                  Tell us what you&apos;re looking for and we&apos;ll personally match you with the perfect local buddy.
                </p>
                <motion.a
                  href="mailto:hello@yourguide.com"
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
