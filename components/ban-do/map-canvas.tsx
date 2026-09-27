export function MapCanvas() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* land */}
      <rect width="400" height="800" fill="#EDEAE0" />

      {/* city blocks */}
      <g fill="#E4DED1">
        <rect x="52" y="150" width="70" height="52" rx="4" />
        <rect x="140" y="150" width="56" height="80" rx="4" />
        <rect x="52" y="216" width="70" height="46" rx="4" />
        <rect x="212" y="160" width="60" height="70" rx="4" />
        <rect x="140" y="244" width="56" height="60" rx="4" />
        <rect x="212" y="244" width="60" height="60" rx="4" />
        <rect x="40" y="330" width="80" height="70" rx="4" />
        <rect x="140" y="330" width="60" height="90" rx="4" />
        <rect x="216" y="330" width="64" height="80" rx="4" />
        <rect x="40" y="430" width="80" height="60" rx="4" />
        <rect x="140" y="440" width="60" height="70" rx="4" />
        <rect x="40" y="520" width="80" height="80" rx="4" />
        <rect x="140" y="530" width="60" height="60" rx="4" />
        <rect x="216" y="530" width="64" height="70" rx="4" />
        <rect x="40" y="630" width="80" height="60" rx="4" />
        <rect x="140" y="620" width="60" height="80" rx="4" />
        <rect x="216" y="630" width="64" height="60" rx="4" />
      </g>

      {/* parks */}
      <g fill="#D8E6CB">
        <rect x="286" y="150" width="60" height="80" rx="6" />
        <rect x="292" y="430" width="70" height="80" rx="6" />
        <rect x="40" y="712" width="160" height="70" rx="6" />
      </g>

      {/* water: Sông Hồng (right), Hồ Tây (top-left), Hồ Gươm, hồ Trúc Bạch */}
      <path
        d="M400 60 C330 90 340 160 300 200 C260 240 300 300 290 360 C282 410 320 470 330 540 C340 620 310 700 330 800 L400 800 Z"
        fill="#BFDAEB"
      />
      <path
        d="M20 30 C60 10 120 20 140 60 C160 100 130 140 80 140 C40 140 10 120 8 80 C7 55 8 40 20 30 Z"
        fill="#BFDAEB"
      />
      <ellipse cx="120" cy="160" rx="18" ry="12" fill="#BFDAEB" />
      <ellipse cx="252" cy="464" rx="14" ry="20" fill="#BFDAEB" />

      {/* minor roads */}
      <g stroke="#FFFFFF" strokeWidth="3">
        <line x1="0" y1="150" x2="330" y2="150" />
        <line x1="0" y1="212" x2="330" y2="212" />
        <line x1="0" y1="270" x2="330" y2="270" />
        <line x1="30" y1="320" x2="330" y2="320" />
        <line x1="30" y1="420" x2="330" y2="420" />
        <line x1="30" y1="510" x2="330" y2="510" />
        <line x1="30" y1="610" x2="330" y2="610" />
        <line x1="30" y1="705" x2="330" y2="705" />
        <line x1="130" y1="140" x2="130" y2="800" />
        <line x1="205" y1="140" x2="205" y2="800" />
        <line x1="282" y1="140" x2="290" y2="800" />
      </g>

      {/* major roads */}
      <g stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round">
        <line x1="0" y1="305" x2="335" y2="305" />
        <line x1="30" y1="140" x2="30" y2="800" />
        <line x1="30" y1="700" x2="320" y2="410" />
      </g>
      <g stroke="#E8E2D5" strokeWidth="1.5" strokeDasharray="6 5">
        <line x1="30" y1="700" x2="320" y2="410" />
      </g>
    </svg>
  );
}
