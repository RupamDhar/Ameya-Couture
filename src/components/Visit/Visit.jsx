import { WhatsAppIcon } from '../Icons/Icons.jsx'
import './Visit.css'

const hours = [
  { day: 'Monday', time: '12:00 — 8:30 pm' },
  { day: 'Tuesday', time: '12:00 — 8:30 pm' },
  { day: 'Wednesday', time: '12:00 — 8:30 pm' },
  { day: 'Thursday', time: '12:00 — 8:30 pm' },
  { day: 'Friday', time: '12:00 — 8:30 pm' },
  { day: 'Saturday', time: '12:00 — 8:30 pm' },
  { day: 'Sunday', time: 'Closed', closed: true },
]

function Visit() {
  return (
    <section id="visit" className="visit">
      <div className="container visit__container">
        <header className="visit__header reveal">
          <div className="eyebrow">আসুন · দেখুন · কিনুন</div>
          <h2 className="section-title visit__title">
            Come see the weaves <em>in real light.</em>
          </h2>
          <p className="section-subtitle visit__subtitle">
            Some fabrics are best understood in person — the fall of a silk, the
            weight of a brocade, the quiet shimmer of a kanjeevaram under afternoon
            sun.
          </p>
        </header>

        <div className="visit__grid">
          <div className="visit__card visit__card--address reveal">
            <div className="visit__card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <div className="visit__card-eyebrow">The Atelier</div>
            <h3 className="visit__card-title">Chinar Park, Kolkata</h3>
            <address className="visit__card-body">
              Shop No. 5, Tapavan Apartment<br />
              Opposite SBI Bank, Chinar Park<br />
              Tegharia, Baguiati<br />
              Kolkata, West Bengal — 700157
            </address>

            <div className="visit__map-frame">
              <iframe
                className="visit__map"
                title="Ameya Couture location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.4275325476128!2d88.43990567199104!3d22.62188681450533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f1dcdb68601%3A0x847d357d6f9e79ae!2sAmeya%20Couture!5e0!3m2!1sen!2sin!4v1782487467619!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <a
              className="visit__card-link"
              href="https://www.google.com/maps/search/?api=1&query=Ameya+Couture+Chinar+Park+Kolkata"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Open in Google Maps</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </a>
          </div>

          <div className="visit__card visit__card--hours reveal">
            <div className="visit__card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 7v5l3 2"/>
              </svg>
            </div>
            <div className="visit__card-eyebrow">Opening hours</div>
            <h3 className="visit__card-title">Most days of the week</h3>
            <ul className="visit__hours">
              {hours.map((h) => (
                <li key={h.day} className={`visit__hours-row ${h.closed ? 'is-closed' : ''}`}>
                  <span className="visit__hours-day">{h.day}</span>
                  <span className="visit__hours-dot" aria-hidden="true" />
                  <span className="visit__hours-time">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="visit__card visit__card--contact reveal">
            <div className="visit__card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z"/>
                <path d="M4 7l8 6 8-6"/>
              </svg>
            </div>
            <div className="visit__card-eyebrow">Reach the boutique</div>
            <h3 className="visit__card-title">Drop a message, place an order</h3>
            <p className="visit__card-body">
              WhatsApp us with the kind of piece you're looking for — we'll send
              pictures from the latest drop.
            </p>

            <div className="visit__contact-list">
              <a className="visit__contact-row" href="https://wa.me/919883828581" target="_blank" rel="noopener noreferrer">
                <div className="visit__contact-icon" aria-hidden="true">
                  <WhatsAppIcon size={18} />
                </div>
                <div className="visit__contact-text">
                  <div className="visit__contact-label">WhatsApp</div>
                  <div className="visit__contact-value">+91 98838 28581</div>
                </div>
              </a>

              <a className="visit__contact-row" href="tel:+919883828581">
                <div className="visit__contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>
                  </svg>
                </div>
                <div className="visit__contact-text">
                  <div className="visit__contact-label">Call us</div>
                  <div className="visit__contact-value">+91 98838 28581</div>
                </div>
              </a>

              <a className="visit__contact-row" href="https://www.instagram.com/ameya.couture/" target="_blank" rel="noopener noreferrer">
                <div className="visit__contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>
                  </svg>
                </div>
                <div className="visit__contact-text">
                  <div className="visit__contact-label">Instagram</div>
                  <div className="visit__contact-value">@ameya.couture</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visit
