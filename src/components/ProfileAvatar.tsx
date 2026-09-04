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
      <defs>
        <radialGradient id={`g-${avatarId}`} cx="35%" cy="28%" r="75%">
          <stop offset="0%" stopColor={bgLight(avatarId)} />
          <stop offset="100%" stopColor={bgDark(avatarId)} />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="40" fill={`url(#g-${avatarId})`} />
      {face(avatarId)}
    </svg>
  );
}
function bgDark(id: AvatarId): string {
  const m: Record<AvatarId, string> = {
    rookie: "#0e1a0e",
    walter: "#152015",
    jesse: "#1a1408",
    mike: "#0e141c",
    saul: "#181028",
    hank: "#1a1208",
    gustavo: "#0e0e18",
    flynn: "#101820",
    hector: "#1a0e0e",
    tuco: "#1c0a0a",
    skinny: "#101810",
    badger: "#141c0e",
    lalo: "#181008",
  };
  return m[id] ?? "#0e1a0e";
}
function bgLight(id: AvatarId): string {
  const m: Record<AvatarId, string> = {
    rookie: "#243424",
    walter: "#2a3a2a",
    jesse: "#3a2c14",
    mike: "#243040",
    saul: "#322448",
    hank: "#322414",
    gustavo: "#222238",
    flynn: "#243848",
    hector: "#322020",
    tuco: "#381414",
    skinny: "#243424",
    badger: "#2a3820",
    lalo: "#322818",
  };
  return m[id] ?? "#243424";
}
function face(id: AvatarId) {
  switch (id) {
    case "walter":
  return (
    <>
      <ellipse cx="40" cy="22" rx="15" ry="10" fill="#f0dcc8" />
      <path d="M24 30 Q26 14 40 12 Q54 14 56 30 Q54 50 40 56 Q26 50 24 30 Z" fill="#e0b890" />
      <ellipse cx="32" cy="18" rx="6" ry="3.5" fill="#fff" opacity="0.16" />
      <ellipse cx="22" cy="36" rx="3.5" ry="6" fill="#d4a878" />
      <ellipse cx="58" cy="36" rx="3.5" ry="6" fill="#d4a878" />
      <path d="M30 22 Q40 18 50 22" stroke="#b88868" strokeWidth="1.2" fill="none" opacity="0.5" />
      <ellipse cx="31" cy="40" rx="5" ry="2.2" fill="#9a7058" opacity="0.3" />
      <ellipse cx="49" cy="40" rx="5" ry="2.2" fill="#9a7058" opacity="0.3" />
      <path d="M25 28 L35 31" stroke="#4a3428" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M55 28 L45 31" stroke="#4a3428" strokeWidth="2.4" strokeLinecap="round" />
      <rect x="24" y="30" width="12" height="10" rx="1.5" fill="rgba(200,220,240,0.2)" stroke="#111" strokeWidth="2" />
      <rect x="44" y="30" width="12" height="10" rx="1.5" fill="rgba(200,220,240,0.2)" stroke="#111" strokeWidth="2" />
      <line x1="36" y1="35" x2="44" y2="35" stroke="#111" strokeWidth="2" />
      <ellipse cx="30" cy="35" rx="2.5" ry="2.8" fill="#1a120c" />
      <ellipse cx="50" cy="35" rx="2.5" ry="2.8" fill="#1a120c" />
      <circle cx="30.8" cy="33.8" r="0.8" fill="#fff" opacity="0.55" />
      <circle cx="50.8" cy="33.8" r="0.8" fill="#fff" opacity="0.55" />
      <path d="M37 36 Q40 44 44 41" stroke="#b88868" strokeWidth="1.6" fill="none" />
      <path d="M28 44 Q34 42 40 44 Q46 42 52 44 Q50 52 46 56 Q40 60 34 56 Q30 52 28 44 Z" fill="#4a3728" />
      <path d="M30 44 Q40 48 50 44" stroke="#3d2e22" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <rect x="24" y="56" width="32" height="16" fill="#ececec" />
      <rect x="24" y="56" width="32" height="5" fill="#4a6741" />
    </>
  );
case "jesse":
  return (
    <>
      <path d="M24 34 Q26 14 40 12 Q54 14 56 34 Q54 52 40 58 Q26 52 24 34 Z" fill="#e4bc8c" />
      <path d="M22 32 Q18 6 40 4 Q62 6 58 32 Q54 16 40 14 Q26 16 22 32 Z" fill="#1a1008" />
      <path d="M28 12 L32 2 L36 12 Z" fill="#1a1008" />
      <path d="M38 8 L42 -1 L48 8 Z" fill="#1a1008" />
      <path d="M50 10 L56 1 L60 12 Z" fill="#1a1008" />
      <path d="M22 34 Q18 46 24 54" stroke="#1a1008" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M58 34 Q62 46 56 54" stroke="#1a1008" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <ellipse cx="23" cy="40" rx="3.2" ry="5.5" fill="#d4a878" />
      <ellipse cx="57" cy="40" rx="3.2" ry="5.5" fill="#d4a878" />
      <path d="M28 28 Q33 24 38 28" stroke="#1a1008" strokeWidth="2.4" fill="none" />
      <path d="M42 28 Q47 24 52 28" stroke="#1a1008" strokeWidth="2.4" fill="none" />
      <ellipse cx="33" cy="36" rx="3.5" ry="4" fill="#1a120c" />
      <ellipse cx="47" cy="36" rx="3.5" ry="4" fill="#1a120c" />
      <circle cx="34.4" cy="34.2" r="1.2" fill="#fff" opacity="0.75" />
      <circle cx="48.4" cy="34.2" r="1.2" fill="#fff" opacity="0.75" />
      <path d="M32 46 Q40 56 50 44" stroke="#8b5a3c" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="40" cy="52" rx="4" ry="2.5" fill="#2a1810" opacity="0.5" />
      <path d="M24 54 Q40 52 56 54 L54 74 Q40 78 26 74 Z" fill="#f5c518" />
      <path d="M32 60 Q40 64 48 60" stroke="#b89010" strokeWidth="1.5" fill="none" />
    </>
  );
    case "mike":
      return (
        <>
          <ellipse cx="40" cy="37" rx="17" ry="18" fill="#d4ae8a" />
          <path d="M23 30 L23 22 Q40 14 57 22 L57 30 Q52 20 40 19 Q28 20 23 30" fill="#a8a8a8" />
          <rect x="24" y="20" width="32" height="7" rx="1" fill="#9a9a9a" />
          <ellipse cx="27" cy="27" rx="4" ry="3" fill="#d4ae8a" />
          <ellipse cx="53" cy="27" rx="4" ry="3" fill="#d4ae8a" />
          <path d="M27 33 Q33 30 38 33" stroke="#4a3a30" strokeWidth="2.2" fill="none" />
          <path d="M42 33 Q47 30 53 33" stroke="#4a3a30" strokeWidth="2.2" fill="none" />
          <ellipse cx="32.5" cy="36" rx="2.3" ry="2" fill="#241810" />
          <ellipse cx="47.5" cy="36" rx="2.3" ry="2" fill="#241810" />
          <path d="M37 38 Q40 44 44 41" stroke="#b08060" strokeWidth="1.6" fill="none" />
          <path d="M31 47 Q40 45.5 49 47" stroke="#5a4030" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M24 50 Q40 58 56 50" stroke="#c49a78" strokeWidth="2" fill="none" opacity="0.35" />
          <path d="M22 54 Q40 52 58 54 L56 74 Q40 78 24 74 Z" fill="#2c3e50" />
          <path d="M35 54 L40 72 L45 54" fill="#1a252f" />
          <rect x="38" y="54" width="4" height="14" fill="#3d5a80" />
        </>
      );
    case "lalo":
      return (
        <>
          <ellipse cx="40" cy="36" rx="17" ry="19" fill="#c48a58" />
          <path d="M20 34 Q22 10 40 8 Q58 10 60 34 Q56 18 40 16 Q24 18 20 34" fill="#140c06" />
          <path d="M20 36 Q17 44 22 54" stroke="#140c06" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <path d="M60 36 Q63 44 58 54" stroke="#140c06" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <path d="M28 16 Q36 12 44 16" stroke="#2a1c10" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M27 28 Q33 24 38 28" stroke="#140c06" strokeWidth="2.2" fill="none" />
          <path d="M42 28 Q47 24 53 28" stroke="#140c06" strokeWidth="2.2" fill="none" />
          <ellipse cx="33" cy="34" rx="3" ry="3.3" fill="#140c06" />
          <ellipse cx="47" cy="34" rx="3" ry="3.3" fill="#140c06" />
          <circle cx="34.2" cy="32.8" r="0.9" fill="#fff" opacity="0.55" />
          <circle cx="48.2" cy="32.8" r="0.9" fill="#fff" opacity="0.55" />
          <path d="M37 36 Q40 42 44 39" stroke="#a07048" strokeWidth="1.5" fill="none" />
          <path d="M28 44 Q40 56 52 44" fill="#7a2828" />
          <path d="M30 45 Q40 54 50 45" fill="#f0e4dc" />
          <ellipse cx="40" cy="50" rx="9" ry="3.5" fill="#2a1c10" opacity="0.22" />
          <path d="M24 54 Q40 52 56 54 L54 74 Q40 78 26 74 Z" fill="#8b1a1a" />
          <path d="M35 54 L40 72 L45 54" fill="#f5c518" />
        </>
      );
    case "saul":
      return (
        <>
          <ellipse cx="40" cy="34" rx="17" ry="19" fill="#efd0b0" />
          <path d="M21 30 Q23 10 40 8 Q57 10 59 30 Q55 18 40 16 Q25 18 21 30" fill="#3a2818" />
          <path d="M21 32 Q40 14 59 32" fill="#4a3424" opacity="0.5" />
          <ellipse cx="23" cy="36" rx="3" ry="5" fill="#dfb890" />
          <ellipse cx="57" cy="36" rx="3" ry="5" fill="#dfb890" />
          <path d="M28 28 Q33 25 37 28" stroke="#3a2818" strokeWidth="1.8" fill="none" />
          <path d="M43 28 Q47 25 52 28" stroke="#3a2818" strokeWidth="1.8" fill="none" />
          <ellipse cx="33" cy="34" rx="2.8" ry="3.1" fill="#1a120c" />
          <ellipse cx="47" cy="34" rx="2.8" ry="3.1" fill="#1a120c" />
          <circle cx="34" cy="32.8" r="0.9" fill="#fff" opacity="0.65" />
          <circle cx="48" cy="32.8" r="0.9" fill="#fff" opacity="0.65" />
          <path d="M32 44 Q40 52 48 44" stroke="#8b5a3c" strokeWidth="1.8" fill="none" />
          <path d="M24 52 Q40 50 56 52 L54 74 Q40 78 26 74 Z" fill="#5c348a" />
          <rect x="36" y="52" width="8" height="18" fill="#f5c518" />
          <rect x="24" y="52" width="32" height="4" fill="#4a2870" />
        </>
      );
    case "hank":
      return (
        <>
          <ellipse cx="40" cy="36" rx="17" ry="18" fill="#e8b890" />
          <path
            d="M22 34 Q24 10 40 8 Q56 10 58 34 Q54 18 40 16 Q26 18 22 34"
            fill="#d35400"
          />
          <path
            d="M22 36 Q20 44 24 50"
            stroke="#d35400"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M58 36 Q60 44 56 50"
            stroke="#d35400"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="23" cy="40" rx="3" ry="5" fill="#d4a078" />
          <ellipse cx="57" cy="40" rx="3" ry="5" fill="#d4a078" />
          <path d="M28 29 Q33 26 38 29" stroke="#a04010" strokeWidth="2.2" fill="none" />
          <path d="M42 29 Q47 26 52 29" stroke="#a04010" strokeWidth="2.2" fill="none" />
          <ellipse cx="33" cy="36" rx="2.8" ry="3" fill="#1a120c" />
          <ellipse cx="47" cy="36" rx="2.8" ry="3" fill="#1a120c" />
          <path
            d="M28 44 Q34 42 40 44 Q46 42 52 44 Q50 50 46 52 Q40 54 34 52 Q30 50 28 44"
            fill="#c44e1c"
          />
          <path
            d="M30 45 Q40 48 50 45"
            stroke="#a03810"
            strokeWidth="1.2"
            fill="none"
            opacity="0.5"
          />
          <path d="M22 54 Q40 52 58 54 L56 74 Q40 78 24 74 Z" fill="#3d5a80" />
          <circle cx="40" cy="64" r="5.5" fill="#f5c518" stroke="#b8860b" strokeWidth="1.2" />
          <circle cx="40" cy="64" r="2.5" fill="#3d5a80" />
        </>
      );
    case "gustavo":
      return (
        <>
          <ellipse cx="40" cy="34" rx="16" ry="18" fill="#b89068" />
          <path d="M23 28 Q25 12 40 10 Q55 12 57 28 L57 24 Q40 10 23 24 Z" fill="#0a0a0a" />
          <ellipse cx="24" cy="36" rx="2.8" ry="5" fill="#a88060" />
          <ellipse cx="56" cy="36" rx="2.8" ry="5" fill="#a88060" />
          <path d="M28 27 Q33 25 37 27" stroke="#0a0a0a" strokeWidth="1.6" fill="none" />
          <path d="M43 27 Q47 25 52 27" stroke="#0a0a0a" strokeWidth="1.6" fill="none" />
          <ellipse cx="33" cy="33" rx="2.4" ry="2.6" fill="#1a120c" />
          <ellipse cx="47" cy="33" rx="2.4" ry="2.6" fill="#1a120c" />
          <line x1="31" y1="44" x2="49" y2="44" stroke="#4a3020" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M24 50 Q40 48 56 50 L54 74 Q40 78 26 74 Z" fill="#141428" />
          <rect x="24" y="50" width="32" height="5" fill="#c0392b" />
        </>
      );
    case "flynn":
      return (
        <>
          <ellipse cx="40" cy="32" rx="15" ry="17" fill="#efd0b0" />
          <path d="M24 28 Q26 12 40 10 Q54 12 56 28 Q52 18 40 16 Q28 18 24 28" fill="#3a2418" />
          <ellipse cx="33" cy="32" rx="2.4" ry="2.6" fill="#1a120c" />
          <ellipse cx="47" cy="32" rx="2.4" ry="2.6" fill="#1a120c" />
          <path d="M32 42 Q40 46 48 42" stroke="#8b5a3c" strokeWidth="1.5" fill="none" />
          <path d="M26 48 Q40 46 54 48 L52 70 Q40 74 28 70 Z" fill="#3498db" />
          <ellipse cx="28" cy="68" rx="9" ry="5" fill="#2c3e50" />
          <ellipse cx="52" cy="68" rx="9" ry="5" fill="#2c3e50" />
        </>
      );
    case "hector":
      return (
        <>
          <ellipse cx="40" cy="30" rx="15" ry="16" fill="#d4b090" />
          <path d="M25 24 Q40 12 55 24" fill="none" stroke="#c8c8c8" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M28 22 Q32 18 36 20" stroke="#b0b0b0" strokeWidth="2" fill="none" />
          <ellipse cx="33" cy="30" rx="2.2" ry="2.4" fill="#1a120c" />
          <ellipse cx="47" cy="30" rx="2.2" ry="2.4" fill="#1a120c" />
          <path d="M32 40 Q40 37 48 40" stroke="#6b5344" strokeWidth="1.6" fill="none" />
          <path d="M20 46 Q40 44 60 46 L58 72 Q40 78 22 72 Z" fill="#5c4033" />
          <rect x="28" y="56" width="24" height="8" rx="2" fill="#f5c518" />
          <circle cx="40" cy="60" r="2.5" fill="#c9a012" />
        </>
      );
    case "tuco":
      return (
        <>
          <ellipse cx="40" cy="34" rx="18" ry="19" fill="#b08050" />
          <path d="M20 30 Q22 8 40 6 Q58 8 60 30 Q54 16 40 14 Q26 16 20 30" fill="#0a0a0a" />
          <path d="M27 26 Q33 22 38 26" stroke="#0a0a0a" strokeWidth="2.4" fill="none" />
          <path d="M42 26 Q47 22 53 26" stroke="#0a0a0a" strokeWidth="2.4" fill="none" />
          <ellipse cx="32" cy="34" rx="3.2" ry="3.4" fill="#1a120c" />
          <ellipse cx="48" cy="34" rx="3.2" ry="3.4" fill="#1a120c" />
          <path d="M26 44 Q40 62 54 44 Q50 54 40 58 Q30 54 26 44" fill="#0a0a0a" />
          <path d="M22 54 Q40 52 58 54 L56 74 Q40 78 24 74 Z" fill="#8b0000" />
          <circle cx="40" cy="60" r="4" fill="#f5c518" />
        </>
      );
    case "skinny":
      return (
        <>
          <ellipse cx="40" cy="38" rx="12" ry="16" fill="#e0b888" />
          <ellipse cx="40" cy="18" rx="17" ry="6" fill="#2c3e50" />
          <rect x="28" y="14" width="24" height="7" fill="#34495e" />
          <path d="M28 28 Q30 16 40 14 Q50 16 52 28" fill="#4a3728" />
          <ellipse cx="34" cy="36" rx="2.2" ry="2.4" fill="#1a120c" />
          <ellipse cx="46" cy="36" rx="2.2" ry="2.4" fill="#1a120c" />
          <rect x="30" y="54" width="20" height="18" fill="#7f8c8d" />
        </>
      );
    case "badger":
      return (
        <>
          <ellipse cx="40" cy="35" rx="16" ry="18" fill="#efd0b0" />
          <path d="M22 32 Q24 12 40 10 Q56 12 58 32 Q52 20 40 18 Q28 20 22 32" fill="#5c4033" />
          <ellipse cx="33" cy="35" rx="2.6" ry="2.8" fill="#1a120c" />
          <ellipse cx="47" cy="35" rx="2.6" ry="2.8" fill="#1a120c" />
          <path d="M32 46 Q40 51 48 46" stroke="#8b5a3c" strokeWidth="1.6" fill="none" />
          <path d="M24 52 Q40 50 56 52 L54 74 Q40 78 26 74 Z" fill="#27ae60" />
          <rect x="28" y="60" width="24" height="5" fill="#f5c518" />
        </>
      );
    default:
      return (
        <>
          <ellipse cx="40" cy="34" rx="14" ry="16" fill="#3a5a3a" opacity="0.45" />
          <path
            d="M30 26 L30 48 Q40 56 50 48 L50 26"
            fill="none"
            stroke="#f5c518"
            strokeWidth="2.8"
          />
          <ellipse cx="40" cy="44" rx="7" ry="4" fill="#4ade80" opacity="0.55" />
          <circle cx="40" cy="20" r="4" fill="#f5c518" />
          <text x="40" y="70" textAnchor="middle" fontSize="7" fill="#f5c518" fontFamily="sans-serif">
            LAB
          </text>
        </>
      );
  }
}
