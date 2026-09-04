import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  pickRecipeForLevel,
  getElementsForRecipe,
  countElements,
  recipesMatch,
  JESSE_METAL_SHOUT,
  WALTER_LIQUID_QUOTE,
  JESSE_FAIL_QUOTE,
  WALTER_FAIL_QUOTE,
  isLiquidRecipe,
  type Recipe,
} from "./data/chemistry";
import {
  addXp,
  calcXpGain,
  xpRequiredForLevel,
  shouldRestoreLives,
  decadeMoneyBonus,
  isDecadeMilestone,
} from "./data/progression";
import { getEnvironmentForLevel, MAX_LEVEL } from "./data/environments";
import { generateWhiteHint, type WhiteHint } from "./data/hints";
import {
  loadGameSave,
  saveGameSave,
  getShopPeriod,
  getFeaturedProfiles,
  getFeaturedNames,
  msUntilNextShopRefresh,
  getNameById,
  getProfileById,
  dropLabel,
  rollPack,
  DEFAULT_PROFILE_ID,
  DEFAULT_NAME_ID,
  type GameSave,
  type PackDef,
  type PackResult,
} from "./data/shop";
import { WalterSprite } from "./components/WalterSprite";
import { BiomeStage } from "./components/BiomeStage";
import { ProfileAvatar } from "./components/ProfileAvatar";
import { ShopPanel } from "./components/ShopPanel";
import "./App.css";
const MAX_LIVES = 3;
const RECENT_RECIPE_MEMORY = 12;
const initialSave = loadGameSave();
const initialRecipe = pickRecipeForLevel(initialSave.level);
export default function App() {
  const [level, setLevel] = useState(() => initialSave.level);
  const [xp, setXp] = useState(() => initialSave.xp);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe>(() => initialRecipe);
  const [elementShelf, setElementShelf] = useState(() =>
    getElementsForRecipe(initialRecipe, initialSave.level)
  );
  const [recentRecipeIds, setRecentRecipeIds] = useState<string[]>(() => [
    initialRecipe.id,
  ]);
  const [selected, setSelected] = useState<string[]>([]);
  const [money, setMoney] = useState(() => initialSave.money);
  const [lives, setLives] = useState(() => initialSave.lives);
  const [compoundsDone, setCompoundsDone] = useState(
    () => initialSave.compoundsDone
  );
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "fail" | "info">(
    "info"
  );
  const [mixing, setMixing] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(() => initialSave.gameWon);
  const [jesseShout, setJesseShout] = useState<string | null>(null);
  const [walterSideQuote, setWalterSideQuote] = useState<string | null>(null);
  const [levelUpFlash, setLevelUpFlash] = useState<number | null>(null);
  const [lifeRestoreFlash, setLifeRestoreFlash] = useState(false);
  const [envChangeFlash, setEnvChangeFlash] = useState<string | null>(null);
  const [hintUsedAtLevel, setHintUsedAtLevel] = useState<number | null>(null);
  const [whiteHint, setWhiteHint] = useState<WhiteHint | null>(null);
  const [heartsLostOnRecipe, setHeartsLostOnRecipe] = useState(0);
  const [heartsLostInDecade, setHeartsLostInDecade] = useState(0);
  const [firstPlayAt] = useState(() => initialSave.firstPlayAt);
  const [ownedProfiles, setOwnedProfiles] = useState(
    () => initialSave.ownedProfiles
  );
  const [ownedNames, setOwnedNames] = useState(() => initialSave.ownedNames);
  const [equippedProfileId, setEquippedProfileId] = useState(
    () => initialSave.equippedProfileId
  );
  const [equippedNameId, setEquippedNameId] = useState(
    () => initialSave.equippedNameId
  );
  const [shopOpen, setShopOpen] = useState(false);
  const [packResult, setPackResult] = useState<PackResult | null>(null);
  const [nowTick, setNowTick] = useState(() => Date.now());
  const touchStartX = useRef<number | null>(null);
  const environment = useMemo(() => getEnvironmentForLevel(level), [level]);
  const xpNeeded = xpRequiredForLevel(level);
  const xpPercent = Math.min(100, (xp / xpNeeded) * 100);
  const hintAvailable = hintUsedAtLevel !== level;
  const shopPeriod = useMemo(
    () => getShopPeriod(firstPlayAt, nowTick),
    [firstPlayAt, nowTick]
  );
  const featuredProfiles = useMemo(
    () => getFeaturedProfiles(shopPeriod),
    [shopPeriod]
  );
  const featuredNames = useMemo(
    () => getFeaturedNames(shopPeriod),
    [shopPeriod]
  );
  const refreshInMs = useMemo(
    () => msUntilNextShopRefresh(firstPlayAt, nowTick),
    [firstPlayAt, nowTick]
  );
  const displayName = getNameById(equippedNameId).label;
  const profileMeta = getProfileById(equippedProfileId);
  useEffect(() => {
    const save: GameSave = {
      firstPlayAt,
      money,
      ownedProfiles,
      ownedNames,
      equippedProfileId,
      equippedNameId,
      level,
      xp,
      lives: lives > 0 ? lives : MAX_LIVES,
      compoundsDone,
      gameWon,
    };
    saveGameSave(save);
  }, [
    firstPlayAt,
    money,
    ownedProfiles,
    ownedNames,
    equippedProfileId,
    equippedNameId,
    level,
    xp,
    lives,
    compoundsDone,
    gameWon,
  ]);
  useEffect(() => {
    const id = window.setInterval(() => setNowTick(Date.now()), 30_000);
    return () => window.clearInterval(id);
  }, []);
  const nextRecipe = useCallback(
    (newLevel: number, lastId: string, prevRecent: string[]) => {
      const exclude = [...prevRecent, lastId].slice(-RECENT_RECIPE_MEMORY);
      const recipe = pickRecipeForLevel(newLevel, exclude);
      setCurrentRecipe(recipe);
      setElementShelf(getElementsForRecipe(recipe, newLevel));
      setRecentRecipeIds((ids) =>
        [...ids, recipe.id].slice(-RECENT_RECIPE_MEMORY)
      );
    },
    []
  );
  const toggleElement = useCallback((symbol: string) => {
    setSelected((prev) => [...prev, symbol]);
    setMessage(null);
  }, []);
  const removeAt = useCallback((index: number) => {
    setSelected((prev) => prev.filter((_, i) => i !== index));
    setMessage(null);
  }, []);
  const clearSelection = useCallback(() => {
    setSelected([]);
    setMessage(null);
  }, []);
  const handleWhiteHint = useCallback(() => {
    if (!hintAvailable || !currentRecipe) return;
    const hint = generateWhiteHint(selected, currentRecipe.elements);
    setWhiteHint(hint);
    setHintUsedAtLevel(level);
    setMessageType("info");
    setMessage(null);
  }, [hintAvailable, currentRecipe, selected, level]);
  const handleBuyProfile = useCallback(
    (id: string) => {
      const item = getProfileById(id);
      if (ownedProfiles.includes(id) || money < item.price) return;
      setMoney((m) => m - item.price);
      setOwnedProfiles((prev) => [...prev, id]);
      setEquippedProfileId(id);
      setMessageType("success");
      setMessage(`Profil alındı: ${item.name}`);
    },
    [ownedProfiles, money]
  );
  const handleBuyName = useCallback(
    (id: string) => {
      const item = getNameById(id);
      if (ownedNames.includes(id) || money < item.price) return;
      setMoney((m) => m - item.price);
      setOwnedNames((prev) => [...prev, id]);
      setEquippedNameId(id);
      setMessageType("success");
      setMessage(`İsim alındı: ${item.label}`);
    },
    [ownedNames, money]
  );
  const handleOpenPack = useCallback(
    (pack: PackDef) => {
      if (money < pack.price) return;
      const { rarity, drop } = rollPack(pack);
      const already =
        drop.kind === "profile"
          ? ownedProfiles.includes(drop.id)
          : ownedNames.includes(drop.id);
      setMoney((m) => m - pack.price);
      if (!already) {
        if (drop.kind === "profile") {
          setOwnedProfiles((prev) => [...prev, drop.id]);
          setEquippedProfileId(drop.id);
        } else {
          setOwnedNames((prev) => [...prev, drop.id]);
          setEquippedNameId(drop.id);
        }
      }
      setPackResult({
        packId: pack.id,
        rarity,
        drop,
        label: dropLabel(drop),
        duplicate: already,
      });
    },
    [money, ownedProfiles, ownedNames]
  );
  const handleMix = useCallback(() => {
    if (!currentRecipe || selected.length === 0) return;
    setMixing(true);
    setTimeout(() => {
      const counts = countElements(selected);
      const correct = recipesMatch(counts, currentRecipe.elements);
      if (correct) {
        const gainedXp = calcXpGain(
          level,
          currentRecipe.difficulty,
          heartsLostOnRecipe
        );
        const xpResult = addXp(xp, level, gainedXp);
        let moneyGain = currentRecipe.reward;
        let decadeBonus = 0;
        const finalLevel = Math.min(xpResult.level, MAX_LEVEL);
        setXp(finalLevel >= MAX_LEVEL ? 0 : xpResult.xp);
        setLevel(finalLevel);
        if (xpResult.leveledUp) {
          for (let lv = level + 1; lv <= finalLevel; lv++) {
            if (isDecadeMilestone(lv)) {
              decadeBonus += decadeMoneyBonus(heartsLostInDecade);
              setHeartsLostInDecade(0);
            }
          }
        }
        moneyGain += decadeBonus;
        setMoney((m) => m + moneyGain);
        setCompoundsDone((c) => c + 1);
        setHeartsLostOnRecipe(0);
        if (finalLevel >= MAX_LEVEL) {
          setGameWon(true);
          setMessageType("success");
          setMessage("🏆 Heisenberg oldun! Oyun bitti.");
          setSelected([]);
          setWhiteHint(null);
          setMixing(false);
          return;
        }
        if (currentRecipe.isMetal) {
          setJesseShout(JESSE_METAL_SHOUT);
          setTimeout(() => setJesseShout(null), 3500);
        }
        if (isLiquidRecipe(currentRecipe)) {
          setWalterSideQuote(WALTER_LIQUID_QUOTE);
          setTimeout(() => setWalterSideQuote(null), 3500);
        }
        if (xpResult.leveledUp) {
          setLevelUpFlash(xpResult.level);
          setTimeout(() => setLevelUpFlash(null), 3000);
          if (shouldRestoreLives(xpResult.level)) {
            setLives(MAX_LIVES);
            setLifeRestoreFlash(true);
            setTimeout(() => setLifeRestoreFlash(false), 2500);
          }
          const oldEnv = getEnvironmentForLevel(level);
          const newEnv = getEnvironmentForLevel(xpResult.level);
          if (oldEnv.id !== newEnv.id) {
            setEnvChangeFlash(newEnv.name);
            setTimeout(() => setEnvChangeFlash(null), 4000);
          }
        }
        setMessageType("success");
        setMessage(
          decadeBonus > 0
            ? `+${gainedXp} XP · +$${currentRecipe.reward} · 🎉 +$${decadeBonus} (10. level ödülü)`
            : `+${gainedXp} XP · +$${currentRecipe.reward}`
        );
        setSelected([]);
        setWhiteHint(null);
        nextRecipe(xpResult.level, currentRecipe.id, recentRecipeIds);
      } else {
        const newLives = lives - 1;
        setLives(newLives);
        setHeartsLostOnRecipe((h) => h + 1);
        setHeartsLostInDecade((h) => h + 1);
        setMessageType("fail");
        setMessage("Yanlış karışım! Lab tehlikede.");
        if (level % 2 === 1) {
          setWalterSideQuote(WALTER_FAIL_QUOTE);
          setTimeout(() => setWalterSideQuote(null), 3500);
        } else {
          setJesseShout(JESSE_FAIL_QUOTE);
          setTimeout(() => setJesseShout(null), 3500);
        }
        if (newLives <= 0) {
          setGameOver(true);
        }
      }
      setMixing(false);
    }, 800);
  }, [currentRecipe, selected, lives, xp, level, nextRecipe, recentRecipeIds, heartsLostOnRecipe, heartsLostInDecade]);
  const continueAfterBoom = () => {
    setGameOver(false);
    setLevel(1);
    setXp(0);
    setLives(MAX_LIVES);
    setSelected([]);
    setWhiteHint(null);
    setMessage(null);
    setHeartsLostOnRecipe(0);
    setHeartsLostInDecade(0);
    const recipe = pickRecipeForLevel(1);
    setCurrentRecipe(recipe);
    setElementShelf(getElementsForRecipe(recipe, 1));
    setRecentRecipeIds([recipe.id]);
  };
  const continueAfterWin = () => {
    setGameWon(false);
    setLevel(1);
    setXp(0);
    setLives(MAX_LIVES);
    setSelected([]);
    setWhiteHint(null);
    const recipe = pickRecipeForLevel(1);
    setCurrentRecipe(recipe);
    setElementShelf(getElementsForRecipe(recipe, 1));
    setRecentRecipeIds([recipe.id]);
  };
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (dx > 70) setShopOpen(true);
    if (dx < -70) setShopOpen(false);
  };
  const beaker = (
    <div className={`beaker ${mixing ? "mixing" : ""}`}>
      <div className="beaker-liquid" />
      <div className="beaker-contents">
        {selected.length === 0 ? (
          <span className="beaker-empty">Element seç...</span>
        ) : (
          selected.map((sym, i) => (
            <button
              key={`${sym}-${i}`}
              className="beaker-element"
              onClick={() => removeAt(i)}
              title="Kaldırmak için tıkla"
            >
              {sym}
            </button>
          ))
        )}
      </div>
    </div>
  );
  if (gameWon) {
    return (
      <div className={`game ${environment.cssClass}`}>
        <div className="game-over">
          <h1>🏆 Heisenberg Oldun!</h1>
          <p>
            Level {MAX_LEVEL} · {compoundsDone} bileşik · Kazanç: ${money}
            <br />
            <em>&quot;Say my name.&quot;</em>
          </p>
          <button className="btn-primary" onClick={continueAfterWin}>
            Tekrar Oyna
          </button>
        </div>
      </div>
    );
  }
  if (gameOver) {
    return (
      <div className={`game ${environment.cssClass}`}>
        <div className="game-over">
          <h1>💥 Lab Patladı!</h1>
          <p>
            Level {level} · {compoundsDone} bileşik · Kazanç: ${money}
            <br />
            Level sıfırlanır. Para, profil ve isim kalır.
          </p>
          <button className="btn-primary" onClick={continueAfterBoom}>
            Devam Et
          </button>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`game ${environment.cssClass}${shopOpen ? " shop-open" : ""}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <ShopPanel
        open={shopOpen}
        onClose={() => setShopOpen(false)}
        money={money}
        featuredProfiles={featuredProfiles}
        featuredNames={featuredNames}
        ownedProfiles={ownedProfiles}
        ownedNames={ownedNames}
        equippedProfileId={equippedProfileId}
        equippedNameId={equippedNameId}
        refreshInMs={refreshInMs}
        packResult={packResult}
        onBuyProfile={handleBuyProfile}
        onBuyName={handleBuyName}
        onEquipProfile={setEquippedProfileId}
        onEquipName={setEquippedNameId}
        onOpenPack={handleOpenPack}
        onClearPackResult={() => setPackResult(null)}
      />
      {jesseShout && (
        <div
          className={`jesse-shout-overlay${jesseShout === JESSE_FAIL_QUOTE ? " fail" : ""}`}
        >
          <p className="jesse-shout-text">{jesseShout}</p>
        </div>
      )}
      {walterSideQuote && (
        <div className="walter-side-quote">
          <WalterSprite className="walter-side-sprite" />
          <p className="walter-side-text">{walterSideQuote}</p>
        </div>
      )}
      {levelUpFlash && (
        <div className="level-up-overlay">
          <p className="level-up-text">LEVEL {levelUpFlash}!</p>
        </div>
      )}
      {lifeRestoreFlash && (
        <div className="life-restore-overlay">
          <p className="life-restore-text">❤️ Canlar yenilendi!</p>
        </div>
      )}
      {envChangeFlash && (
        <div className="env-change-overlay">
          <p className="env-change-text">📍 Yeni Ortam: {envChangeFlash}</p>
        </div>
      )}
      <header className="header">
        <div className="header-left">
          <button
            type="button"
            className="player-badge"
            onClick={() => setShopOpen(true)}
            title="Mağazayı aç"
          >
            <ProfileAvatar id={equippedProfileId} className="player-avatar" />
            <div className="player-meta">
              <span className="player-name">{displayName}</span>
              <span className="player-profile">{profileMeta.name}</span>
            </div>
          </button>
          <div className="logo">
            <span className="logo-icon">⚗️</span>
            <div>
              <h1>Heisenberg&apos;s Lab</h1>
              <span className="env-badge">{environment.name}</span>
            </div>
          </div>
        </div>
        <div className="stats">
          <button
            type="button"
            className="shop-fab"
            onClick={() => setShopOpen(true)}
            aria-label="Mağaza"
          >
            🛒
          </button>
          <div className="stat stat-level">
            <span className="stat-label">Level</span>
            <span className="stat-value level-num">{level}</span>
            <div className="xp-bar">
              <div className="xp-fill" style={{ width: `${xpPercent}%` }} />
            </div>
            <span className="xp-text">
              {xp} / {xpNeeded} XP
            </span>
          </div>
          <div className="stat">
            <span className="stat-label">Kazanç</span>
            <span className="stat-value money">${money}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Can</span>
            <span className="stat-value lives">
              {"❤️".repeat(lives)}
              {"🖤".repeat(MAX_LIVES - lives)}
            </span>
          </div>
          <div className="stat">
            <span className="stat-label">Bileşik</span>
            <span className="stat-value">{compoundsDone}</span>
          </div>
        </div>
      </header>
      <main className="main">
        <BiomeStage
          envId={environment.id}
          envName={environment.name}
          materialName={currentRecipe.materialName}
          mixing={mixing}
          hintAvailable={hintAvailable}
          whiteHint={whiteHint?.message ?? null}
          onHint={handleWhiteHint}
          hintDisabled={!hintAvailable || mixing}
          beaker={beaker}
          feedback={
            message ? (
              <p className={`feedback feedback-${messageType}`}>{message}</p>
            ) : null
          }
        />
        <section className="lab-panel">
          <div className="element-shelf">
            <h2>Element Rafı</h2>
            <p className="hint">
              Level {level} · {elementShelf.length} element
            </p>
            <div className="element-grid">
              {elementShelf.map((el) => (
                <button
                  key={el.symbol}
                  className="element-btn"
                  style={{ "--el-color": el.color } as React.CSSProperties}
                  onClick={() => toggleElement(el.symbol)}
                  disabled={mixing}
                >
                  <span className="el-symbol">{el.symbol}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="actions">
            <button
              className="btn-secondary"
              onClick={clearSelection}
              disabled={selected.length === 0 || mixing}
            >
              Temizle
            </button>
            <button
              className="btn-primary btn-mix"
              onClick={handleMix}
              disabled={selected.length === 0 || mixing}
            >
              {mixing ? "Karıştırılıyor..." : "⚗️ Karıştır & Sat"}
            </button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>
          Level {level} · {environment.name} ·{" "}
          <em>&quot;Say my name.&quot;</em>
        </p>
        <p className="footer-shop-hint">
          ← Sağa kaydır veya 🛒 · varsayılan: {DEFAULT_PROFILE_ID === equippedProfileId ? "Rookie" : displayName}
          {equippedNameId === DEFAULT_NAME_ID ? " / Lab Rookie" : ""}
        </p>
      </footer>
    </div>
  );
}
