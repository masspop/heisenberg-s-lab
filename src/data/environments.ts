export interface Environment {
  id: number;
  name: string;
  emoji: string;
  cssClass: string;
  description: string;
}

/** Her 10 levelde bir ortam değişir (1→10, 11→20, …) */
export const ENVIRONMENTS: Environment[] = [
  {
    id: 1,
    name: "Sosisli Arabası",
    emoji: "🌭",
    cssClass: "env-hotdog",
    description: "Los Pollos Hermanos'un yanında gizli lab",
  },
  {
    id: 2,
    name: "Bataklık",
    emoji: "🐊",
    cssClass: "env-swamp",
    description: "Tulucayır bataklığında RV lab",
  },
  {
    id: 3,
    name: "Yanardağ",
    emoji: "🌋",
    cssClass: "env-volcano",
    description: "Lavların arasında kaynayan beherler",
  },
  {
    id: 4,
    name: "Büyülü Orman",
    emoji: "🧙",
    cssClass: "env-forest",
    description: "Mavi metan mantarları her yerde",
  },
  {
    id: 5,
    name: "Nükleer Santral",
    emoji: "☢️",
    cssClass: "env-nuclear",
    description: "Radyoaktif elementler bolca",
  },
  {
    id: 6,
    name: "Org Zindanı",
    emoji: "⛓️",
    cssClass: "env-dungeon",
    description: "Cartel'in yeraltı laboratuvarı",
  },
  {
    id: 7,
    name: "Kendi Karavanları",
    emoji: "🚐",
    cssClass: "env-caravan",
    description: "Jesse ve Walt'ın efsanevi RV'si",
  },
];

export function getEnvironmentForLevel(level: number): Environment {
  const index = Math.floor((level - 1) / 10) % ENVIRONMENTS.length;
  return ENVIRONMENTS[index];
}
