"use client";

import { useState } from "react";

const supportSteps = [
  {
    number: "01",
    title: "初期設計支援",
    catchphrase: "Silicon Workerを選ぶ前に、まず貴社の業務を可視化します。",
    description: "貴社の課題・財務経理体制・業務の流れを確認し、どこに何が必要かを整理したうえで、Silicon Workerの役割を設計します。",
    flow: ["業務を可視化する", "どこに何が必要かを見る", "Silicon Workerの役割を設計する"],
    items: ["必要なSilicon Worker", "人数", "役割", "担当範囲", "連携範囲", "Proteinとの連携方法"],
  },
  {
    number: "02",
    title: "Silicon Worker研修",
    catchphrase: "貴社を知ってから、配属します。",
    description: "新入社員にオリエンテーションを行うのと同じように、Silicon Workerにも貴社を理解するための研修を行います。",
    items: ["企業理念・Mission", "財務経理部が大切にしていること", "業務フロー", "利用システム", "社内ルール", "判断基準", "過去事例・例外", "必要なデータ・ナレッジ"],
    message: "人が会社を知らずに働けないように、Silicon Workerも、会社を知らずには働けません。",
  },
  {
    number: "03",
    title: "新しい関係との働き方研修",
    catchphrase: "Protein側にも、一緒に働く準備を。",
    description: "Silicon Workerだけを準備しても、チームにはなりません。一緒に働くProteinメンバーに、Silicon Workerとの仕事の進め方を共有します。",
    items: ["どんな情報を共有するか", "仕事をどう連携するか", "判断が必要な場合のやり取り", "フィードバックの方法", "役割と責任の境界"],
    message: "「AI操作研修」ではなく、新しい同僚との働き方研修です。",
  },
  {
    number: "04",
    title: "定着支援",
    catchphrase: "一緒に働きながら、チームを育てる。",
    description: "配属して終わりではありません。実務で得た気づきやフィードバックをもとに、チームとしての働き方を育てていきます。",
    items: ["ナレッジの更新", "役割・担当範囲の見直し", "判断事例の蓄積", "Proteinとの連携改善", "必要に応じたSilicon Workerの追加・再配置"],
  },
];

function StepIcon({ number }: { number: string }) {
  if (number === "01") {
    return <svg viewBox="0 0 32 32" fill="none"><rect x="3.5" y="4.5" width="9" height="7" rx="1.5" /><rect x="19.5" y="20.5" width="9" height="7" rx="1.5" /><rect x="3.5" y="20.5" width="9" height="7" rx="1.5" /><path d="M8 11.5v5h16v4M12.5 8h7" /></svg>;
  }
  if (number === "02") {
    return <svg viewBox="0 0 32 32" fill="none"><path d="M5 6.5h22v19H5zM10 12h12M10 17h12M10 22h7" /><path d="m20 6.5 3 3" /></svg>;
  }
  if (number === "03") {
    return <svg viewBox="0 0 32 32" fill="none"><circle cx="11" cy="11" r="4" /><circle cx="22" cy="12" r="3" /><path d="M3.5 26c.5-4.4 3.1-7 7.5-7s7 2.6 7.5 7M19 20c4.8-1.2 8.5 1.1 9.5 5.5" /></svg>;
  }
  return <svg viewBox="0 0 32 32" fill="none"><path d="M25.5 12A10 10 0 0 0 8 7.5L5 11M5 6v5h5M6.5 20A10 10 0 0 0 24 24.5l3-3M27 26v-5h-5" /></svg>;
}

export default function SupportSteps() {
  const [activeStepNumber, setActiveStepNumber] = useState("01");
  const activeStep = supportSteps.find((step) => step.number === activeStepNumber) ?? supportSteps[0];

  return (
    <div className="support-journey">
      <p className="support-flow__hint">気になるSTEPを選ぶと、下に詳細が表示されます。</p>
      <div className="support-flow" role="group" aria-label="配属から定着までの4つのステップ">
        {supportSteps.map((step) => (
          <button
            type="button"
            className={`support-flow__step${activeStepNumber === step.number ? " is-active" : ""}`}
            key={step.number}
            aria-pressed={activeStepNumber === step.number}
            aria-controls="support-step-detail"
            onClick={() => setActiveStepNumber(step.number)}
          >
            <span className="support-flow__icon" aria-hidden="true"><StepIcon number={step.number} /></span>
            <span className="support-flow__number">STEP {step.number}</span>
            <strong>{step.title}</strong>
            <span className="support-flow__action">{activeStepNumber === step.number ? "選択中" : "詳細を見る ↓"}</span>
          </button>
        ))}
      </div>

      <article className="support-list" id="support-step-detail" aria-live="polite">
        {activeStep.flow && (
          <div className="support-step-flow__featured">
            <small>STEP 01｜設計の出発点</small>
            <strong>貴社業務フローの可視化</strong>
          </div>
        )}
        <b>{activeStep.number}</b>
        <div className="support-list__body">
          <small>STEP {activeStep.number}</small>
          <h3>{activeStep.title}</h3>
          <h4>{activeStep.catchphrase}</h4>
          <p>{activeStep.description}</p>
          {activeStep.flow && (
            <ol className="support-step-flow" aria-label="初期設計の流れ">
              {activeStep.flow.map((item) => <li key={item}>{item}</li>)}
            </ol>
          )}
          <ul className="support-list__items">
            {activeStep.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
          {activeStep.message && <p className="support-list__message">{activeStep.message}</p>}
        </div>
      </article>
    </div>
  );
}
