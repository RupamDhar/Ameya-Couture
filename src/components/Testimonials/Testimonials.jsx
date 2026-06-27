import './Testimonials.css'

const reviews = [
  {
    name: 'Srizz Ghosh',
    role: 'Designer Salwar Suit',
    body: 'The fabric quality, fitting and detailing of the outfit were absolutely impressive. The design looked elegant and classy — I had a wonderful experience.',
    initials: 'SG',
    accent: 'rose',
  },
  {
    name: 'Megha Daisy',
    role: 'Saree',
    body: 'Absolutely in love with my saree from Ameya Couture. The craftsmanship is simply stunning — every detail intricate, every weave intentional.',
    initials: 'MD',
    accent: 'gold',
  },
  {
    name: 'Reema Das',
    role: 'Sarees & Kurtas',
    body: 'Best collection I have ever seen. Budget friendly price. She has a beautiful collection of sarees and kurtas — please visit to explore the range.',
    initials: 'RD',
    accent: 'maroon',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <header className="testimonials__header reveal">
          <div className="eyebrow center">Notes from the wardrobe</div>
          <h2 className="section-title testimonials__title">
            <span className="testimonials__rating">
              <span className="testimonials__rating-num">5.0</span>
              <span className="testimonials__rating-stars" aria-label="5 out of 5 stars">★★★★★</span>
            </span>
            <span>What our muses are <em>saying.</em></span>
          </h2>
        </header>

        <div className="testimonials__grid">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className={`tm-card tm-card--${r.accent} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="tm-card__quote" aria-hidden="true">
                <svg viewBox="0 0 64 64" fill="none">
                  <path d="M20 44c-6 0-10-4-10-10 0-10 8-18 18-22l2 4c-7 3-12 9-12 14h2c4 0 8 4 8 8s-4 6-8 6zm26 0c-6 0-10-4-10-10 0-10 8-18 18-22l2 4c-7 3-12 9-12 14h2c4 0 8 4 8 8s-4 6-8 6z" fill="currentColor" opacity="0.18"/>
                </svg>
              </div>

              <div className="tm-card__stars" aria-label="5 out of 5 stars">★★★★★</div>

              <p className="tm-card__body">"{r.body}"</p>

              <footer className="tm-card__footer">
                <div className="tm-card__avatar">{r.initials}</div>
                <div>
                  <div className="tm-card__name">{r.name}</div>
                  <div className="tm-card__role">{r.role}</div>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <div className="testimonials__source reveal">
          <div className="divider-ornament">Verified on Google</div>
          <p>15 reviews · 5.0 average</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
