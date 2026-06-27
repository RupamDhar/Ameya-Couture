import { useEffect, useState } from 'react'
import Logo from '../Logo/Logo.jsx'
import './Navbar.css'

const links = [
  { href: '#story', label: 'Story' },
  { href: '#collections', label: 'Collections' },
  { href: '#signature', label: 'Atelier' },
  { href: '#testimonials', label: 'Notes' },
  { href: '#visit', label: 'Visit' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#top" onClick={(e) => { e.preventDefault(); handleNav('#top') }}>
          <Logo size="sm" variant="inline" />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav__link"
              onClick={(e) => { e.preventDefault(); handleNav(l.href) }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className="nav__cta"
          href="https://wa.me/919883828581"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Enquire</span>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        <button
          className="nav__mobile-close"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>

        <div className="nav__mobile-inner">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav__mobile-link"
              onClick={(e) => { e.preventDefault(); handleNav(l.href) }}
            >
              {l.label}
            </a>
          ))}
          <a
            className="nav__mobile-cta"
            href="https://wa.me/919883828581"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
