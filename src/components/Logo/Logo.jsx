import './Logo.css'

function Logo({ variant = 'full', size = 'md', monochrome = false }) {
  const lotusColor = monochrome ? 'currentColor' : '#B76E79'
  const lotusFill = monochrome ? 'currentColor' : '#E8B4BC'
  const accent = monochrome ? 'currentColor' : '#D9A441'

  return (
    <div className={`logo logo--${size} logo--${variant}`} aria-label="Ameya Couture">
      <svg
        className="logo__lotus"
        viewBox="0 0 120 92"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <defs>
          <linearGradient id="lotusGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={lotusFill} stopOpacity="0.85" />
            <stop offset="100%" stopColor={lotusFill} stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="lotusGradientCenter" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F2D8DC" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E8B4BC" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Outer side petals */}
        <path
          d="M60 76 C 30 70, 14 50, 18 26 C 30 32, 44 46, 56 66 Z"
          fill="url(#lotusGradient)"
          stroke={lotusColor}
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path
          d="M60 76 C 90 70, 106 50, 102 26 C 90 32, 76 46, 64 66 Z"
          fill="url(#lotusGradient)"
          stroke={lotusColor}
          strokeWidth="1.1"
          strokeLinejoin="round"
        />

        {/* Middle petals */}
        <path
          d="M60 78 C 40 72, 30 50, 36 20 C 48 32, 56 50, 58 70 Z"
          fill="url(#lotusGradient)"
          stroke={lotusColor}
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path
          d="M60 78 C 80 72, 90 50, 84 20 C 72 32, 64 50, 62 70 Z"
          fill="url(#lotusGradient)"
          stroke={lotusColor}
          strokeWidth="1.1"
          strokeLinejoin="round"
        />

        {/* Inner petals */}
        <path
          d="M60 80 C 52 70, 48 48, 52 14 C 58 26, 60 46, 60 74 Z"
          fill="url(#lotusGradientCenter)"
          stroke={lotusColor}
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <path
          d="M60 80 C 68 70, 72 48, 68 14 C 62 26, 60 46, 60 74 Z"
          fill="url(#lotusGradientCenter)"
          stroke={lotusColor}
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Center petal */}
        <path
          d="M60 80 C 56 60, 56 32, 60 8 C 64 32, 64 60, 60 80 Z"
          fill={lotusFill}
          fillOpacity="0.85"
          stroke={lotusColor}
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Water base */}
        <path
          d="M14 82 C 30 76, 50 80, 60 80 C 70 80, 90 76, 106 82"
          fill="none"
          stroke={lotusColor}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Tiny gold center */}
        <circle cx="60" cy="74" r="1.6" fill={accent} />
      </svg>

      {variant !== 'mark' && (
        <div className="logo__wordmark">
          <div className="logo__name">AMEYA</div>
          <div className="logo__rule" aria-hidden="true">
            <span className="logo__rule-line" />
            <span className="logo__rule-text">COUTURE</span>
            <span className="logo__rule-line" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Logo
