// Inline SVG logo so the wordmark renders in the site's live web fonts.
// (An external SVG loaded via <img> can't access next/font's self-hosted faces,
//  which is why "GOAT" previously fell back to a serif.)
export default function Logo({ className = '', style }) {
  return (
    <svg
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 60"
      width="240"
      height="60"
      fill="none"
      role="img"
      aria-label="GOAT Assets"
    >
      {/* Goat emblem in gold */}
      <g stroke="#C5A46D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 22 28 C 16 16, 26 8, 32 8 C 30 14, 28 20, 28 26" />
        <path d="M 26 28 C 22 18, 30 10, 36 12 C 34 17, 31 22, 30 27" strokeWidth="1.4" opacity="0.85" />
        <path d="M 20 28 L 29 28 L 31 38 L 26 44 L 21 44 L 16 38 Z" />
        <path d="M 21 44 L 19 50 L 24 47" />
        <path d="M 16 30 C 13 28, 12 32, 16 34" />
        <circle cx="24" cy="33" r="1" fill="#C5A46D" />
        <path d="M 28 38 C 32 42, 33 46, 33 50" />
        <path d="M 17 40 C 16 44, 15 47, 14 50" />
      </g>

      {/* Wordmark — display font (Plus Jakarta Sans) for "GOAT", body font for the tag */}
      <text
        x="50"
        y="33"
        style={{ fontFamily: 'var(--font-display)' }}
        fontSize="22"
        fontWeight="700"
        letterSpacing="-0.2"
        fill="#0E2A23"
      >
        GOAT
      </text>
      <text
        x="51"
        y="47"
        style={{ fontFamily: 'var(--font-sans)' }}
        fontSize="10"
        fontWeight="600"
        letterSpacing="4"
        fill="#C5A46D"
      >
        ASSETS
      </text>
    </svg>
  );
}
