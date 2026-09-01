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
