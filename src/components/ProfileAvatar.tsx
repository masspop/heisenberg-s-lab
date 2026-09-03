type AvatarId =
  | "rookie"
  | "walter"
  | "jesse"
  | "mike"
  | "saul"
  | "hank"
  | "gustavo"
  | "flynn"
  | "hector"
  | "tuco"
  | "skinny"
  | "badger"
  | "lalo";
export function ProfileAvatar({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  const avatarId = (id as AvatarId) || "rookie";
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="40" cy="40" r="40" fill={bgFor(avatarId)} />
      {renderFace(avatarId)}
    </svg>
  );
}
function bgFor(id: AvatarId): string {
  const map: Record<AvatarId, string> = {
    rookie: "#1a2a1a",
    walter: "#2a3a2a",
    jesse: "#3a2a10",
    mike: "#1a2430",
    saul: "#2a2040",
    hank: "#2a2018",
    gustavo: "#1a1a28",
    flynn: "#243040",
    hector: "#2a1818",
    tuco: "#301818",
    skinny: "#202818",
    badger: "#283018",
    lalo: "#2a2218",
  };
  return map[id] ?? "#1a2a1a";
}
function renderFace(id: AvatarId) {
  switch (id) {
    case "walter":
      return (
        <>
          <ellipse cx="40" cy="36" rx="18" ry="20" fill="#f5d5b8" />
          <rect x="28" y="34" width="10" height="7" rx="1" fill="none" stroke="#222" strokeWidth="1.5" />
          <rect x="42" y="34" width="10" height="7" rx="1" fill="none" stroke="#222" strokeWidth="1.5" />
          <line x1="38" y1="37" x2="42" y2="37" stroke="#222" strokeWidth="1.5" />
          <path d="M32 46 Q40 54 48 46" fill="#8b7355" />
          <rect x="28" y="54" width="24" height="18" fill="#e8e8e8" />
          <rect x="28" y="54" width="24" height="6" fill="#4a6741" />
        </>
      );
    case "jesse":
      return (
        <>
          <ellipse cx="40" cy="36" rx="17" ry="19" fill="#f0c8a0" />
          <path d="M24 34 Q40 18 56 34 Q52 26 40 24 Q28 26 24 34" fill="#3d2314" />
          <circle cx="33" cy="36" r="2.5" fill="#1a1a1a" />
          <circle cx="47" cy="36" r="2.5" fill="#1a1a1a" />
          <path d="M34 46 Q40 50 46 46" stroke="#8b4513" strokeWidth="1.5" fill="none" />
          <rect x="26" y="52" width="28" height="20" rx="3" fill="#f5c518" />
        </>
      );
    case "mike":
      return (
        <>
          <ellipse cx="40" cy="38" rx="17" ry="18" fill="#e8c4a0" />
          <path d="M26 32 Q40 22 54 32 L54 28 Q40 16 26 28 Z" fill="#c8c8c8" />
          <circle cx="34" cy="38" r="2" fill="#1a1a1a" />
          <circle cx="46" cy="38" r="2" fill="#1a1a1a" />
          <path d="M34 48 Q40 46 46 48" stroke="#6b5344" strokeWidth="1.5" fill="none" />
          <rect x="26" y="54" width="28" height="18" fill="#2c3e50" />
          <rect x="36" y="54" width="8" height="18" fill="#1a252f" />
        </>
      );
    case "saul":
      return (
        <>
          <ellipse cx="40" cy="36" rx="17" ry="19" fill="#f0d0b0" />
          <path d="M24 32 Q40 16 56 32 Q52 24 40 22 Q28 24 24 32" fill="#4a3728" />
          <circle cx="34" cy="36" r="2.2" fill="#1a1a1a" />
          <circle cx="46" cy="36" r="2.2" fill="#1a1a1a" />
          <path d="M34 46 Q40 50 46 46" stroke="#8b4513" strokeWidth="1.5" fill="none" />
          <rect x="26" y="52" width="28" height="20" fill="#6b4c9a" />
          <rect x="36" y="52" width="8" height="20" fill="#f5c518" />
        </>
      );
    case "hank":
      return (
        <>
          <ellipse cx="40" cy="36" rx="18" ry="19" fill="#e8b896" />
          <path d="M24 34 Q40 20 56 34 Q50 26 40 24 Q30 26 24 34" fill="#c45c26" />
          <circle cx="34" cy="37" r="2.2" fill="#1a1a1a" />
          <circle cx="46" cy="37" r="2.2" fill="#1a1a1a" />
          <path d="M32 46 Q40 52 48 46" fill="#c45c26" opacity="0.7" />
          <rect x="26" y="52" width="28" height="20" fill="#3d5a80" />
          <circle cx="40" cy="62" r="4" fill="#f5c518" />
        </>
      );
    case "gustavo":
      return (
        <>
          <ellipse cx="40" cy="36" rx="17" ry="19" fill="#c4a882" />
          <path d="M26 30 Q40 18 54 30 L54 26 Q40 14 26 26 Z" fill="#1a1a1a" />
          <circle cx="34" cy="36" r="2" fill="#1a1a1a" />
          <circle cx="46" cy="36" r="2" fill="#1a1a1a" />
          <line x1="34" y1="46" x2="46" y2="46" stroke="#5c4033" strokeWidth="1.5" />
          <rect x="26" y="52" width="28" height="20" fill="#1a1a2e" />
          <rect x="26" y="52" width="28" height="4" fill="#c0392b" />
        </>
      );
    case "flynn":
      return (
        <>
          <ellipse cx="40" cy="34" rx="16" ry="18" fill="#f0c8a0" />
          <path d="M26 30 Q40 16 54 30 Q50 22 40 20 Q30 22 26 30" fill="#3d2314" />
          <circle cx="34" cy="34" r="2" fill="#1a1a1a" />
          <circle cx="46" cy="34" r="2" fill="#1a1a1a" />
          <path d="M34 44 Q40 47 46 44" stroke="#8b4513" strokeWidth="1.5" fill="none" />
          <rect x="28" y="50" width="24" height="22" fill="#3498db" />
          <ellipse cx="28" cy="68" rx="10" ry="6" fill="#2c3e50" />
          <ellipse cx="52" cy="68" rx="10" ry="6" fill="#2c3e50" />
        </>
      );
    case "hector":
      return (
        <>
          <ellipse cx="40" cy="34" rx="16" ry="17" fill="#d4b896" />
          <path d="M28 28 Q40 18 52 28" fill="none" stroke="#c8c8c8" strokeWidth="3" />
          <circle cx="34" cy="34" r="2" fill="#1a1a1a" />
          <circle cx="46" cy="34" r="2" fill="#1a1a1a" />
          <path d="M34 44 Q40 42 46 44" stroke="#6b5344" strokeWidth="1.5" fill="none" />
          <rect x="24" y="50" width="32" height="24" rx="4" fill="#5c4033" />
          <rect x="30" y="58" width="20" height="8" rx="2" fill="#f5c518" />
        </>
      );
    case "tuco":
      return (
        <>
          <ellipse cx="40" cy="36" rx="18" ry="19" fill="#c4a070" />
          <path d="M24 32 Q40 14 56 32 Q50 22 40 20 Q30 22 24 32" fill="#1a1a1a" />
          <circle cx="33" cy="36" r="2.5" fill="#1a1a1a" />
          <circle cx="47" cy="36" r="2.5" fill="#1a1a1a" />
          <path d="M32 48 Q40 54 48 48" fill="#1a1a1a" />
          <rect x="26" y="52" width="28" height="20" fill="#8b0000" />
          <circle cx="40" cy="58" r="3" fill="#f5c518" />
        </>
      );
    case "skinny":
      return (
        <>
          <ellipse cx="40" cy="38" rx="14" ry="18" fill="#e8c4a0" />
          <path d="M28 30 Q40 16 52 30 Q48 22 40 20 Q32 22 28 30" fill="#4a3728" />
          <ellipse cx="40" cy="22" rx="16" ry="6" fill="#2c3e50" />
          <circle cx="34" cy="38" r="2" fill="#1a1a1a" />
          <circle cx="46" cy="38" r="2" fill="#1a1a1a" />
          <rect x="30" y="54" width="20" height="20" fill="#7f8c8d" />
        </>
      );
    case "lalo":
      return (
        <>
          <ellipse cx="40" cy="36" rx="17" ry="19" fill="#d4a882" />
          <path d="M24 32 Q40 14 56 32 Q52 22 40 20 Q28 22 24 32" fill="#1a120c" />
          <circle cx="34" cy="36" r="2.2" fill="#1a1a1a" />
          <circle cx="46" cy="36" r="2.2" fill="#1a1a1a" />
          <path d="M34 46 Q40 51 46 46" stroke="#5c4033" strokeWidth="1.5" fill="none" />
          <rect x="26" y="52" width="28" height="20" fill="#8b1e1e" />
          <rect x="34" y="52" width="12" height="20" fill="#f5c518" />
        </>
      );
    case "badger":
      return (
        <>
          <ellipse cx="40" cy="36" rx="17" ry="18" fill="#f0c8a0" />
          <path d="M24 34 Q40 18 56 34 Q50 26 40 24 Q30 26 24 34" fill="#5c4033" />
          <circle cx="34" cy="36" r="2.2" fill="#1a1a1a" />
          <circle cx="46" cy="36" r="2.2" fill="#1a1a1a" />
          <path d="M34 46 Q40 50 46 46" stroke="#8b4513" strokeWidth="1.5" fill="none" />
          <rect x="26" y="52" width="28" height="20" fill="#27ae60" />
          <rect x="30" y="58" width="20" height="6" fill="#f5c518" />
        </>
      );
    default:
      return (
        <>
          <circle cx="40" cy="34" r="14" fill="#4ade80" opacity="0.3" />
          <path
            d="M30 28 L30 48 Q40 56 50 48 L50 28"
            fill="none"
            stroke="#f5c518"
            strokeWidth="3"
          />
          <ellipse cx="40" cy="44" rx="8" ry="5" fill="#4ade80" opacity="0.6" />
          <circle cx="40" cy="22" r="4" fill="#f5c518" />
        </>
      );
  }
}
