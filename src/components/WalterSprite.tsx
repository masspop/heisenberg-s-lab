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
        <radialGradient id="ww-skin" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#f8e0c8" />
          <stop offset="70%" stopColor="#e8c4a0" />
          <stop offset="100%" stopColor="#d4a882" />
        </radialGradient>
        <linearGradient id="ww-shirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a7a52" />
          <stop offset="100%" stopColor="#3d5636" />
        </linearGradient>
        <linearGradient id="ww-coat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5f5f5" />
          <stop offset="100%" stopColor="#d0d0d0" />
        </linearGradient>
      </defs>
      {/* Legs */}
      <rect x="38" y="118" width="18" height="36" rx="3" fill="#4a3728" />
      <rect x="64" y="118" width="18" height="36" rx="3" fill="#3d2e22" />
      <ellipse cx="47" cy="156" rx="12" ry="4.5" fill="#1a1a1a" />
      <ellipse cx="73" cy="156" rx="12" ry="4.5" fill="#1a1a1a" />
      {/* Torso — green shirt + lab coat */}
      <path
        d="M28 72 Q60 68 92 72 L88 120 Q60 126 32 120 Z"
        fill="url(#ww-shirt)"
      />
      <path
        d="M34 76 L52 78 L52 122 L36 118 Z"
        fill="url(#ww-coat)"
        opacity="0.95"
      />
      <path
        d="M68 78 L86 76 L84 118 L68 122 Z"
        fill="url(#ww-coat)"
        opacity="0.95"
      />
      <path d="M52 78 L68 78 L66 122 L54 122 Z" fill="#e8e8e8" opacity="0.85" />
      <line x1="60" y1="78" x2="60" y2="122" stroke="#c8c8c8" strokeWidth="1" />
      {/* Arms */}
      <path
        d="M28 74 Q18 78 16 110 Q20 112 26 108 Q28 90 32 78 Z"
        fill="url(#ww-shirt)"
      />
      <path
        d="M92 74 Q102 78 104 110 Q100 112 94 108 Q92 90 88 78 Z"
        fill="url(#ww-shirt)"
      />
      <ellipse cx="18" cy="112" rx="7" ry="5" fill="#e8c4a0" />
      <ellipse cx="102" cy="112" rx="7" ry="5" fill="#e8c4a0" />
      {/* Neck */}
      <rect x="52" y="66" width="16" height="12" rx="2" fill="#e8c4a0" />
      {/* Head — bald, older face */}
      <ellipse cx="60" cy="42" rx="26" ry="30" fill="url(#ww-skin)" />
      {/* Cranial highlight */}
      <ellipse cx="52" cy="28" rx="10" ry="6" fill="#fff" opacity="0.15" />
      {/* Temple shadow */}
      <ellipse cx="38" cy="48" rx="4" ry="8" fill="#c49a78" opacity="0.35" />
      <ellipse cx="82" cy="48" rx="4" ry="8" fill="#c49a78" opacity="0.35" />
      {/* Ears */}
      <ellipse cx="33" cy="46" rx="5" ry="7" fill="#e0b890" />
      <ellipse cx="87" cy="46" rx="5" ry="7" fill="#e0b890" />
      {/* Glasses */}
      <rect
        x="40"
        y="40"
        width="16"
        height="13"
        rx="2"
        fill="rgba(180,200,220,0.25)"
        stroke="#2a2a2a"
        strokeWidth="2"
      />
      <rect
        x="64"
        y="40"
        width="16"
        height="13"
        rx="2"
        fill="rgba(180,200,220,0.25)"
        stroke="#2a2a2a"
        strokeWidth="2"
      />
      <line x1="56" y1="46" x2="64" y2="46" stroke="#2a2a2a" strokeWidth="2" />
      <line x1="40" y1="46" x2="34" y2="44" stroke="#2a2a2a" strokeWidth="2" />
      <line x1="80" y1="46" x2="86" y2="44" stroke="#2a2a2a" strokeWidth="2" />
      {/* Eyes — stern */}
      <ellipse cx="48" cy="46" rx="3.2" ry="3.5" fill="#2c1810" />
      <ellipse cx="72" cy="46" rx="3.2" ry="3.5" fill="#2c1810" />
      <circle cx="49" cy="45" r="1" fill="#fff" opacity="0.5" />
      <circle cx="73" cy="45" r="1" fill="#fff" opacity="0.5" />
      {/* Brows — heavy */}
      <path
        d="M40 37 Q48 34 56 38"
        stroke="#6b5344"
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M64 38 Q72 34 80 37"
        stroke="#6b5344"
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Nose */}
      <path
        d="M58 48 Q60 56 63 54"
        stroke="#c49a78"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Goatee / beard */}
      <path
        d="M48 58 Q52 56 60 58 Q68 56 72 58 Q70 68 60 72 Q50 68 48 58"
        fill="#7a6550"
      />
      <path
        d="M52 60 Q60 64 68 60"
        stroke="#5c4a3a"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      {/* Mouth under beard hint */}
      <path
        d="M54 60 Q60 62 66 60"
        stroke="#8b6b55"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
