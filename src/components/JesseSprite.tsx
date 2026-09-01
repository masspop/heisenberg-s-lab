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
      <rect x="30" y="70" width="60" height="55" rx="8" fill="#f5c518" />
      <rect x="38" y="78" width="44" height="35" rx="4" fill="#d4a017" />
      {mixing ? (
        <>
          <rect x="10" y="55" width="16" height="40" rx="6" fill="#f5c518" transform="rotate(-25 18 75)" />
          <rect x="94" y="55" width="16" height="40" rx="6" fill="#f5c518" transform="rotate(25 102 75)" />
        </>
      ) : (
        <>
          <rect x="18" y="75" width="16" height="40" rx="6" fill="#f5c518" />
          <rect x="86" y="75" width="16" height="40" rx="6" fill="#f5c518" />
        </>
      )}
      <ellipse cx="60" cy="48" rx="26" ry="30" fill="#f0c8a0" />
      <path d="M34 42 Q60 18 86 42 Q82 28 60 24 Q38 28 34 42" fill="#3d2314" />
      <ellipse cx="50" cy="48" rx="4" ry="5" fill="#1a1a1a" />
      <ellipse cx="70" cy="48" rx="4" ry="5" fill="#1a1a1a" />
      <circle cx="51" cy="46" r="1.5" fill="#fff" />
      <circle cx="71" cy="46" r="1.5" fill="#fff" />
      <path d="M42 40 Q50 36 56 40" stroke="#3d2314" strokeWidth="2" fill="none" />
      <path d="M64 40 Q70 36 78 40" stroke="#3d2314" strokeWidth="2" fill="none" />
      <path d="M52 58 Q60 64 68 58" stroke="#8b4513" strokeWidth="2" fill="none" />
      <rect x="52" y="68" width="16" height="10" fill="#f0c8a0" />
      <rect x="35" y="120" width="22" height="35" rx="4" fill="#2d3436" />
      <rect x="63" y="120" width="22" height="35" rx="4" fill="#2d3436" />
      <ellipse cx="46" cy="158" rx="14" ry="5" fill="#1a1a1a" />
      <ellipse cx="74" cy="158" rx="14" ry="5" fill="#1a1a1a" />
    </svg>
  );
}
