import Logo from '../Logo/Logo.jsx'
import { WhatsAppIcon, Paisley, Alpana } from '../Icons/Icons.jsx'
import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__ornament hero__ornament--tl" aria-hidden="true">
        <Alpana width={360} color="#8E2B2E" />
      </div>
      <div className="hero__ornament hero__ornament--br" aria-hidden="true">
        <Alpana width={560} color="#D9A441" />
      </div>

      <div className="hero__container container">
        <div className="hero__grid">
          <div className="hero__content reveal">
            <div className="hero__eyebrow">
              <span>EST. KOLKATA</span>
              <span className="hero__eyebrow-dot" />
              <span>HANDCRAFTED COUTURE</span>
            </div>

            <div className="hero__brandmark">
              <Logo size="lg" />
            </div>

            <div className="hero__bengali" lang="bn">অমেয় কৌটার</div>

            {/* <div className="hero__paisley" aria-hidden="true">
              <Paisley width={170} color="#D9A441" />
            </div> */}

            <h1 className="hero__tagline">
              Artful fashion <em>for the modern muse.</em>
            </h1>

            <p className="hero__lede">
              A boutique of designer sarees, bespoke blouses and indo-western
              silhouettes — every weave with a story, every stitch made to last.
            </p>

            <div className="hero__cta">
              <a
                className="btn btn--maroon"
                href="https://wa.me/919883828581"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={16} />
                <span>Enquire on WhatsApp</span>
              </a>
              <a className="btn btn--gold-outline" href="#collections">
                <span>Explore Collections</span>
              </a>
            </div>
          </div>

          <div className="hero__visual reveal">
            <div className="hero__visual-stack">
              <div className="hero__visual-frame-outer" aria-hidden="true" />
              <div className="hero__visual-frame-mid" aria-hidden="true" />

              <div className="hero__visual-frame">
                <img
                  src="https://www.bringitonline.in/uploads/2/2/4/5/22456530/saree-model-photography-creative-saree-lookbook-shoot-in-delhi-noida-gurgaon-mumbai-india-by-bringitonline-photography-service-indian-wear-shoot-54_orig.jpg"
                  alt="A signature piece from the Ameya Couture collection"
                />
                <div className="hero__visual-tag" aria-hidden="true">
                  <span lang="bn">শাড়ি</span>
                  <span>· Saree</span>
                </div>
              </div>

              <div className="hero__visual-paisley" aria-hidden="true">
                {/* <Paisley width={100} color="#8E2B2E" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="hero__meta reveal">
          <div className="hero__meta-item">
            <div className="hero__meta-num">5.0</div>
            <div className="hero__meta-label">
              <div className="hero__stars" aria-label="5 out of 5 stars">★★★★★</div>
              <div>15 Google reviews</div>
            </div>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <div className="hero__meta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21v-2a8 8 0 0 1 16 0v2"/>
                <circle cx="11" cy="8" r="4"/>
                <path d="M19 7l1.4 1.4M21 11l-1.4 1.4"/>
              </svg>
            </div>
            <div className="hero__meta-label">
              <div>Bridal blouse</div>
              <div>customisation</div>
            </div>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <div className="hero__meta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <div className="hero__meta-label">
              <div>Chinar Park</div>
              <div>boutique, Kolkata</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
