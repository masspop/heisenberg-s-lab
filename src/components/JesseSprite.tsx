export function JesseSprite({
  className = "",
  mixing = false,
}: {
  className?: string;
  mixing?: boolean;
}) {
  return (
    <svg
      className={`${className}${mixing ? " jesse-mixing" : ""}`}
      viewBox="0 0 120 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Jesse Pinkman"
    >
      <defs>
        <radialGradient id="jp-face" cx="40%" cy="32%" r="68%">
          <stop offset="0%" stopColor="#f8dcc0" />
          <stop offset="50%" stopColor="#e4b888" />
          <stop offset="100%" stopColor="#b88858" />
        </radialGradient>
      </defs>
      <rect x="36" y="118" width="20" height="36" rx="3" fill="#2a3238" />
      <rect x="64" y="118" width="20" height="36" rx="3" fill="#1e262c" />
      <ellipse cx="46" cy="156" rx="13" ry="4.5" fill="#111" />
      <ellipse cx="74" cy="156" rx="13" ry="4.5" fill="#111" />
      <path
        d="M28 72 Q60 66 92 72 L90 120 Q60 130 30 120 Z"
        fill="#f5c518"
      />
      <path
        d="M42 96 Q60 102 78 96 L76 114 Q60 120 44 114 Z"
        fill="#c99610"
        opacity="0.8"
      />
      <line x1="52" y1="80" x2="50" y2="100" stroke="#8a7010" strokeWidth="1.6" />
      <line x1="68" y1="80" x2="70" y2="100" stroke="#8a7010" strokeWidth="1.6" />
      <circle cx="50" cy="102" r="2.2" fill="#8a7010" />
      <circle cx="70" cy="102" r="2.2" fill="#8a7010" />
      {mixing ? (
        <>
          <path
            d="M28 74 Q10 56 14 40 Q22 38 28 48 Q30 62 34 76 Z"
            fill="#f5c518"
          />
          <path
            d="M92 74 Q110 56 106 40 Q98 38 92 48 Q90 62 86 76 Z"
            fill="#f5c518"
          />
          <ellipse cx="16" cy="38" rx="7" ry="6" fill="#e0b888" />
          <ellipse cx="104" cy="38" rx="7" ry="6" fill="#e0b888" />
        </>
      ) : (
        <>
          <path
            d="M28 76 Q15 82 13 114 Q22 118 28 112 Q30 94 34 78 Z"
            fill="#f5c518"
          />
          <path
            d="M92 76 Q105 82 107 114 Q98 118 92 112 Q90 94 86 78 Z"
            fill="#f5c518"
          />
          <ellipse cx="15" cy="116" rx="7" ry="5" fill="#e0b888" />
          <ellipse cx="105" cy="116" rx="7" ry="5" fill="#e0b888" />
        </>
      )}
      <rect x="52" y="66" width="16" height="10" rx="2" fill="#c89668" />
      <path
        d="M36 40 Q38 18 60 16 Q82 18 84 40 Q82 62 60 68 Q38 62 36 40 Z"
        fill="url(#jp-face)"
      />
      <ellipse cx="42" cy="48" rx="5" ry="9" fill="#b88858" opacity="0.28" />
      <ellipse cx="78" cy="48" rx="5" ry="9" fill="#b88858" opacity="0.28" />
      <path
        d="M34 38 Q28 8 48 6 Q60 4 72 6 Q92 8 86 38 Q82 22 68 18 Q60 16 52 18 Q38 22 34 38 Z"
        fill="#1a1008"
      />
      <path d="M38 16 L42 2 L48 16 Z" fill="#1a1008" />
      <path d="M54 12 L58 -2 L64 12 Z" fill="#1a1008" />
      <path d="M70 14 L78 0 L82 16 Z" fill="#1a1008" />
      <path d="M30 28 L22 18 L34 32 Z" fill="#1a1008" />
      <path d="M90 28 L98 18 L86 32 Z" fill="#1a1008" />
      <path
        d="M34 40 Q30 52 36 62"
        stroke="#1a1008"
        strokeWidth="5.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M86 40 Q90 52 84 62"
        stroke="#1a1008"
        strokeWidth="5.5"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="34" cy="46" rx="5" ry="7" fill="#d0a070" />
      <ellipse cx="86" cy="46" rx="5" ry="7" fill="#d0a070" />
      <path
        d="M42 34 Q50 30 56 34"
        stroke="#1a1008"
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M64 34 Q70 30 78 34"
        stroke="#1a1008"
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="49" cy="44" rx="4.6" ry="5.2" fill="#1a120c" />
      <ellipse cx="71" cy="44" rx="4.6" ry="5.2" fill="#1a120c" />
      <circle cx="50.6" cy="42" r="1.6" fill="#fff" opacity="0.8" />
      <circle cx="72.6" cy="42" r="1.6" fill="#fff" opacity="0.8" />
      <path d="M58 46 Q60 54 64 51" stroke="#b88858" strokeWidth="2" fill="none" />
      <path
        d="M48 56 Q60 66 74 54"
        stroke="#8b5a3c"
        strokeWidth="2.3"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="60" cy="62" rx="5" ry="3.5" fill="#2a1810" opacity="0.55" />
      <ellipse cx="60" cy="58" rx="11" ry="5" fill="#3d2314" opacity="0.2" />
    </svg>
  );
}
