import './Collections.css'

const collections = [
  {
    name: 'Designer Sarees',
    bengali: 'শাড়ি',
    note: 'Handloom, kanjeevaram, organza, & contemporary drapes',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
    span: 'tall',
    accent: 'rose',
  },
  {
    name: 'Bridal Blouses',
    bengali: 'ব্রাইডাল ব্লাউজ',
    note: 'Customised to your fabric, fit, and ritual.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
    span: 'wide',
    accent: 'maroon',
  },
  {
    name: 'Salwar Suits',
    bengali: 'সালোয়ার',
    note: 'Soft cottons, festive silks, & breathable everyday wear.',
    image: 'https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?auto=format&fit=crop&w=900&q=80',
    span: 'normal',
    accent: 'gold',
  },
  {
    name: 'Indo-Western',
    bengali: 'ইন্দো-ওয়েস্টার্ন',
    note: 'Modern silhouettes that bridge tradition and ease.',
    image: 'https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?auto=format&fit=crop&w=900&q=80',
    span: 'normal',
    accent: 'rose',
  },
  {
    name: 'Kurtas & Sets',
    bengali: 'কুর্তা',
    note: 'Quiet luxury for the slow morning and the bright evening.',
    image: 'https://images.unsplash.com/photo-1615886753866-79396abc446e?auto=format&fit=crop&w=900&q=80',
    span: 'wide',
    accent: 'gold',
  },
]

function Collections() {
  return (
    <section id="collections" className="collections">
      <div className="container">
        <header className="collections__header reveal">
          <div className="eyebrow center">The Wardrobe</div>
          <h2 className="section-title collections__title">
            Pieces curated <em>for every occasion.</em>
          </h2>
          <p className="section-subtitle collections__subtitle">
            From a Tuesday-morning kurta to the saree you'll wear at your sister's
            wedding — each section is small, considered, and refreshed often.
          </p>
        </header>

        <div className="collections__grid reveal">
          {collections.map((c, i) => (
            <a
              key={c.name}
              href="#visit"
              className={`coll-card coll-card--${c.span} coll-card--${c.accent}`}
              style={{ '--delay': `${i * 0.08}s` }}
            >
              <div className="coll-card__image">
                <img src={c.image} alt={`${c.name} from Ameya Couture`} loading="lazy" />
              </div>
              <div className="coll-card__overlay" />
              <div className="coll-card__content">
                <div className="coll-card__bengali" lang="bn">{c.bengali}</div>
                <h3 className="coll-card__name">{c.name}</h3>
                <p className="coll-card__note">{c.note}</p>
                <div className="coll-card__cta">
                  <span>Enquire</span>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="collections__footnote reveal">
          <div className="divider-ornament">নতুন সংগ্রহ · New arrivals weekly</div>
          <p>
            Follow{' '}
            <a href="https://www.instagram.com/ameya.couture/" target="_blank" rel="noopener noreferrer">
              @ameya.couture
            </a>{' '}
            for first looks at every new drop.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Collections
