const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;
export const MAX_LIVES = 3;
export interface ShopProfile {
  id: string;
  name: string;
  price: number;
}
export interface ShopName {
  id: string;
  label: string;
  price: number;
}
export const DEFAULT_PROFILE_ID = "rookie";
export const DEFAULT_NAME_ID = "lab-rookie";
export const PROFILES: ShopProfile[] = [
  { id: "walter", name: "Walter White", price: 96000 },
  { id: "jesse", name: "Jesse Pinkman", price: 98000 },
  { id: "hank", name: "Hank", price: 60000 },
  { id: "saul", name: "Saul", price: 62000 },
  { id: "lalo", name: "Lalo", price: 44000 },
  { id: "gustavo", name: "Gustavo", price: 92000 },
  { id: "flynn", name: "Flynn", price: 8000 },
  { id: "hector", name: "Hector", price: 40000 },
  { id: "tuco", name: "Tuco", price: 42000 },
  { id: "skinny", name: "Skinny", price: 11000 },
  { id: "badger", name: "Badger", price: 9300 },
  { id: "mike", name: "Mike", price: 64000 },
];
export const NAMES: ShopName[] = [
  { id: "heisenberg", label: "Heisenberg", price: 96000 },
  { id: "i-am-the-danger", label: "I am The Danger", price: 100000 },
  { id: "sauls-tie", label: "Saul s tie", price: 64000 },
  { id: "blue-meth", label: "Blue Meth", price: 40000 },
  { id: "gus-chicken", label: "Gus s chicken", price: 61500 },
  { id: "chem-teacher", label: "Chemistry Theacher", price: 41000 },
  { id: "pinkmans-mask", label: "Pinkman s pinkmask", price: 98751 },
  { id: "cool-mike", label: "Cool Mike", price: 43000 },
  { id: "skinnys-hat", label: "skinny s hat", price: 7000 },
  { id: "pizza-roof", label: "The pizza on the roof", price: 11000 },
  { id: "button-explosive", label: "Button the explosive", price: 9000 },
  { id: "better-call-saul", label: "Better call saul", price: 62700 },
];
export const DEFAULT_PROFILE: ShopProfile = {
  id: DEFAULT_PROFILE_ID,
  name: "Rookie",
  price: 0,
};
export const DEFAULT_NAME: ShopName = {
  id: DEFAULT_NAME_ID,
  label: "Lab Rookie",
  price: 0,
};
export type PackRarity =
  | "commons"
  | "magnets"
  | "bullet-chickens"
  | "exclusivebergs";
export interface PackDrop {
  kind: "profile" | "name";
  id: string;
}
export interface PackDef {
  id: string;
  name: string;
  price: number;
  rates: { rarity: PackRarity; chance: number }[];
}
export const PACKS: PackDef[] = [
  {
    id: "house",
    name: "House Pack",
    price: 15000,
    rates: [
      { rarity: "commons", chance: 72 },
      { rarity: "magnets", chance: 18 },
      { rarity: "bullet-chickens", chance: 9 },
      { rarity: "exclusivebergs", chance: 1 },
    ],
  },
  {
    id: "more-meth",
    name: "More Meth Pack",
    price: 34000,
    rates: [
      { rarity: "commons", chance: 60 },
      { rarity: "magnets", chance: 22 },
      { rarity: "bullet-chickens", chance: 13 },
      { rarity: "exclusivebergs", chance: 5 },
    ],
  },
  {
    id: "los-pollos",
    name: "The Los Pollos Pack",
    price: 54000,
    rates: [
      { rarity: "commons", chance: 29 },
      { rarity: "magnets", chance: 27 },
      { rarity: "bullet-chickens", chance: 25 },
      { rarity: "exclusivebergs", chance: 19 },
    ],
  },
  {
    id: "say-my-name",
    name: "Say My Name Pack",
    price: 74000,
    rates: [
      { rarity: "commons", chance: 15 },
      { rarity: "magnets", chance: 19 },
      { rarity: "bullet-chickens", chance: 33 },
      { rarity: "exclusivebergs", chance: 33 },
    ],
  },
];
export const PACK_POOLS: Record<PackRarity, PackDrop[]> = {
  commons: [
    { kind: "name", id: "skinnys-hat" },
    { kind: "name", id: "button-explosive" },
    { kind: "name", id: "pizza-roof" },
    { kind: "profile", id: "flynn" },
    { kind: "profile", id: "skinny" },
    { kind: "profile", id: "badger" },
  ],
  magnets: [
    { kind: "name", id: "blue-meth" },
    { kind: "name", id: "chem-teacher" },
    { kind: "name", id: "cool-mike" },
    { kind: "profile", id: "hector" },
    { kind: "profile", id: "tuco" },
    { kind: "profile", id: "lalo" },
  ],
  "bullet-chickens": [
    { kind: "name", id: "sauls-tie" },
    { kind: "name", id: "gus-chicken" },
    { kind: "name", id: "better-call-saul" },
    { kind: "profile", id: "mike" },
    { kind: "profile", id: "hank" },
    { kind: "profile", id: "saul" },
  ],
  exclusivebergs: [
    { kind: "profile", id: "gustavo" },
    { kind: "profile", id: "jesse" },
    { kind: "profile", id: "walter" },
    { kind: "name", id: "i-am-the-danger" },
    { kind: "name", id: "pinkmans-mask" },
    { kind: "name", id: "heisenberg" },
  ],
};
export const RARITY_LABEL: Record<PackRarity, string> = {
  commons: "Commons",
  magnets: "Magnets",
  "bullet-chickens": "Bullet Chickens",
  exclusivebergs: "Exclusivebergs",
};
export interface PackResult {
  packId: string;
  rarity: PackRarity;
  drop: PackDrop;
  label: string;
  duplicate: boolean;
}
export function rollPack(pack: PackDef): { rarity: PackRarity; drop: PackDrop } {
  const roll = Math.random() * 100;
  let acc = 0;
  let rarity: PackRarity = pack.rates[0].rarity;
  for (const r of pack.rates) {
    acc += r.chance;
    if (roll <= acc) {
      rarity = r.rarity;
      break;
    }
  }
  const pool = PACK_POOLS[rarity];
  const drop = pool[Math.floor(Math.random() * pool.length)];
  return { rarity, drop };
}
export function dropLabel(drop: PackDrop): string {
  if (drop.kind === "profile") return getProfileById(drop.id).name;
  return getNameById(drop.id).label;
}
function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function seededShuffle<T>(items: T[], seed: string): T[] {
  const arr = [...items];
  let state = hashSeed(seed);
  const next = () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 0x100000000;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
export function getShopPeriod(firstPlayAt: number, now = Date.now()): number {
  return Math.max(0, Math.floor((now - firstPlayAt) / THREE_DAYS_MS));
}
export function getFeaturedProfiles(period: number): ShopProfile[] {
  return seededShuffle(PROFILES, `profiles-${period}`).slice(0, 3);
}
export function getFeaturedNames(period: number): ShopName[] {
  return seededShuffle(NAMES, `names-${period}`).slice(0, 3);
}
export function msUntilNextShopRefresh(
  firstPlayAt: number,
  now = Date.now()
): number {
  const period = getShopPeriod(firstPlayAt, now);
  const nextAt = firstPlayAt + (period + 1) * THREE_DAYS_MS;
  return Math.max(0, nextAt - now);
}
export function formatCountdown(ms: number): string {
  const totalSec = Math.floor(ms / 1000);
  const d = Math.floor(totalSec / 86400);
  const h = Math.floor((totalSec % 86400) / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  if (d > 0) return `${d}g ${h}s`;
  if (h > 0) return `${h}s ${m}dk`;
  return `${m}dk`;
}
export function getProfileById(id: string): ShopProfile {
  if (id === DEFAULT_PROFILE_ID) return DEFAULT_PROFILE;
  return PROFILES.find((p) => p.id === id) ?? DEFAULT_PROFILE;
}
export function getNameById(id: string): ShopName {
  if (id === DEFAULT_NAME_ID) return DEFAULT_NAME;
  return NAMES.find((n) => n.id === id) ?? DEFAULT_NAME;
}
const STORAGE_KEY = "heisenberg-lab-save-v2";
const LEGACY_KEY = "heisenberg-lab-shop-v1";
export interface GameSave {
  firstPlayAt: number;
  money: number;
  ownedProfiles: string[];
  ownedNames: string[];
  equippedProfileId: string;
  equippedNameId: string;
  level: number;
  xp: number;
  lives: number;
  compoundsDone: number;
  gameWon: boolean;
  /** Stable anonymous id for leaderboard */
  playerId: string;
  /** 0–359 — same color for name text + avatar frame */
  frameHue: number;
}
export function createPlayerId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `p-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
/** Pick a vivid random hue (avoid muddy near-gray bands). */
export function createFrameHue(): number {
  const vivid = [
    8, 18, 28, 38, 48, 58, // kırmızı → turuncu → altın
    72, 88, 102, 118, // limon → yeşil
    138, 152, 168, 178, // yeşil → turkuaz
    188, 198, 208, 218, // turkuaz → mavi
    232, 248, 262, 278, // mavi → mor → eflatun
    292, 308, 322, 338, // fuşya → gül kurusu → füme-pembe
  ];
  return vivid[Math.floor(Math.random() * vivid.length)]!;
}
function emptySave(now = Date.now()): GameSave {
  return {
    firstPlayAt: now,
    money: 0,
    ownedProfiles: [DEFAULT_PROFILE_ID],
    ownedNames: [DEFAULT_NAME_ID],
    equippedProfileId: DEFAULT_PROFILE_ID,
    equippedNameId: DEFAULT_NAME_ID,
    level: 1,
    xp: 0,
    lives: MAX_LIVES,
    compoundsDone: 0,
    gameWon: false,
    playerId: createPlayerId(),
    frameHue: createFrameHue(),
  };
}
function normalizeSave(parsed: Partial<GameSave>): GameSave {
  const lives =
    typeof parsed.lives === "number" && parsed.lives > 0
      ? parsed.lives
      : MAX_LIVES;
  const frameHue =
    typeof parsed.frameHue === "number" &&
    Number.isFinite(parsed.frameHue)
      ? ((Math.round(parsed.frameHue) % 360) + 360) % 360
      : createFrameHue();
  return {
    firstPlayAt: parsed.firstPlayAt ?? Date.now(),
    money: typeof parsed.money === "number" ? parsed.money : 0,
    ownedProfiles: Array.isArray(parsed.ownedProfiles)
      ? parsed.ownedProfiles
      : [DEFAULT_PROFILE_ID],
    ownedNames: Array.isArray(parsed.ownedNames)
      ? parsed.ownedNames
      : [DEFAULT_NAME_ID],
    equippedProfileId: parsed.equippedProfileId ?? DEFAULT_PROFILE_ID,
    equippedNameId: parsed.equippedNameId ?? DEFAULT_NAME_ID,
    level: typeof parsed.level === "number" && parsed.level > 0 ? parsed.level : 1,
    xp: typeof parsed.xp === "number" ? parsed.xp : 0,
    lives,
    compoundsDone:
      typeof parsed.compoundsDone === "number" ? parsed.compoundsDone : 0,
    gameWon: Boolean(parsed.gameWon),
    playerId:
      typeof parsed.playerId === "string" && parsed.playerId.length > 4
        ? parsed.playerId
        : createPlayerId(),
    frameHue,
  };
}
export function loadGameSave(): GameSave {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return normalizeSave(JSON.parse(raw) as Partial<GameSave>);
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy) {
      const parsed = JSON.parse(legacy) as Partial<GameSave>;
      return normalizeSave(parsed);
    }
  } catch {
    /* ignore */
  }
  return emptySave();
}
export function saveGameSave(save: GameSave): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(save));
  } catch {
    /* ignore */
  }
}
