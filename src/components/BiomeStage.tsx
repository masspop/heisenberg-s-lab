import type { ReactNode } from "react";
import { EnvironmentScene } from "./EnvironmentScene";
import { JesseSprite } from "./JesseSprite";
import { WalterSprite } from "./WalterSprite";
interface BiomeStageProps {
  envId: number;
  envName: string;
  materialName: string;
  mixing: boolean;
  hintAvailable: boolean;
  whiteHint: string | null;
  onHint: () => void;
  hintDisabled: boolean;
  beaker: ReactNode;
  feedback: ReactNode;
}
export function BiomeStage({
  envId,
  envName,
  materialName,
  mixing,
  hintAvailable,
  whiteHint,
  onHint,
  hintDisabled,
  beaker,
  feedback,
}: BiomeStageProps) {
  return (
    <section className="biome-stage">
      <div className="biome-bg">
        <EnvironmentScene envId={envId} className="biome-scene-svg" />
        <div className="biome-vignette" />
      </div>
      <div className="biome-hud">
        <span className="biome-name">{envName}</span>
      </div>
      <div className="biome-characters">
        <div className="jesse-in-biome">
          <div className="jesse-order-bubble">
            <span className="jesse-order-label">Jesse diyor ki:</span>
            <span className="jesse-order-item">{materialName}</span>
          </div>
          <JesseSprite className="jesse-in-scene" mixing={mixing} />
          <div className="jesse-beaker-slot">{beaker}</div>
        </div>
        <div className="walter-in-biome">
          <WalterSprite className="walter-in-scene" waiting />
          <div className="walter-hint-box">
            <span className="walter-title">Mr. White</span>
            <p className="walter-status">
              {hintAvailable ? "İpucu için hazır bekliyor" : "Bu levelde ipucu bitti"}
            </p>
            {whiteHint ? (
              <p className="walter-hint-word">{whiteHint}</p>
            ) : (
              <p className="walter-hint-idle">Yan tarafta gözetliyor…</p>
            )}
            <button
              className="btn-white-hint"
              onClick={onHint}
              disabled={hintDisabled}
            >
              💡 İpucu Al
            </button>
          </div>
        </div>
      </div>
      {feedback && <div className="biome-feedback">{feedback}</div>}
    </section>
  );
}
