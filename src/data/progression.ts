/** Level 1 → 100 XP, Level 2 → 200 XP, her level 2 kat */
export function xpRequiredForLevel(level: number): number {
  return 100 * Math.pow(2, level - 1);
}

export function randomXpGain(): number {
  return Math.floor(Math.random() * 21) + 20;
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

/** Level arttıkça daha fazla element gerektiren bileşikler */
export function maxElementCountForLevel(level: number): number {
  if (level <= 3) return 3;
  if (level <= 10) return 5;
  if (level <= 20) return 7;
  if (level <= 30) return 9;
  if (level <= 50) return 11;
  return 14;
}

export function minDifficultyForLevel(level: number): number {
  if (level <= 5) return 1;
  if (level <= 15) return 2;
  if (level <= 30) return 3;
  return 4;
}
