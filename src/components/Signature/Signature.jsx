import { useState } from 'react'
import './Signature.css'

const pieces = [
  {
    title: 'The Pallu Edit',
    sub: 'Hand-detailed pallus on contemporary silks.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    tag: 'Saree',
  },
  {
    title: 'Bridal Blouse Atelier',
    sub: 'Bespoke fits, embroidered to your story.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85',
    tag: 'Bridal',
  },
  {
    title: 'Festive Salwar',
    sub: 'Silks for the season of celebration.',
    image: 'https://images.unsplash.com/photo-1597983073453-ef06cfc2240e?auto=format&fit=crop&w=1200&q=85',
    tag: 'Salwar',
  },
  {
    title: 'Modern Drapes',
    sub: 'Indo-western pieces for the new occasion wardrobe.',
    image: 'https://images.unsplash.com/photo-1612722432474-b971cdcea546?auto=format&fit=crop&w=1200&q=85',
    tag: 'Indo-Western',
  },
]

function Signature() {
  const [active, setActive] = useState(0)

  return (
    <section id="signature" className="signature">
      <div className="container signature__container">
        <header className="signature__header reveal">
          <div className="eyebrow">The Atelier</div>
          <h2 className="section-title signature__title">
            Signature pieces from <em>the season's drop.</em>
          </h2>
        </header>

        <div className="signature__layout">
          <div className="signature__list reveal">
            {pieces.map((p, i) => (
              <button
                key={p.title}
                className={`sig-row ${active === i ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-label={`View ${p.title}`}
              >
                <span className="sig-row__num">0{i + 1}</span>
                <span className="sig-row__title">{p.title}</span>
                <span className="sig-row__tag">{p.tag}</span>
                <span className="sig-row__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </span>
              </button>
            ))}
          </div>

          <div className="signature__visual reveal">
            {pieces.map((p, i) => (
              <div
                key={p.title}
                className={`sig-image ${active === i ? 'is-active' : ''}`}
                aria-hidden={active !== i}
              >
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="sig-image__plate">
                  <div className="sig-image__plate-title">{p.title}</div>
                  <div className="sig-image__plate-sub">{p.sub}</div>
                </div>
              </div>
            ))}
            <div className="sig-image__frame" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signature
