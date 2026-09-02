import {
  maxElementCountForLevel,
  minDifficultyForLevel,
  elementShelfSizeForLevel,
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
    elements: { Al: 2, O: 3 },reward: 420,
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
  {
    id: "c2h6o",
    formula: "C₂H₆O",
    name: "Etanol",
    materialName: "Alkol",
    elements: { C: 2, H: 6, O: 1 },
    reward: 220,
    difficulty: 2,
    isMetal: false,
    minLevel: 4,
  },
  {
    id: "ch4",
    formula: "CH₄",
    name: "Metan",
    materialName: "Doğalgaz",
    elements: { C: 1, H: 4 },
    reward: 130,
    difficulty: 1,
    isMetal: false,
    minLevel: 2,
  },
  {
    id: "c2h4",
    formula: "C₂H₄",
    name: "Eten",
    materialName: "Plastik hammaddesi",
    elements: { C: 2, H: 4 },
    reward: 160,
    difficulty: 1,
    isMetal: false,
    minLevel: 3,
  },
{
    id: "h2o2",
    formula: "H₂O₂",
    name: "Hidrojen Peroksit",
    materialName: "Oksijen suyu",
    elements: { H: 2, O: 2 },
    reward: 190,
    difficulty: 2,
    isMetal: false,
    minLevel: 5,
  },
  {
    id: "cacl2",
    formula: "CaCl₂",
    name: "Kalsiyum Klorür",
    materialName: "Buz eritici",
    elements: { Ca: 1, Cl: 2 },
    reward: 210,
    difficulty: 2,
    isMetal: true,
    minLevel: 6,
  },
  {
    id: "n2o",
    formula: "N₂O",
    name: "Azot Oksit",
    materialName: "Gülme gazı",
    elements: { N: 2, O: 1 },
    reward: 240,
    difficulty: 2,
    isMetal: false,
    minLevel: 7,
  },
  {
    id: "h2s",
    formula: "H₂S",
    name: "Hidrojen Sülfür",
    materialName: "Çürük yumurta gazı",
    elements: { H: 2, S: 1 },
    reward: 200,
    difficulty: 2,
    isMetal: false,
    minLevel: 8,
  },
  {
    id: "alcl3",
    formula: "AlCl₃",
    name: "Alüminyum Klorür",
    materialName: "Terleme önleyici",
    elements: { Al: 1, Cl: 3 },
    reward: 330,
    difficulty: 3,
    isMetal: true,
    minLevel: 9,
  },
  {
    id: "c6h12o6",
    formula: "C₆H₁₂O₆",
    name: "Glukoz",
    materialName: "Üzüm şekeri",
    elements: { C: 6, H: 12, O: 6 },
    reward: 460,
    difficulty: 4,
    isMetal: false,
    minLevel: 16,
  },
  
  {
    id: "feo",
    formula: "FeO",
    name: "Demir Oksit",
    materialName: "Demir tozu",
    elements: { Fe: 1, O: 1 },
    reward: 270,
    difficulty: 2,
    isMetal: true,
    minLevel: 12,
  },
  {
    id: "cuo",
    formula: "CuO",
    name: "Bakır Oksit",
    materialName: "Bakır oksit tozu",
    elements: { Cu: 1, O: 1 },
    reward: 290,
    difficulty: 2,
    isMetal: true,
    minLevel: 13,
  },
  {
    id: "zno",
    formula: "ZnO",
    name: "Çinko Oksit",
    materialName: "Güneş kremi",
    elements: { Zn: 1, O: 1 },
    reward: 280,
    difficulty: 2,
    isMetal: true,
    minLevel: 14,
  },
  {
    id: "h2co3",
    formula: "H₂CO₃",
    name: "Karbonik Asit",
    materialName: "Gazoz asidi",
    elements: { H: 2, C: 1, O: 3 },
    reward: 250,
    difficulty: 2,
    isMetal: false,
    minLevel: 15,
  },
  {
    id: "koh",
    formula: "KOH",
    name: "Potasyum Hidroksit",
    materialName: "Sabun maddesi",
    elements: { K: 1, O: 1, H: 1 },
    reward: 310,
    difficulty: 2,
    isMetal: true,
    minLevel: 17,
  },
  {
    id: "mgcl2",
    formula: "MgCl₂",
    name: "Magnezyum Klorür",
    materialName: "Banyo tuzu",
    elements: { Mg: 1, Cl: 2 },
    reward: 300,
    difficulty: 2,
    isMetal: true,
    minLevel: 19,
  },
  {
    id: "c2h2",
    formula: "C₂H₂",
    name: "Asetilen",
    materialName: "Kaynak gazı",
    elements: { C: 2, H: 2 },
    reward: 180,
    difficulty: 2,
    isMetal: false,
    minLevel: 21,
  },
  {
    id: "nh4cl",
    formula: "NH₄Cl",
    name: "Amonyum Klorür",
    materialName: "Öksürük şurubu",
    elements: { N: 1, H: 4, Cl: 1 },
    reward: 340,
    difficulty: 3,
    isMetal: false,
    minLevel: 23,
  },
  {
    id: "na2so4",
    formula: "Na₂SO₄",
    name: "Sodyum Sülfat",
    materialName: "Deterjan maddesi",
    elements: { Na: 2, S: 1, O: 4 },
    reward: 370,
    difficulty: 3,
    isMetal: true,
    minLevel: 24,
  },
  {
    id: "c3h8",
    formula: "C₃H₈",
    name: "Propan",
    materialName: "Tüp gazı",
    elements: { C: 3, H: 8 },
    reward: 290,
    difficulty: 3,
    isMetal: false,
    minLevel: 26,
  },
  {
    id: "fecl2",
    formula: "FeCl₂",
    name: "Demir II Klorür",
    materialName: "Mürekkep maddesi",
    elements: { Fe: 1, Cl: 2 },
    reward: 360,
    difficulty: 3,
    isMetal: true,
    minLevel: 27,
  },
  {
    id: "agno3",
    formula: "AgNO₃",
    name: "Gümüş Nitrat",
    materialName: "Gümüş leke",
    elements: { Ag: 1, N: 1, O: 3 },
    reward: 430,
    difficulty: 3,
    isMetal: true,
    minLevel: 29,
  },
  {
    id: "c4h10",
    formula: "C₄H₁₀",
    name: "Bütan",
    materialName: "Çakmak gazı",
    elements: { C: 4, H: 10 },
    reward: 410,
    difficulty: 4,
    isMetal: false,
    minLevel: 31,
  },
  {
    id: "al2s3",
    formula: "Al₂S₃",
    name: "Alüminyum Sülfür",
    materialName: "Koku bombası",
    elements: { Al: 2, S: 3 },
    reward: 440,
    difficulty: 3,
    isMetal: true,
    minLevel: 33,
  },
  {
    id: "kbr",
    formula: "KBr",
    name: "Potasyum Bromür",
    materialName: "Sakinleştirici tuzu",
    elements: { K: 1, Br: 1 },
    reward: 320,
    difficulty: 2,
    isMetal: true,
    minLevel: 34,
  },
  {
    id: "c5h12",
    formula: "C₅H₁₂",
    name: "Pentan",
    materialName: "Benzin",
    elements: { C: 5, H: 12 },
    reward: 470,
    difficulty: 4,
    isMetal: false,
    minLevel: 36,
  },
  {
    id: "pbcl2",
    formula: "PbCl₂",
    name: "Kurşun Klorür",
    materialName: "Kaynak tuzu",
    elements: { Pb: 1, Cl: 2 },
    reward: 480,
    difficulty: 3,
    isMetal: true,
    minLevel: 38,
  },
  {
    id: "c6h6",
    formula: "C₆H₆",
    name: "Benzen",
    materialName: "Çözücü",
    elements: { C: 6, H: 6 },
    reward: 510,
    difficulty: 4,
    isMetal: false,
    minLevel: 40,
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
  
  "naoh",
  "h2so4",
  "hno3",
  "h3po4",
  "c2h6o",
  "h2o2",
  "h2co3",
  "hbr",
  "hi",
  "h2s",
  "koh",
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

  const reqKeys = Object.keys(required);
  if (selKeys.length !== reqKeys.length) return false;
  return reqKeys.every((key) => selected[key] === required[key]);
}
export function getElement(symbol: string): Element | undefined {
  return ELEMENTS.find((e) => e.symbol === symbol);
}
export function pickRecipeForLevel(
  level: number,
  excludeIds: string[] = []
): Recipe {
  const maxElements = maxElementCountForLevel(level);
  const minDiff = minDifficultyForLevel(level);
  let eligible = RECIPES.filter(
    (r) =>
      r.minLevel <= level &&
      totalElementCount(r) <= maxElements &&
      r.difficulty >= minDiff - 1 &&
      !excludeIds.includes(r.id)
  );
  if (eligible.length === 0) {
    eligible = RECIPES.filter(
      (r) => r.minLevel <= level && !excludeIds.includes(r.id)
    );
  }
  if (eligible.length === 0) {
    eligible = RECIPES.filter((r) => r.minLevel <= level);
  }
  if (eligible.length === 0) {
    eligible = RECIPES.filter((r) => totalElementCount(r) <= maxElements);
  }
  if (eligible.length === 0) {
    eligible = [...RECIPES];
  }
  return eligible[Math.floor(Math.random() * eligible.length)];
}
export function getElementsForRecipe(
  recipe: Recipe,
  level: number
): Element[] {
  const needed = new Set(Object.keys(recipe.elements));
  const maxSlots = elementShelfSizeForLevel(level);
  const required = ELEMENTS.filter((e) => needed.has(e.symbol));
  const distractors = ELEMENTS.filter((e) => !needed.has(e.symbol));
  const shuffledDistractors = [...distractors].sort(() => Math.random() - 0.5);
  const extraCount = Math.max(0, maxSlots - required.length);
  return [...required, ...shuffledDistractors.slice(0, extraCount)].sort(
    () => Math.random() - 0.5
  );
}
