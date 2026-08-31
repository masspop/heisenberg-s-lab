import { countElements } from "./chemistry";

/** Mr. White sadece tek kelime/bileşik adı söyler */
export const ELEMENT_COMPOUND_HINTS: Record<string, string[]> = {
  H: ["Su", "Asit", "Amonyak"],
  O: ["Su", "Gazoz", "Hava"],
  Na: ["Karbonat", "Tuz", "Kostik"],
  Cl: ["Tuz", "Havuz", "Asit"],
  C: ["Karbonat", "Gazoz", "Kömür"],
  N: ["Amonyak", "Gübre", "Hava"],
  S: ["Kükürt", "Yumurta", "Asit"],
  Ca: ["Tebeşir", "Kireçtaşı", "Süt"],
  Fe: ["Pas", "Çelik", "Mıknatıs"],
  Au: ["Altın"],
  P: ["Kibrit", "Gübre", "Asit"],
  Mg: ["Magnezya", "Kıvılcım", "Yanık"],
  Cu: ["Bakır", "Bozukluk", "Kristal"],
  Zn: ["Pil", "Galvaniz", "Krem"],
  Ag: ["Gümüş", "Ayna", "Film"],
  K: ["Muz", "Patates", "Gübre"],
  Al: ["Folyo", "Zımpara", "Uçak"],
  Pb: ["Kalem", "Pil", "Boy"],
  Br: ["Film", "İlaç"],
  I: ["Tentürdiyot", "Yosun", "Tuz"],
};

export interface WhiteHint {
  compoundHint: string;
  message: string;
}

export function findMissingElements(
  selected: string[],
  required: Record<string, number>
): string[] {
  const selectedCounts = countElements(selected);
  const missing: string[] = [];

  for (const [sym, count] of Object.entries(required)) {
    const have = selectedCounts[sym] ?? 0;
    for (let i = have; i < count; i++) {
      missing.push(sym);
    }
  }

  return missing;
}

export function generateWhiteHint(
  selected: string[],
  required: Record<string, number>
): WhiteHint {
  const missing = findMissingElements(selected, required);

  const targetSymbol =
    missing.length > 0
      ? missing[Math.floor(Math.random() * missing.length)]
      : Object.keys(required)[0];

  const hints = ELEMENT_COMPOUND_HINTS[targetSymbol] ?? ["Bileşik"];
  const compoundHint = hints[Math.floor(Math.random() * hints.length)];

  return {
    compoundHint,
    message: compoundHint,
  };
}
