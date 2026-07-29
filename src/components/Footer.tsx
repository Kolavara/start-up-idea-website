'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createScrollHandler } from '@/lib/scroll'

export default function Footer() {
  const pathname = usePathname()
  const router = useRouter()
  const scrollToHash = createScrollHandler(pathname, router.push)

  const footerLinks = [
    {
      title: 'For Travelers',
      links: [
        { label: 'Find a Buddy', href: '/guides' },
        { label: 'How It Works', href: '#how-it-works', isHash: true },
        { label: 'Destinations', href: '#' },
        { label: 'Experiences', href: '#' },
        { label: 'Gift Cards', href: '#' },
      ],
    },
    {
      title: 'For Guides',
      links: [
        { label: 'Apply Now', href: '#guides', isHash: true },
        { label: 'Pricing', href: '#pricing', isHash: true },
        { label: 'Guide Resources', href: '#' },
        { label: 'Success Stories', href: '#' },
        { label: 'Guide Blog', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Partners', href: '#' },
      ],
    },
  ]

  return (
    <footer className="relative bg-espresso text-cream/70">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main footer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 py-16 md:py-20">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cream">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="font-display text-lg text-cream">Yoourguide</span>
            </Link>
            <p className="text-sm text-cream/30 leading-relaxed max-w-xs mb-6">
              Connecting travelers with passionate local guides across India. Experience the real India through the eyes of those who love it most.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'X', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
                { label: 'IG', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
                { label: 'YT', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg> },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 rounded-full bg-cream/[0.05] border border-cream/[0.08] flex items-center justify-center text-cream/30 hover:text-cream/60 hover:bg-cream/[0.08] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-cream/40 mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {'isHash' in link && link.isHash ? (
                      <button
                        onClick={() => scrollToHash(link.href)}
                        className="text-sm text-cream/35 hover:text-cream/70 transition-colors duration-300 text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-cream/35 hover:text-cream/70 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-cream/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/20">
            © {new Date().getFullYear()} Yoourguide. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-xs text-cream/20 hover:text-cream/40 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
