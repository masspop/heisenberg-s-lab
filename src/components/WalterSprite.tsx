export function WalterSprite({
  className = "",
  waiting = false,
}: {
  className?: string;
  waiting?: boolean;
}) {
  return (
    <svg
      className={`${className}${waiting ? " walter-waiting" : ""}`}
      viewBox="0 0 120 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Walter White"
    >
      <defs>
        <radialGradient id="ww-face" cx="34%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#f3dcc4" />
          <stop offset="40%" stopColor="#dfc0a0" />
          <stop offset="78%" stopColor="#c49674" />
          <stop offset="100%" stopColor="#a87858" />
        </radialGradient>
        <linearGradient id="ww-dome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8e8d8" />
          <stop offset="100%" stopColor="#e0c4a4" />
        </linearGradient>
        <linearGradient id="ww-goatee" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6a5344" />
          <stop offset="55%" stopColor="#4a3728" />
          <stop offset="100%" stopColor="#2e2218" />
        </linearGradient>
      </defs>
      <rect x="38" y="118" width="18" height="36" rx="3" fill="#4a3728" />
      <rect x="64" y="118" width="18" height="36" rx="3" fill="#3d2e22" />
      <ellipse cx="47" cy="156" rx="12" ry="4.5" fill="#1a1a1a" />
      <ellipse cx="73" cy="156" rx="12" ry="4.5" fill="#1a1a1a" />
      <path
        d="M28 74 Q60 70 92 74 L88 120 Q60 128 32 120 Z"
        fill="#4a6741"
      />
      <path d="M34 78 L52 80 L52 122 L36 118 Z" fill="#ececec" />
      <path d="M68 80 L86 78 L84 118 L68 122 Z" fill="#e0e0e0" />
      <path d="M52 80 L68 80 L66 122 L54 122 Z" fill="#f4f4f4" />
      <line x1="60" y1="80" x2="60" y2="122" stroke="#c8c8c8" strokeWidth="1" />
      <path
        d="M28 76 Q17 80 15 112 Q20 114 26 110 Q28 92 32 80 Z"
        fill="#4a6741"
      />
      <path
        d="M92 76 Q103 80 105 112 Q100 114 94 110 Q92 92 88 80 Z"
        fill="#4a6741"
      />
      <ellipse cx="17" cy="114" rx="7" ry="5" fill="#d4a878" />
      <ellipse cx="103" cy="114" rx="7" ry="5" fill="#d4a878" />
      <rect x="52" y="66" width="16" height="12" rx="2" fill="#c99670" />
      <ellipse cx="60" cy="28" rx="24" ry="16" fill="url(#ww-dome)" />
      <path
        d="M34 34 Q36 12 60 10 Q84 12 86 34 Q84 58 60 66 Q36 58 34 34 Z"
        fill="url(#ww-face)"
      />
      <ellipse cx="52" cy="18" rx="9" ry="5" fill="#fff" opacity="0.18" />
      <ellipse cx="38" cy="44" rx="6" ry="11" fill="#a87858" opacity="0.35" />
      <ellipse cx="82" cy="44" rx="6" ry="11" fill="#a87858" opacity="0.35" />
      <path d="M46 24 Q60 20 74 24" stroke="#b88868" strokeWidth="1.4" fill="none" opacity="0.55" />
      <path d="M48 28 Q60 25 72 28" stroke="#b88868" strokeWidth="1.1" fill="none" opacity="0.4" />
      <path d="M42 52 Q48 58 52 54" stroke="#a87858" strokeWidth="1.4" fill="none" opacity="0.55" />
      <path d="M78 52 Q72 58 68 54" stroke="#a87858" strokeWidth="1.4" fill="none" opacity="0.55" />
      <ellipse cx="31" cy="42" rx="5.5" ry="9" fill="#d4a878" />
      <ellipse cx="89" cy="42" rx="5.5" ry="9" fill="#d4a878" />
      <ellipse cx="31" cy="42" rx="2.5" ry="5" fill="#c09068" opacity="0.45" />
      <ellipse cx="89" cy="42" rx="2.5" ry="5" fill="#c09068" opacity="0.45" />
      <ellipse cx="47" cy="48" rx="7" ry="3.2" fill="#9a7058" opacity="0.28" />
      <ellipse cx="73" cy="48" rx="7" ry="3.2" fill="#9a7058" opacity="0.28" />
      <path d="M36 34 L52 37" stroke="#4a3428" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M84 34 L68 37" stroke="#4a3428" strokeWidth="3.4" strokeLinecap="round" />
      <rect
        x="36"
        y="36"
        width="20"
        height="15"
        rx="2"
        fill="rgba(210,230,245,0.18)"
        stroke="#111"
        strokeWidth="2.6"
      />
      <rect
        x="64"
        y="36"
        width="20"
        height="15"
        rx="2"
        fill="rgba(210,230,245,0.18)"
        stroke="#111"
        strokeWidth="2.6"
      />
      <line x1="56" y1="43" x2="64" y2="43" stroke="#111" strokeWidth="2.6" />
      <line x1="36" y1="43" x2="28" y2="40" stroke="#111" strokeWidth="2.3" />
      <line x1="84" y1="43" x2="92" y2="40" stroke="#111" strokeWidth="2.3" />
      <ellipse cx="46" cy="43.5" rx="3.6" ry="4" fill="#1a120c" />
      <ellipse cx="74" cy="43.5" rx="3.6" ry="4" fill="#1a120c" />
      <circle cx="47.4" cy="41.8" r="1.15" fill="#fff" opacity="0.6" />
      <circle cx="75.4" cy="41.8" r="1.15" fill="#fff" opacity="0.6" />
      <path d="M56 44 Q60 54 66 50" stroke="#a87858" strokeWidth="2.3" fill="none" />
      <ellipse cx="58" cy="52" rx="2" ry="1.4" fill="#a87858" opacity="0.35" />
      <ellipse cx="64" cy="51" rx="2" ry="1.4" fill="#a87858" opacity="0.35" />
      <path
        d="M44 54 Q52 52 60 54 Q68 52 76 54 Q74 64 68 70 Q60 76 52 70 Q46 64 44 54 Z"
        fill="url(#ww-goatee)"
      />
      <path
        d="M50 56 Q60 62 70 56"
        stroke="#2e2218"
        strokeWidth="1.2"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M48 54 Q60 58 72 54"
        stroke="#3d2e22"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
