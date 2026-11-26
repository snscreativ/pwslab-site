"use client";

import { useId, useState } from "react";

export default function WorkerIntroduction() {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  return (
    <section
      className="c-worker-types"
      aria-label="Protein WorkerとSilicon Workerの説明"
    >
      <div className="c-worker-types__inner" data-open={isOpen}>
        <button
          type="button"
          className="c-worker-types__summary"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="c-worker-types__label">
            PROTEIN WORKER / <br className="u-xs" />
            SILICON WORKERとは？
          </span>
          <span className="c-worker-types__toggle">
            <span className="c-worker-types__more">詳しく見る</span>
            <span className="c-worker-types__less">閉じる</span>
            <span className="c-worker-types__chevron" aria-hidden="true">
              ▾
            </span>
          </span>
        </button>
        <div
          className="c-worker-types__panel"
          id={panelId}
          aria-hidden={!isOpen}
          inert={!isOpen}
        >
          <div className="c-worker-types__clip">
            <div className="c-worker-types__content">
              <div className="c-worker-types__comparison">
                <div className="c-worker-types__worker c-worker-types__worker--protein">
                  <div className="c-worker-types__symbol">
                    人<span>ひと</span>
                  </div>
                  <div className="c-worker-types__description">
                    <h2>Protein Worker</h2>
                    <p>タンパク質でできた労働力</p>
                  </div>
                </div>
                <div className="c-worker-types__connection">
                  <img
                    className="c-worker-types__badge"
                    src="/images/finance/pw-outline-icon.webp"
                    alt=""
                    width="300"
                    height="300"
                  />
                  <svg
                    className="c-worker-types__arrows"
                    viewBox="0 0 100 56"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      className="c-worker-types__arrow--protein"
                      d="M6 17H94M86 9L94 17L86 25"
                    />
                    <path
                      className="c-worker-types__arrow--silicon"
                      d="M94 39H6M14 31L6 39L14 47"
                    />
                  </svg>
                  <img
                    className="c-worker-types__badge"
                    src="/images/finance/sw-outline-icon.webp"
                    alt=""
                    width="300"
                    height="300"
                  />
                </div>
                <div className="c-worker-types__worker c-worker-types__worker--silicon">
                  <div className="c-worker-types__symbol">AI</div>
                  <div className="c-worker-types__description">
                    <h2>Silicon Worker</h2>
                    <p>半導体でできた労働力</p>
                  </div>
                </div>
              </div>
              <p className="c-worker-types__statement">
                同じチームの一員として、
                <br className="c-worker-types__break" />
                役割を持って働く。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
