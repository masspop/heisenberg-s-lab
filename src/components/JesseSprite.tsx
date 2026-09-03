const BASE = import.meta.env.BASE_URL;
export function JesseSprite({
  className = "",
  mixing = false,
}: {
  className?: string;
  mixing?: boolean;
}) {
  return (
    <img
      className={`char-sprite jesse-sprite-img ${className}${mixing ? " jesse-mixing" : ""}`.trim()}
      src={`${BASE}sprites/jesse.jpg`}
      alt="Jesse Pinkman"
      draggable={false}
    />
  );
}
