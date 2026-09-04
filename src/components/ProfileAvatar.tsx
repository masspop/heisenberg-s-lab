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
          <path d="M24 36 Q26 16 40 14 Q54 16 56 36 Q54 54 40 58 Q26 54 24 36 Z" fill="#d4ae8a" />
          <path d="M23 28 L23 18 Q40 10 57 18 L57 28 Q52 16 40 15 Q28 16 23 28" fill="#9a9a9a" />
          <rect x="24" y="16" width="32" height="9" rx="1" fill="#8a8a8a" />
          <ellipse cx="26" cy="30" rx="4" ry="4" fill="#d4ae8a" />
          <ellipse cx="54" cy="30" rx="4" ry="4" fill="#d4ae8a" />
          <path d="M26 32 Q33 28 38 32" stroke="#3a2a20" strokeWidth="2.6" fill="none" />
          <path d="M42 32 Q47 28 54 32" stroke="#3a2a20" strokeWidth="2.6" fill="none" />
          <ellipse cx="32" cy="36" rx="2.6" ry="2.2" fill="#1a120c" />
          <ellipse cx="48" cy="36" rx="2.6" ry="2.2" fill="#1a120c" />
          <path d="M28 38 Q32 40 36 38" stroke="#8a7060" strokeWidth="1.4" fill="none" opacity="0.5" />
          <path d="M44 38 Q48 40 52 38" stroke="#8a7060" strokeWidth="1.4" fill="none" opacity="0.5" />
          <path d="M37 38 Q40 46 44 42" stroke="#b08060" strokeWidth="1.7" fill="none" />
          <path d="M30 48 Q40 46 50 48" stroke="#5a4030" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M26 52 Q40 60 54 52" stroke="#c49a78" strokeWidth="2" fill="none" opacity="0.4" />
          <path d="M22 56 Q40 54 58 56 L56 76 Q40 80 24 76 Z" fill="#2c3e50" />
          <path d="M35 56 L40 74 L45 56" fill="#1a252f" />
          <rect x="38" y="56" width="4" height="14" fill="#3d5a80" />
        </>
      );
    case "saul":
      return (
        <>
          <path d="M24 32 Q26 12 40 10 Q54 12 56 32 Q54 52 40 56 Q26 52 24 32 Z" fill="#efd0b0" />
          <path d="M20 28 Q22 6 40 4 Q58 6 60 28 Q56 14 40 12 Q24 14 20 28" fill="#3a2818" />
          <path d="M22 30 Q40 12 58 30" fill="#4a3424" opacity="0.45" />
          <ellipse cx="22" cy="36" rx="3.5" ry="6" fill="#dfb890" />
          <ellipse cx="58" cy="36" rx="3.5" ry="6" fill="#dfb890" />
          <path d="M28 26 Q33 22 38 26" stroke="#3a2818" strokeWidth="2" fill="none" />
          <path d="M42 26 Q47 22 52 26" stroke="#3a2818" strokeWidth="2" fill="none" />
          <ellipse cx="33" cy="34" rx="3" ry="3.4" fill="#1a120c" />
          <ellipse cx="47" cy="34" rx="3" ry="3.4" fill="#1a120c" />
          <circle cx="34.2" cy="32.6" r="1" fill="#fff" opacity="0.7" />
          <circle cx="48.2" cy="32.6" r="1" fill="#fff" opacity="0.7" />
          <path d="M37 36 Q40 44 44 40" stroke="#c49a78" strokeWidth="1.5" fill="none" />
          <path d="M30 44 Q40 54 50 44" stroke="#8b5a3c" strokeWidth="2" fill="none" />
          <path d="M24 54 Q40 52 56 54 L54 76 Q40 80 26 76 Z" fill="#5c348a" />
          <rect x="35" y="54" width="10" height="18" fill="#f5c518" />
          <rect x="24" y="54" width="32" height="5" fill="#4a2870" />
        </>
      );
    case "hank":
      return (
        <>
          <path d="M24 34 Q26 16 40 14 Q54 16 56 34 Q54 52 40 56 Q26 52 24 34 Z" fill="#e8b890" />
          <path d="M20 32 Q22 6 40 4 Q58 6 60 32 Q56 14 40 12 Q24 14 20 32" fill="#d35400" />
          <path d="M20 34 Q17 46 24 54" stroke="#d35400" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M60 34 Q63 46 56 54" stroke="#d35400" strokeWidth="6" fill="none" strokeLinecap="round" />
          <ellipse cx="22" cy="40" rx="3.5" ry="6" fill="#d4a078" />
          <ellipse cx="58" cy="40" rx="3.5" ry="6" fill="#d4a078" />
          <path d="M28 28 Q33 24 38 28" stroke="#a04010" strokeWidth="2.4" fill="none" />
          <path d="M42 28 Q47 24 52 28" stroke="#a04010" strokeWidth="2.4" fill="none" />
          <ellipse cx="33" cy="36" rx="3" ry="3.2" fill="#1a120c" />
          <ellipse cx="47" cy="36" rx="3" ry="3.2" fill="#1a120c" />
          <circle cx="34" cy="34.6" r="0.9" fill="#fff" opacity="0.55" />
          <circle cx="48" cy="34.6" r="0.9" fill="#fff" opacity="0.55" />
          <path d="M37 38 Q40 44 44 41" stroke="#c49a78" strokeWidth="1.5" fill="none" />
          <path d="M26 44 Q34 40 40 44 Q46 40 54 44 Q52 52 46 55 Q40 58 34 55 Q28 52 26 44 Z" fill="#c44e1c" />
          <path d="M22 56 Q40 54 58 56 L56 76 Q40 80 24 76 Z" fill="#3d5a80" />
          <circle cx="40" cy="66" r="6" fill="#f5c518" stroke="#b8860b" strokeWidth="1.3" />
          <circle cx="40" cy="66" r="2.8" fill="#3d5a80" />
        </>
      );
    case "gustavo":
      return (
        <>
          <path d="M25 32 Q27 14 40 12 Q53 14 55 32 Q53 50 40 54 Q27 50 25 32 Z" fill="#b89068" />
          <path d="M23 26 Q25 8 40 6 Q55 8 57 26 L57 22 Q40 6 23 22 Z" fill="#0a0a0a" />
          <ellipse cx="23" cy="36" rx="3" ry="6" fill="#a88060" />
          <ellipse cx="57" cy="36" rx="3" ry="6" fill="#a88060" />
          <path d="M28 26 Q33 23 37 26" stroke="#0a0a0a" strokeWidth="1.8" fill="none" />
          <path d="M43 26 Q47 23 52 26" stroke="#0a0a0a" strokeWidth="1.8" fill="none" />
          <ellipse cx="33" cy="33" rx="2.5" ry="2.8" fill="#1a120c" />
          <ellipse cx="47" cy="33" rx="2.5" ry="2.8" fill="#1a120c" />
          <path d="M37 35 Q40 42 44 39" stroke="#9a7050" strokeWidth="1.4" fill="none" />
          <line x1="30" y1="46" x2="50" y2="46" stroke="#4a3020" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 52 Q40 50 56 52 L54 76 Q40 80 26 76 Z" fill="#141428" />
          <rect x="24" y="52" width="32" height="6" fill="#c0392b" />
        </>
      );
    case "flynn":
      return (
        <>
          <path d="M26 30 Q28 12 40 10 Q52 12 54 30 Q52 48 40 52 Q28 48 26 30 Z" fill="#efd0b0" />
          <path d="M24 26 Q26 8 40 6 Q54 8 56 26 Q52 14 40 12 Q28 14 24 26" fill="#3a2418" />
          <ellipse cx="23" cy="34" rx="3" ry="5" fill="#dfb890" />
          <ellipse cx="57" cy="34" rx="3" ry="5" fill="#dfb890" />
          <path d="M28 24 Q33 21 37 24" stroke="#3a2418" strokeWidth="1.8" fill="none" />
          <path d="M43 24 Q47 21 52 24" stroke="#3a2418" strokeWidth="1.8" fill="none" />
          <ellipse cx="33" cy="32" rx="2.6" ry="2.8" fill="#1a120c" />
          <ellipse cx="47" cy="32" rx="2.6" ry="2.8" fill="#1a120c" />
          <circle cx="34" cy="30.8" r="0.8" fill="#fff" opacity="0.6" />
          <circle cx="48" cy="30.8" r="0.8" fill="#fff" opacity="0.6" />
          <path d="M32 42 Q40 48 48 42" stroke="#8b5a3c" strokeWidth="1.7" fill="none" />
          <path d="M26 50 Q40 48 54 50 L52 72 Q40 76 28 72 Z" fill="#3498db" />
          <ellipse cx="28" cy="70" rx="10" ry="5.5" fill="#2c3e50" />
          <ellipse cx="52" cy="70" rx="10" ry="5.5" fill="#2c3e50" />
        </>
      );
    case "hector":
      return (
        <>
          <path d="M26 28 Q28 12 40 10 Q52 12 54 28 Q52 46 40 50 Q28 46 26 28 Z" fill="#d4b090" />
          <path d="M24 22 Q40 8 56 22" fill="none" stroke="#c8c8c8" strokeWidth="4" strokeLinecap="round" />
          <path d="M28 20 Q32 14 38 18" stroke="#b0b0b0" strokeWidth="2.2" fill="none" />
          <ellipse cx="24" cy="32" rx="3" ry="5" fill="#c4a080" />
          <ellipse cx="56" cy="32" rx="3" ry="5" fill="#c4a080" />
          <path d="M28 24 Q33 22 37 24" stroke="#8a8a8a" strokeWidth="1.6" fill="none" />
          <path d="M43 24 Q47 22 52 24" stroke="#8a8a8a" strokeWidth="1.6" fill="none" />
          <ellipse cx="33" cy="30" rx="2.4" ry="2.6" fill="#1a120c" />
          <ellipse cx="47" cy="30" rx="2.4" ry="2.6" fill="#1a120c" />
          <path d="M32 40 Q40 36 48 40" stroke="#6b5344" strokeWidth="1.8" fill="none" />
          <path d="M22 44 Q40 48 58 44" stroke="#c49a78" strokeWidth="2" fill="none" opacity="0.4" />
          <path d="M20 48 Q40 46 60 48 L58 74 Q40 80 22 74 Z" fill="#5c4033" />
          <rect x="28" y="58" width="24" height="9" rx="2" fill="#f5c518" />
          <circle cx="40" cy="62.5" r="2.8" fill="#c9a012" />
        </>
      );
    case "tuco":
      return (
        <>
          <path d="M22 34 Q24 12 40 10 Q56 12 58 34 Q56 52 40 58 Q24 52 22 34 Z" fill="#b08050" />
          <path d="M18 28 Q20 2 40 0 Q60 2 62 28 Q56 12 40 10 Q24 12 18 28" fill="#0a0a0a" />
          <path d="M20 32 Q16 44 22 56" stroke="#0a0a0a" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M60 32 Q64 44 58 56" stroke="#0a0a0a" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M26 24 Q33 18 38 24" stroke="#0a0a0a" strokeWidth="2.8" fill="none" />
          <path d="M42 24 Q47 18 54 24" stroke="#0a0a0a" strokeWidth="2.8" fill="none" />
          <ellipse cx="32" cy="34" rx="3.5" ry="3.8" fill="#1a120c" />
          <ellipse cx="48" cy="34" rx="3.5" ry="3.8" fill="#1a120c" />
          <circle cx="33.4" cy="32.4" r="1.1" fill="#fff" opacity="0.55" />
          <circle cx="49.4" cy="32.4" r="1.1" fill="#fff" opacity="0.55" />
          <path d="M24 44 Q40 68 56 44 Q52 58 40 62 Q28 58 24 44 Z" fill="#0a0a0a" />
          <path d="M22 56 Q40 54 58 56 L56 76 Q40 80 24 76 Z" fill="#8b0000" />
          <circle cx="40" cy="64" r="4.5" fill="#f5c518" />
        </>
      );
    case "lalo":
      return (
        <>
          <path d="M24 34 Q26 12 40 10 Q54 12 56 34 Q54 52 40 58 Q26 52 24 34 Z" fill="#c48a58" />
          <path d="M18 32 Q20 4 40 2 Q60 4 62 32 Q56 14 40 12 Q24 14 18 32" fill="#140c06" />
          <path d="M18 34 Q14 46 22 56" stroke="#140c06" strokeWidth="5.5" fill="none" strokeLinecap="round" />
          <path d="M62 34 Q66 46 58 56" stroke="#140c06" strokeWidth="5.5" fill="none" strokeLinecap="round" />
          <path d="M28 14 Q36 8 44 14" stroke="#2a1c10" strokeWidth="2.2" fill="none" opacity="0.55" />
          <path d="M27 26 Q33 21 38 26" stroke="#140c06" strokeWidth="2.4" fill="none" />
          <path d="M42 26 Q47 21 53 26" stroke="#140c06" strokeWidth="2.4" fill="none" />
          <ellipse cx="33" cy="34" rx="3.2" ry="3.5" fill="#140c06" />
          <ellipse cx="47" cy="34" rx="3.2" ry="3.5" fill="#140c06" />
          <circle cx="34.3" cy="32.6" r="1" fill="#fff" opacity="0.6" />
          <circle cx="48.3" cy="32.6" r="1" fill="#fff" opacity="0.6" />
          <path d="M37 36 Q40 44 44 40" stroke="#a07048" strokeWidth="1.6" fill="none" />
          <path d="M26 44 Q40 60 54 44" fill="#7a2828" />
          <path d="M28 45 Q40 56 52 45" fill="#f0e4dc" />
          <ellipse cx="40" cy="52" rx="10" ry="3.5" fill="#2a1c10" opacity="0.25" />
          <path d="M24 56 Q40 54 56 56 L54 76 Q40 80 26 76 Z" fill="#8b1a1a" />
          <path d="M35 56 L40 74 L45 56" fill="#f5c518" />
        </>
      );
    case "skinny":
      return (
        <>
          <path d="M30 36 Q32 16 40 14 Q48 16 50 36 Q48 52 40 56 Q32 52 30 36 Z" fill="#e0b888" />
          <ellipse cx="40" cy="16" rx="18" ry="7" fill="#2c3e50" />
          <rect x="27" y="12" width="26" height="8" fill="#34495e" />
          <path d="M28 28 Q30 14 40 12 Q50 14 52 28" fill="#4a3728" />
          <ellipse cx="28" cy="38" rx="2.5" ry="5" fill="#d4a878" />
          <ellipse cx="52" cy="38" rx="2.5" ry="5" fill="#d4a878" />
          <path d="M32 28 Q35 25 38 28" stroke="#4a3728" strokeWidth="1.6" fill="none" />
          <path d="M42 28 Q45 25 48 28" stroke="#4a3728" strokeWidth="1.6" fill="none" />
          <ellipse cx="34" cy="36" rx="2.4" ry="2.6" fill="#1a120c" />
          <ellipse cx="46" cy="36" rx="2.4" ry="2.6" fill="#1a120c" />
          <path d="M34 46 Q40 50 46 46" stroke="#8b5a3c" strokeWidth="1.5" fill="none" />
          <rect x="30" y="56" width="20" height="18" fill="#7f8c8d" />
        </>
      );
    case "badger":
      return (
        <>
          <path d="M24 34 Q26 14 40 12 Q54 14 56 34 Q54 52 40 56 Q26 52 24 34 Z" fill="#efd0b0" />
          <path d="M20 30 Q22 8 40 6 Q58 8 60 30 Q54 16 40 14 Q26 16 20 30" fill="#5c4033" />
          <ellipse cx="22" cy="38" rx="3.2" ry="5.5" fill="#dfb890" />
          <ellipse cx="58" cy="38" rx="3.2" ry="5.5" fill="#dfb890" />
          <path d="M28 28 Q33 24 38 28" stroke="#5c4033" strokeWidth="2" fill="none" />
          <path d="M42 28 Q47 24 52 28" stroke="#5c4033" strokeWidth="2" fill="none" />
          <ellipse cx="33" cy="35" rx="3" ry="3.2" fill="#1a120c" />
          <ellipse cx="47" cy="35" rx="3" ry="3.2" fill="#1a120c" />
          <circle cx="34.2" cy="33.6" r="1" fill="#fff" opacity="0.7" />
          <circle cx="48.2" cy="33.6" r="1" fill="#fff" opacity="0.7" />
          <path d="M32 46 Q40 54 48 46" stroke="#8b5a3c" strokeWidth="1.8" fill="none" />
          <path d="M24 54 Q40 52 56 54 L54 76 Q40 80 26 76 Z" fill="#27ae60" />
          <rect x="28" y="62" width="24" height="6" fill="#f5c518" />
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
