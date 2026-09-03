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
                  disabled={money < pack.price}
                  onClick={() => onOpenPack(pack)}
                >
                  Aç
                </button>
              </article>
            ))}
          </div>
        </section>
        {packResult && (
          <div className="pack-result" role="status">
            <p className="pack-result-rarity">
              {RARITY_LABEL[packResult.rarity]}
            </p>
            {packResult.drop.kind === "profile" ? (
              <ProfileAvatar
                id={packResult.drop.id}
                className="pack-result-avatar"
              />
            ) : null}
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
        <p className="shop-tip">
          Sağa kaydır veya 🛒. Profil ve isim burada alınır — girişte seçilemez.
          Vitrin 3 günde bir değişir. Paketler her zaman satılır.
        </p>
      </aside>
    </>
  );
}
