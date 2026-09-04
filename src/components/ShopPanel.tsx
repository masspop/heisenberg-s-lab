import { useEffect, useState, type CSSProperties } from "react";
import { ProfileAvatar } from "./ProfileAvatar";
import type { PackDef, PackResult, ShopName, ShopProfile } from "../data/shop";
import {
  PACKS,
  RARITY_LABEL,
  formatCountdown,
  getNameById,
} from "../data/shop";
interface ShopPanelProps {
  open: boolean;
  onClose: () => void;
  money: number;
  featuredProfiles: ShopProfile[];
  featuredNames: ShopName[];
  ownedProfiles: string[];
  ownedNames: string[];
  equippedProfileId: string;
  equippedNameId: string;
  refreshInMs: number;
  packResult: PackResult | null;
  onBuyProfile: (id: string) => void;
  onBuyName: (id: string) => void;
  onEquipProfile: (id: string) => void;
  onEquipName: (id: string) => void;
  onOpenPack: (pack: PackDef) => void;
  onClearPackResult: () => void;
}
type RevealPhase = "idle" | "table" | "fall" | "break" | "reveal";
const METH_CRYSTALS = [
  { x: 14, y: 48, s: 1.05, r: -14 },
  { x: 26, y: 42, s: 0.8, r: 20 },
  { x: 38, y: 50, s: 1.2, r: -6 },
  { x: 50, y: 40, s: 1.15, r: 12 },
  { x: 62, y: 48, s: 0.9, r: -22 },
  { x: 74, y: 44, s: 1.0, r: 16 },
  { x: 86, y: 52, s: 0.85, r: -10 },
  { x: 20, y: 58, s: 0.7, r: 8 },
  { x: 34, y: 62, s: 0.95, r: -18 },
  { x: 56, y: 60, s: 0.75, r: 24 },
  { x: 68, y: 58, s: 1.1, r: -8 },
  { x: 80, y: 62, s: 0.65, r: 14 },
];
const FALLING_INDEX = 3;
function MethCrystal({
  className = "",
  style,
  uid = "0",
}: {
  className?: string;
  style?: CSSProperties;
  uid?: string;
}) {
  const gid = `methFill-${uid}`;
  return (
    <svg
      className={`meth-crystal ${className}`.trim()}
      style={style}
      viewBox="0 0 40 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.75" />
          <stop offset="40%" stopColor="#60a5fa" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <polygon
        points="20,2 36,16 30,44 10,44 4,16"
        fill={`url(#${gid})`}
        stroke="#93c5fd"
        strokeWidth="1.1"
        opacity="0.88"
      />
      <polygon
        points="20,2 28,18 20,42 12,18"
        fill="#dbeafe"
        opacity="0.32"
      />
      <polygon points="20,2 36,16 28,18" fill="#fff" opacity="0.28" />
      <line
        x1="12"
        y1="20"
        x2="28"
        y2="22"
        stroke="#fff"
        strokeWidth="0.8"
        opacity="0.35"
      />
    </svg>
  );
}
export function ShopPanel({
  open,
  onClose,
  money,
  featuredProfiles,
  featuredNames,
  ownedProfiles,
  ownedNames,
  equippedProfileId,
  equippedNameId,
  refreshInMs,
  packResult,
  onBuyProfile,
  onBuyName,
  onEquipProfile,
  onEquipName,
  onOpenPack,
  onClearPackResult,
}: ShopPanelProps) {
  const [phase, setPhase] = useState<RevealPhase>("idle");
  useEffect(() => {
    if (!packResult) {
      setPhase("idle");
      return;
    }
    setPhase("table");
    const t1 = window.setTimeout(() => setPhase("fall"), 900);
    const t2 = window.setTimeout(() => setPhase("break"), 1700);
    const t3 = window.setTimeout(() => setPhase("reveal"), 2600);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [packResult]);
  const showReveal = phase === "reveal";
  const animating = phase === "table" || phase === "fall" || phase === "break";
  return (
    <>
      <div
        className={`shop-backdrop${open ? " open" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside className={`shop-panel${open ? " open" : ""}`} aria-hidden={!open}>
        <header className="shop-header">
          <div>
            <h2>Mağaza</h2>
            <p className="shop-refresh">
              Vitrin yenilenme: {formatCountdown(refreshInMs)}
            </p>
          </div>
          <div className="shop-money">${money.toLocaleString("tr-TR")}</div>
          <button type="button" className="shop-close" onClick={onClose}>
            ✕
          </button>
        </header>
        <div className="shop-columns">
          <section className="shop-col">
            <h3>Profiller</h3>
            <p className="shop-col-hint">Bu dönem 3 profil</p>
            <ul className="shop-list">
              {featuredProfiles.map((p) => {
                const owned = ownedProfiles.includes(p.id);
                const equipped = equippedProfileId === p.id;
                const canBuy = !owned && money >= p.price;
                return (
                  <li key={p.id} className="shop-item">
                    <ProfileAvatar id={p.id} className="shop-avatar" />
                    <div className="shop-item-info">
                      <span className="shop-item-name">{p.name}</span>
                      <span className="shop-item-price">
                        {owned
                          ? "Sahipsin"
                          : `$${p.price.toLocaleString("tr-TR")}`}
                      </span>
                    </div>
                    {owned ? (
                      <button
                        type="button"
                        className={`shop-btn${equipped ? " equipped" : ""}`}
                        onClick={() => onEquipProfile(p.id)}
                        disabled={equipped}
                      >
                        {equipped ? "Takılı" : "Tak"}
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="shop-btn buy"
                        disabled={!canBuy}
                        onClick={() => onBuyProfile(p.id)}
                      >
                        Al
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
            {ownedProfiles.filter((id) => id !== "rookie").length > 0 && (
              <div className="shop-owned">
                <h4>Sahip oldukların</h4>
                <div className="shop-owned-row">
                  {ownedProfiles.map((id) => (
                    <button
                      key={id}
                      type="button"
                      className={`shop-mini${equippedProfileId === id ? " on" : ""}`}
                      onClick={() => onEquipProfile(id)}
                      title={id}
                    >
                      <ProfileAvatar id={id} className="shop-mini-avatar" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>
          <section className="shop-col">
            <h3>İsimler</h3>
            <p className="shop-col-hint">Bu dönem 3 isim</p>
            <ul className="shop-list">
              {featuredNames.map((n) => {
                const owned = ownedNames.includes(n.id);
                const equipped = equippedNameId === n.id;
                const canBuy = !owned && money >= n.price;
                return (
                  <li key={n.id} className="shop-item name-item">
                    <div className="shop-item-info">
                      <span className="shop-item-name">{n.label}</span>
                      <span className="shop-item-price">
                        {owned
                          ? "Sahipsin"
                          : `$${n.price.toLocaleString("tr-TR")}`}
                      </span>
                    </div>
                    {owned ? (
                      <button
                        type="button"
                        className={`shop-btn${equipped ? " equipped" : ""}`}
                        onClick={() => onEquipName(n.id)}
                        disabled={equipped}
                      >
                        {equipped ? "Takılı" : "Tak"}
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="shop-btn buy"
                        disabled={!canBuy}
                        onClick={() => onBuyName(n.id)}
                      >
                        Al
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
            {ownedNames.filter((id) => id !== "lab-rookie").length > 0 && (
              <div className="shop-owned">
                <h4>Sahip oldukların</h4>
                <div className="shop-owned-names">
                  {ownedNames.map((id) => (
                    <button
                      key={id}
                      type="button"
                      className={`shop-name-chip${equippedNameId === id ? " on" : ""}`}
                      onClick={() => onEquipName(id)}
                    >
                      {getNameById(id).label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
        <section className="shop-packs">
          <h3>Paketler</h3>
          <p className="shop-col-hint">Aç, rastgele profil veya isim düşer</p>
          <div className="pack-grid">
            {PACKS.map((pack) => (
              <article key={pack.id} className={`pack-card pack-${pack.id}`}>
                <h4>{pack.name}</h4>
                <p className="pack-price">
                  ${pack.price.toLocaleString("tr-TR")}
                </p>
                <ul className="pack-odds">
                  {pack.rates.map((r) => (
                    <li key={r.rarity}>
                      {RARITY_LABEL[r.rarity]} %{r.chance}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="shop-btn buy pack-open"
                  disabled={money < pack.price || !!packResult}
                  onClick={() => onOpenPack(pack)}
                >
                  Aç
                </button>
              </article>
            ))}
          </div>
        </section>
        {packResult && (
          <div className="pack-reveal-overlay" role="status">
            <div className={`pack-reveal-stage phase-${phase}`}>
              {animating && (
                <>
                  <div className="meth-table">
                    <div className="meth-table-legs" aria-hidden />
                    <div className="meth-table-surface" />
                    {METH_CRYSTALS.map((c, i) => {
                      const isFalling = i === FALLING_INDEX;
                      let phaseClass = "";
                      if (isFalling && phase === "fall") phaseClass = " meth-fall";
                      if (isFalling && phase === "break") phaseClass = " meth-break";
                      return (
                        <MethCrystal
                          key={i}
                          uid={String(i)}
                          className={`meth-on-table${phaseClass}`}
                          style={{
                            left: `${c.x}%`,
                            top: `${c.y}%`,
                            ["--meth-rot" as string]: `${c.r}deg`,
                            ["--meth-scale" as string]: String(c.s),
                            animationDelay: `${i * 0.04}s`,
                            opacity: phase === "break" && !isFalling ? 0.35 : 1,
                          }}
                        />
                      );
                    })}
                    {phase === "break" && (
                      <div className="meth-shards" aria-hidden>
                        {Array.from({ length: 8 }).map((_, i) => (
                          <span key={i} className={`meth-shard shard-${i}`} />
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="pack-reveal-caption">
                    {phase === "table" && "Masada mavi kristaller…"}
                    {phase === "fall" && "Bir kristal düşüyor…"}
                    {phase === "break" && "Kırılıyor — içeriden bir şey çıkıyor…"}
                  </p>
                </>
              )}
              {showReveal && (
                <div className="pack-result pack-result-reveal">
                  <p className="pack-result-eyebrow">Kristalin içinden</p>
                  <p className="pack-result-rarity">
                    {RARITY_LABEL[packResult.rarity]}
                  </p>
                  {packResult.drop.kind === "profile" ? (
                    <ProfileAvatar
                      id={packResult.drop.id}
                      className="pack-result-avatar"
                    />
                  ) : (
                    <p className="pack-result-name-big">{packResult.label}</p>
                  )}
                  <p className="pack-result-label">{packResult.label}</p>
                  <p className="pack-result-dup">
                    {packResult.duplicate
                      ? "Zaten sahiptin — kopya"
                      : "Envantere eklendi"}
                  </p>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={onClearPackResult}
                  >
                    Tamam
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        <p className="shop-tip">
          Sağa kaydır veya 🛒. Profil ve isim burada alınır — girişte seçilemez.
          Vitrin 3 günde bir değişir. Paketler her zaman satılır.
        </p>
      </aside>
    </>
  );
}
