const BASE = import.meta.env.BASE_URL;
const AVATAR_IDS = new Set([
  "rookie",
  "walter",
  "jesse",
  "mike",
  "saul",
  "hank",
  "gustavo",
  "flynn",
  "hector",
  "tuco",
  "skinny",
  "badger",
  "lalo",
]);
export function ProfileAvatar({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  const safeId = AVATAR_IDS.has(id) ? id : "rookie";
  const src = `${BASE}avatars/${safeId}.jpg`;
  return (
    <img
      className={`profile-avatar-img ${className}`.trim()}
      src={src}
      alt=""
      width={80}
      height={80}
      draggable={false}
    />
  );
}
