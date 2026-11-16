import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./pw1.css";

export const metadata: Metadata = {
  title: "Pw1 コンセプト｜Silicon Worker for Accounting Firms",
  description:
    "先生のそばに、頼れる仲間がいる。会計士・税理士の先生とシリコンワーカーが、一緒に考え、一緒に働き、一緒に育つ会計事務所へ。",
  robots: { index: false, follow: false },
};

const teacherSpecialists = [
  { role: "財務会計", image: "財務会計.webp" },
  { role: "税務", image: "税務.webp" },
  { role: "IPO", image: "ipo.webp" },
  { role: "M&A", image: "m_and_a.webp" },
  { role: "内部統制", image: "内部統制.webp" },
  { role: "IT・業務", image: "it業務.webp" },
  { role: "BPR", image: "bpr.webp" },
  { role: "人事労務", image: "人事労務.webp" },
];

const teamChat = [
  {
    name: "先生",
    image: "会計士_税理士の先生.webp",
    text: (
      <>
        昨日の阪神、すごかったな！
        <br />
        さて、A社の件なんだけど…
      </>
    ),
  },
  {
    name: "税務SW",
    image: "税務.webp",
    text: (
      <>
        そこからですか先生😅
        <br />
        A社の件、どんな感じですか？
      </>
    ),
  },
  {
    name: "IT・業務SW",
    image: "it業務.webp",
    text: (
      <>
        それ、会計処理の前に
        <br />
        業務フローも見た方がよさそうです。
      </>
    ),
  },
  {
    name: "BPR SW",
    image: "bpr.webp",
    text: (
      <>
        私も見てみます！
        <br />
        一緒に整理しましょう。
      </>
    ),
  },
  {
    name: "先生",
    image: "会計士_税理士の先生.webp",
    text: (
      <>
        助かる！
        <br />
        うちならこの方向で考えよう。
      </>
    ),
  },
];

const experienceStages = [
  {
    title: "知っている",
    content: (
      <p>
        法令・会計基準・税務・IT
        <br />
        過去資料・一般的な知識
      </p>
    ),
  },
  {
    title: "分かってくる",
    content: (
      <ul>
        <li>この会社はこういう運用をしている</li>
        <li>この社長はここを大切にする</li>
        <li>前回、先生はこの論点をこう判断した</li>
        <li>この提案は現場に合わなかった　など</li>
      </ul>
    ),
  },
  {
    title: "その顧客を知っているチームになる",
    content: (
      <>
        <p>
          一緒に仕事をすればするほど、その顧客を知っている
          <br />
          頼れるチームになる。
        </p>
      </>
    ),
  },
];

const values = [
  {
    icon: "●",
    title: "ひとりで抱えなくていい",
    description: "専門外の相談も、まずチームで考えられる。",
  },
  {
    icon: "↗",
    title: "専門領域が広がる",
    description: "新しく何人も採用しなくても、多様な専門性をチームに持てる。",
  },
  {
    icon: "♥",
    title: "“うちの事務所らしさ”が育つ",
    description: "先生の考えや想いを共有し、同じ方向を向いて働く仲間になる。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m11 17 2 2a1.5 1.5 0 0 0 3-1 1.5 1.5 0 0 0 2-2 1.5 1.5 0 0 0 2-2l-6-6" />
        <path d="m14 8-2.5 2.5a1.7 1.7 0 0 1-2.4-2.4L12 5.2a3 3 0 0 1 3.5-.5l2 1M4 14l5 5a1.5 1.5 0 0 0 2-2M2 5l3-1 3 8-3 2-3-1M22 5l-3-1-3 8 3 2 3-1M6 6h5M18 13l2 1" />
      </svg>
    ),
    title: "顧客を知るほど、支援が深くなる",
    description: "仕事の経験が蓄積され、次の提案につながる。",
  },
];

const clientTeam = [
  {
    speech: (
      <>
        キャッシュ面、
        <br />
        一緒に見てみましょう。
      </>
    ),
    role: (
      <>
        財務会計
        <br />
        Silicon Worker
      </>
    ),
    image: "財務会計.webp",
  },
  {
    speech: (
      <>
        いいですね。
        <br />
        チームで考えましょう。
      </>
    ),
    role: (
      <>
        所長
        <br />
        (会計士・税理士)
      </>
    ),
    image: "会計士_税理士の先生.webp",
  },
  {
    speech: (
      <>
        税務面も
        <br />
        確認しておきますね。
      </>
    ),
    role: (
      <>
        税務
        <br />
        Silicon Worker
      </>
    ),
    image: "税務.webp",
  },
  {
    speech: (
      <>
        業務の進め方も、
        <br />
        一緒に整理しましょう。
      </>
    ),
    role: (
      <>
        業務・IT
        <br />
        Silicon Worker
      </>
    ),
    image: "it業務.webp",
  },
  {
    speech: (
      <>
        採用計画のシミュレーションもしてみましょう。
      </>
    ),
    role: (
      <>
        人事労務
        <br />
        Silicon Worker
      </>
    ),
    image: "人事労務.webp",
  },
];

const clientKnowledge = [
  { icon: "↗", text: "これまでの数字の推移" },
  { icon: "♥", text: <>社長が大切に<br />していること</> },
  { icon: "▤", text: <>過去の意思決定と<br />その背景</> },
  { icon: "●", text: <>会社の強み・課題・<br />現場の状況</> },
  {
    icon: "✦",
    text: (
      <>
        今取り組んでいること、これから
        <br />
        やりたいこと
      </>
    ),
  },
];

function StepHeading({
  step,
  title,
  tone = "",
}: {
  step: number;
  title: ReactNode;
  tone?: string;
}) {
  return (
    <header className="p-pw1-step-heading">
      <span className={`p-pw1-step-number ${tone}`.trim()}>STEP {step}</span>
      <h2>{title}</h2>
    </header>
  );
}

function PersonImage({
  image,
  className = "",
}: {
  image: string;
  className?: string;
}) {
  return (
    <img
      className={className}
      src={`/images/pw1/${image.replace(".webp", "-shoulders.webp")}`}
      alt={image.replace(".webp", "").replace("会計士_税理士の先生", "会計士・税理士の先生").replace("it業務", "IT・業務").replace("m_and_a", "M&A").replace("ipo", "IPO").replace("bpr", "BPR")}
      loading="lazy"
    />
  );
}

export default function Pw1Page() {
  return (
    <main className="p-pw1">
      <section className="p-pw1-section p-pw1-hero" data-section="01">
        <div className="p-pw1-wrap p-pw1-hero-layout">
          <div className="p-pw1-hero-copy">
            <p className="p-pw1-hand p-pw1-hero-aside">先生、ひとりじゃないよ。</p>
            <h1>
              先生のそばに、
              <br />
              頼れる仲間がいる。
            </h1>
            <p className="p-pw1-hero-lead">
              会計士・税理士の先生とシリコンワーカーが、一緒に考え、一緒に働き、一緒に育つ 会計事務所へ。
            </p>
            <p className="p-pw1-hero-description">
              会計・税務から、IPO・M&amp;A・IT・内部統制・人事労務まで。専門性を持つシリコンワーカーが、先生のチームメンバーとして、顧客の課題解決を支えます。
            </p>
            <p className="p-pw1-hand p-pw1-hero-note">
              もっと相談できる。
              <br />
              もっといい仕事を。
              <br />
              一緒に。
            </p>
          </div>
          <figure className="p-pw1-hero-visual">
            <div className="p-pw1-hero-team">
              <svg className="p-pw1-hero-connections" viewBox="0 0 600 400" preserveAspectRatio="none" fill="none" aria-hidden="true">
                <ellipse cx="310" cy="225" rx="225" ry="160" fill="currentColor" fillOpacity=".07" />
                <circle cx="505" cy="55" r="45" fill="currentColor" fillOpacity=".06" />
                <path d="M15 300 C150 390 430 385 590 280" stroke="currentColor" strokeOpacity=".18" strokeWidth="1.5" />
                <path d="M25 110 C180 10 420 20 575 115" stroke="currentColor" strokeOpacity=".12" strokeWidth="1.5" />
              </svg>
              <figure className="p-pw1-hero-teacher">
                <PersonImage image="会計士_税理士の先生.webp" />
                <figcaption className="p-pw1-hero-caption">会計士・税理士の先生</figcaption>
              </figure>
              {teacherSpecialists.map((specialist, index) => (
                <div className={`p-pw1-hero-specialist p-pw1-hero-specialist--${index + 1}`} key={specialist.role}>
                  <PersonImage image={specialist.image} />
                  <span>{specialist.role} SW</span>
                </div>
              ))}
            </div>
          </figure>
        </div>
      </section>

      <section className="p-pw1-intro" aria-labelledby="pw1-intro-heading">
        <div className="p-pw1-wrap p-pw1-intro-inner">
          <h2 id="pw1-intro-heading">顧客の相談は、会計・税務だけでは終わらない。</h2>
          <p>数字の先には、経営のさまざまな課題がある。</p>
          <p>
            IPO、M&amp;A、IT、内部統制、人事労務。
            <br />
            先生に寄せられる相談は、ますます幅広くなっています。
          </p>
          <p>でも、そのすべてに、ひとりで応える必要はありません。</p>
          <p className="p-pw1-intro-emphasis">先生の専門性に、仲間の専門性を重ねていく。</p>
          <p>そこから、新しい会計事務所のかたちが始まります。</p>
        </div>
      </section>

      <section
        className="p-pw1-section p-pw1-section--soft"
        data-section="02"
      >
        <div className="p-pw1-wrap">
          <h2 className="p-pw1-story-heading">「ひとりで応える」から、「チームで支える」へ。</h2>
          <div className="p-pw1-story-grid">
            <article className="p-pw1-story-card p-pw1-story-card--goal">
              <span className="p-pw1-story-icon" aria-hidden="true">
                ◎
              </span>
              <h2>GOAL</h2>
              <p>
                先生のそばに、
                <br />
                顧客の課題解決施策を
                <br />
                相談できるチームを。
              </p>
            </article>
            <article className="p-pw1-story-card p-pw1-story-card--issue">
              <span className="p-pw1-story-icon" aria-hidden="true">
                ?
              </span>
              <h2>課題</h2>
              <p>
                顧客の相談領域は広がる。
                <br />
                でも、すべてをひとりで
                <br />
                カバーするのは難しい。
                <br />
                専門人材の採用も難しく、コストもかかる。
              </p>
            </article>
            <article className="p-pw1-story-card p-pw1-story-card--cause">
              <span className="p-pw1-story-icon" aria-hidden="true">
                ⌕
              </span>
              <h2>原因</h2>
              <p>
                会計・税務だけでなく、IPO・M&amp;A・IT・内部統制・人事労務など、経営課題はつながっており、ひとつの専門領域だけでは解けない。
              </p>
            </article>
            <article className="p-pw1-story-card p-pw1-story-card--solution">
              <span className="p-pw1-story-icon" aria-hidden="true">
                ✦
              </span>
              <h2>解決</h2>
              <p>
                会計士・税理士の先生＋専門性を持つシリコンワーカーで、ひとつのチームをつくる。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="p-pw1-teacher-section" data-section="03">
        <div className="p-pw1-wrap">
          <div className="p-pw1-team-intro">
            <h2>先生と仲間が、ひとつのチームになるまで。</h2>
            <p>
              専門家SWとつながり、日々の相談を重ね、一緒に仕事をする。
              <br />
              その積み重ねが、顧客の「次」を考えるチームを育てます。
            </p>
          </div>
          <article className="p-pw1-teacher-step">
            <StepHeading step={1} title="先生のそばに、専門家の仲間を増やす" />
            <div className="p-pw1-step-layout">
              <div className="p-pw1-step-copy">
                <p>
                  一人の万能AIではありません。
                  <br />
                  それぞれの専門性を持つシリコンワーカーが、先生のチームメンバーとして働きます。
                </p>
              </div>
              <div className="p-pw1-step-diagram p-pw1-expert-team">
                <div className="p-pw1-expert-center">
                  <PersonImage image="会計士_税理士の先生.webp" />
                  <strong>
                    会計士・税理士の先生
                    <br />
                    <span>(Protein)</span>
                  </strong>
                </div>
                <div className="p-pw1-expert-list">
                  {teacherSpecialists.map((specialist, index) => (
                    <article key={`${specialist.role}-${index}`}>
                      <PersonImage image={specialist.image} />
                      <span>{specialist.role}</span>
                      <small>シリコン先生</small>
                    </article>
                  ))}
                </div>
                <p className="p-pw1-hand p-pw1-diagram-note">
                  それぞれの得意を、ひとつのチームに。
                </p>
              </div>
            </div>
          </article>

          <article className="p-pw1-teacher-step p-pw1-teacher-step--soft p-pw1-teacher-step--chat">
            <StepHeading
              step={2}
              title="同じチームだから、気軽に話し、想いも共有する"
              tone="p-pw1-step-number--orange"
            />
            <div className="p-pw1-step-layout">
              <div className="p-pw1-step-copy">
                <p>
                  シリコンワーカーは、仕事の指示だけでなく、日々の雑談や、先生の考え・事務所の方針も共有しながら、同じチームの仲間として働きます。
                </p>
                <p className="p-pw1-hand">
                  仕事の話も、雑談も、同じチームだから。
                </p>
              </div>
              <article className="p-pw1-step-diagram p-pw1-chat-card">
                <h3>
                  <span aria-hidden="true">◷</span>ある日の事務所チャット
                </h3>
                <ol className="p-pw1-chat-list">
                  {teamChat.map((message, index) => (
                    <li key={`${message.name}-${index}`}>
                      <PersonImage image={message.image} />
                      <strong>{message.name}</strong>
                      <p>{message.text}</p>
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          </article>

          <article className="p-pw1-teacher-step">
            <StepHeading
              step={3}
              title="顧客と一緒に仕事をして、経験を積む"
              tone="p-pw1-step-number--navy"
            />
            <div className="p-pw1-step-layout">
              <div className="p-pw1-step-copy">
                <p>
                  シリコンワーカー自身が、顧客とのやり取りや実際の案件に参加し、仕事を通じて経験を積みます。
                  <br />
                  一緒に働けば働くほど、その顧客を知っているチームになります。
                </p>
                <p className="p-pw1-hand">
                  仕事を重ねるほど、チームは強くなる。
                </p>
              </div>
              <ol className="p-pw1-step-diagram p-pw1-experience-grid">
                {experienceStages.map((stage, index) => (
                  <li key={stage.title}>
                    <span className="p-pw1-experience-number">{index + 1}</span>
                    <h3>{stage.title}</h3>
                    {stage.content}
                  </li>
                ))}
              </ol>
            </div>
          </article>

          <article className="p-pw1-teacher-step p-pw1-teacher-step--soft p-pw1-teacher-step--proposal">
            <StepHeading
              step={4}
              title="先生と一緒に、顧客の「次」を考える"
              tone="p-pw1-step-number--gold"
            />
            <div className="p-pw1-step-layout">
              <div className="p-pw1-step-copy">
                <p>
                  それぞれのシリコンワーカーが調査・分析・意見を出し合い、先生と一緒に、顧客にとっての最適な一手を考えます。
                </p>
                <p className="p-pw1-hand">
                  答えを出すだけじゃない。
                  <br />
                  先生と一緒に、未来をつくる。
                </p>
              </div>
              <article className="p-pw1-step-diagram p-pw1-proposal-card">
                <h3>こんな相談から、次の提案へ</h3>
                <ol>
                  <li>
                    <figure className="p-pw1-proposal-person"><PersonImage image="会計士_税理士の先生.webp" /><figcaption>先生</figcaption></figure>
                    <p>
                      A社、最近粗利が落ちてるんだよな…
                      <br />
                      次は何を提案しよう？
                    </p>
                  </li>
                  <li>
                    <figure className="p-pw1-proposal-person"><PersonImage image="財務会計.webp" /><figcaption>財務会計SW</figcaption></figure>
                    <p>商品別に見ると、○○の低下が大きいです。</p>
                  </li>
                  <li>
                    <figure className="p-pw1-proposal-person"><PersonImage image="it業務.webp" /><figcaption>IT・業務SW</figcaption></figure>
                    <p>販売プロセスにも課題がありそうです。</p>
                  </li>
                  <li>
                    <figure className="p-pw1-proposal-person"><PersonImage image="税務.webp" /><figcaption>税務SW</figcaption></figure>
                    <p>
                      この施策を取るなら、税務面で
                      <br />
                      見ておきたいポイントがあります。
                    </p>
                  </li>
                  <li>
                    <figure className="p-pw1-proposal-person"><PersonImage image="会計士_税理士の先生.webp" /><figcaption>先生</figcaption></figure>
                    <p>
                      なるほど。じゃあ次回の面談で
                      <br />
                      この方向で話してみよう！
                    </p>
                  </li>
                </ol>
              </article>
            </div>
          </article>
        </div>
      </section>

      <section
        className="p-pw1-section p-pw1-section--soft"
        data-section="04"
      >
        <div className="p-pw1-wrap">
          <h2 className="p-pw1-value-heading">
            このチームが、先生にもたらすもの
          </h2>
          <div className="p-pw1-value-grid">
            {values.map((value) => (
              <article key={value.title}>
                <span aria-hidden="true">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
          <div className="p-pw1-story-bridge">
            <p className="p-pw1-hand">
              一緒に考えよう。きっと、もっといい仕事ができる。
            </p>
            <p className="p-pw1-story-bridge-caption">会計士・税理士の、新しいチームのかたち。</p>
            <p className="p-pw1-story-bridge-lead">
              先生を支えるチームが、顧客をともに支えるチームへ。
              <br />
              日々の相談と仕事を重ね、会社の「これから」を一緒に考える存在に。
            </p>
            <span className="p-pw1-story-bridge-arrow" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section
        className="p-pw1-section p-pw1-client-section"
        data-section="05"
      >
        <div className="p-pw1-wrap">
          <div className="p-pw1-client-hero">
            <div className="p-pw1-client-copy">
              <p className="p-pw1-hand">
                数字から、
                <br />
                もっといい未来を、一緒に。
              </p>
              <h2>
                うちのこと、
                <br />
                そこまで知ってる会計事務所。
              </h2>
              <h3>会計事務所との会話、本決算の前だけになっていませんか？</h3>
              <p>
                記帳して、税務申告して、決算書をつくる。
                <br />
                もちろん、それも大切な仕事です。
                <br />
                でも、会社の数字をこれだけ見ている専門家が、
                <br />
                過去の数字を処理するだけって、もったいなくないですか？
              </p>
            </div>
            <div className="p-pw1-client-visual">
              <p className="p-pw1-hand p-pw1-client-visual-note">
                いろんな専門性がある。
                <br />
                だから、もっと話せる。
                <br />
                一緒に考えられる。
              </p>
              <div className="p-pw1-client-people">
                <article className="p-pw1-client-owner">
                  <p>
                    来期、人を増やしたいんだけど…
                  </p>
                  <PersonImage image="経営者.webp" />
                  <span>
                    経営者
                    <br />
                    (お客様)
                  </span>
                </article>
                {clientTeam.map((member, index) => (
                  <article key={`${member.image}-${index}`}>
                    {member.speech && <p>{member.speech}</p>}
                    <PersonImage image={member.image} />
                    <span>{member.role}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="p-pw1-section p-pw1-section--soft p-pw1-client-steps"
        data-section="06"
      >
        <div className="p-pw1-wrap">
          <article className="p-pw1-client-step">
            <StepHeading
              step={1}
              title="相談するも、気づいてくれるも。"
            />
            <p>
              もちろん、いつでもご相談ください。
              <br />
              そして、私たちからも、日々の数字を見て
              <br />
              気になることをお伝えします。
            </p>
            <div className="p-pw1-consultations">
              <article className="p-pw1-consultation-card">
                <h3>社長からの相談</h3>
                <div>
                  <PersonImage image="経営者.webp" />
                  <p>
                    最近、売上は
                    <br />
                    増えてるのに、
                    <br />
                    なんかお金が
                    <br />
                    残らないんだよね…
                  </p>
                </div>
              </article>
              <article className="p-pw1-consultation-card">
                <h3>事務所からのご提案</h3>
                <div>
                  <figure className="p-pw1-consultation-person">
                    <PersonImage image="財務会計.webp" />
                    <figcaption>財務会計<br />Silicon Worker</figcaption>
                  </figure>
                  <p>
                    社長、感覚値と残高の
                    <br />
                    違和感は問題です！
                    <br />
                    BS科目推移表と、
                    <br />
                    資金繰表を作りましょう！
                    <br />
                    今度、社長と弊所所長と
                    <br />
                    私でMTGさせて下さい。
                  </p>
                </div>
              </article>
            </div>
          </article>

          <article className="p-pw1-client-step">
            <StepHeading
              step={2}
              title="ひとつの相談を、いろんな専門性から考える。"
              tone="p-pw1-step-number--orange"
            />
            <p>
              先生のそばに、会計・税務だけでなく
              <br />
              IT・業務・人事・経営などの専門性を持った
              <br />
              Silicon Workerがいます。
            </p>
            <div className="p-pw1-expert-circle">
              <div className="p-pw1-expert-circle-center">
                <p>ひとつの相談を、チームで。</p>
                <PersonImage image="会計士_税理士の先生.webp" />
                <strong>
                  所長
                  <br />
                  (会計士・税理士)
                </strong>
              </div>
              <article>
                <p>キャッシュ面ではこう考えられます。</p>
                <PersonImage image="財務会計.webp" />
                <span>
                  財務会計
                  <br />
                  Silicon Worker
                </span>
              </article>
              <article>
                <p>税務面ではこちらの選択肢があります。</p>
                <PersonImage image="税務.webp" />
                <span>
                  税務
                  <br />
                  Silicon Worker
                </span>
              </article>
              <article>
                <p>この業務はこう改善できます。</p>
                <PersonImage image="it業務.webp" />
                <span>
                  業務・IT
                  <br />
                  Silicon Worker
                </span>
              </article>
              <article>
                <p>採用計画も合わせて考えましょう。</p>
                <PersonImage image="人事労務.webp" />
                <span>
                  人事労務
                  <br />
                  Silicon Worker
                </span>
              </article>
            </div>
            <p className="p-pw1-hand p-pw1-client-step-note">
              ひとつの相談を、チームで。<br />
              だから、より広く、より深く、考えられます。
            </p>
          </article>

          <article className="p-pw1-client-step">
            <StepHeading
              step={3}
              title="一緒に仕事をするほど、あなたの会社を知っているチームになる。"
              tone="p-pw1-step-number--navy"
            />
            <p>
              日々のやり取りや、これまでの相談・判断を通して、
              <br />
              あなたの会社のことをどんどん学び、理解していきます。
            </p>
            <ul className="p-pw1-knowledge-grid">
              {clientKnowledge.map((item, index) => (
                <li key={index}>
                  <span aria-hidden="true">{item.icon}</span>
                  <div>{item.text}</div>
                </li>
              ))}
            </ul>
            <p className="p-pw1-hand p-pw1-client-step-note">
              知るほどに、
              <br />
              一緒に考えられることが増えていく。
            </p>
          </article>

          <article className="p-pw1-client-step p-pw1-client-step--flow">
            <StepHeading
              step={4}
              title="だから、「次」が早く見つかる。"
              tone="p-pw1-step-number--gold"
            />
            <p>
              数字の変化から、まだ言葉になっていない
              <br />
              課題を見つけ出し、早めに一緒に考え、
              <br />
              次の打ち手をご提案します。
            </p>
            <ol className="p-pw1-next-flow">
              <li>
                <p>
                  数字の変化に気づく
                  <br />
                  (月次試算表のチェック)
                </p>
              </li>
              <li>
                <p>
                  気になることを共有する
                  <br />
                  (こちらからもご提案)
                </p>
              </li>
              <li>
                <p>
                  チームで考える
                  <br />
                  (会計・税務・業務・人事など)
                </p>
              </li>
              <li>
                <p>今のうちにできる対策を一緒に実行</p>
              </li>
              <li>
                <p>
                  本決算の前には、
                  <br />
                  もう来年度が見えている。
                </p>
              </li>
            </ol>
          </article>
        </div>
      </section>

      <section className="p-pw1-section p-pw1-closing" data-section="07">
        <div className="p-pw1-wrap">
          <div className="p-pw1-closing-copy">
            <p className="p-pw1-hand">
              過去をまとめるだけじゃない。
              <br />
              会社の「これから」を、一緒に考える。
            </p>
            <p>
              いつもの会計士・税理士の先生と、
              <br />
              その先生と一緒に働くSilicon Worker。
              <br />
              会計・税務の枠を超えて、会社の未来に寄り添うチームです。
            </p>
            <h2>うちのこと、そこまで知ってる会計事務所へ。</h2>
          </div>
          <div className="p-pw1-closing-visual">
            <svg className="p-pw1-cityscape" viewBox="0 0 1200 260" fill="none" aria-hidden="true">
              <g stroke="#8CACD9" strokeWidth="2" strokeLinejoin="round" opacity=".7">
                {[{x:40,y:119,w:54},{x:116,y:84,w:70},{x:210,y:139,w:62},{x:295,y:101,w:74},{x:392,y:68,w:80},{x:495,y:127,w:65},{x:585,y:95,w:84},{x:695,y:136,w:65},{x:785,y:74,w:80},{x:890,y:118,w:72},{x:985,y:88,w:76},{x:1085,y:130,w:62}].map(building => (
                  <g key={building.x}>
                    <path d={`M${building.x} 224V${building.y}h${building.w}V224`} />
                    {Array.from({length:Math.floor((208-building.y)/22)},(_,row) => [0,1].map(col => (
                      <path key={`${row}-${col}`} d={`M${building.x+12+col*(building.w-34)} ${building.y+20+row*22}h10`} strokeWidth="1.5" />
                    )))}
                  </g>
                ))}
                <path d="M0 224H1200" />
              </g>
              <g opacity=".65">
                {[{x:35,r:29},{x:160,r:34},{x:275,r:26},{x:425,r:32},{x:565,r:29},{x:720,r:35},{x:855,r:27},{x:995,r:34},{x:1160,r:30}].map(tree => (
                  <g key={tree.x}>
                    <path d={`M${tree.x} 242V192`} stroke="#9bb9a8" strokeWidth="2" />
                    <circle cx={tree.x-12} cy={202} r={tree.r*.75} fill="#dcebe2" />
                    <circle cx={tree.x+12} cy={200} r={tree.r*.8} fill="#c9dfd3" />
                    <circle cx={tree.x} cy={183} r={tree.r*.85} fill="#d4e6db" />
                  </g>
                ))}
                <path d="M0 246Q160 222 300 244T600 242T900 244T1200 240V260H0Z" fill="#e3efe7" />
              </g>
            </svg>
            <div className="p-pw1-closing-team">{[clientTeam[0], clientTeam[2], clientTeam[1], clientTeam[3], clientTeam[4]].map((member, index) => <article className={index === 2 ? "p-pw1-closing-teacher" : undefined} key={member.image}><PersonImage image={member.image} /><span>{member.role}</span></article>)}</div>
          </div>
          <footer className="p-pw1-closing-footer">
            <span>
              Silicon Worker <small>for Growing Companies</small>
            </span>
            <span>会計から、未来をともに。</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
