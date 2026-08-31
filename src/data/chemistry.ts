import {
  maxElementCountForLevel,
  minDifficultyForLevel,
} from "./progression";

export interface Element {
  symbol: string;
  name: string;
  color: string;
  isMetal?: boolean;
}

export interface Recipe {
  id: string;
  formula: string;
  name: string;
  /** Günlük hayat madde adı — Jesse bunu söyler */
  materialName: string;
  elements: Record<string, number>;
  reward: number;
  difficulty: number;
  isMetal: boolean;
  minLevel: number;
}

export const ELEMENTS: Element[] = [
  { symbol: "H", name: "Hidrojen", color: "#e8f4ff" },
  { symbol: "O", name: "Oksijen", color: "#ff6b6b" },
  { symbol: "Na", name: "Sodyum", color: "#c9b1ff", isMetal: true },
  { symbol: "Cl", name: "Klor", color: "#7bed9f" },
  { symbol: "C", name: "Karbon", color: "#57606f" },
  { symbol: "N", name: "Azot", color: "#70a1ff" },
  { symbol: "S", name: "Kükürt", color: "#feca57" },
  { symbol: "Ca", name: "Kalsiyum", color: "#dfe6e9", isMetal: true },
  { symbol: "Fe", name: "Demir", color: "#b2bec3", isMetal: true },
  { symbol: "Au", name: "Altın", color: "#ffd32a", isMetal: true },
  { symbol: "P", name: "Fosfor", color: "#ff9ff3" },
  { symbol: "Mg", name: "Magnezyum", color: "#a29bfe", isMetal: true },
  { symbol: "Cu", name: "Bakır", color: "#e17055", isMetal: true },
  { symbol: "Zn", name: "Çinko", color: "#81ecec", isMetal: true },
  { symbol: "Ag", name: "Gümüş", color: "#dcdde1", isMetal: true },
  { symbol: "K", name: "Potasyum", color: "#fd79a8", isMetal: true },
  { symbol: "Al", name: "Alüminyum", color: "#b2bec3", isMetal: true },
  { symbol: "Pb", name: "Kurşun", color: "#636e72", isMetal: true },
  { symbol: "Br", name: "Brom", color: "#a0522d" },
  { symbol: "I", name: "İyot", color: "#6c5ce7" },
];

export const RECIPES: Recipe[] = [
  {
    id: "nacl",
    formula: "NaCl",
    name: "Sodyum Klorür",
    materialName: "Sofra tuzu",
    elements: { Na: 1, Cl: 1 },
    reward: 100,
    difficulty: 1,
    isMetal: true,
    minLevel: 1,
  },
  {
    id: "h2o",
    formula: "H₂O",
    name: "Su",
    materialName: "Su",
    elements: { H: 2, O: 1 },
    reward: 80,
    difficulty: 1,
    isMetal: false,
    minLevel: 1,
  },
  {
    id: "hcl",
    formula: "HCl",
    name: "Hidroklorik Asit",
    materialName: "Tuz ruhu",
    elements: { H: 1, Cl: 1 },
    reward: 150,
    difficulty: 1,
    isMetal: false,
    minLevel: 1,
  },
  {
    id: "cao",
    formula: "CaO",
    name: "Kalsiyum Oksit",
    materialName: "Söndürülmüş kireç",
    elements: { Ca: 1, O: 1 },
    reward: 140,
    difficulty: 1,
    isMetal: true,
    minLevel: 1,
  },
  {
    id: "co2",
    formula: "CO₂",
    name: "Karbondioksit",
    materialName: "Gazoz gazı",
    elements: { C: 1, O: 2 },
    reward: 120,
    difficulty: 2,
    isMetal: false,
    minLevel: 2,
  },
  {
    id: "nh3",
    formula: "NH₃",
    name: "Amonyak",
    materialName: "Cam suyu",
    elements: { N: 1, H: 3 },
    reward: 180,
    difficulty: 2,
    isMetal: false,
    minLevel: 3,
  },
  {
    id: "naoh",
    formula: "NaOH",
    name: "Sodyum Hidroksit",
    materialName: "Kostik",
    elements: { Na: 1, O: 1, H: 1 },
    reward: 200,
    difficulty: 2,
    isMetal: true,
    minLevel: 3,
  },
  {
    id: "mgo",
    formula: "MgO",
    name: "Magnezyum Oksit",
    materialName: "Magnezya",
    elements: { Mg: 1, O: 1 },
    reward: 160,
    difficulty: 2,
    isMetal: true,
    minLevel: 4,
  },
  {
    id: "kcl",
    formula: "KCl",
    name: "Potasyum Klorür",
    materialName: "Potasyum tuzu",
    elements: { K: 1, Cl: 1 },
    reward: 170,
    difficulty: 2,
    isMetal: true,
    minLevel: 5,
  },
  {
    id: "h2so4",
    formula: "H₂SO₄",
    name: "Sülfürik Asit",
    materialName: "Akü asidi",
    elements: { H: 2, S: 1, O: 4 },
    reward: 300,
    difficulty: 3,
    isMetal: false,
    minLevel: 6,
  },
  {
    id: "fes",
    formula: "FeS",
    name: "Demir Sülfür",
    materialName: "Manyetit",
    elements: { Fe: 1, S: 1 },
    reward: 250,
    difficulty: 2,
    isMetal: true,
    minLevel: 6,
  },
  {
    id: "cuso4",
    formula: "CuSO₄",
    name: "Bakır Sülfat",
    materialName: "Mavi tarım ilacı",
    elements: { Cu: 1, S: 1, O: 4 },
    reward: 320,
    difficulty: 3,
    isMetal: true,
    minLevel: 8,
  },
  {
    id: "fe2o3",
    formula: "Fe₂O₃",
    name: "Demir Oksit",
    materialName: "Pas",
    elements: { Fe: 2, O: 3 },
    reward: 350,
    difficulty: 3,
    isMetal: true,
    minLevel: 10,
  },
  {
    id: "caco3",
    formula: "CaCO₃",
    name: "Kalsiyum Karbonat",
    materialName: "Tebeşir",
    elements: { Ca: 1, C: 1, O: 3 },
    reward: 280,
    difficulty: 3,
    isMetal: true,
    minLevel: 11,
  },
  {
    id: "hno3",
    formula: "HNO₃",
    name: "Nitrik Asit",
    materialName: "Kezzap",
    elements: { H: 1, N: 1, O: 3 },
    reward: 340,
    difficulty: 3,
    isMetal: false,
    minLevel: 12,
  },
  {
    id: "zncl2",
    formula: "ZnCl₂",
    name: "Çinko Klorür",
    materialName: "Lehim pastası",
    elements: { Zn: 1, Cl: 2 },
    reward: 310,
    difficulty: 3,
    isMetal: true,
    minLevel: 14,
  },
  {
    id: "agcl",
    formula: "AgCl",
    name: "Gümüş Klorür",
    materialName: "Fotoğraf filmi",
    elements: { Ag: 1, Cl: 1 },
    reward: 400,
    difficulty: 2,
    isMetal: true,
    minLevel: 15,
  },
  {
    id: "al2o3",
    formula: "Al₂O₃",
    name: "Alüminyum Oksit",
    materialName: "Zımpara taşı",
    elements: { Al: 2, O: 3 },
    reward: 420,
    difficulty: 3,
    isMetal: true,
    minLevel: 18,
  },
  {
    id: "na2co3",
    formula: "Na₂CO₃",
    name: "Sodyum Karbonat",
    materialName: "Çamaşır sodası",
    elements: { Na: 2, C: 1, O: 3 },
    reward: 380,
    difficulty: 3,
    isMetal: true,
    minLevel: 20,
  },
  {
    id: "pbno32",
    formula: "Pb(NO₃)₂",
    name: "Kurşun Nitrat",
    materialName: "Kurşun boya",
    elements: { Pb: 1, N: 2, O: 6 },
    reward: 500,
    difficulty: 4,
    isMetal: true,
    minLevel: 25,
  },
  {
    id: "fecl3",
    formula: "FeCl₃",
    name: "Demir III Klorür",
    materialName: "Su arıtma tozu",
    elements: { Fe: 1, Cl: 3 },
    reward: 450,
    difficulty: 3,
    isMetal: true,
    minLevel: 22,
  },
  {
    id: "h3po4",
    formula: "H₃PO₄",
    name: "Fosforik Asit",
    materialName: "Gübre asidi",
    elements: { H: 3, P: 1, O: 4 },
    reward: 480,
    difficulty: 4,
    isMetal: false,
    minLevel: 28,
  },
  {
    id: "cufe2s3",
    formula: "CuFeS₂",
    name: "Bakır Demir Sülfür",
    materialName: "Bakır cevheri",
    elements: { Cu: 1, Fe: 1, S: 2 },
    reward: 550,
    difficulty: 4,
    isMetal: true,
    minLevel: 30,
  },
  {
    id: "mg3n2",
    formula: "Mg₃N₂",
    name: "Magnezyum Nitrit",
    materialName: "Alev geciktirici",
    elements: { Mg: 3, N: 2 },
    reward: 520,
    difficulty: 3,
    isMetal: true,
    minLevel: 32,
  },
  {
    id: "k2so4",
    formula: "K₂SO₄",
    name: "Potasyum Sülfat",
    materialName: "Gübre",
    elements: { K: 2, S: 1, O: 4 },
    reward: 490,
    difficulty: 4,
    isMetal: true,
    minLevel: 35,
  },
];

export const JESSE_METAL_SHOUT = "YEAH BITCH MAGNETS OH!";
export const WALTER_LIQUID_QUOTE = "YOU GOD DAMN RIGHT";
export const JESSE_FAIL_QUOTE = "OH FUCK";
export const WALTER_FAIL_QUOTE = "DONT BE LIKE A LITTLE GIRL";

/** Lab'da sıvı halde bulunan bileşikler */
export const LIQUID_RECIPE_IDS = new Set([
  "h2o",
  "hcl",
  "nh3",
  "naoh",
  "h2so4",
  "hno3",
  "h3po4",
]);

export function isLiquidRecipe(recipe: Recipe): boolean {
  return LIQUID_RECIPE_IDS.has(recipe.id);
}

export function totalElementCount(recipe: Recipe): number {
  return Object.values(recipe.elements).reduce((a, b) => a + b, 0);
}

export function countElements(symbols: string[]): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const sym of symbols) {
    counts[sym] = (counts[sym] ?? 0) + 1;
  }
  return counts;
}

export function recipesMatch(
  selected: Record<string, number>,
  required: Record<string, number>
): boolean {
  const selKeys = Object.keys(selected);
  const reqKeys = Object.keys(required);
  if (selKeys.length !== reqKeys.length) return false;
  return reqKeys.every((key) => selected[key] === required[key]);
}

export function getElement(symbol: string): Element | undefined {
  return ELEMENTS.find((e) => e.symbol === symbol);
}

export function pickRecipeForLevel(
  level: number,
  excludeId?: string
): Recipe {
  const maxElements = maxElementCountForLevel(level);
  const minDiff = minDifficultyForLevel(level);

  let eligible = RECIPES.filter(
    (r) =>
      r.minLevel <= level &&
      totalElementCount(r) <= maxElements &&
      r.difficulty >= minDiff - 1
  );

  if (eligible.length === 0) {
    eligible = RECIPES.filter((r) => r.minLevel <= level);
  }

  const withoutRepeat = excludeId
    ? eligible.filter((r) => r.id !== excludeId)
    : eligible;

  const pool = withoutRepeat.length > 0 ? withoutRepeat : eligible;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getElementsForRecipe(
  recipe: Recipe,
  level: number
): Element[] {
  const needed = new Set(Object.keys(recipe.elements));
  const maxSlots = Math.min(14, 8 + Math.floor(level / 5));

  const required = ELEMENTS.filter((e) => needed.has(e.symbol));
  const distractors = ELEMENTS.filter((e) => !needed.has(e.symbol));
  const shuffledDistractors = [...distractors].sort(() => Math.random() - 0.5);
  const extraCount = Math.max(0, maxSlots - required.length);

  return [...required, ...shuffledDistractors.slice(0, extraCount)].sort(
    () => Math.random() - 0.5
  );
}
