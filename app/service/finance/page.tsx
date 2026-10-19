import type { Metadata } from "next";
import Link from "next/link";
import "./finance.css";
import SupportSteps from "./SupportSteps";
import MonthlyChat from "./MonthlyChat";
import ServiceLabel from "@/components/ServiceLabel";

export const metadata: Metadata = {
  title: "財務経理Silicon Workerチーム",
  description:
    "Protein（人）とSilicon Worker（AI）が同じゴールを持つ、財務経理チームを設計します。月次を経営判断につなげるPwSのAI協働設計支援。",
  alternates: { canonical: "/finance" },
  openGraph: {
    title: "財務経理Silicon Workerチーム",
    description:
      "数字を作るだけで終わらない。Protein（人）とSilicon Worker（AI）が同じゴールを持つ財務経理チームへ。",
    url: "https://www.pwslab.jp/finance",
  },
};

const members = [
  {
    name: "高橋",
    role: "経理アシスタント",
    image: "/images/finance/経理アシスタント.webp",
    trait: ["几帳面で粘り強い", "抜け・漏れを放置しない"],
    work: "証憑の回収・整理、仕訳の登録・突合、未回収分の追跡と催促",
  },
  {
    name: "佐藤",
    role: "経理・分析担当",
    image: "/images/finance/経理分析担当.webp",
    trait: ["数字の違和感に敏感", "「なぜ？」を放置しない"],
    work: "予実差の検出、差異の原因分析、「なぜ」の掘り下げ",
  },
  {
    name: "鈴木",
    role: "財務・予測担当",
    image: "/images/finance/財務予測担当.webp",
    trait: ["この先を考える力", "未来まで見通す"],
    work: "予算・予測の更新、継続性の確認、見通しの試算",
  },
  {
    name: "渡部",
    role: "経理部長補佐",
    image: "/images/finance/経理部長補佐.webp",
    trait: ["全体を俯瞰し", "論点を整理する"],
    work: "論点の整理、経営会議資料のとりまとめ、判断に必要な情報の提示",
  },
];

export default function FinancePage() {
  // 要確認：正式サービス名、問い合わせ遷移先（/contact?service=finance）、公開用人物素材。
  return (
    <main className="p-fin">
      {/* FV｜ファーストビュー */}
      <section className="p-fin-hero p-fin-hero--remote" id="top">
        <ServiceLabel
          name={"財務経理\nSilicon Workerチーム"}
          description={
            "Protein（人）とSilicon（AI）で\n作る財務経理チームサービス"
          }
        />
        <div className="p-fin-inner p-fin-hero__inner">
          <div className="p-fin-hero__stage">
            <div className="p-fin-hero-team">
              <p className="p-fin-hero__team-heading">
                同じゴールを持つ財務経理チーム
              </p>
              <div className="p-fin-hero-network p-fin-hero-network--clean">
                <div className="p-fin-hero-network__goal">
                  <h1>
                    財務経理部に、
                    <br />
                    Silicon Workerという
                    <br />
                    <em>新しいメンバー</em>を。
                  </h1>
                </div>
                <article className="p-fin-hero-person p-fin-hero-person--protein">
                  <div className="p-fin-hero-person__portrait p-fin-hero-person__portrait--protein">
                    <img
                      src="/images/finance/経理担当-横顔.webp"
                      alt="経理担当 Proteinの人物イメージ"
                      width="180"
                      height="180"
                    />
                  </div>
                  <div className="p-fin-hero-person__label p-fin-hero-person__label--protein">
                    <img
                      className="p-fin-hero-person__badge"
                      src="/images/finance/pw-icon.webp"
                      alt="Protein Worker（人）"
                      width="300"
                      height="300"
                    />
                    <span className="p-fin-hero-person__role">経理担当</span>
                  </div>
                </article>

                <article className="p-fin-hero-person p-fin-hero-person--takahashi">
                  <div className="p-fin-hero-person__portrait">
                    <img
                      src="/images/finance/経理アシスタント-横顔.webp"
                      alt="高橋（Silicon Worker）"
                      width="180"
                      height="180"
                    />
                  </div>
                  <div className="p-fin-hero-person__label">
                    <img
                      className="p-fin-hero-person__badge"
                      src="/images/finance/sw-icon.webp"
                      alt="Silicon Worker（AI）"
                      width="300"
                      height="300"
                    />
                    <span className="p-fin-hero-person__role">
                      経理アシスタント <span>高橋</span>
                    </span>
                  </div>
                </article>

                <article className="p-fin-hero-person p-fin-hero-person--sato">
                  <div className="p-fin-hero-person__portrait">
                    <img
                      src="/images/finance/経理分析担当-右横顔.webp"
                      alt="佐藤（Silicon Worker）"
                      width="180"
                      height="180"
                    />
                  </div>
                  <div className="p-fin-hero-person__label">
                    <img
                      className="p-fin-hero-person__badge"
                      src="/images/finance/sw-icon.webp"
                      alt="Silicon Worker（AI）"
                      width="300"
                      height="300"
                    />
                    <span className="p-fin-hero-person__role">
                      経理・分析担当 <span>佐藤</span>
                    </span>
                  </div>
                </article>

                <article className="p-fin-hero-person p-fin-hero-person--finance-director">
                  <div className="p-fin-hero-person__portrait p-fin-hero-person__portrait--protein">
                    <img
                      src="/images/finance/財務経理部長-左横顔.webp"
                      alt="財務経理部長 Proteinの人物イメージ"
                      width="180"
                      height="180"
                    />
                  </div>
                  <div className="p-fin-hero-person__label p-fin-hero-person__label--protein">
                    <img
                      className="p-fin-hero-person__badge"
                      src="/images/finance/pw-icon.webp"
                      alt="Protein Worker（人）"
                      width="300"
                      height="300"
                    />
                    <span className="p-fin-hero-person__role">
                      財務経理部長
                    </span>
                  </div>
                </article>

                <article className="p-fin-hero-person p-fin-hero-person--watanabe">
                  <div className="p-fin-hero-person__portrait">
                    <img
                      src="/images/finance/経理部長補佐-横顔.webp"
                      alt="渡部（Silicon Worker）"
                      width="180"
                      height="180"
                    />
                  </div>
                  <div className="p-fin-hero-person__label">
                    <img
                      className="p-fin-hero-person__badge"
                      src="/images/finance/sw-icon.webp"
                      alt="Silicon Worker（AI）"
                      width="300"
                      height="300"
                    />
                    <span className="p-fin-hero-person__role">
                      経理部長補佐 <span>渡部</span>
                    </span>
                  </div>
                </article>
              </div>
            </div>
            <div className="p-fin-hero__copy">
              <p className="p-fin-hero__lead">
                月次を締める。数字を読み解く。
                <br className="u-xs" />
                この先を予測し、経営判断につなげる。
                <br />
                <span className="p-fin-hero__worker--protein">
                  Protein Worker（プロテイン／人）
                </span>
                と<br className="u-sp" />
                <span className="p-fin-hero__worker--silicon">
                  Silicon Worker（AI）
                </span>
                が同じゴールを持つ
                <br />
                <strong className="p-fin-hero__team-message">
                  財務経理チームを、つくります。
                </strong>
              </p>
              <div className="p-fin-actions">
                <Link
                  className="p-fin-button p-fin-button--primary"
                  href="/contact?service=finance"
                >
                  Silicon Workerの配属を相談する <span>↗</span>
                </Link>
                <a
                  className="p-fin-button p-fin-button--outline"
                  href="#support"
                >
                  導入プロセスを見る <span>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション1｜ワーカーの紹介｜WORKER TYPES */}
      <section
        className="p-fin-worker-types p-fin-section--navy"
        aria-labelledby="finance-worker-types-title"
      >
        <div className="p-fin-inner">
          <p className="p-fin-label p-fin-worker-types__label">
            PROTEIN WORKER / SILICON WORKERとは？
          </p>
          <div className="p-fin-worker-types__comparison">
            <div className="p-fin-worker-types__worker p-fin-worker-types__worker--protein">
              <div className="p-fin-worker-types__symbol">
                人<span>ひと</span>
              </div>
              <div className="p-fin-worker-types__description">
                <h2>Protein Worker</h2>
                <p>タンパク質でできた労働力</p>
              </div>
            </div>
            <div className="p-fin-worker-types__connection">
              <img
                className="p-fin-worker-types__badge"
                src="/images/finance/pw-outline-icon.webp"
                alt=""
                width="300"
                height="300"
              />
              <svg
                className="p-fin-worker-types__arrows"
                viewBox="0 0 100 56"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className="p-fin-worker-types__arrow--protein"
                  d="M6 17H94M86 9L94 17L86 25"
                />
                <path
                  className="p-fin-worker-types__arrow--silicon"
                  d="M94 39H6M14 31L6 39L14 47"
                />
              </svg>
              <img
                className="p-fin-worker-types__badge"
                src="/images/finance/sw-outline-icon.webp"
                alt=""
                width="300"
                height="300"
              />
            </div>
            <div className="p-fin-worker-types__worker p-fin-worker-types__worker--silicon">
              <div className="p-fin-worker-types__symbol">AI</div>
              <div className="p-fin-worker-types__description">
                <h2>Silicon Worker</h2>
                <p>半導体でできた労働力</p>
              </div>
            </div>
          </div>
          <p className="p-fin-worker-types__statement">
            同じチームの一員として、
            <br className="u-sp" />
            役割を持って働く。
          </p>
        </div>
      </section>

      {/* セクション2｜課題｜PROBLEM */}
      <section
        className="p-fin-section p-fin-problem p-fin-section--soft"
        id="problem"
      >
        <div className="p-fin-inner">
          <div className="p-fin-problem__top">
            <div className="p-fin-problem__copy">
              <p className="p-fin-label">PROBLEM</p>
              <h2>
                「月次を締める」で
                <br />
                終わってませんか。
              </h2>
              <p className="p-fin-lead">
                月次を締めることで精一杯。
                <br />
                数字を「作る」だけで、「使う」まで手が回らない。
              </p>
            </div>
            <div className="p-fin-problem__visual" aria-hidden="true">
              <img
                src="/images/finance/problem-worker-cutout.webp"
                alt=""
                width="520"
                height="540"
              />
            </div>
          </div>
          <div className="p-fin-problem__intro">
            <h3 className="p-fin-border__heading">
              <span>
                財務経理の仕事は、
                <br className="u-sp" />
                数字を確定した先にも
                <br className="u-xs" />
                続きます。
              </span>
            </h3>
            <p className="p-fin-border__lead">
              月次の期限があるL1・L2に追われ、L3〜L5が「余裕があればやる仕事」になっていませんか。
            </p>
          </div>
          <div className="p-fin-problem__groups">
            {[
              {
                title: "数字を「作る」",
                description: "今、手一杯になっている領域",
                start: 1,
                modifier: "record",
                items: ["証憑から\n事実を記録", "数字を確定"],
              },
              {
                title: "数字を「使う」",
                description: "余裕があればする、後回しになりがちな領域",
                start: 3,
                modifier: "use",
                items: [
                  "数字の意味を\n読み解く",
                  "影響を把握し\n予測する",
                  "経営判断に\nつなげる",
                ],
              },
            ].map((group) => (
              <div
                className={`p-fin-problem__group p-fin-problem__group--${group.modifier}`}
                key={group.start}
              >
                <h4>{group.title}</h4>
                <p>{group.description}</p>
                <ol
                  className="p-fin-ladder"
                  start={group.start}
                  aria-label={group.title}
                >
                  {group.items.map((label, index) => (
                    <li className="p-fin-ladder__item" key={label}>
                      <span className="p-fin-ladder__level">
                        L{group.start + index}
                      </span>
                      <span className="p-fin-ladder__text">{label}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <p className="p-fin-problem__note">
            ※財務経理の仕事を、記録から経営判断までの5段階（L1〜L5）で整理しています。
          </p>
          <blockquote className="p-fin-quote">
            「なぜ？」を考える時間より、
            <br />
            「なぜ？」を考えられる
            <br className="p-fin-mobile" />
            状態にする時間の方が長い。
          </blockquote>
          <div className="p-fin-line"></div>
          <p className="p-fin-bridge">
            目指すのは、
            <br className="u-sp" />
            早く月次を締めること
            <br className="u-xs" />
            だけではありません。
            <br />
            経営が、まだ意味のある
            <br className="u-xs" />
            タイミングで
            <br />
            <span className="p-fin-emphasis">
              数字を見て判断できる
              <br className="u-xs" />
              財務経理
            </span>
            です。
          </p>
        </div>
      </section>

      {/* セクション3｜解決策・メンバー紹介｜SOLUTION */}
      <section className="p-fin-section p-fin-solution" id="solution">
        <div className="p-fin-inner">
          <p className="p-fin-label">SOLUTION</p>
          <h2>
            そこで、
            <br className="u-xs" />
            貴社の財務経理部に
            <br />
            <span>Silicon Worker</span>
            <br className="u-xs" />
            という
            <br />
            新しいメンバーを。
          </h2>
          <p className="p-fin-lead">
            貴社の財務経理部に、Silicon Workerが配属されます。
            <br />
            既存のメンバーとSilicon Workerが、
            <strong className="p-fin-solution__emphasis">
              ひとつのチームとして一緒に働きます。
            </strong>
          </p>
          <p className="p-fin-solution__bridge">
            Protein（人）とSilicon
            Worker（AI）が役割を分担しながら、Problemで示したL1〜L5の仕事全体とゴールを共有。
            <br />
            数字を「作る」で止めず、「
            <strong className="p-fin-solution__emphasis">
              読み解く・予測する・経営判断につなげる
            </strong>
            」までを一つのチームで目指します。
          </p>
          <div
            className="p-fin-solution__visuals"
            aria-label="同じチームと月次の協働イメージ"
          >
            <div className="p-fin-team-visual">
              <img
                className="p-fin-team-visual__image"
                src="/images/finance/one-team.webp"
                alt="人とAIがひとつのチームで働くイメージ"
                width="1930"
                height="815"
              />
              <div className="p-fin-team-visual__overlay">
                <div className="p-fin-team-visual__icons">
                  <img
                    className="p-fin-team-visual__badge"
                    src="/images/finance/pw-outline-icon.webp"
                    alt="Protein Worker"
                    width="300"
                    height="300"
                  />
                  <span className="p-fin-team-visual__plus" aria-hidden="true">
                    ＋
                  </span>
                  <img
                    className="p-fin-team-visual__badge"
                    src="/images/finance/sw-outline-icon.webp"
                    alt="Silicon Worker"
                    width="300"
                    height="300"
                  />
                </div>
                <p className="p-fin-team-visual__title">One Team</p>
              </div>
            </div>
            <p className="p-fin-team-description">
              ProteinとSilicon
              Workerが、互いの役割を活かして同じゴールに向かうチームです。
              <strong>
                数字を「作る」から、
                <br className="u-xs" />
                数字で「次を決める」へ。
              </strong>
            </p>
            <div className="p-fin-solution__members" id="members">
              <h3 className="p-fin-border__heading">
                <span>配属されるSilicon Worker</span>
              </h3>
              <p className="p-fin-border__lead">
                貴社の状況に合わせて、役割を持つメンバーを設計・配属します。
              </p>
              <div className="p-fin-member-grid">
                {members.map((member) => (
                  <article className="p-fin-member-card" key={member.name}>
                    <div className="p-fin-member-card__avatar">
                      <img
                        src={member.image}
                        alt={`${member.name}（Silicon Worker）の人物イメージ`}
                        width="76"
                        height="76"
                      />
                      <img
                        className="p-fin-member-card__badge"
                        src="/images/finance/sw-outline-icon.webp"
                        alt="Silicon Worker"
                        width="32"
                        height="32"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-fin-member-card__profile">
                      <h3>{member.name}</h3>
                      <h4>{member.role}</h4>
                      <p className="p-fin-member-card__traits">
                        {member.trait.map((trait) => (
                          <span key={trait}>{trait}</span>
                        ))}
                      </p>
                    </div>
                    <ul className="p-fin-member-card__tasks">
                      {member.work.split("、").map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <p className="p-fin-members__note">
                ※実際の導入ですべての企業へこの4名をセット配属するわけではありません。貴社の状況に合わせて必要なSilicon
                Workerを選び、役割・人数・担当範囲を設計します。
              </p>
            </div>
            <div
              className="p-fin-timeline"
              aria-label="ProteinとSilicon Workerが協働する月次業務のイメージ"
            >
              <div>
                <h3 className="p-fin-border__heading">
                  <span>同じ月次を、同じチームで。</span>
                </h3>
                <p className="p-fin-border__lead">
                  数字をつくる仕事から、読み解き、次の判断へ。ProteinとSilicon
                  Workerが役割を分担しながら、一緒に進めます。
                </p>
              </div>
              <ol className="p-fin-timeline__track">
                {[
                  {
                    phase: "01",
                    time: "月初",
                    title: "データ取込",
                    people: ["protein"],
                    detail: "月次のスタート",
                  },
                  {
                    phase: "02",
                    time: "収集・整理",
                    title: "証憑の回収・整理",
                    people: ["protein", "silicon"],
                    detail: "未回収を確認",
                  },
                  {
                    phase: "03",
                    time: "月次締め",
                    title: "数字を確定",
                    people: ["protein", "silicon"],
                    detail: "締めへの影響を共有",
                  },
                  {
                    phase: "04",
                    time: "読み解く",
                    title: "差異分析・「なぜ？」の追及",
                    people: ["silicon"],
                    detail: "変化の背景を探る",
                  },
                  {
                    phase: "05",
                    time: "見通す",
                    title: "予測の更新",
                    people: ["silicon"],
                    detail: "先行きへの影響を整理",
                  },
                  {
                    phase: "06",
                    time: "次の判断へ",
                    title: "経営会議・論点の整理",
                    people: ["protein", "silicon"],
                    detail: "判断材料につなげる",
                  },
                ].map((step) => (
                  <li className="p-fin-timeline__step" key={step.phase}>
                    <span className="p-fin-timeline__phase">
                      <span className="p-fin-timeline__number">
                        {step.phase}
                      </span>
                      <span>{step.time}</span>
                    </span>
                    <span className="p-fin-timeline__title">{step.title}</span>
                    <div
                      className="p-fin-timeline__markers"
                      aria-label={step.people
                        .map((person) =>
                          person === "protein" ? "Protein" : "Silicon Worker",
                        )
                        .join("・")}
                    >
                      {step.people.map((person) => (
                        <img
                          key={person}
                          className="p-fin-timeline__icon"
                          src={`/images/finance/${person === "protein" ? "pw" : "sw"}-icon.webp`}
                          alt={
                            person === "protein"
                              ? "Protein Worker"
                              : "Silicon Worker"
                          }
                          width="32"
                          height="32"
                        />
                      ))}
                    </div>
                    <span className="p-fin-meta">{step.detail}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <p className="p-fin-solution__footnote">
            ※L1〜L5は財務経理の仕事の5段階です。下の6工程はチームの月次ワークフローと役割分担のイメージで、実際の担当範囲は個別に設計します。
          </p>
        </div>
      </section>

      {/* セクション4｜業務の進め方｜WORKING */}
      <section className="p-fin-section" id="working">
        <div className="p-fin-inner p-fin-working__inner">
          <p className="p-fin-label">WORKING</p>
          <h2>
            実際に、
            <br className="u-xs" />
            こんなふうに
            <br />
            一緒に働きます。
          </h2>
          <p className="p-fin-lead">
            ProteinとSilicon
            Workerが役割を分担し、数字を次の判断へつなげる働き方のイメージです。
          </p>
          <div className="p-fin-scene">
            <h3>
              <span>SCENE 01</span>月次締め ― 証憑を集め、数字を確定する
            </h3>
            <MonthlyChat />
          </div>
          <div className="p-fin-scene">
            <h3>
              <span>SCENE 02</span>数字を読み解き、次の打ち手を考える
            </h3>
            <MonthlyChat channel="予実分析" />
          </div>
          <p className="p-fin-example-note">
            ※上記の会話・数値は構想例であり、導入実績や成果を示すものではありません。
          </p>
        </div>
      </section>

      {/* セクション5｜成長｜GROWTH */}
      <section className="p-fin-section p-fin-section--soft" id="growth">
        <div className="p-fin-inner">
          <p className="p-fin-label">GROWTH</p>
          <h2>
            一緒に働き、
            <br className="u-sp" />
            フィードバック
            <br className="u-xs" />
            し合う。
            <br />
            チームが育つ。
          </h2>
          <p className="p-fin-lead">
            日々の仕事の中で得た気づきやフィードバック。ProteinとSilicon
            Workerが学び合うことで、チームの仕事はもっとよくなる。
          </p>
          <h3 className="p-fin-border__heading">
            <span>振り返りから、次の仕事の進め方が変わる。</span>
          </h3>
          <div className="p-fin-growth-layout">
            <div className="p-fin-growth-cycle-wrap">
              <svg
                className="p-fin-growth-cycle-ring"
                viewBox="0 0 100 100"
                aria-hidden="true"
                fill="none"
              >
                {[0, 90, 180, 270].map((angle) => (
                  <g key={angle} transform={`rotate(${angle} 50 50)`}>
                    <path d="M74.66 14.78 A43 43 0 0 1 85.22 25.34" />
                    <path d="M80.47 23.79 L85.22 25.34 L85.38 20.34" />
                  </g>
                ))}
              </svg>
              <div className="p-fin-growth-cycle-center">
                <img
                  src="/images/finance/growth.webp"
                  alt=""
                  width="800"
                  height="453"
                  loading="lazy"
                />
                <p>GROWTH</p>
              </div>
              <ol
                className="p-fin-growth-cycle"
                aria-label="チームの仕事と振り返りの循環"
              >
                <li>
                  <span className="p-fin-meta">STEP 1</span>
                  <span>一緒に仕事する</span>
                </li>
                <li>
                  <span className="p-fin-meta">STEP 2</span>
                  <span>
                    振り返る
                    <br />
                    フィードバック
                  </span>
                </li>
                <li>
                  <span className="p-fin-meta">STEP 3</span>
                  <span>
                    次の仕事の
                    <br />
                    仕方が変わる
                  </span>
                </li>
                <li>
                  <span className="p-fin-meta">STEP 4</span>
                  <span>
                    また一緒に
                    <br />
                    仕事する
                  </span>
                </li>
              </ol>
            </div>
            <div className="p-fin-growth-pair">
              <article className="p-fin-growth-pair__pro">
                <div className="p-fin-growth-pair__header">
                  <img
                    className="p-fin-growth-pair__icon"
                    src="/images/finance/pw-icon.webp"
                    alt="Protein Worker"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                  <div>
                    <span className="p-fin-growth-pair__name">
                      Protein Worker
                    </span>
                    <span className="p-fin-growth-pair__title">
                      伝え方が育つ
                    </span>
                  </div>
                </div>
                <p>
                  「Silicon
                  Workerへ何を伝えれば、より良い仕事になるか」を、一緒に働くなかで理解し、情報共有や役割分担を見直していきます。
                </p>
              </article>
              <article className="p-fin-growth-pair__sil">
                <div className="p-fin-growth-pair__header">
                  <img
                    className="p-fin-growth-pair__icon"
                    src="/images/finance/sw-icon.webp"
                    alt="Silicon Worker"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                  <div>
                    <span className="p-fin-growth-pair__name">
                      Silicon Worker
                    </span>
                    <span className="p-fin-growth-pair__title">
                      蓄積が仕事に返る
                    </span>
                  </div>
                </div>
                <p>
                  日々の仕事で得た経験と、Proteinからのフィードバックをもとに、ナレッジや判断事例を更新し、次の仕事の進め方に反映します。
                </p>
              </article>
            </div>
          </div>
          <p className="p-fin-growth-closing">
            ProteinとSilicon Workerが
            <br className="u-xs" />
            <span>学び合うほど</span>、
            <br className="u-sp" />
            チームの仕事は
            <br className="u-xs" />
            もっとよくなります。
          </p>
        </div>
      </section>

      {/* セクション6｜導入効果｜VALUE */}
      <section className="p-fin-section p-fin-value" id="value">
        <div className="p-fin-inner">
          <div className="p-fin-value__heading">
            <p className="p-fin-label">VALUE</p>
            <h2>
              財務経理の仕事は、
              <br />
              ここまで変わる。
            </h2>
            <p className="p-fin-lead">導入を通じて目指す、4つの変化。</p>
          </div>
          <div className="p-fin-value-grid">
            <article>
              <h3>
                早期化で
                <br className="u-sp" />
                終わらない
              </h3>
              <p>締めた数字を、経営判断につなげる。</p>
            </article>
            <article>
              <h3>
                「なぜ？」まで
                <br className="u-tb" />
                辿り着ける
              </h3>
              <p>準備仕事に追われず、数字の意味を見る。</p>
            </article>
            <article>
              <h3>
                誰もやれていなかった
                <br />
                仕事を日常にする
              </h3>
              <p>L3〜L5を「余裕があれば」から通常業務へ。</p>
            </article>
            <article>
              <h3>
                一緒に働くほど、
                <br />
                チームが育つ
              </h3>
              <p>振り返りを通じ、翌月の仕事の進め方を見直す。</p>
            </article>
          </div>
        </div>
      </section>

      {/* セクション7｜導入支援｜SUPPORT */}
      <section className="p-fin-section" id="support">
        <div className="p-fin-inner">
          <p className="p-fin-label">SUPPORT</p>
          <h2>
            PwSが、配属から
            <br />
            定着まで伴走します。
          </h2>
          <p className="p-fin-lead">
            PwS共通の4段階フロー。Silicon
            WorkerだけでなくProtein側も、新しい同僚と働くための準備を整えます。
          </p>
          <SupportSteps />
        </div>
      </section>

      {/* セクション8｜よくある質問｜FAQ */}
      <section className="p-fin-section p-fin-section--soft" id="faq">
        <div className="p-fin-inner p-fin-inner--narrow">
          <p className="p-fin-label">FAQ</p>
          <h2>よくあるご質問</h2>
          {[
            {
              question: "どのSilicon Workerを配属するかは、どう決めますか？",
              answer:
                "貴社の業務を可視化し、課題・体制・業務の流れを確認したうえで、必要なSilicon Workerを選定します。役割・人数・担当範囲・Proteinとの連携方法まで、貴社に合わせて設計します。",
            },
            {
              question:
                "今使っている会計システムや業務フローは、そのまま使えますか？",
              answer:
                "現在のシステムや業務フローを確認したうえで、Silicon Workerがどこで、どのように一緒に働くかを設計します。新しいシステムへの一律の入れ替えを前提としたサービスではありません。",
            },
            {
              question: "Silicon Workerに、どこまで仕事を任せられますか？",
              answer:
                "業務の流れを整理したうえで、Silicon Workerが担う仕事と、Proteinによる判断・確認が必要な仕事を設計します。実際に一緒に働きながら、役割や担当範囲を見直していくこともできます。",
            },
            {
              question:
                "Silicon Workerは、どうやって当社のことを理解するのですか？",
              answer:
                "配属前に「Silicon Worker研修」を行います。企業理念や財務経理部の目的、業務フロー、利用システム、判断基準、過去事例など、仕事に必要な貴社の文脈を共有します。\n人が会社を知らずに働けないように、Silicon Workerも、会社を知らずには働けません。",
            },
            {
              question: "一緒に働く社員側にも、準備やAIの知識が必要ですか？",
              answer:
                "PwSでは、Protein側にも「新しい同僚との働き方研修」を行います。AIの操作方法を覚えることが目的ではありません。どんな情報を共有するか、判断が必要なときにどう連携するか、どうフィードバックするかなど、Silicon Workerとチームで働くための準備を一緒に行います。",
            },
            {
              question: "配属した後も、PwSに相談できますか？",
              answer:
                "はい。配属して終わりではなく、実際の仕事で得た気づきやフィードバックをもとに、ナレッジの更新、役割・担当範囲の見直し、判断事例の蓄積、Proteinとの連携改善などを支援します。必要に応じて、Silicon Workerの追加・再配置も検討します。",
            },
          ].map(({ question, answer }) => (
            <details className="p-fin-faq-item" key={question}>
              <summary>
                {question}
                <span>＋</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* セクション9｜お問い合わせ｜CONTACT */}
      <section className="p-fin-contact" id="contact">
        <div className="p-fin-inner">
          <p className="p-fin-contact__eyecatch">
            財務経理部に、新しいメンバーを。
          </p>
          <h2>
            数字を「作る」だけで
            <br className="u-sp" />
            終わらない。
            <br />
            数字で「次を決める」
            <br className="u-sp" />
            財務経理チームへ。
          </h2>
          <p>
            貴社の仕事を一緒に見ながら、
            <br className="u-sp" />
            どんなSilicon Workerが必要か、
            <br className="u-xs" />
            一緒に考えます。
            <br />
            まずはご相談ください。
          </p>
          <Link
            className="p-fin-button p-fin-button--warm"
            href="/contact?service=finance"
          >
            Silicon Workerの
            <br className="u-xs" />
            配属を相談する <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
