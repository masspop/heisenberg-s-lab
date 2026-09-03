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
        <radialGradient id={`bg-${avatarId}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor={bgLight(avatarId)} />
          <stop offset="100%" stopColor={bgFor(avatarId)} />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="40" fill={`url(#bg-${avatarId})`} />
      {renderFace(avatarId)}
    </svg>
  );
}
function bgFor(id: AvatarId): string {
  const map: Record<AvatarId, string> = {
    rookie: "#142214",
    walter: "#1e2e1e",
    jesse: "#2a1e0c",
    mike: "#141c28",
    saul: "#221830",
    hank: "#221810",
    gustavo: "#141420",
    flynn: "#182230",
    hector: "#221414",
    tuco: "#281010",
    skinny: "#182018",
    badger: "#1e2814",
    lalo: "#221810",
  };
  return map[id] ?? "#142214";
}
function bgLight(id: AvatarId): string {
  const map: Record<AvatarId, string> = {
    rookie: "#2a3a2a",
    walter: "#3a4a3a",
    jesse: "#4a3820",
    mike: "#2a3848",
    saul: "#3a2850",
    hank: "#3a2a18",
    gustavo: "#2a2a40",
    flynn: "#2a3a50",
    hector: "#3a2424",
    tuco: "#401818",
    skinny: "#2a3828",
    badger: "#304020",
    lalo: "#3a2e20",
  };
  return map[id] ?? "#2a3a2a";
}
function Skin({
  tone = "#e8c4a0",
  shadow = "#c49a78",
}: {
  tone?: string;
  shadow?: string;
}) {
  return (
    <>
      <ellipse cx="40" cy="34" rx="18" ry="20" fill={tone} />
      <ellipse cx="32" cy="38" rx="4" ry="8" fill={shadow} opacity="0.25" />
      <ellipse cx="48" cy="38" rx="4" ry="8" fill={shadow} opacity="0.25" />
      <ellipse cx="34" cy="26" rx="6" ry="4" fill="#fff" opacity="0.12" />
    </>
  );
}
function Eyes({
  y = 34,
  color = "#1a120c",
}: {
  y?: number;
  color?: string;
}) {
  return (
    <>
      <ellipse cx="33" cy={y} rx="3.2" ry="3.5" fill={color} />
      <ellipse cx="47" cy={y} rx="3.2" ry="3.5" fill={color} />
      <circle cx="34.2" cy={y - 1} r="1" fill="#fff" opacity="0.65" />
      <circle cx="48.2" cy={y - 1} r="1" fill="#fff" opacity="0.65" />
    </>
  );
}
function renderFace(id: AvatarId) {
  switch (id) {
    case "walter":
      return (
        <>
          <Skin tone="#f0d0b0" shadow="#d4a882" />
          <ellipse cx="24" cy="36" rx="3.5" ry="5" fill="#e8c4a0" />
          <ellipse cx="56" cy="36" rx="3.5" ry="5" fill="#e8c4a0" />
          <rect
            x="27"
            y="31"
            width="10"
            height="8"
            rx="1.5"
            fill="rgba(180,200,220,0.2)"
            stroke="#222"
            strokeWidth="1.4"
          />
          <rect
            x="43"
            y="31"
            width="10"
            height="8"
            rx="1.5"
            fill="rgba(180,200,220,0.2)"
            stroke="#222"
            strokeWidth="1.4"
          />
          <line x1="37" y1="35" x2="43" y2="35" stroke="#222" strokeWidth="1.4" />
          <Eyes y={35} />
          <path
            d="M30 28 Q33 26 37 28"
            stroke="#6b5344"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M43 28 Q47 26 50 28"
            stroke="#6b5344"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M32 44 Q40 54 48 44 Q46 50 40 52 Q34 50 32 44"
            fill="#7a6550"
          />
          <rect x="26" y="52" width="28" height="20" fill="#e8e8e8" />
          <rect x="26" y="52" width="28" height="5" fill="#4a6741" />
        </>
      );
    case "jesse":
      return (
        <>
          <Skin tone="#e8c090" shadow="#c09068" />
          <path
            d="M22 32 Q24 14 40 12 Q56 14 58 32 Q54 22 40 20 Q26 22 22 32"
            fill="#2a180c"
          />
          <path d="M22 34 Q20 44 24 50" stroke="#2a180c" strokeWidth="3.5" fill="none" />
          <path d="M58 34 Q60 44 56 50" stroke="#2a180c" strokeWidth="3.5" fill="none" />
          <Eyes />
          <path
            d="M28 28 Q33 25 37 28"
            stroke="#2a180c"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M43 28 Q47 25 52 28"
            stroke="#2a180c"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M32 44 Q40 49 48 43"
            stroke="#8b5a3c"
            strokeWidth="1.6"
            fill="none"
          />
          <rect x="24" y="52" width="32" height="20" rx="4" fill="#f5c518" />
          <path
            d="M30 58 Q40 62 50 58"
            stroke="#b89010"
            strokeWidth="1.5"
            fill="none"
          />
        </>
      );
    case "mike":
      return (
        <>
          {/* Older, square face, grey crew cut, stoic */}
          <ellipse cx="40" cy="36" rx="17" ry="18" fill="#dcb896" />
          <ellipse cx="32" cy="40" rx="3.5" ry="7" fill="#c49a78" opacity="0.3" />
          <ellipse cx="48" cy="40" rx="3.5" ry="7" fill="#c49a78" opacity="0.3" />
          {/* Grey hair — flat top / short */}
          <path
            d="M24 30 L24 24 Q40 16 56 24 L56 30 Q52 22 40 21 Q28 22 24 30"
            fill="#b8b8b8"
          />
          <rect x="25" y="22" width="30" height="6" rx="1" fill="#a8a8a8" />
          {/* Receding temples */}
          <ellipse cx="28" cy="28" rx="4" ry="3" fill="#dcb896" />
          <ellipse cx="52" cy="28" rx="4" ry="3" fill="#dcb896" />
          {/* Heavy lids / tired eyes */}
          <path
            d="M28 34 Q33 32 38 34"
            stroke="#5c4a3a"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M42 34 Q47 32 52 34"
            stroke="#5c4a3a"
            strokeWidth="2"
            fill="none"
          />
          <ellipse cx="33" cy="36" rx="2.5" ry="2.2" fill="#2a2018" />
          <ellipse cx="47" cy="36" rx="2.5" ry="2.2" fill="#2a2018" />
          <circle cx="34" cy="35.2" r="0.7" fill="#fff" opacity="0.4" />
          <circle cx="48" cy="35.2" r="0.7" fill="#fff" opacity="0.4" />
          {/* Broad nose */}
          <path
            d="M38 38 Q40 44 43 42"
            stroke="#b88868"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Thin mouth — flat */}
          <path
            d="M33 46 Q40 45 47 46"
            stroke="#6b5344"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Jaw shadow */}
          <path
            d="M26 48 Q40 56 54 48"
            fill="none"
            stroke="#c49a78"
            strokeWidth="2"
            opacity="0.4"
          />
          {/* Navy jacket + tie */}
          <rect x="24" y="52" width="32" height="20" fill="#2c3e50" />
          <path d="M36 52 L40 68 L44 52" fill="#1a252f" />
          <rect x="38" y="52" width="4" height="16" fill="#3d5a80" />
        </>
      );
case "lalo":
      return (
        <>
          {/* Charming smile, dark wavy hair, warm skin */}
          <ellipse cx="40" cy="35" rx="17" ry="19" fill="#c9956a" />
          <ellipse cx="32" cy="38" rx="3.5" ry="7" fill="#a87850" opacity="0.3" />
          <ellipse cx="48" cy="38" rx="3.5" ry="7" fill="#a87850" opacity="0.3" />
          {/* Thick dark hair with volume */}
          <path
            d="M22 34 Q24 12 40 10 Q56 12 58 34 Q54 20 40 18 Q26 20 22 34"
            fill="#1a1008"
          />
          <path
            d="M22 36 Q20 42 24 50"
            stroke="#1a1008"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M58 36 Q60 42 56 50"
            stroke="#1a1008"
            strokeWidth="4"
            fill="none"
          />
          {/* Wave highlight */}
          <path
            d="M30 18 Q36 14 42 18"
            stroke="#3a2818"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
          {/* Expressive brows */}
          <path
            d="M28 28 Q33 25 38 28"
            stroke="#1a1008"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M42 28 Q47 25 52 28"
            stroke="#1a1008"
            strokeWidth="2"
            fill="none"
          />
          <Eyes y={33} color="#1a1008" />
          {/* Nose */}
          <path
            d="M38 36 Q40 42 43 40"
            stroke="#a87850"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Big charming smile */}
          <path
            d="M30 44 Q40 54 50 44"
            fill="#8b3a3a"
          />
          <path
            d="M32 45 Q40 52 48 45"
            fill="#f5e8e0"
          />
          {/* Light stubble */}
          <ellipse cx="40" cy="48" rx="9" ry="4" fill="#3a2818" opacity="0.2" />
          {/* Red shirt + yellow accent (cartel charm) */}
          <rect x="24" y="52" width="32" height="20" fill="#8b1e1e" />
          <path d="M36 52 L40 70 L44 52" fill="#f5c518" />
          <rect x="24" y="52" width="32" height="3" fill="#6b1515" />
        </>
      );
    case "saul":
      return (
        <>
          <Skin tone="#f0d0b0" shadow="#d4a882" />
          <path
            d="M22 30 Q24 12 40 10 Q56 12 58 30 Q54 20 40 18 Q26 20 22 30"
            fill="#3d2a1c"
          />
          <Eyes />
          <path
            d="M28 28 Q33 25 37 28"
            stroke="#3d2a1c"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M43 28 Q47 25 52 28"
            stroke="#3d2a1c"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M32 44 Q40 50 48 44"
            stroke="#8b5a3c"
            strokeWidth="1.6"
            fill="none"
          />
          {/* Purple suit + gold tie */}
          <rect x="24" y="52" width="32" height="20" fill="#5c3d8a" />
          <rect x="36" y="52" width="8" height="18" fill="#f5c518" />
          <rect x="24" y="52" width="32" height="3" fill="#4a2e6e" />
        </>
      );
    case "hank":
      return (
        <>
          <Skin tone="#e0b090" shadow="#c49068" />
          {/* Ginger hair + mustache */}
          <path
            d="M22 32 Q24 16 40 14 Q56 16 58 32 Q52 22 40 20 Q28 22 22 32"
            fill="#c45c26"
          />
          <Eyes />
          <path
            d="M28 28 Q33 25 37 28"
            stroke="#a04820"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M43 28 Q47 25 52 28"
            stroke="#a04820"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M30 44 Q40 52 50 44 Q46 48 40 49 Q34 48 30 44"
            fill="#c45c26"
          />
          <rect x="24" y="52" width="32" height="20" fill="#3d5a80" />
          <circle cx="40" cy="62" r="4" fill="#f5c518" />
        </>
      );
    case "gustavo":
      return (
        <>
          <ellipse cx="40" cy="34" rx="16" ry="18" fill="#b89870" />
          <ellipse cx="32" cy="38" rx="3" ry="7" fill="#9a7a58" opacity="0.3" />
          {/* Sleek black hair */}
          <path
            d="M24 28 Q26 14 40 12 Q54 14 56 28 L56 24 Q40 12 24 24 Z"
            fill="#0a0a0a"
          />
          <Eyes y={33} />
          <path
            d="M28 27 Q33 25 37 27"
            stroke="#0a0a0a"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M43 27 Q47 25 52 27"
            stroke="#0a0a0a"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Thin stern mouth */}
          <line
            x1="32"
            y1="44"
            x2="48"
            y2="44"
            stroke="#5c4033"
            strokeWidth="1.6"
          />
          <rect x="24" y="50" width="32" height="22" fill="#1a1a2e" />
          <rect x="24" y="50" width="32" height="4" fill="#c0392b" />
        </>
      );
    case "flynn":
      return (
        <>
          <Skin tone="#e8c4a0" shadow="#c49a78" />
          <path
            d="M24 30 Q26 14 40 12 Q54 14 56 30 Q52 20 40 18 Q28 20 24 30"
            fill="#3d2314"
          />
          <Eyes y={33} />
          <path
            d="M32 43 Q40 47 48 43"
            stroke="#8b5a3c"
            strokeWidth="1.5"
            fill="none"
          />
          <rect x="26" y="50" width="28" height="22" fill="#3498db" />
          <ellipse cx="26" cy="68" rx="9" ry="5" fill="#2c3e50" />
          <ellipse cx="54" cy="68" rx="9" ry="5" fill="#2c3e50" />
        </>
      );
    case "hector":
      return (
        <>
          <ellipse cx="40" cy="32" rx="15" ry="16" fill="#d4b896" />
          {/* Thin grey hair */}
          <path
            d="M26 26 Q40 14 54 26"
            fill="none"
            stroke="#c8c8c8"
            strokeWidth="3"
          />
          <Eyes y={31} />
          <path
            d="M32 40 Q40 38 48 40"
            stroke="#6b5344"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Wheelchair hint / brown jacket */}
          <rect x="22" y="48" width="36" height="24" rx="3" fill="#5c4033" />
          <rect x="28" y="56" width="24" height="7" rx="2" fill="#f5c518" />
        </>
      );
    case "tuco":
      return (
        <>
          <ellipse cx="40" cy="34" rx="18" ry="19" fill="#b88858" />
          <path
            d="M22 30 Q24 10 40 8 Q56 10 58 30 Q52 18 40 16 Q28 18 22 30"
            fill="#0a0a0a"
          />
          <Eyes />
          <path
            d="M28 27 Q33 24 38 27"
            stroke="#0a0a0a"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M42 27 Q47 24 52 27"
            stroke="#0a0a0a"
            strokeWidth="2"
            fill="none"
          />
          {/* Aggressive beard */}
          <path
            d="M28 44 Q40 58 52 44 Q48 52 40 54 Q32 52 28 44"
            fill="#0a0a0a"
          />
          <rect x="24" y="52" width="32" height="20" fill="#8b0000" />
          <circle cx="40" cy="58" r="3" fill="#f5c518" />
        </>
      );
    case "skinny":
      return (
        <>
          <ellipse cx="40" cy="36" rx="13" ry="17" fill="#e0b888" />
          <path
            d="M28 28 Q30 14 40 12 Q50 14 52 28 Q48 20 40 18 Q32 20 28 28"
            fill="#4a3728"
          />
          {/* Cap */}
          <ellipse cx="40" cy="20" rx="16" ry="5" fill="#2c3e50" />
          <rect x="28" y="16" width="24" height="6" fill="#34495e" />
          <Eyes y={35} />
          <rect x="30" y="52" width="20" height="20" fill="#7f8c8d" />
        </>
      );
    case "badger":
      return (
        <>
          <Skin tone="#e8c4a0" shadow="#c49a78" />
          <path
            d="M22 32 Q24 14 40 12 Q56 14 58 32 Q52 22 40 20 Q28 22 22 32"
            fill="#5c4033"
          />
          <Eyes />
          <path
            d="M32 44 Q40 49 48 44"
            stroke="#8b5a3c"
            strokeWidth="1.5"
            fill="none"
          />
          <rect x="24" y="52" width="32" height="20" fill="#27ae60" />
          <rect x="28" y="58" width="24" height="5" fill="#f5c518" />
        </>
      );
    default:
      return (
        <>
          <circle cx="40" cy="32" r="14" fill="#3a5a3a" opacity="0.5" />
          <ellipse cx="40" cy="34" rx="12" ry="14" fill="#c8dcc8" opacity="0.35" />
          <path
            d="M30 26 L30 46 Q40 54 50 46 L50 26"
            fill="none"
            stroke="#f5c518"
            strokeWidth="2.5"
          />
          <ellipse cx="40" cy="42" rx="7" ry="4" fill="#4ade80" opacity="0.5" />
          <circle cx="40" cy="20" r="3.5" fill="#f5c518" />
        </>
      );
  }
}
