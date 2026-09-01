import type { ReactElement } from "react";
interface SceneProps {
  className?: string;
}m
type SceneComponent = (props: SceneProps) => ReactElement;
export function HotdogCartScene({ className = "" }: SceneProps) {
  return (
    <svg className={className} viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#87a96b" />
      <rect y="130" width="320" height="50" fill="#6b5344" />
      <circle cx="280" cy="35" r="22" fill="#ffe066" opacity="0.9" />
      <rect x="80" y="85" width="160" height="55" rx="4" fill="#c0392b" />
      <rect x="85" y="90" width="150" height="20" fill="#e74c3c" />
      <rect x="75" y="75" width="170" height="12" rx="2" fill="#bdc3c7" />
      <rect x="155" y="30" width="6" height="50" fill="#7f8c8d" />
      <ellipse cx="158" cy="32" rx="70" ry="18" fill="#e74c3c" />
      <ellipse cx="158" cy="28" rx="65" ry="14" fill="#c0392b" />
      <circle cx="110" cy="142" r="14" fill="#2c3e50" />
      <circle cx="110" cy="142" r="7" fill="#7f8c8d" />
      <circle cx="210" cy="142" r="14" fill="#2c3e50" />
      <circle cx="210" cy="142" r="7" fill="#7f8c8d" />
      <rect x="100" y="68" width="50" height="8" rx="2" fill="#2c2c2c" />
      <ellipse cx="110" cy="64" rx="8" ry="4" fill="#d35400" />
      <ellipse cx="125" cy="64" rx="8" ry="4" fill="#d35400" />
      <ellipse cx="140" cy="64" rx="8" ry="4" fill="#d35400" />
      <rect x="115" y="95" width="90" height="22" rx="2" fill="#f5c518" />
      <text x="160" y="110" textAnchor="middle" fill="#1a1a1a" fontSize="11" fontFamily="sans-serif" fontWeight="bold">SOSISLI</text>
      <ellipse cx="125" cy="55" rx="6" ry="10" fill="#fff" opacity="0.3" />
      <ellipse cx="135" cy="50" rx="5" ry="8" fill="#fff" opacity="0.25" />
    </svg>
  );
}
export function SwampScene({ className = "" }: SceneProps) {
  return (
    <svg className={className} viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#1a3a2a" />
      <ellipse cx="160" cy="160" rx="180" ry="40" fill="#0d2818" />
      <ellipse cx="80" cy="150" rx="60" ry="20" fill="#2d5a3d" opacity="0.6" />
      <ellipse cx="240" cy="155" rx="70" ry="25" fill="#2d5a3d" opacity="0.6" />
      <rect x="30" y="80" width="8" height="60" fill="#3d2817" />
      <ellipse cx="34" cy="75" rx="25" ry="30" fill="#1e5631" />
      <rect x="270" y="90" width="6" height="50" fill="#3d2817" />
      <ellipse cx="273" cy="85" rx="20" ry="25" fill="#1e5631" />
      <ellipse cx="200" cy="140" rx="12" ry="4" fill="#4ade80" />
      <circle cx="196" cy="139" r="2" fill="#1a1a1a" />
      <circle cx="204" cy="139" r="2" fill="#1a1a1a" />
      <ellipse cx="100" cy="100" rx="50" ry="15" fill="#8a9a8a" opacity="0.2" />
      <ellipse cx="220" cy="90" rx="40" ry="12" fill="#8a9a8a" opacity="0.15" />
    </svg>
  );
}
export function VolcanoScene({ className = "" }: SceneProps) {
  return (
    <svg className={className} viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#1a0a08" />
      <polygon points="160,20 60,150 260,150" fill="#3d2314" />
      <polygon points="160,20 100,150 220,150" fill="#5c4033" />
      <polygon points="160,35 145,80 175,80" fill="#ff4500" />
      <ellipse cx="160" cy="30" rx="15" ry="8" fill="#ffd700" />
      <ellipse cx="155" cy="25" rx="8" ry="12" fill="#ff6347" opacity="0.8" />
      <ellipse cx="168" cy="22" rx="6" ry="10" fill="#ff4500" opacity="0.7" />
      <ellipse cx="160" cy="15" rx="25" ry="12" fill="#4a4a4a" opacity="0.5" />
      <ellipse cx="150" cy="8" rx="15" ry="8" fill="#6a6a6a" opacity="0.4" />
    </svg>
  );
}
export function ForestScene({ className = "" }: SceneProps) {
  return (
    <svg className={className} viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#0a1520" />
      {[40, 100, 160, 220, 280].map((x, i) => (
        <g key={x}>
          <rect x={x - 4} y={90 + i * 5} width="8" height="60" fill="#3d2817" />
          <ellipse cx={x} cy={85 + i * 3} rx="28" ry="35" fill={i % 2 ? "#2d1b4e" : "#1e5631"} />
        </g>
      ))}
      <ellipse cx="130" cy="145" rx="10" ry="6" fill="#7b2cbf" />
      <rect x="127" y="140" width="6" height="8" fill="#e8d5b7" />
      <ellipse cx="190" cy="148" rx="8" ry="5" fill="#4ade80" opacity="0.8" />
      <circle cx="160" cy="80" r="3" fill="#a29bfe" opacity="0.8" />
      <circle cx="200" cy="100" r="2" fill="#ffd32a" opacity="0.7" />
      <circle cx="120" cy="95" r="2" fill="#a29bfe" opacity="0.6" />
    </svg>
  );
}
export function NuclearScene({ className = "" }: SceneProps) {
  return (
    <svg className={className} viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#1a1f0a" />
      <path d="M120 150 L120 60 Q160 40 200 60 L200 150 Z" fill="#7f8c8d" />
      <path d="M130 150 L130 70 Q160 55 190 70 L190 150 Z" fill="#95a5a6" />
      <ellipse cx="160" cy="55" rx="35" ry="12" fill="#bdc3c7" />
      <ellipse cx="160" cy="45" rx="20" ry="8" fill="#ecf0f1" opacity="0.5" />
      <ellipse cx="150" cy="38" rx="12" ry="6" fill="#fff" opacity="0.3" />
      <circle cx="250" cy="100" r="28" fill="#f5c518" />
      <circle cx="250" cy="100" r="8" fill="#1a1f0a" />
      {[0, 120, 240].map((angle) => (
        <ellipse key={angle} cx="250" cy="100" rx="6" ry="22" fill="#1a1f0a" transform={`rotate(${angle} 250 100)`} />
      ))}
    </svg>
  );
}
export function DungeonScene({ className = "" }: SceneProps) {
  return (
    <svg className={className} viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#0a0505" />
      <rect x="0" y="0" width="40" height="180" fill="#2d2d2d" />
      <rect x="280" y="0" width="40" height="180" fill="#2d2d2d" />
      <path d="M40 0 L40 80 Q160 120 280 80 L280 0 Z" fill="#1a1a1a" />
      <line x1="80" y1="0" x2="80" y2="50" stroke="#555" strokeWidth="3" />
      <line x1="240" y1="0" x2="240" y2="45" stroke="#555" strokeWidth="3" />
      <ellipse cx="80" cy="55" rx="8" ry="12" fill="none" stroke="#666" strokeWidth="2" />
      <rect x="155" y="100" width="10" height="40" fill="#5c4033" />
      <ellipse cx="160" cy="95" rx="12" ry="15" fill="#ff6347" opacity="0.9" />
      <ellipse cx="160" cy="90" rx="8" ry="10" fill="#ffd700" opacity="0.7" />
      <rect y="155" width="320" height="25" fill="#1a1010" />
    </svg>
  );
}
export function CaravanScene({ className = "" }: SceneProps) {
  return (
    <svg className={className} viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#2d3a4a" />
      <rect y="130" width="320" height="50" fill="#8b7355" />
      <rect x="90" y="70" width="140" height="65" rx="4" fill="#ecf0f1" />
      <rect x="95" y="75" width="50" height="30" rx="2" fill="#3498db" opacity="0.5" />
      <rect x="150" y="75" width="35" height="25" rx="2" fill="#3498db" opacity="0.5" />
      <rect x="190" y="80" width="30" height="50" fill="#bdc3c7" />
      <circle cx="120" cy="138" r="12" fill="#2c3e50" />
      <circle cx="200" cy="138" r="12" fill="#2c3e50" />
      <line x1="160" y1="70" x2="160" y2="45" stroke="#7f8c8d" strokeWidth="2" />
      <circle cx="160" cy="42" r="3" fill="#e74c3c" />
      <ellipse cx="220" cy="65" rx="8" ry="15" fill="#4ade80" opacity="0.4" />
      <ellipse cx="228" cy="55" rx="6" ry="12" fill="#4ade80" opacity="0.3" />
    </svg>
  );
}
const SCENES: Record<number, SceneComponent> = {
  1: HotdogCartScene,
  2: SwampScene,
  3: VolcanoScene,
  4: ForestScene,
  5: NuclearScene,
  6: DungeonScene,
  7: CaravanScene,
};
export function EnvironmentScene({ envId, className = "" }: { envId: number; className?: string }) {
  const Scene = SCENES[envId] ?? HotdogCartScene;
  return <Scene className={className} />;
}
