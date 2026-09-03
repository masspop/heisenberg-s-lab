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
      <rect x="38" y="118" width="18" height="36" rx="3" fill="#4a3728" />
      <rect x="64" y="118" width="18" height="36" rx="3" fill="#3d2e22" />
      <ellipse cx="47" cy="156" rx="12" ry="4.5" fill="#1a1a1a" />
      <ellipse cx="73" cy="156" rx="12" ry="4.5" fill="#1a1a1a" />
      <path
        d="M28 72 Q60 68 92 72 L88 120 Q60 126 32 120 Z"
        fill="#4a6741"
      />
      <path d="M34 76 L52 78 L52 122 L36 118 Z" fill="#e8e8e8" />
      <path d="M68 78 L86 76 L84 118 L68 122 Z" fill="#e8e8e8" />
      <path d="M52 78 L68 78 L66 122 L54 122 Z" fill="#f2f2f2" />
      <line x1="60" y1="78" x2="60" y2="122" stroke="#c8c8c8" strokeWidth="1" />
      <path
        d="M28 74 Q18 78 16 110 Q20 112 26 108 Q28 90 32 78 Z"
        fill="#4a6741"
      />
      <path
        d="M92 74 Q102 78 104 110 Q100 112 94 108 Q92 90 88 78 Z"
        fill="#4a6741"
      />
      <ellipse cx="18" cy="112" rx="7" ry="5" fill="#e8c4a0" />
      <ellipse cx="102" cy="112" rx="7" ry="5" fill="#e8c4a0" />
      <rect x="52" y="64" width="16" height="14" rx="2" fill="#e8c4a0" />
      <ellipse cx="60" cy="40" rx="28" ry="32" fill="#f2d2b0" />
      <ellipse cx="50" cy="22" rx="12" ry="7" fill="#fff" opacity="0.18" />
      <ellipse cx="31" cy="44" rx="5" ry="8" fill="#e0b890" />
      <ellipse cx="89" cy="44" rx="5" ry="8" fill="#e0b890" />
      <path d="M38 34 L56 38" stroke="#5c4033" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M82 34 L64 38" stroke="#5c4033" strokeWidth="3.2" strokeLinecap="round" />
      <rect
        x="38"
        y="38"
        width="18"
        height="14"
        rx="2"
        fill="rgba(200,220,240,0.2)"
        stroke="#1a1a1a"
        strokeWidth="2.4"
      />
      <rect
        x="64"
        y="38"
        width="18"
        height="14"
        rx="2"
        fill="rgba(200,220,240,0.2)"
        stroke="#1a1a1a"
        strokeWidth="2.4"
      />
      <line x1="56" y1="45" x2="64" y2="45" stroke="#1a1a1a" strokeWidth="2.4" />
      <line x1="38" y1="45" x2="30" y2="42" stroke="#1a1a1a" strokeWidth="2.2" />
      <line x1="82" y1="45" x2="90" y2="42" stroke="#1a1a1a" strokeWidth="2.2" />
      <ellipse cx="47" cy="45" rx="3.5" ry="3.8" fill="#1a120c" />
      <ellipse cx="73" cy="45" rx="3.5" ry="3.8" fill="#1a120c" />
      <circle cx="48.2" cy="43.5" r="1.1" fill="#fff" opacity="0.55" />
      <circle cx="74.2" cy="43.5" r="1.1" fill="#fff" opacity="0.55" />
      <path d="M57 46 Q60 54 64 52" stroke="#c49a78" strokeWidth="2" fill="none" />
      <path
        d="M46 56 Q52 54 60 56 Q68 54 74 56 Q72 68 60 74 Q48 68 46 56"
        fill="#6b5344"
      />
    </svg>
  );
}
