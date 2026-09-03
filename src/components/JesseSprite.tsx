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
      <rect x="36" y="118" width="20" height="36" rx="3" fill="#2a3238" />
      <rect x="64" y="118" width="20" height="36" rx="3" fill="#1e262c" />
      <ellipse cx="46" cy="156" rx="13" ry="4.5" fill="#111" />
      <ellipse cx="74" cy="156" rx="13" ry="4.5" fill="#111" />
      <path
        d="M28 70 Q60 64 92 70 L90 120 Q60 128 30 120 Z"
        fill="#f5c518"
      />
      <path
        d="M42 95 Q60 100 78 95 L76 112 Q60 118 44 112 Z"
        fill="#d4a017"
        opacity="0.75"
      />
      <line x1="52" y1="78" x2="50" y2="98" stroke="#8a7010" strokeWidth="1.5" />
      <line x1="68" y1="78" x2="70" y2="98" stroke="#8a7010" strokeWidth="1.5" />
      <circle cx="50" cy="100" r="2" fill="#8a7010" />
      <circle cx="70" cy="100" r="2" fill="#8a7010" />
      {mixing ? (
        <>
          <path
            d="M28 72 Q10 55 14 40 Q22 38 28 48 Q30 60 34 74 Z"
            fill="#f5c518"
          />
          <path
            d="M92 72 Q110 55 106 40 Q98 38 92 48 Q90 60 86 74 Z"
            fill="#f5c518"
          />
          <ellipse cx="16" cy="38" rx="7" ry="6" fill="#e0b888" />
          <ellipse cx="104" cy="38" rx="7" ry="6" fill="#e0b888" />
        </>
      ) : (
        <>
          <path
            d="M28 74 Q16 80 14 112 Q22 116 28 110 Q30 92 34 76 Z"
            fill="#f5c518"
          />
          <path
            d="M92 74 Q104 80 106 112 Q98 116 92 110 Q90 92 86 76 Z"
            fill="#f5c518"
          />
          <ellipse cx="16" cy="114" rx="7" ry="5" fill="#e0b888" />
          <ellipse cx="104" cy="114" rx="7" ry="5" fill="#e0b888" />
        </>
      )}
      <rect x="52" y="64" width="16" height="12" rx="2" fill="#e0b888" />
      <ellipse cx="60" cy="42" rx="26" ry="28" fill="#e8c090" />
      <path
        d="M32 40 Q34 14 60 12 Q86 14 88 40 Q84 26 70 22 Q60 20 50 22 Q36 26 32 40"
        fill="#2a180c"
      />
      <path
        d="M32 42 Q28 52 34 60"
        stroke="#2a180c"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M88 42 Q92 52 86 60"
        stroke="#2a180c"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M34 48 Q32 58 36 64" fill="#2a180c" />
      <path d="M86 48 Q88 58 84 64" fill="#2a180c" />
      <ellipse cx="33" cy="46" rx="4.5" ry="6.5" fill="#d4a878" />
      <ellipse cx="87" cy="46" rx="4.5" ry="6.5" fill="#d4a878" />
      <path
        d="M42 36 Q50 32 56 36"
        stroke="#2a180c"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M64 36 Q70 32 78 36"
        stroke="#2a180c"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="49" cy="44" rx="4.2" ry="4.8" fill="#1a120c" />
      <ellipse cx="71" cy="44" rx="4.2" ry="4.8" fill="#1a120c" />
      <circle cx="50.5" cy="42.2" r="1.5" fill="#fff" opacity="0.75" />
      <circle cx="72.5" cy="42.2" r="1.5" fill="#fff" opacity="0.75" />
      <path d="M58 46 Q60 53 63 51" stroke="#c09068" strokeWidth="1.8" fill="none" />
      <path
        d="M48 56 Q60 64 72 54"
        stroke="#8b5a3c"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="60" cy="60" rx="11" ry="5" fill="#3d2314" opacity="0.18" />
    </svg>
  );
}
