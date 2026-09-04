/**
 * Level XP gereksinimleri:
 * L1→10, L2→20 … L10→5120 (her level ×2)
 * L11→1024 (L10’un 1/5’i)
 * L12+ → bir önceki +200 (1224, 1424, 1624, …)
 */
export function xpRequiredForLevel(level: number): number {
  if (level <= 10) {
    return 10 * Math.pow(2, level - 1);
  }
  return 1024 + (level - 11) * 200;
}
/**
 * İlk 10 level: rastgele 25–100 XP.
 * Level 10 sonrası (11+): zorluk + kayıp kalbe göre 150–300 XP.
 * difficulty: 1 kolay → 150, 2 → 200, 3 → 250, 4 → 300
 * her kayıp kalp −30 XP (sonuç 150–300 aralığında kalır)
 */
export function calcXpGain(
  level: number,
  difficulty: number,
  heartsLost: number
): number {
  if (level <= 10) {
    return Math.floor(Math.random() * (100 - 25 + 1)) + 25;
  }
  const clamped = Math.min(4, Math.max(1, difficulty));
  const base = 150 + (clamped - 1) * 50;
  return Math.min(300, Math.max(150, base - heartsLost * 30));
}
/** @deprecated — calcXpGain kullan */
export function randomXpGain(level: number): number {
  return calcXpGain(level, 2, 0);
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
/**
 * Her 10. levelde (10, 20, 30…) performans bonusu: $3000–$6000.
 * Decade içinde kaybedilen kalp az → daha yüksek ödül.
 */
export function decadeMoneyBonus(heartsLostInDecade: number): number {
  const maxLoss = 12;
  const ratio = Math.max(0, 1 - heartsLostInDecade / maxLoss);
  return Math.round(3000 + ratio * 3000);
}
export function isDecadeMilestone(level: number): boolean {
  return level > 0 && level % 10 === 0;
}
export function maxElementCountForLevel(level: number): number {
  return Math.min(18, 3 + (level - 1) * 3);
}
export function elementShelfSizeForLevel(level: number): number {
  return Math.min(22, 6 + (level - 1) * 3);
}
export function minDifficultyForLevel(level: number): number {
  if (level <= 5) return 1;
  if (level <= 15) return 2;
  if (level <= 30) return 3;
  return 4;
}
export function shouldRestoreLives(level: number): boolean {
  return level > 0 && level % 5 === 0;
}
