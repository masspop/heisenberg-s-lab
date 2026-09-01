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
      <rect x="30" y="70" width="60" height="55" rx="6" fill="#4a6741" />
      <rect x="55" y="72" width="10" height="50" fill="#3d5636" />
      <rect x="32" y="78" width="56" height="42" rx="3" fill="#e8e8e8" opacity="0.9" />
      <rect x="18" y="74" width="14" height="38" rx="5" fill="#4a6741" />
      <rect x="88" y="74" width="14" height="38" rx="5" fill="#4a6741" />
      <ellipse cx="60" cy="46" rx="27" ry="31" fill="#f5d5b8" />
      <rect x="38" y="42" width="18" height="12" rx="2" fill="none" stroke="#333" strokeWidth="2" />
      <rect x="64" y="42" width="18" height="12" rx="2" fill="none" stroke="#333" strokeWidth="2" />
      <line x1="56" y1="48" x2="64" y2="48" stroke="#333" strokeWidth="2" />
      <line x1="38" y1="48" x2="32" y2="46" stroke="#333" strokeWidth="2" />
      <line x1="82" y1="48" x2="88" y2="46" stroke="#333" strokeWidth="2" />
      <circle cx="47" cy="48" r="3" fill="#1a1a1a" />
      <circle cx="73" cy="48" r="3" fill="#1a1a1a" />
      <path d="M48 58 Q60 72 72 58 Q68 66 60 68 Q52 66 48 58" fill="#8b7355" />
      <path d="M40 38 L54 42" stroke="#6b5344" strokeWidth="2.5" />
      <path d="M80 38 L66 42" stroke="#6b5344" strokeWidth="2.5" />
      <rect x="52" y="68" width="16" height="10" fill="#f5d5b8" />
      <rect x="35" y="120" width="22" height="35" rx="3" fill="#5c4033" />
      <rect x="63" y="120" width="22" height="35" rx="3" fill="#5c4033" />
      <ellipse cx="46" cy="158" rx="13" ry="5" fill="#2d2d2d" />
      <ellipse cx="74" cy="158" rx="13" ry="5" fill="#2d2d2d" />
    </svg>
  );
}
