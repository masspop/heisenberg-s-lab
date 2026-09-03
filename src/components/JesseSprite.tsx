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
        <radialGradient id="jp-skin" cx="42%" cy="35%" r="58%">
          <stop offset="0%" stopColor="#f5d4b0" />
          <stop offset="75%" stopColor="#e0b888" />
          <stop offset="100%" stopColor="#c9986a" />
        </radialGradient>
        <linearGradient id="jp-hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7d048" />
          <stop offset="100%" stopColor="#c9a012" />
        </linearGradient>
        <linearGradient id="jp-hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a2e1a" />
          <stop offset="100%" stopColor="#2a180c" />
        </linearGradient>
      </defs>
      {/* Legs — dark jeans */}
      <rect x="36" y="118" width="20" height="36" rx="3" fill="#2a3238" />
      <rect x="64" y="118" width="20" height="36" rx="3" fill="#1e262c" />
      <ellipse cx="46" cy="156" rx="13" ry="4.5" fill="#111" />
      <ellipse cx="74" cy="156" rx="13" ry="4.5" fill="#111" />
      {/* Torso — yellow hoodie */}
      <path
        d="M28 70 Q60 64 92 70 L90 120 Q60 128 30 120 Z"
        fill="url(#jp-hoodie)"
      />
      {/* Hoodie pocket */}
      <path
        d="M42 95 Q60 100 78 95 L76 112 Q60 118 44 112 Z"
        fill="#b89010"
        opacity="0.7"
      />
      {/* Hoodie strings */}
      <line x1="52" y1="78" x2="50" y2="98" stroke="#8a7010" strokeWidth="1.5" />
      <line x1="68" y1="78" x2="70" y2="98" stroke="#8a7010" strokeWidth="1.5" />
      <circle cx="50" cy="100" r="2" fill="#8a7010" />
      <circle cx="70" cy="100" r="2" fill="#8a7010" />
      {/* Arms */}
      {mixing ? (
        <>
          <path
            d="M28 72 Q10 55 14 40 Q22 38 28 48 Q30 60 34 74 Z"
            fill="url(#jp-hoodie)"
          />
          <path
            d="M92 72 Q110 55 106 40 Q98 38 92 48 Q90 60 86 74 Z"
            fill="url(#jp-hoodie)"
          />
          <ellipse cx="16" cy="38" rx="7" ry="6" fill="#e0b888" />
          <ellipse cx="104" cy="38" rx="7" ry="6" fill="#e0b888" />
        </>
      ) : (
        <>
          <path
            d="M28 74 Q16 80 14 112 Q22 116 28 110 Q30 92 34 76 Z"
            fill="url(#jp-hoodie)"
          />
          <path
            d="M92 74 Q104 80 106 112 Q98 116 92 110 Q90 92 86 76 Z"
            fill="url(#jp-hoodie)"
          />
          <ellipse cx="16" cy="114" rx="7" ry="5" fill="#e0b888" />
          <ellipse cx="104" cy="114" rx="7" ry="5" fill="#e0b888" />
        </>
      )}
      {/* Neck */}
      <rect x="52" y="66" width="16" height="10" rx="2" fill="#e0b888" />
      {/* Head */}
      <ellipse cx="60" cy="44" rx="25" ry="28" fill="url(#jp-skin)" />
      {/* Hair — dark, fuller */}
      <path
        d="M34 40 Q36 18 60 16 Q84 18 86 40 Q82 28 70 24 Q60 22 50 24 Q38 28 34 40"
        fill="url(#jp-hair)"
      />
      <path
        d="M34 42 Q32 50 36 56"
        stroke="#2a180c"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M86 42 Q88 50 84 56"
        stroke="#2a180c"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {/* Sideburns */}
      <path d="M36 48 Q34 58 38 62" fill="#2a180c" />
      <path d="M84 48 Q86 58 82 62" fill="#2a180c" />
      {/* Ears */}
      <ellipse cx="34" cy="48" rx="4.5" ry="6" fill="#d4a878" />
      <ellipse cx="86" cy="48" rx="4.5" ry="6" fill="#d4a878" />
      {/* Brows */}
      <path
        d="M42 38 Q50 34 56 38"
        stroke="#2a180c"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M64 38 Q70 34 78 38"
        stroke="#2a180c"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Eyes */}
      <ellipse cx="49" cy="46" rx="4" ry="4.5" fill="#1a120c" />
      <ellipse cx="71" cy="46" rx="4" ry="4.5" fill="#1a120c" />
      <circle cx="50.5" cy="44.5" r="1.4" fill="#fff" opacity="0.7" />
      <circle cx="72.5" cy="44.5" r="1.4" fill="#fff" opacity="0.7" />
      {/* Nose */}
      <path
        d="M58 48 Q60 55 63 53"
        stroke="#c09068"
        strokeWidth="1.6"
        fill="none"
      />
      {/* Mouth — slight smirk */}
      <path
        d="M50 58 Q60 64 70 57"
        stroke="#8b5a3c"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Light stubble */}
      <ellipse cx="60" cy="62" rx="10" ry="4" fill="#3d2314" opacity="0.15" />
    </svg>
  );
}
