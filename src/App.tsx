import { useCallback, useMemo, useState } from "react";
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
  randomXpGain,
  xpRequiredForLevel,
} from "./data/progression";
import { getEnvironmentForLevel } from "./data/environments";
import { generateWhiteHint, type WhiteHint } from "./data/hints";
import "./App.css";

const MAX_LIVES = 3;

const initialRecipe = pickRecipeForLevel(1);

export default function App() {
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe>(() => initialRecipe);
  const [elementShelf, setElementShelf] = useState(() =>
    getElementsForRecipe(initialRecipe, 1)
  );
  const [selected, setSelected] = useState<string[]>([]);
  const [money, setMoney] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [compoundsDone, setCompoundsDone] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "fail" | "info">(
    "info"
  );
  const [mixing, setMixing] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [jesseShout, setJesseShout] = useState<string | null>(null);
  const [walterSideQuote, setWalterSideQuote] = useState<string | null>(null);
  const [levelUpFlash, setLevelUpFlash] = useState<number | null>(null);
  const [envChangeFlash, setEnvChangeFlash] = useState<string | null>(null);
  const [hintUsedAtLevel, setHintUsedAtLevel] = useState<number | null>(null);
  const [whiteHint, setWhiteHint] = useState<WhiteHint | null>(null);

  const environment = useMemo(() => getEnvironmentForLevel(level), [level]);
  const xpNeeded = xpRequiredForLevel(level);
  const xpPercent = Math.min(100, (xp / xpNeeded) * 100);
  const hintAvailable = hintUsedAtLevel !== level;

  const nextRecipe = useCallback(
    (newLevel: number, lastId?: string) => {
      const recipe = pickRecipeForLevel(newLevel, lastId);
      setCurrentRecipe(recipe);
      setElementShelf(getElementsForRecipe(recipe, newLevel));
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

  const handleMix = useCallback(() => {
    if (!currentRecipe || selected.length === 0) return;

    setMixing(true);

    setTimeout(() => {
      const counts = countElements(selected);
      const correct = recipesMatch(counts, currentRecipe.elements);

      if (correct) {
        const gainedXp = randomXpGain();
        const xpResult = addXp(xp, level, gainedXp);

        setMoney((m) => m + currentRecipe.reward);
        setCompoundsDone((c) => c + 1);
        setXp(xpResult.xp);
        setLevel(xpResult.level);

        if (currentRecipe.isMetal) {
          setJesseShout(JESSE_METAL_SHOUT);
          setTimeout(() => setJesseShout(null), 3500);
        }

        if (isLiquidRecipe(currentRecipe)) {
          setWalterSideQuote(WALTER_LIQUID_QUOTE);
          setTimeout(() => setWalterSideQuote(null), 3500);
        }

        let feedback = `+${gainedXp} XP · +$${currentRecipe.reward}`;

        if (xpResult.leveledUp) {
          setLevelUpFlash(xpResult.level);
          setTimeout(() => setLevelUpFlash(null), 3000);

          const oldEnv = getEnvironmentForLevel(level);
          const newEnv = getEnvironmentForLevel(xpResult.level);
          if (oldEnv.id !== newEnv.id) {
            setEnvChangeFlash(newEnv.name);
            setTimeout(() => setEnvChangeFlash(null), 4000);
          }
        }

        setMessageType("success");
        setMessage(feedback);
        setSelected([]);
        setWhiteHint(null);
        nextRecipe(xpResult.level, currentRecipe.id);
      } else {
        const newLives = lives - 1;
        setLives(newLives);
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
  }, [currentRecipe, selected, lives, xp, level, nextRecipe]);

  const restart = () => {
    window.location.reload();
  };

  if (gameOver) {
    return (
      <div className={`game ${environment.cssClass}`}>
        <div className="game-over">
          <h1>💥 Lab Patladı!</h1>
          <p>
            Level {level} · {compoundsDone} bileşik · Kazanç: ${money}
          </p>
          <button className="btn-primary" onClick={restart}>
            Tekrar Oyna
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`game ${environment.cssClass}`}>
      {jesseShout && (
        <div
          className={`jesse-shout-overlay${jesseShout === JESSE_FAIL_QUOTE ? " fail" : ""}`}
        >
          <p className="jesse-shout-text">{jesseShout}</p>
        </div>
      )}

      {walterSideQuote && (
        <div className="walter-side-quote">
          <span className="walter-side-avatar">🧑‍🦲</span>
          <p className="walter-side-text">{walterSideQuote}</p>
        </div>
      )}

      {levelUpFlash && (
        <div className="level-up-overlay">
          <p className="level-up-text">LEVEL {levelUpFlash}!</p>
        </div>
      )}

      {envChangeFlash && (
        <div className="env-change-overlay">
          <p className="env-change-text">
            📍 Yeni Ortam: {envChangeFlash}
          </p>
        </div>
      )}

      <header className="header">
        <div className="logo">
          <span className="logo-icon">⚗️</span>
          <div>
            <h1>Heisenberg&apos;s Lab</h1>
            <span className="env-badge">
              {environment.emoji} {environment.name}
            </span>
          </div>
        </div>
        <div className="stats">
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
        <section className="jesse-panel">
          <div className="jesse-avatar">{environment.emoji}</div>
          <div className="jesse-speech">
            <span className="jesse-name">Jesse Pinkman</span>
            <div className="order-card">
              <span className="order-label">Lazım olan:</span>
              <span className="order-name">{currentRecipe.materialName}</span>
            </div>
          </div>

          <div className="white-panel">
            <div className="white-header">
              <span className="white-avatar">🧑‍🦲</span>
              <div>
                <span className="white-name">Mr. White</span>
                <span className="white-hint-count">
                  {hintAvailable ? "1 ipucu hakkın var" : "Bu levelde ipucu bitti"}
                </span>
              </div>
            </div>
            {whiteHint ? (
              <p className="white-message">{whiteHint.message}</p>
            ) : (
              <p className="white-idle">Takılırsan ipucu iste.</p>
            )}
            <button
              className="btn-white-hint"
              onClick={handleWhiteHint}
              disabled={!hintAvailable || mixing}
            >
              💡 Mr. White&apos;tan İpucu Al
            </button>
          </div>
        </section>

        <section className="lab-panel">
          <div className="beaker-area">
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
            {message && (
              <p className={`feedback feedback-${messageType}`}>{message}</p>
            )}
          </div>

          <div className="element-shelf">
            <h2>Element Rafı</h2>
            <p className="hint">Level {level}</p>
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
      </footer>
    </div>
  );
}
