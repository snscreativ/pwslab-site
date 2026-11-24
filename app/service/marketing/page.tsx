import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceLabel from "@/components/ServiceLabel";
import WorkerIntroduction from "@/components/WorkerIntroduction";
import "@/styles/service-common.css";
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

// STEP 3のチャット編集場所：title＝場面名、person＝名前、role＝肩書き、text＝発言、image＝顔写真。
// kindは人ならprotein、Silicon Workerならsilicon（バッジと配色に使用）。
const scenes = [
  {
    title: "Scene 01｜顧客の声から、次に売るものを考える",
    messages: [
      {
        person: "営業担当",
        image: "/images/marketing/プロテイン_営業.webp?v=20261102",
        role: "",
        kind: "protein",
        text: "最近「導入後、どう使うの？」と聞かれるんだ。",
      },
      {
        person: "健太",
        image: "/images/marketing/健太_市場顧客分析.webp?v=20261102",
        role: "市場／分析",
        kind: "silicon",
        text: "Webでも導入事例の閲覧が増えています。検討中の方は「使った後」を知りたいのかも。",
      },
      {
        person: "美咲",
        image: "/images/marketing/美咲_企画コンテンツ.webp?v=20261102",
        role: "企画／コンテンツ",
        kind: "silicon",
        text: "商品の説明を増やすより、「導入後の一日」を見せる企画にしませんか？",
      },
      {
        person: "経営者",
        image: "/images/marketing/プロテイン_経営者.webp?v=20261102",
        role: "",
        kind: "protein",
        text: "それ、営業でも使えるね。今月やってみよう。",
      },
    ],
  },
  {
    title: "Scene 02｜作って、届けて、売れたかを見る",
    messages: [
      {
        person: "陽菜",
        image: "/images/marketing/陽菜_web導線.webp?v=20261102",
        role: "Web／導線",
        kind: "silicon",
        text: "記事と相談ページを作りました。導線も変更します。",
      },
      {
        person: "翔太",
        image: "/images/marketing/翔太_広告集客.webp?v=20261102",
        role: "広告／集客",
        kind: "silicon",
        text: "広告も新しい訴求に。業種別に反応を見ます。",
      },
      {
        person: "健太",
        image: "/images/marketing/健太_市場顧客分析.webp?v=20261102",
        role: "市場／分析",
        kind: "silicon",
        text: "相談は増えましたが、製造業の商談化率は低いです。",
      },
      {
        person: "営業担当",
        image: "/images/marketing/プロテイン_営業.webp?v=20261102",
        role: "",
        kind: "protein",
        text: "製造業は導入負荷を気にしてる。説明不足かも。",
      },
      {
        person: "美咲",
        image: "/images/marketing/美咲_企画コンテンツ.webp?v=20261102",
        role: "企画／コンテンツ",
        kind: "silicon",
        text: "では次は、「導入までの流れ」を見せましょう。",
      },
    ],
  },
];

// STEP 2の人物画像表示。写真・名前は各セクションの使用箇所で編集します。
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

export default function MarketingPage() {
  return (
    <main className="p-marketing">
      <section className="p-marketing-hero" id="top">
        <ServiceLabel
          name={"マーケティング部 \nSilicon Workerチーム"}
          description={
            "Protein（人）とSilicon（AI）で作る\nマーケティングチームサービス"
          }
        />
        <ScrollReveal
          revealId="marketing-hero-layout"
          className="p-marketing-wrap p-marketing-hero__layout"
        >
          <div className="p-marketing-hero__copy">
            <h1>
              <span className="p-marketing-hero__headline-first">
                マーケティング
                <br className="u-xs" />
                チームを、
              </span>
              <br />
              <span className="p-marketing-hero__headline-last">
                丸ごと御社へ。
              </span>
            </h1>
            <p className="p-marketing-hero__lead">
              Protein Worker（人）とSilicon
              Workerが同じゴールを持つチームとして、
              戦略から制作・運用・改善までを一緒に回します。
            </p>
            <div className="p-marketing-hero__actions">
              <Link
                className="c-service-button c-service-button--primary"
                href="/contact?service=marketing"
              >
                お問い合わせ{" "}
                <span className="c-service-button__icon" aria-hidden="true">
                  ↗
                </span>
              </Link>
              <Link
                className="c-service-button c-service-button--outline"
                href="#step-1"
              >
                サービスの流れを見る{" "}
                <span className="c-service-button__icon" aria-hidden="true">
                  ↓
                </span>
              </Link>
            </div>
          </div>

          <div className="p-marketing-hero__visual">
            <Image
              className="p-marketing-hero__image"
              src="/images/marketing/pws-marketing-team-fv-image.webp"
              alt="人とSilicon Workerが協働するマーケティングチーム"
              width={1752}
              height={897}
              sizes="(max-width: 760px) 100vw, (max-width: 1100px) 600px, 50vw"
              priority
            />
          </div>
        </ScrollReveal>
      </section>

      <WorkerIntroduction />

      <section
        className="p-marketing-problem"
        aria-labelledby="marketing-problem-title"
      >
        <ScrollReveal
          revealId="marketing-problem"
          className="p-marketing-wrap p-marketing-problem__layout"
        >
          <header className="p-marketing-problem__heading">
            <p className="p-marketing-eyebrow">CHALLENGES</p>
            <h2 className="p-marketing-title" id="marketing-problem-title">
              マーケティング全体を
              <br />
              回す<span>人</span>・<span>チーム</span>
              <br className="u-xs" />
              はいますか？
            </h2>
            <p className="p-marketing-problem__lead">
              マーケティングの課題は、単なる担当者不足だけではありません。
              <br />
              社内外に業務が分散し、必要な専門性を十分に確保できず、施策がバラバラになってしまう。
            </p>
          </header>

          <ul className="p-marketing-challenge-grid">
            {/* 担当者不足：アイコン・見出し・説明文 */}
            <li className="p-marketing-challenge-card">
              <div className="p-marketing-challenge-card__heading">
                <span className="p-marketing-challenge-card__icon">
                  <svg
                    viewBox="0 0 56 56"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <g strokeDasharray="4 4">
                      <circle cx="28" cy="16" r="11" />
                      <path d="M28 31c-12 0-21 9-21 19h42c0-10-9-19-21-19Z" />
                    </g>
                  </svg>
                </span>
                <h3>担当者不足</h3>
              </div>
              <p>やりたい施策はあるのに、専任の担当者を確保できない。</p>
            </li>
            {/* 業務の分散：アイコン・見出し・説明文 */}
            <li className="p-marketing-challenge-card">
              <div className="p-marketing-challenge-card__heading">
                <span className="p-marketing-challenge-card__icon">
                  <svg
                    viewBox="0 0 56 56"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="16" cy="12" r="7" />
                    <circle cx="40" cy="12" r="7" />
                    <circle cx="16" cy="44" r="7" />
                    <path d="M16 19v18m0-10h14c6 0 10-3 10-8" />
                  </svg>
                </span>
                <h3>業務の分散</h3>
              </div>
              <p>
                社長・営業・広報・外注先などに仕事が分かれ、全体が見えにくい。
              </p>
            </li>
            {/* 専門性の不足：アイコン・見出し・説明文 */}
            <li className="p-marketing-challenge-card">
              <div className="p-marketing-challenge-card__heading">
                <span className="p-marketing-challenge-card__icon">
                  <svg
                    viewBox="0 0 56 56"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M28 15C20 9 12 8 5 11v34c8-3 16-2 23 4 7-6 15-7 23-4V11c-7-3-15-2-23 4Zm0 0v34" />
                  </svg>
                </span>
                <h3>専門性の不足</h3>
              </div>
              <p>戦略・SNS・Web・広告・分析など、必要なスキルがそろわない。</p>
            </li>
            {/* 施策がつながらない：アイコン・見出し・説明文 */}
            <li className="p-marketing-challenge-card">
              <div className="p-marketing-challenge-card__heading">
                <span className="p-marketing-challenge-card__icon">
                  <svg
                    viewBox="-4 -4 64 64"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="m30 20 10-10a9 9 0 0 1 13 13L43 33a9 9 0 0 1-10 2M26 36 16 46A9 9 0 0 1 3 33l10-10a9 9 0 0 1 10-2" />
                    <path d="m17 5 2 6M9 11l5 4m23 30 2 6m3-10 5 4" />
                  </svg>
                </span>
                <h3>施策がつながらない</h3>
              </div>
              <p>
                企画・制作・運用・分析・改善が分断され、全体の成果につながりにくい。
              </p>
            </li>
          </ul>
        </ScrollReveal>
      </section>

      <section className="p-marketing-overview__bridge">
        <p>
          だからこそ、戦略から
          <br className="u-sp" />
          制作・運用・分析・改善まで、
          <br />
          マーケティング全体を
          <br className="u-sp" />
          一貫して動かすチームをつくる。
        </p>
      </section>

      <section
        className="p-marketing-overview"
        aria-labelledby="marketing-overview-title"
      >
        <ScrollReveal
          revealId="marketing-overview"
          className="p-marketing-wrap"
        >
          <p className="p-marketing-eyebrow">WHY</p>
          <h2 className="p-marketing-title" id="marketing-overview-title">
            なぜ、
            <br className="u-xs" />
            マーケティングには
            <br className="u-xl" />
            「チーム」が
            <br className="u-xs" />
            必要なのか？
          </h2>
          <div className="p-marketing-overview__story">
            <div
              className="p-marketing-overview__goal"
              aria-labelledby="marketing-goal-title"
            >
              <h3
                className="p-marketing-border__heading"
                id="marketing-goal-title"
              >
                <span>
                  マーケティングは、
                  <br className="u-sp" />
                  <span className="p-marketing-border__heading--em">
                    回し続ける
                  </span>
                  ことが大切。
                </span>
              </h3>
              <p className="p-marketing-border__lead">
                事業を成長させるためには、戦略から改善までの循環を止めずに動かす必要があります。
              </p>
              <div className="p-marketing-overview__goal-layout">
                {/* 循環図：アイコンと文字は各項目で編集。「届ける」は右側へ分岐。 */}
                <div className="p-marketing-loop">
                  <svg
                    className="p-marketing-loop__arrows"
                    viewBox="0 0 800 440"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M242.38 73.28 A205 150 0 0 1 327.62 73.28 M320.09 76.15 L327.62 73.28 L321.32 68.25" />
                    <path
                      d="M437.34 119.63 A205 150 0 0 1 479.97 173.65 M473.47 168.87 L479.97 173.65 L480.78 165.63"
                      transform="translate(0 -10)"
                    />
                    <path
                      d="M479.97 266.35 A205 150 0 0 1 437.34 320.37 M440.25 312.85 L437.34 320.37 L445.30 319.06"
                      transform="translate(0 10)"
                    />
                    <path d="M327.62 366.72 A205 150 0 0 1 242.38 366.72 M249.91 363.85 L242.38 366.72 L248.68 371.75" />
                    <path
                      d="M132.66 320.37 A205 150 0 0 1 90.03 266.35 M96.53 271.13 L90.03 266.35 L89.22 274.37"
                      transform="translate(0 10)"
                    />
                    <path
                      d="M90.03 173.65 A205 150 0 0 1 132.66 119.63 M129.75 127.15 L132.66 119.63 L124.70 120.94"
                      transform="translate(0 -10)"
                    />
                    <path
                      className="p-marketing-loop__accent"
                      d="M550 220H645m-7-5 7 5-7 5"
                    />
                  </svg>
                  <ol
                    className="p-marketing-loop__items"
                    aria-label="マーケティングの循環"
                  >
                    <li className="p-marketing-loop__item p-marketing-loop__item--think">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M12 23c0-3-4-5-4-9a8 8 0 0 1 16 0c0 4-4 6-4 9ZM13 26h6m-5 3h4" />
                        <path
                          className="p-marketing-loop__accent"
                          d="M16 1v2M3 5l2 2m22 0 2-2M1 14h3m24 0h3"
                        />
                      </svg>
                      <span>考える</span>
                    </li>
                    <li className="p-marketing-loop__item p-marketing-loop__item--decide">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <rect x="7" y="6" width="20" height="24" rx="2" />
                        <path d="M12 6V3h10v3m-4 9h5m-5 8h5" />
                        <path
                          className="p-marketing-loop__accent"
                          d="m10 14 2 2 3-4m-5 9 2 2 3-4"
                        />
                      </svg>
                      <span>決める</span>
                    </li>
                    <li className="p-marketing-loop__item p-marketing-loop__item--create">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M7 21 22 6l5 5-15 15Zm12-12 5 5M9.5 23.5l12-12" />
                        <path
                          className="p-marketing-loop__accent"
                          d="m7 21-2 7 7-2"
                        />
                      </svg>
                      <span>作る</span>
                    </li>
                    <li className="p-marketing-loop__item p-marketing-loop__item--deliver">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M3 12 20 6v18L3 18Zm4 8 2 8h4l-3-7M20 11h3v8h-3" />
                        <path
                          className="p-marketing-loop__accent"
                          d="M25 5l3-3M26 12l4-1M26 18l4 1M25 25l3 3"
                        />
                      </svg>
                      <span>届ける</span>
                    </li>
                    <li className="p-marketing-loop__item p-marketing-loop__item--measure">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M4 28V21h5v7m5 0V17h5v11m5 0V12h5v16" />
                        <path
                          className="p-marketing-loop__accent"
                          d="m3 11 10-6 7 2 8-5"
                        />
                      </svg>
                      <span>測る</span>
                    </li>
                    <li className="p-marketing-loop__item p-marketing-loop__item--learn">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M16 8C11 4 6 4 2 6v22c5-2 10-1 14 2 4-3 9-4 14-2V6c-4-2-9-2-14 2Zm0 0v22" />
                        <path
                          className="p-marketing-loop__accent"
                          d="M6 12q3-0.5 6 1M6 18q3-0.5 6 1M20 13q3-1.5 6-1M20 19q3-1.5 6-1"
                        />
                      </svg>
                      <span>学ぶ</span>
                    </li>
                    <li className="p-marketing-loop__item p-marketing-loop__item--next">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          className="p-marketing-loop__accent"
                          d="M5 15a11 11 0 0 1 20-6m0-6v6h-6"
                        />
                        <path d="M27 17a11 11 0 0 1-20 6m0 6v-6h6" />
                      </svg>
                      <span>次を考える</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div
              className="p-marketing-overview__challenge"
              aria-labelledby="marketing-challenge-title"
            >
              <header className="p-marketing-overview__section-heading">
                <h3
                  className="p-marketing-border__heading"
                  id="marketing-challenge-title"
                >
                  <span>
                    でも、その
                    <span className="p-marketing-border__heading--em">
                      すべてを一人で
                    </span>
                    <br className="u-sp" />
                    担えますか？
                  </span>
                </h3>
              </header>
              <div className="p-marketing-overview__challenge-grid">
                <article className="p-marketing-overview-card p-marketing-overview-card--issue">
                  <h4 className="p-marketing-overview-card__label">課題</h4>
                  <p>
                    マーケティング担当を一人採用すれば、マーケティング部はできるのでしょうか。
                  </p>
                  <Image
                    className="p-marketing-overview__challenge-image"
                    src="/images/marketing/marketing-issue.webp"
                    alt="マーケティングのさまざまな業務を一人で担う課題"
                    width={1535}
                    height={1024}
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                  <strong>すべてを一人で担うのは難しい。</strong>
                </article>
                <article className="p-marketing-overview-card p-marketing-overview-card--cause">
                  <h4 className="p-marketing-overview-card__label">原因</h4>
                  <p>社長・営業・広報・外注先に仕事が分散。</p>
                  <Image
                    className="p-marketing-overview__challenge-image"
                    src="/images/marketing/marketing-cause.webp"
                    alt="社長・営業・広報・外注先にマーケティングの仕事が分散している状態"
                    width={1536}
                    height={1024}
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                  <p>
                    「SNSはやっている」「広告代理店もいる」「Web会社もいる」。それでも……
                  </p>
                  <strong>
                    マーケティング全体を
                    <br className="u-xl" />
                    回す人・チームがいない。
                  </strong>
                </article>
              </div>
              <p className="p-marketing-overview__challenge-copy">
                必要なのは、 個々の活動を
                <br className="u-xs" />
                一つの目標につなげ、
                <br />
                <span className="p-marketing-marker">
                  マーケティング全体を動かす
                  <br className="u-sp" />
                  チーム
                </span>
                です。
              </p>
            </div>

            <div
              className="p-marketing-overview__solution"
              aria-labelledby="marketing-solution-title"
            >
              <header className="p-marketing-overview__section-heading">
                <h3
                  className="p-marketing-border__heading"
                  id="marketing-solution-title"
                >
                  <span>
                    担当者ではなく、
                    <br className="u-sp" />
                    <span className="p-marketing-border__heading--em">
                      マーケティング部を。
                    </span>
                  </span>
                </h3>
              </header>
              <div className="p-marketing-overview__solution-layout">
                <article className="p-marketing-overview-card--solution">
                  <h4 className="p-marketing-overview-card__brand">
                    PwS Marketing Office
                  </h4>
                  <p>
                    Protein WorkerとSilicon Workerが一つのチームになり、
                    <br />
                    戦略から改善まで一緒に回します。
                  </p>
                </article>
                <div className="p-marketing-overview__solution-copy">
                  <p>
                    戦略の検討から制作・運用・分析・改善まで一貫して支援し、次に取り組むべきことを明確にしながら、継続的な改善につなげます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section
        className="p-marketing-process"
        aria-labelledby="marketing-process-title"
      >
        <div className="p-marketing-process__heading p-marketing-wrap">
          <p className="p-marketing-eyebrow">HOW IT WORKS</p>
          <h2 className="p-marketing-title" id="marketing-process-title">
            PwS Marketing Officeは、
            <br />
            こうしてチームをつくり、
            <br className="u-sp-600" />
            育てます。
          </h2>
        </div>
        {/* STEP全体：番号と縦線を共通の親要素で管理。 */}
        <div className="p-marketing-process__timeline">
          <div className="p-marketing-step p-marketing-step--one" id="step-1">
            <div className="p-marketing-step__number">
              <span>STEP</span>
              <span>01</span>
            </div>
            <ScrollReveal
              revealId="marketing-step-1"
              className="p-marketing-step__content"
            >
              <div className="p-marketing-step__heading">
                <div>
                  <h3>
                    ゴールと仕事の流れを
                    <br className="u-xs" />
                    共有する
                  </h3>
                  <p>
                    事業・商品・顧客・目標を共有し、ゴールと業務の流れを設計。
                  </p>
                </div>
              </div>
              <div className="p-marketing-step-one__layout">
                {/* STEP 1の仕事の流れ：各項目のアイコン・見出し・説明をここで編集。 */}
                <ol className="p-marketing-journey">
                  <li>
                    <span
                      className="p-marketing-journey__icon"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 32 32" fill="none" focusable="false">
                        <circle cx="15" cy="18" r="11" />
                        <circle cx="15" cy="18" r="6" />
                        <path
                          className="p-marketing-journey__accent"
                          d="M15 18 28 5M24 9V4l4 1 1 4h-5"
                        />
                      </svg>
                    </span>
                    <h4>戦略</h4>
                    <span>誰に・何を</span>
                  </li>
                  <li>
                    <span
                      className="p-marketing-journey__icon"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 32 32" fill="none" focusable="false">
                        <path d="M12 23c0-3-4-5-4-9a8 8 0 0 1 16 0c0 4-4 6-4 9Z" />
                        <path d="M13 26h6m-5 3h4" />
                        <path
                          className="p-marketing-journey__accent"
                          d="M16 1v2M3 5l2 2m22 0 2-2M1 14h3m24 0h3"
                        />
                      </svg>
                    </span>
                    <h4>企画</h4>
                    <span>何を仕掛ける</span>
                  </li>
                  <li>
                    <span
                      className="p-marketing-journey__icon"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 32 32" fill="none" focusable="false">
                        <path d="M7 21 22 6l5 5-15 15Zm12-12 5 5M9.5 23.5l12-12" />
                        <path
                          className="p-marketing-journey__accent"
                          d="m7 21-2 7 7-2"
                        />
                      </svg>
                    </span>
                    <h4>制作</h4>
                    <span>形にする</span>
                  </li>
                  <li>
                    <span
                      className="p-marketing-journey__icon"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 32 32" fill="none" focusable="false">
                        <path d="M5 28v-5h4v5Zm9 0V18h4v10Zm9 0V12h4v16Z" />
                        <path
                          className="p-marketing-journey__accent"
                          d="M4 16C13 14 20 9 27 3m-6 0h6v6"
                        />
                      </svg>
                    </span>
                    <h4>運用</h4>
                    <span>届ける</span>
                  </li>
                  <li>
                    <span
                      className="p-marketing-journey__icon"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 32 32" fill="none" focusable="false">
                        <rect x="3" y="4" width="26" height="19" rx="2" />
                        <path d="M12 23v6m8-6v6M9 29h14" />
                        <path
                          className="p-marketing-journey__accent"
                          d="M9 18v-5m7 5v-8m7 8V9"
                        />
                      </svg>
                    </span>
                    <h4>分析</h4>
                    <span>反応を測る</span>
                  </li>
                  <li>
                    <span
                      className="p-marketing-journey__icon"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 32 32" fill="none" focusable="false">
                        <path
                          className="p-marketing-journey__accent"
                          d="M5 15a11 11 0 0 1 20-6m0-6v6h-6"
                        />
                        <path d="M27 17a11 11 0 0 1-20 6m0 6v-6h6" />
                      </svg>
                    </span>
                    <h4>改善</h4>
                    <span>次を考える</span>
                  </li>
                </ol>
                <p className="p-marketing-step-one__promise">
                  役割が違っても、
                  <br className="u-sp" />
                  全員が流れを理解し、
                  <br className="u-xs" />
                  <span>同じゴールへ。</span>
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="p-marketing-step p-marketing-step--two" id="step-2">
            <div className="p-marketing-step__number">
              <span>STEP</span>
              <span>02</span>
            </div>
            <ScrollReveal
              revealId="marketing-step-2"
              className="p-marketing-step__content"
            >
              <div className="p-marketing-step__heading">
                <div>
                  <h3>
                    御社専用の
                    <br className="u-sp" />
                    マーケティングチーム
                    <br className="u-xs" />
                    を編成
                  </h3>
                  <p>
                    必要な役割を決め、Protein WorkerとSilicon Workerで編成。
                  </p>
                </div>
              </div>
              <div className="p-marketing-team">
                <div className="p-marketing-team__partners">
                  <article className="p-marketing-team__protein">
                    <Image
                      className="p-marketing-team__badge"
                      src="/images/marketing/pw-outline-icon.webp"
                      alt=""
                      width={300}
                      height={300}
                    />
                    <h4 className="p-marketing-team__label">Protein Worker</h4>
                    <p className="p-marketing-team__intro">
                      御社の経営者・営業・現場メンバー
                    </p>
                    <div className="p-marketing-team__protein-members">
                      {/* 経営者：写真・担当 */}
                      <div className="p-marketing-team-protein-worker">
                        <WorkerPortrait
                          src="/images/marketing/プロテイン_経営者.webp?v=20261102"
                          name="経営者"
                        />
                        <span>経営者</span>
                      </div>
                      {/* 営業：写真・担当 */}
                      <div className="p-marketing-team-protein-worker">
                        <WorkerPortrait
                          src="/images/marketing/プロテイン_営業.webp?v=20261102"
                          name="営業"
                        />
                        <span>営業</span>
                      </div>
                      {/* 現場：写真・担当 */}
                      <div className="p-marketing-team-protein-worker">
                        <WorkerPortrait
                          src="/images/marketing/プロテイン_現場.webp?v=20261102"
                          name="現場"
                        />
                        <span>現場</span>
                      </div>
                    </div>
                    <p className="p-marketing-team__responsibility">
                      事業判断・顧客の声・進行統括
                    </p>
                  </article>
                  <span className="p-marketing-team__plus" aria-hidden="true">
                    <svg viewBox="0 0 32 32" focusable="false">
                      <path d="M8 16h16M16 8v16" />
                    </svg>
                  </span>
                  <article className="p-marketing-team__silicon">
                    <Image
                      className="p-marketing-team__badge"
                      src="/images/marketing/sw-outline-icon.webp"
                      alt=""
                      width={300}
                      height={300}
                    />
                    <h4 className="p-marketing-team__label">Silicon Worker</h4>
                    <p className="p-marketing-team__intro">
                      名前と専門性を持つメンバー
                    </p>
                    <div className="p-marketing-team__workers">
                      {/* 健太：写真・名前・担当 */}
                      <div className="p-marketing-team-worker">
                        <WorkerPortrait
                          src="/images/marketing/健太_市場顧客分析.webp?v=20261102"
                          name="健太"
                        />
                        <span className="p-marketing-team-worker__name">
                          健太
                        </span>
                        <span>
                          市場・顧客
                          <br className="u-sp-600" />
                          ／分析
                        </span>
                      </div>
                      {/* 美咲：写真・名前・担当 */}
                      <div className="p-marketing-team-worker">
                        <WorkerPortrait
                          src="/images/marketing/美咲_企画コンテンツ.webp?v=20261102"
                          name="美咲"
                        />
                        <span className="p-marketing-team-worker__name">
                          美咲
                        </span>
                        <span>
                          企画／
                          <br className="u-sp-600" />
                          コンテンツ
                        </span>
                      </div>
                      {/* 陽菜：写真・名前・担当 */}
                      <div className="p-marketing-team-worker">
                        <WorkerPortrait
                          src="/images/marketing/陽菜_web導線.webp?v=20261102"
                          name="陽菜"
                        />
                        <span className="p-marketing-team-worker__name">
                          陽菜
                        </span>
                        <span>Web／導線</span>
                      </div>
                      {/* 翔太：写真・名前・担当 */}
                      <div className="p-marketing-team-worker">
                        <WorkerPortrait
                          src="/images/marketing/翔太_広告集客.webp?v=20261102"
                          name="翔太"
                        />
                        <span className="p-marketing-team-worker__name">
                          翔太
                        </span>
                        <span>広告／集客</span>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="p-marketing-team__integration">
                  <svg
                    viewBox="0 0 400 48"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M1 1 200 46 399 1" />
                  </svg>
                  <p className="p-marketing-step-one__promise">
                    それぞれの<span>強み</span>を、 <br className="u-xs" />
                    <span>チームの力</span>に。
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="p-marketing-step p-marketing-step--three" id="step-3">
            <div className="p-marketing-step__number">
              <span>STEP</span>
              <span>03</span>
            </div>
            <ScrollReveal
              revealId="marketing-step-3"
              className="p-marketing-step__content"
            >
              <div className="p-marketing-step__heading">
                <div>
                  <h3>
                    Protein Workerと
                    <br className="u-sp" />
                    Silicon Workerで、
                    <br className="u-tb" />
                    実際の仕事を一緒に回す
                  </h3>
                  <p>
                    営業現場の声から企画・経営判断へ。作って届け、結果を次の企画へつなげます。
                  </p>
                </div>
              </div>
              {/* チャットの文章は、このファイル上部の scenes で編集します。 */}
              <div className="p-marketing-scenes">
                {scenes.map((scene) => (
                  <article className="p-marketing-scene" key={scene.title}>
                    <h4 className="p-marketing-scene__title">{scene.title}</h4>
                    <ol className="p-marketing-chat">
                      {scene.messages.map((message, messageIndex) => (
                        <li
                          className={`p-marketing-chat__message p-marketing-chat__message--${message.kind}`}
                          key={`${message.person}-${messageIndex}`}
                        >
                          <span className="p-marketing-chat__avatar">
                            <Image
                              src={message.image}
                              alt=""
                              width={48}
                              height={48}
                              className="p-marketing-chat__portrait"
                              unoptimized
                            />
                            <Image
                              src={`/images/marketing/${message.kind === "protein" ? "pw" : "sw"}-icon.webp`}
                              alt=""
                              width={22}
                              height={22}
                              className="p-marketing-chat__badge"
                            />
                          </span>
                          <div className="p-marketing-chat__content">
                            <p className="p-marketing-chat__byline">
                              <span className="p-marketing-chat__name">
                                {message.person}
                              </span>
                              {message.role && <span>{message.role}</span>}
                            </p>
                            <p className="p-marketing-chat__text">
                              {message.text}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="p-marketing-step p-marketing-step--four" id="step-4">
            <div className="p-marketing-step__number">
              <span>STEP</span>
              <span>04</span>
            </div>
            <ScrollReveal
              revealId="marketing-step-4"
              className="p-marketing-step__content"
            >
              <div className="p-marketing-step__heading">
                <div>
                  <h3>
                    一緒に働き、
                    <br className="u-sp" />
                    フィードバック
                    <br className="u-sp" />
                    し合うほど、 チームが育つ
                  </h3>
                  <p>売れた／売れなかったを、一緒に振り返る。</p>
                </div>
              </div>
              {/* STEP 4のメッセージと漫画：文章・画像はここで編集。 */}
              <div className="p-marketing-growth">
                <div className="p-marketing-growth__copy">
                  <p className="p-marketing-growth__catch">
                    一緒に働くほど、
                    <br />
                    顧客への理解も、
                    <br />
                    提案も育つ。
                  </p>
                  <p className="p-marketing-growth__description">
                    実行して、結果を見て、振り返る。その気づきが次の仕事を変えていく。
                  </p>
                </div>
                {/* 600px以下では縦3コマの画像へ切り替える。 */}
                <picture>
                  <source
                    media="(max-width: 600px)"
                    srcSet="/images/marketing/fb-image-speech-sp.webp"
                    width={809}
                    height={1942}
                  />
                  <Image
                    className="p-marketing-growth__image"
                    src="/images/marketing/fb-image-speech.webp"
                    alt="一緒に働き、結果を振り返りながらチームが育つ様子を描いた漫画"
                    width={1524}
                    height={975}
                    sizes="(max-width: 1100px) 100vw, 60vw"
                  />
                </picture>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="p-marketing-values" id="value">
        <ScrollReveal revealId="marketing-values" className="p-marketing-wrap">
          <p className="p-marketing-eyebrow">VALUE</p>
          <h2 className="p-marketing-title">
            このチームが
            <br className="u-xs" />
            提供する価値
          </h2>
          <div className="p-marketing-value-grid">
            {/* 価値：一人に、全部を背負わせない（見出し・説明文） */}
            <article className="p-marketing-value-card">
              <h3>
                一人に、全部を
                <br />
                背負わせない
              </h3>
              <p>必要な専門性をチームで分担。</p>
            </article>
            {/* 価値：バラバラの施策がつながる（見出し・説明文） */}
            <article className="p-marketing-value-card">
              <h3>
                バラバラの
                <br />
                施策がつながる
              </h3>
              <p>戦略から改善まで、同じゴールへ。</p>
            </article>
            {/* 価値：考えるだけで、終わらない（見出し・説明文） */}
            <article className="p-marketing-value-card">
              <h3>
                考えるだけで、
                <br />
                終わらない
              </h3>
              <p>作る・届ける・測るまで回す。</p>
            </article>
            {/* 価値：改善が、止まらない（見出し・説明文） */}
            <article className="p-marketing-value-card">
              <h3>
                改善が、
                <br />
                止まらない
              </h3>
              <p>施策と結果を次の打ち手に。</p>
            </article>
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
          <h2 className="p-marketing-title">マーケティング部をPwSに。</h2>
          <Link
            className="c-service-button c-service-button--primary"
            href="/contact?service=marketing"
          >
            お問い合わせ{" "}
            <span className="c-service-button__icon" aria-hidden="true">
              ↗
            </span>
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
