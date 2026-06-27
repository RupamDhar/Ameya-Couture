import Logo from '../Logo/Logo.jsx'
import { WhatsAppIcon } from '../Icons/Icons.jsx'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div className="footer__cta-text">
            <div className="eyebrow">যত্নে গড়া · Curated, with care</div>
            <h3 className="footer__cta-title">
              Looking for something for the season?
            </h3>
            <p>Tell us what you have in mind — we'll send pictures of pieces from the latest drop.</p>
          </div>
          <a
            className="btn btn--gold"
            href="https://wa.me/919883828581?text=Hi%20Ameya%20Couture%2C%20I%27m%20looking%20for..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={16} />
            <span>Start a conversation</span>
          </a>
        </div>
      </div>

      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__brand">
            <Logo size="md" />
            <div className="footer__bengali" lang="bn">অমেয় কৌটার</div>
            <p className="footer__brand-note">
              Artful fashion for the modern muse. A boutique of designer sarees,
              bespoke blouses and indo-western pieces — handcrafted in Kolkata.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Wander</h4>
            <ul>
              <li><a href="#story">Our story</a></li>
              <li><a href="#collections">Collections</a></li>
              <li><a href="#signature">The atelier</a></li>
              <li><a href="#testimonials">Notes</a></li>
              <li><a href="#visit">Visit us</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Reach us</h4>
            <ul className="footer__contact">
              <li>
                <a href="https://wa.me/919883828581" target="_blank" rel="noopener noreferrer">
                  <span className="footer__contact-label">WhatsApp</span>
                  <span className="footer__contact-value">+91 98838 28581</span>
                </a>
              </li>
              <li>
                <a href="tel:+919883828581">
                  <span className="footer__contact-label">Call</span>
                  <span className="footer__contact-value">+91 98838 28581</span>
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=Ameya+Couture+Chinar+Park+Kolkata" target="_blank" rel="noopener noreferrer">
                  <span className="footer__contact-label">Studio</span>
                  <span className="footer__contact-value">Chinar Park, Kolkata 700157</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Follow</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/ameya.couture/" target="_blank" rel="noopener noreferrer">
                  Instagram · @ameya.couture
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/AmeyaCouturebyNeha/" target="_blank" rel="noopener noreferrer">
                  Facebook · AmeyaCouturebyNeha
                </a>
              </li>
            </ul>

            <div className="footer__socials">
              <a href="https://www.instagram.com/ameya.couture/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/AmeyaCouturebyNeha/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://wa.me/919883828581" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="container footer__bottom-inner">
            <div className="footer__copy">
              © {new Date().getFullYear()} Ameya Couture · Women-owned, women-led · Kolkata
            </div>
            <div className="footer__credit">
              <span lang="bn">শুভেচ্ছা</span> · Website by{' '}
              <a
                className="footer__credit-link"
                href="https://www.rupamdhar.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Rupam</span>
                <svg
                  className="footer__credit-link-icon"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 2h5v5" />
                  <path d="M14 2L7 9" />
                  <path d="M12 9v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
