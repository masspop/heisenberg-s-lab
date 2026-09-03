const BASE = import.meta.env.BASE_URL;
export function WalterSprite({
  className = "",
  waiting = false,
}: {
  className?: string;
  waiting?: boolean;
}) {
  return (
    <img
      className={`char-sprite walter-sprite-img ${className}${waiting ? " walter-waiting" : ""}`.trim()}
      src={`${BASE}sprites/walter.jpg`}
      alt="Walter White"
      draggable={false}
    />
  );
}
