export function WhatsAppIcon({ size = 16, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  )
}

export function Paisley({ width = 96, className = '', color = 'currentColor' }) {
  return (
    <svg
      className={className}
      width={width}
      viewBox="0 0 120 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="none"
      stroke={color}
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="0" y1="30" x2="34" y2="30" opacity="0.55" />
      <path d="M44 30 C 44 18, 56 12, 60 12 C 70 12, 76 22, 70 30 C 66 36, 58 36, 56 30 C 55 26, 58 24, 60 24" />
      <circle cx="60" cy="30" r="1.4" fill={color} stroke="none"/>
      <path d="M68 30 C 75 30, 80 26, 84 22" opacity="0.7" />
      <circle cx="86" cy="20" r="1.2" fill={color} stroke="none"/>
      <line x1="86" y1="30" x2="120" y2="30" opacity="0.55" />
    </svg>
  )
}

export function Alpana({ width = 200, className = '', color = 'currentColor' }) {
  return (
    <svg
      className={className}
      width={width}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="none"
      stroke={color}
      strokeWidth="0.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="100" cy="100" r="96" opacity="0.35" />
      <circle cx="100" cy="100" r="74" opacity="0.3" />
      <circle cx="100" cy="100" r="52" opacity="0.25" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const x1 = 100 + Math.cos(angle) * 52
        const y1 = 100 + Math.sin(angle) * 52
        const x2 = 100 + Math.cos(angle) * 74
        const y2 = 100 + Math.sin(angle) * 74
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.4" />
      })}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180 + Math.PI / 8
        const cx = 100 + Math.cos(angle) * 86
        const cy = 100 + Math.sin(angle) * 86
        return (
          <g key={`p${i}`} transform={`translate(${cx} ${cy}) rotate(${(angle * 180) / Math.PI + 90})`}>
            <path
              d="M0 -8 C 4 -4, 4 4, 0 8 C -4 4, -4 -4, 0 -8 Z"
              opacity="0.55"
            />
          </g>
        )
      })}
    </svg>
  )
}

export function Torana({ width = 360, className = '', color = 'currentColor' }) {
  return (
    <svg
      className={className}
      width={width}
      viewBox="0 0 360 90"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* outer arch */}
      <path d="M4 90 L4 50 Q 4 6 60 6 L 300 6 Q 356 6 356 50 L 356 90" />
      {/* inner arch */}
      <path d="M16 90 L16 56 Q 16 18 70 18 L 290 18 Q 344 18 344 56 L 344 90" opacity="0.55" />
      {/* finial top */}
      <line x1="180" y1="6" x2="180" y2="-4" />
      <circle cx="180" cy="-6" r="3" fill={color} stroke="none" />
      <circle cx="180" cy="-12" r="1.6" fill={color} stroke="none" />
      {/* scallop pearls along curve */}
      <g fill={color} stroke="none">
        <circle cx="40" cy="34" r="1.8" opacity="0.85" />
        <circle cx="68" cy="18" r="1.8" opacity="0.85" />
        <circle cx="106" cy="10" r="1.8" opacity="0.85" />
        <circle cx="144" cy="6" r="1.8" opacity="0.85" />
        <circle cx="216" cy="6" r="1.8" opacity="0.85" />
        <circle cx="254" cy="10" r="1.8" opacity="0.85" />
        <circle cx="292" cy="18" r="1.8" opacity="0.85" />
        <circle cx="320" cy="34" r="1.8" opacity="0.85" />
      </g>
      {/* mango/kalka hangings */}
      <g opacity="0.85">
        <path d="M28 50 C 28 56, 34 60, 34 66 C 34 72, 28 74, 28 68 C 28 64, 32 60, 28 50 Z" fill={color} stroke="none"/>
        <path d="M332 50 C 332 56, 326 60, 326 66 C 326 72, 332 74, 332 68 C 332 64, 328 60, 332 50 Z" fill={color} stroke="none"/>
      </g>
    </svg>
  )
}

export function Tassel({ className = '', color = 'currentColor' }) {
  return (
    <svg
      className={className}
      width="24"
      viewBox="0 0 24 56"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="12" y1="0" x2="12" y2="12" stroke={color} strokeWidth="1.2" />
      <circle cx="12" cy="14" r="3" fill={color} />
      <path d="M9 18 L 8 36 M 11 18 L 11 38 M 13 18 L 13 38 M 15 18 L 16 36" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8 38 Q 12 42 16 38" fill={color} />
    </svg>
  )
}

export function Kalka({ size = 28, className = '', color = 'currentColor' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill={color}
    >
      <path d="M16 2 C 22 6, 26 12, 26 18 C 26 24, 22 28, 16 30 C 10 28, 6 24, 6 18 C 6 12, 10 6, 16 2 Z M 16 8 C 12 12, 11 16, 13 20 C 15 23, 18 23, 20 20 C 22 17, 21 12, 16 8 Z" opacity="0.85"/>
      <circle cx="16" cy="18" r="1.4"/>
    </svg>
  )
}
