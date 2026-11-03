import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceLabel from "@/components/ServiceLabel";
import "./marketing.css";

export const metadata: Metadata = {
  title: "マーケティング部 Silicon Worker｜PwS Marketing Office",
  description:
    "Protein Worker（人）とSilicon Workerが同じゴールを持つチームとして、戦略から制作・運用・改善までを一緒に回します。",
  alternates: { canonical: "/service/marketing" },
  openGraph: {
    title: "マーケティング部 Silicon Worker｜PwS Marketing Office",
    description:
      "マーケティング担当を一人採用する。その前に。Protein WorkerとSilicon Workerが一つのチームになり、戦略から改善まで一緒に回します。",
    url: "https://www.pwslab.jp/service/marketing",
  },
};

const siliconWorkers = [
  {
    name: "健太",
    role: "市場・顧客／分析",
    image: "/images/marketing/健太_市場顧客分析.webp?v=20261102",
  },
  {
    name: "美咲",
    role: "企画／コンテンツ",
    image: "/images/marketing/美咲_企画コンテンツ.webp?v=20261102",
  },
  {
    name: "陽菜",
    role: "Web／導線",
    image: "/images/marketing/陽菜_web導線.webp?v=20261102",
  },
  {
    name: "翔太",
    role: "広告／集客",
    image: "/images/marketing/翔太_広告集客.webp?v=20261102",
  },
];

const proteinWorkers = [
  {
    role: "経営者",
    image: "/images/marketing/プロテイン_経営者.webp?v=20261102",
  },
  {
    role: "営業",
    image: "/images/marketing/プロテイン_営業.webp?v=20261102",
  },
  {
    role: "現場",
    image: "/images/marketing/プロテイン_現場.webp?v=20261102",
  },
];

const journey = [
  { title: "戦略", detail: "誰に・何を" },
  { title: "企画", detail: "何を仕掛ける" },
  { title: "制作", detail: "形にする" },
  { title: "運用", detail: "届ける" },
  { title: "分析", detail: "反応を測る" },
  { title: "改善", detail: "次を考える" },
];

const scenes = [
  {
    title: "Scene 1｜顧客の声から、次に売るものを考える",
    messages: [
      {
        person: "営業担当",
        role: "Protein Worker",
        kind: "protein",
        text: "最近「導入後、どう使うの？」と聞かれるんだ。",
      },
      {
        person: "健太",
        role: "Silicon Worker・市場／分析",
        kind: "silicon",
        text: "Webでも導入事例の閲覧が増えています。検討中の方は「使った後」を知りたいのかも。",
      },
      {
        person: "美咲",
        role: "Silicon Worker・企画／コンテンツ",
        kind: "silicon",
        text: "商品の説明を増やすより、「導入後の一日」を見せる企画にしませんか？",
      },
      {
        person: "経営者",
        role: "Protein Worker",
        kind: "protein",
        text: "それ、営業でも使えるね。今月やってみよう。",
      },
    ],
  },
  {
    title: "Scene 2｜作って、届けて、売れたかを見る",
    messages: [
      {
        person: "陽菜",
        role: "Silicon Worker・Web／導線",
        kind: "silicon",
        text: "記事と相談ページを作りました。導線も変更します。",
      },
      {
        person: "翔太",
        role: "Silicon Worker・広告／集客",
        kind: "silicon",
        text: "広告も新しい訴求に。業種別に反応を見ます。",
      },
      {
        person: "健太",
        role: "Silicon Worker・市場／分析",
        kind: "silicon",
        text: "相談は増えましたが、製造業の商談化率は低いです。",
      },
      {
        person: "営業担当",
        role: "Protein Worker",
        kind: "protein",
        text: "製造業は導入負荷を気にしてる。説明不足かも。",
      },
      {
        person: "美咲",
        role: "Silicon Worker・企画／コンテンツ",
        kind: "silicon",
        text: "では次は、「導入までの流れ」を見せましょう。",
      },
    ],
  },
];

const values = [
  {
    title: "一人に、全部を背負わせない",
    description: "必要な専門性をチームで分担。",
    icon: "people",
  },
  {
    title: "バラバラの施策がつながる",
    description: "戦略から改善まで、同じゴールへ。",
    icon: "link",
  },
  {
    title: "考えるだけで、終わらない",
    description: "作る・届ける・測るまで回す。",
    icon: "spark",
  },
  {
    title: "改善が、止まらない",
    description: "施策と結果を次の打ち手に。",
    icon: "chart",
  },
];

const challenges = [
  {
    title: "担当者不足",
    description: "やりたい施策はあるのに、専任の担当者を確保できない。",
    icon: "people",
    tone: "blue",
  },
  {
    title: "業務の分散",
    description: "社長・営業・広報・外注先などに仕事が分かれ、全体が見えにくい。",
    icon: "branch",
    tone: "orange",
  },
  {
    title: "専門性の不足",
    description: "戦略・SNS・Web・広告・分析など、必要なスキルがそろわない。",
    icon: "layers",
    tone: "orange",
  },
  {
    title: "施策がつながらない",
    description: "企画・制作・運用・分析・改善が分断され、全体の成果につながりにくい。",
    icon: "cycle",
    tone: "blue",
  },
] as const;

function WorkerPortrait({
  src,
  name,
  className = "",
}: {
  src: string;
  name: string;
  className?: string;
}) {
  return (
    <span className={`p-marketing-portrait ${className}`.trim()}>
      <Image
        src={src}
        alt={`${name}の人物イメージ`}
        width={112}
        height={112}
        unoptimized
      />
    </span>
  );
}

function ChallengeIcon({ name }: { name: (typeof challenges)[number]["icon"] }) {
  if (name === "people") {
    return (
      <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
        <circle cx="28" cy="14" r="7" />
        <circle cx="12" cy="20" r="5" />
        <circle cx="44" cy="20" r="5" />
        <path d="M12 43v-4a16 16 0 0 1 32 0v4H12ZM2 42v-3a10 10 0 0 1 10-10M54 42v-3a10 10 0 0 0-10-10" />
      </svg>
    );
  }
  if (name === "branch") {
    return (
      <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
        <circle cx="28" cy="9" r="6" />
        <circle cx="10" cy="43" r="6" />
        <circle cx="46" cy="43" r="6" />
        <path d="M28 15v7m0 0c0 9-18 8-18 15m18-15c0 9 18 8 18 15" />
      </svg>
    );
  }
  if (name === "layers") {
    return (
      <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
        <path d="m28 6 23 13-23 13L5 19 28 6Z" />
        <path d="m7 28 21 12 21-12M7 38l21 12 21-12" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path d="M47 22A20 20 0 0 0 12 14L8 19m0 0v-9m0 9h9M9 34a20 20 0 0 0 35 8l4-5m0 0v9m0-9h-9" />
    </svg>
  );
}

function ValueIcon({ name }: { name: string }) {
  if (name === "people") {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="12" r="5" />
        <circle cx="8" cy="16" r="3.5" />
        <circle cx="32" cy="16" r="3.5" />
        <path d="M10 32v-3a10 10 0 0 1 20 0v3H10ZM2 31v-2a7 7 0 0 1 7-7M38 31v-2a7 7 0 0 0-7-7" />
      </svg>
    );
  }
  if (name === "link") {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="m16 24-2 2a7 7 0 0 1-10-10l7-7a7 7 0 0 1 10 0M24 16l2-2a7 7 0 0 1 10 10l-7 7a7 7 0 0 1-10 0M14 20h12" />
      </svg>
    );
  }
  if (name === "spark") {
    return (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="m22 3-15 20h11l-1 14 16-22H21l1-12Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M5 34h31M9 29V19h6v10M19 29V11h6v18M29 29V5h6v24" />
      <path d="m8 13 9-5 8 1 9-6" />
    </svg>
  );
}

export default function MarketingPage() {
  return (
    <main className="p-marketing">
      <section className="p-marketing-hero" id="top">
        <ServiceLabel
          name="マーケティング部 Silicon Workerチーム"
          description="Protein（人）とSilicon（AI）で作るマーケティングチームサービス"
        />
        <ScrollReveal
          revealId="marketing-hero-layout"
          className="p-marketing-wrap p-marketing-hero__layout"
        >
          <div className="p-marketing-hero__copy">
            <p className="p-marketing-eyebrow">PwS MARKETING OFFICE</p>
            <h1>
              <span className="p-marketing-hero__headline-first">
                マーケティングチームを
              </span>
              <br />
              丸ごと御社へ。
            </h1>
            <p className="p-marketing-hero__lead">
              Protein Worker（人）とSilicon Workerが同じゴールを持つチームとして、
              戦略から制作・運用・改善までを一緒に回します。
            </p>
            <div className="p-marketing-hero__actions">
              <Link className="p-marketing-button" href="/contact?service=marketing">
                お問い合わせ <span aria-hidden="true">↗</span>
              </Link>
              <Link
                className="p-marketing-button p-marketing-button--secondary"
                href="#step-1"
              >
                サービスの流れを見る <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>

          <div
            className="p-marketing-hero__visual"
            aria-label="Protein Workerと4人のSilicon Workerが連携するマーケティングチーム"
            role="img"
          >
            <svg
              className="p-marketing-hero__connections"
              viewBox="0 0 560 460"
              fill="none"
              aria-hidden="true"
            >
              <path d="M280 230 130 96M280 230 430 96M280 230 130 364M280 230 430 364" />
              <circle cx="280" cy="230" r="162" />
            </svg>
            <div className="p-marketing-hero__hub">
              <span className="p-marketing-hero__hub-icon" aria-hidden="true">
                ✳
              </span>
              <strong>PwS</strong>
              <span>Marketing<br />Office</span>
            </div>
            {siliconWorkers.map((worker, index) => (
              <article
                className={`p-marketing-hero-member p-marketing-hero-member--${index + 1}`}
                key={worker.name}
              >
                <span className="p-marketing-hero-member__portrait">
                  <WorkerPortrait src={worker.image} name={worker.name} />
                  <Image
                    className="p-marketing-hero-member__badge"
                    src="/images/finance/sw-icon.webp"
                    alt="Silicon Worker"
                    width={300}
                    height={300}
                  />
                </span>
                <span className="p-marketing-hero-member__name">
                  {worker.name}
                </span>
                <span className="p-marketing-hero-member__role">
                  {worker.role}
                </span>
              </article>
            ))}
            <span className="p-marketing-hero__orbit p-marketing-hero__orbit--one" />
            <span className="p-marketing-hero__orbit p-marketing-hero__orbit--two" />
          </div>
        </ScrollReveal>
      </section>

      <section className="p-marketing-problem" aria-labelledby="marketing-problem-title">
        <ScrollReveal
          revealId="marketing-problem"
          className="p-marketing-wrap p-marketing-problem__layout"
        >
          <header className="p-marketing-problem__heading">
            <p className="p-marketing-problem__eyebrow">CHALLENGES</p>
            <h2 id="marketing-problem-title">
              マーケティング全体を回す人・チームがいない、ということはありませんか？
            </h2>
            <p className="p-marketing-problem__intro">
              マーケティングの課題は、単なる担当者不足だけではありません。
            </p>
            <p className="p-marketing-problem__lead">
              社内外に業務が分散し、必要な専門性を十分に確保できず、施策がバラバラになってしまう。
            </p>
          </header>

          <ol className="p-marketing-challenge-grid">
            {challenges.map((challenge, index) => (
              <li
                className={`p-marketing-challenge-card p-marketing-challenge-card--${challenge.tone}`}
                key={challenge.title}
              >
                <span className="p-marketing-challenge-card__icon">
                  <ChallengeIcon name={challenge.icon} />
                </span>
                <div className="p-marketing-challenge-card__content">
                  <h3>
                    <span className="p-marketing-challenge-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {challenge.title}
                  </h3>
                  <p>{challenge.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <span className="p-marketing-problem__down" aria-hidden="true">
            <svg viewBox="0 0 44 24" fill="none">
              <path d="M2 2h40L22 22 2 2Z" />
            </svg>
          </span>
        </ScrollReveal>
      </section>

      <section className="p-marketing-overview" aria-label="GOAL・課題・原因・解決">
        <ScrollReveal revealId="marketing-overview" className="p-marketing-wrap">
          <div className="p-marketing-overview__bridge">
            <p>
              だからこそ、戦略から制作・運用・分析・改善まで、
              マーケティング全体を一貫して動かすチームをつくる。
            </p>
            <span aria-hidden="true">▼</span>
          </div>
          <div className="p-marketing-overview__grid">
            <article className="p-marketing-overview-card p-marketing-overview-card--goal">
              <p className="p-marketing-overview-card__label">GOAL</p>
              <p>事業を成長させるために、この循環を回し続ける仕事。</p>
              <div
                className="p-marketing-loop"
                role="img"
                aria-label="考える、決める、作る、届ける、測る、学ぶ、次を考える循環"
              >
                <div className="p-marketing-loop__forward" aria-hidden="true">
                  <span className="p-marketing-loop__stage">考える</span>
                  <span className="p-marketing-loop__arrow">→</span>
                  <span className="p-marketing-loop__stage">決める</span>
                  <span className="p-marketing-loop__arrow">→</span>
                  <span className="p-marketing-loop__stage">作る</span>
                  <span className="p-marketing-loop__arrow">→</span>
                  <span className="p-marketing-loop__stage">届ける</span>
                </div>
                <div className="p-marketing-loop__turn" aria-hidden="true">
                  <span className="arrow-up">↑</span>
                  <span className="arrow-down">↓</span>
                </div>
                <div className="p-marketing-loop__return" aria-hidden="true">
                  <span className="p-marketing-loop__stage">次を考える</span>
                  <span className="p-marketing-loop__arrow">←</span>
                  <span className="p-marketing-loop__stage">学ぶ</span>
                  <span className="p-marketing-loop__arrow">←</span>
                  <span className="p-marketing-loop__stage">測る</span>
                </div>
              </div>
            </article>
            <span className="p-marketing-overview__arrow" aria-hidden="true">→</span>
            <article className="p-marketing-overview-card p-marketing-overview-card--issue">
              <p className="p-marketing-overview-card__label">課題</p>
              <p>マーケティング担当を一人採用すれば、マーケティング部はできるのでしょうか。</p>
              <p className="p-marketing-overview-card__detail">
                戦略／市場・顧客理解／SNS／Web広告／コンテンツ制作／分析……
              </p>
              <strong>すべてを一人で担うのは難しい。</strong>
            </article>
            <span className="p-marketing-overview__arrow" aria-hidden="true">→</span>
            <article className="p-marketing-overview-card p-marketing-overview-card--cause">
              <p className="p-marketing-overview-card__label">原因</p>
              <p>社長・営業・広報・外注先に仕事が分散。</p>
              <p>「SNSはやっている」「広告代理店もいる」「Web会社もいる」。それでも……</p>
              <strong>マーケティング全体を回す人・チームがいない。</strong>
            </article>
            <span className="p-marketing-overview__arrow" aria-hidden="true">→</span>
            <article className="p-marketing-overview-card p-marketing-overview-card--solution">
              <p className="p-marketing-overview-card__label">解決</p>
              <p>担当者ではなく、マーケティング部を。</p>
              <h2>
                <span>PwS</span>
                <span>Marketing Office</span>
              </h2>
              <p>Protein WorkerとSilicon Workerが一つのチームになり、戦略から改善まで一緒に回します。</p>
            </article>
          </div>
        </ScrollReveal>
      </section>

      <section className="p-marketing-step p-marketing-step--one" id="step-1">
        <ScrollReveal revealId="marketing-step-1" className="p-marketing-wrap">
          <div className="p-marketing-step__heading">
            <span className="p-marketing-step__number">STEP 1</span>
            <div>
              <h2>ゴールと仕事の流れを共有する</h2>
              <p>事業・商品・顧客・目標を共有し、ゴールと業務の流れを設計。</p>
            </div>
          </div>
          <div className="p-marketing-step-one__layout">
            <ol className="p-marketing-journey">
              {journey.map((stage, index) => (
                <li key={stage.title}>
                  <span className="p-marketing-journey__icon" aria-hidden="true">
                    {index === 1 ? (
                      <svg viewBox="0 0 32 32" fill="none">
                        <path d="M10.2 19.1a8 8 0 1 1 11.6 0c-1.1 1-1.8 2.2-2 3.4h-7.6c-.2-1.2-.9-2.4-2-3.4Z" />
                        <path d="M12.4 25.2h7.2M13.5 28h5M16 1.8v3M4.6 6.5l2.1 2.1m18.7-2.1-2.1 2.1M2 16h3m22 0h3" />
                      </svg>
                    ) : (
                      ["◎", "", "✎", "↗", "▥", "↻"][index]
                    )}
                  </span>
                  <strong>{stage.title}</strong>
                  <span>{stage.detail}</span>
                </li>
              ))}
            </ol>
            <p className="p-marketing-step-one__promise">
              役割が違っても、全員が流れを理解し、同じゴールへ。
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="p-marketing-step p-marketing-step--two" id="step-2">
        <ScrollReveal revealId="marketing-step-2" className="p-marketing-wrap">
          <div className="p-marketing-step__heading">
            <span className="p-marketing-step__number">STEP 2</span>
            <div>
              <h2>御社専用のマーケティングチームを編成</h2>
              <p>必要な役割を決め、Protein WorkerとSilicon Workerで編成。</p>
            </div>
          </div>
          <div className="p-marketing-team">
            <article className="p-marketing-team__protein">
              <p className="p-marketing-team__label">Protein Worker</p>
              <p className="p-marketing-team__intro">御社の経営者・営業・現場メンバー</p>
              <div className="p-marketing-team__protein-members">
                {proteinWorkers.map((worker) => (
                  <div className="p-marketing-team-protein-worker" key={worker.role}>
                    <WorkerPortrait src={worker.image} name={worker.role} />
                    <span>{worker.role}</span>
                  </div>
                ))}
              </div>
              <p className="p-marketing-team__responsibility">事業判断・顧客の声・進行統括</p>
            </article>
            <span className="p-marketing-team__plus" aria-hidden="true">＋</span>
            <article className="p-marketing-team__silicon">
              <p className="p-marketing-team__label">Silicon Worker｜名前と専門性を持つメンバー</p>
              <div className="p-marketing-team__workers">
                {siliconWorkers.map((worker) => (
                  <div className="p-marketing-team-worker" key={worker.name}>
                    <WorkerPortrait src={worker.image} name={worker.name} />
                    <strong>{worker.name}</strong>
                    <span>{worker.role}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </ScrollReveal>
      </section>

      <section className="p-marketing-step p-marketing-step--three" id="step-3">
        <ScrollReveal revealId="marketing-step-3" className="p-marketing-wrap">
          <div className="p-marketing-step__heading">
            <span className="p-marketing-step__number">STEP 3</span>
            <div>
              <h2>Protein WorkerとSilicon Workerで、実際の仕事を一緒に回す</h2>
              <p>営業現場の声から企画・経営判断へ。作って届け、結果を次の企画へつなげます。</p>
            </div>
          </div>
          <div className="p-marketing-scenes">
            {scenes.map((scene, index) => (
              <article className="p-marketing-scene" key={scene.title}>
                <h3 className={`p-marketing-scene__title p-marketing-scene__title--${index + 1}`}>
                  {scene.title}
                </h3>
                <ol className="p-marketing-chat">
                  {scene.messages.map((message, messageIndex) => (
                    <li
                      className={`p-marketing-chat__message p-marketing-chat__message--${message.kind}`}
                      key={`${message.person}-${messageIndex}`}
                    >
                      <Image
                        src={`/images/marketing/${message.kind === "protein" ? "pw" : "sw"}-outline-icon.webp`}
                        alt={`${message.role}のバッジ`}
                        width={44}
                        height={44}
                        className="p-marketing-chat__badge"
                      />
                      <div className="p-marketing-chat__content">
                        <p className="p-marketing-chat__byline">
                          <strong>{message.person}</strong>
                          <span>{message.role}</span>
                        </p>
                        <p className="p-marketing-chat__text">{message.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="p-marketing-step p-marketing-step--four" id="step-4">
        <ScrollReveal revealId="marketing-step-4" className="p-marketing-wrap">
          <div className="p-marketing-step__heading">
            <span className="p-marketing-step__number">STEP 4</span>
            <div>
              <h2>一緒に働き、フィードバックし合うほど、チームが育つ</h2>
              <p>売れた／売れなかったを、一緒に振り返る。</p>
            </div>
          </div>
          <div className="p-marketing-growth">
            <ol className="p-marketing-growth__conversation">
              <li>
                <WorkerPortrait src={siliconWorkers[0].image} name="健太" />
                <div>
                  <p className="p-marketing-growth__byline">健太｜Silicon Worker・市場／分析</p>
                  <p>問い合わせは増えた。でも商談化しなかった。</p>
                </div>
              </li>
              <li>
                <WorkerPortrait src={proteinWorkers[1].image} name="営業担当" />
                <div>
                  <p className="p-marketing-growth__byline">営業担当｜Protein Worker</p>
                  <p>営業では「導入の負担が心配」という声が。</p>
                </div>
              </li>
              <li>
                <WorkerPortrait src={siliconWorkers[1].image} name="美咲" />
                <div>
                  <p className="p-marketing-growth__byline">美咲｜Silicon Worker・企画／コンテンツ</p>
                  <p>じゃあ次は、導入の手順とサポートを伝えよう。</p>
                </div>
              </li>
            </ol>
            <div className="p-marketing-cycle">
              <span className="p-marketing-cycle__step p-marketing-cycle__step--top">▷ 実行</span>
              <span className="p-marketing-cycle__step p-marketing-cycle__step--right">▥ 結果</span>
              <span className="p-marketing-cycle__step p-marketing-cycle__step--bottom">⌕ 振り返り</span>
              <span className="p-marketing-cycle__step p-marketing-cycle__step--left">▱ 次の仕事</span>
              <p className="p-marketing-cycle__center">
                一緒に働くほど<br/>顧客への理解も<br/>提案も育つ。
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="p-marketing-values" id="value">
        <ScrollReveal revealId="marketing-values" className="p-marketing-wrap">
          <h2>このチームが提供する価値</h2>
          <div className="p-marketing-value-grid">
            {values.map((value) => (
              <article className="p-marketing-value-card" key={value.title}>
                <span className="p-marketing-value-card__icon">
                  <ValueIcon name={value.icon} />
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="p-marketing-contact" id="contact">
        <div className="p-marketing-contact__shape p-marketing-contact__shape--one" />
        <div className="p-marketing-contact__shape p-marketing-contact__shape--two" />
        <ScrollReveal
          revealId="marketing-contact"
          className="p-marketing-wrap p-marketing-contact__content"
        >
          <p>マーケ担当を、一人採用する。その前に。</p>
          <h2>マーケティング部をPwSに。</h2>
          <Link className="p-marketing-button p-marketing-button--contact" href="/contact?service=marketing">
            お問い合わせ <span aria-hidden="true">↗</span>
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
