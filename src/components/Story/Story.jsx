import { Paisley } from '../Icons/Icons.jsx'
import './Story.css'

function Story() {
  return (
    <section id="story" className="story">
      <div className="container story__container">
        <div className="story__visual reveal">
          <div className="story__visual-frame">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
              alt="Detail of a hand-embroidered designer saree pallu"
              loading="lazy"
            />
          </div>
          <div className="story__visual-accent" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="story__visual-badge">
            <div className="story__visual-badge-num">Since</div>
            <div className="story__visual-badge-year">2026</div>
          </div>
        </div>

        <div className="story__copy reveal">
          <div className="eyebrow">আমাদের গল্প · Our Story</div>
          <h2 className="section-title story__title">
            A boutique where <em>fabric meets feeling.</em>
          </h2>

          <div className="story__paisley" aria-hidden="true">
            <Paisley width={120} color="#D9A441" />
          </div>

          <p className="story__lead">
            Ameya Couture is a women-owned boutique tucked into the quiet corner of
            Chinar Park. We curate sarees, salwar suits and indo-western pieces for
            the woman who treats getting dressed as a small, private ritual.
          </p>

          <p className="story__body">
            Every weave is chosen for the way it falls, every stitch for the way
            it sits. We work closely with karigars across Bengal, so the artistry
            you inherit is real — not borrowed from a label.
          </p>

          <ul className="story__pillars">
            <li className="story__pillar">
              <div className="story__pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="story__pillar-title">Hand-picked weaves</h3>
                <p className="story__pillar-body">Every piece passes through us first — no factory drops, no copies.</p>
              </div>
            </li>
            <li className="story__pillar">
              <div className="story__pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21v-2a8 8 0 0 1 16 0v2"/>
                  <circle cx="11" cy="8" r="4"/>
                  <path d="M19 7l1.4 1.4M21 11l-1.4 1.4"/>
                </svg>
              </div>
              <div>
                <h3 className="story__pillar-title">Tailoring that fits</h3>
                <p className="story__pillar-body">In-house bridal blouse customisation and alterations for every silhouette.</p>
              </div>
            </li>
            <li className="story__pillar">
              <div className="story__pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3c-3 4-3 8 0 13 3-5 3-9 0-13z"/>
                  <path d="M4 14c4-1 5-4 8-4s4 3 8 4"/>
                </svg>
              </div>
              <div>
                <h3 className="story__pillar-title">Banglar own karigars</h3>
                <p className="story__pillar-body">Working directly with weavers across Bengal — Phulia, Murshidabad, Bishnupur.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Story
