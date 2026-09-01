/** Level 1 → 100 XP, her level +50 (L2=150, L3=200 …) */
export function xpRequiredForLevel(level: number): number {
  return 100 + (level - 1) * 50;
}
/** Level 1: 30–50 XP, Level 2: 80–100, Level 3: 130–150 … (her level +50) */
export function randomXpGain(level: number): number {
  const min = 30 + (level - 1) * 50;
  const max = 50 + (level - 1) * 50;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export interface XpResult {
  xp: number;
  level: number;
  leveledUp: boolean;
  levelsGained: number;
}
export function addXp(
  currentXp: number,
  currentLevel: number,
  gained: number
): XpResult {
  let xp = currentXp + gained;
  let level = currentLevel;
  let levelsGained = 0;
  while (xp >= xpRequiredForLevel(level)) {
    xp -= xpRequiredForLevel(level);
    level++;
    levelsGained++;
  }
  return {
    xp,
    level,
    leveledUp: levelsGained > 0,
    levelsGained,
  };
}
/** Her level bir öncekinden 3 element daha (L1=3, L2=6, L3=9 …) */
export function maxElementCountForLevel(level: number): number {
  return Math.min(18, 3 + (level - 1) * 3);
}
/** Element rafındaki slot sayısı */
export function elementShelfSizeForLevel(level: number): number {
  return Math.min(22, 6 + (level - 1) * 3);
}
export function minDifficultyForLevel(level: number): number {
  if (level <= 5) return 1;
  if (level <= 15) return 2;
  if (level <= 30) return 3;
  return 4;
}
/** Her 5 levelde kalp yenilenir (5, 10, 15 …) */
export function shouldRestoreLives(level: number): boolean {
  return level > 0 && level % 5 === 0;
