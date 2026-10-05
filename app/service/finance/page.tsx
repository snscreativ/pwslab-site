import type { Metadata } from "next";
import Link from "next/link";
import "./finance.css";
import WorkingChatReveal from "./WorkingChatReveal";
import SupportSteps from "./SupportSteps";

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
  { name: "高橋", role: "経理アシスタント", image: "/images/finance/経理アシスタント.png", trait: <>几帳面で粘り強い<br />抜け・漏れを放置しない</>, work: "証憑の回収・整理、仕訳の登録・突合、未回収分の追跡と催促" },
  { name: "佐藤", role: "経理・分析担当", image: "/images/finance/経理分析担当.png", trait: <>数字の違和感に敏感<br />「なぜ？」を放置しない</>, work: "予実差の検出、差異の原因分析、「なぜ」の掘り下げ" },
  { name: "鈴木", role: "財務・予測担当", image: "/images/finance/財務予測担当.png", trait: <>この先を考える力<br />未来まで見通す</>, work: "予算・予測の更新、継続性の確認、見通しの試算" },
  { name: "渡部", role: "経理部長補佐", image: "/images/finance/経理部長補佐.png", trait: <>全体を俯瞰し<br />論点を整理する</>, work: "論点の整理、経営会議資料のとりまとめ、判断に必要な情報の提示" },
];

export default function FinancePage() {
  // 要確認：正式サービス名、問い合わせ遷移先（/contact?service=finance）、公開用人物素材。
  return (
    <main className="finance-page">
      <section className="finance-hero finance-hero--remote" id="top">
        <div className="finance-inner finance-hero__inner">
          <div className="finance-hero__stage">
            <div className="finance-hero__copy">
              <p className="finance-kicker">AI COLLABORATION DESIGN / FINANCE &amp; ACCOUNTING</p>
              <h1>財務経理部に、<br />Silicon Worker<br />という<br /><em>新しいメンバー</em>を。</h1>
              <p className="finance-hero__lead">月次を締める。数字を読み解く。<br />この先を予測し、経営判断につなげる。<br />Protein（プロテイン／人）と<br />Silicon Worker（AI）が同じゴールを持つ<br /><strong>財務経理チームを、つくります。</strong></p>
              <div className="finance-actions">
                <Link className="finance-button finance-button--primary" href="/contact?service=finance">Silicon Workerの配属を相談する <span>↗</span></Link>
                <a className="finance-button finance-button--outline" href="#support">導入プロセスを見る <span>↓</span></a>
              </div>
            </div>
            <div className="finance-hero-network finance-hero-network--clean" aria-label="ProteinとSilicon Workerが離れた場所から同じゴールに向かって協働するイメージ">
              <svg className="finance-hero-network__lines" viewBox="0 0 700 620" aria-hidden="true">
                <path className="line-protein" d="M120 120 C220 135 225 235 305 255" />
                <path className="line-silicon" d="M305 255 C395 190 450 135 565 125" />
                <path className="line-silicon" d="M305 255 C235 335 215 415 145 455" />
                <path className="line-protein" d="M305 255 C420 320 475 385 570 430" />
                <path className="line-silicon" d="M145 455 C255 515 360 535 465 500" />
              </svg>

              <article className="finance-hero-person finance-hero-person--protein">
                <div className="finance-hero-person__portrait finance-hero-person__portrait--protein">
                  <img src="/images/finance/経理担当-横顔.png" alt="経理担当 Proteinの人物イメージ" width="180" height="180" />
                </div>
                <div className="finance-hero-person__label finance-hero-person__label--protein"><small>Protein</small><strong>経理担当</strong></div>
              </article>

              <article className="finance-hero-person finance-hero-person--takahashi">
                <div className="finance-hero-person__portrait"><img src="/images/finance/経理アシスタント-横顔.png" alt="高橋（Silicon Worker）" width="180" height="180" /></div>
                <div className="finance-hero-person__label"><small>Silicon Worker</small><strong>高橋 <span>経理アシスタント</span></strong></div>
              </article>

              <article className="finance-hero-person finance-hero-person--sato">
                <div className="finance-hero-person__portrait"><img src="/images/finance/経理分析担当-右横顔.png" alt="佐藤（Silicon Worker）" width="180" height="180" /></div>
                <div className="finance-hero-person__label"><small>Silicon Worker</small><strong>佐藤 <span>経理・分析担当</span></strong></div>
              </article>

              <article className="finance-hero-person finance-hero-person--finance-director">
                <div className="finance-hero-person__portrait finance-hero-person__portrait--protein">
                  <img src="/images/finance/財務経理部長-左横顔.png" alt="財務経理部長 Proteinの人物イメージ" width="180" height="180" />
                </div>
                <div className="finance-hero-person__label finance-hero-person__label--protein"><small>Protein</small><strong>財務経理部長</strong></div>
              </article>

              <article className="finance-hero-person finance-hero-person--watanabe">
                <div className="finance-hero-person__portrait"><img src="/images/finance/経理部長補佐-横顔.png" alt="渡部（Silicon Worker）" width="180" height="180" /></div>
                <div className="finance-hero-person__label"><small>Silicon Worker</small><strong>渡部 <span>経理部長補佐</span></strong></div>
              </article>

              <div className="finance-hero-network__goal"><b>つながる。<br />進んでいく。</b><span>同じゴールを持つ<br />財務経理チーム</span></div>

              <div className="finance-hero-task finance-hero-task--collect"><span aria-hidden="true">▤</span><b>証憑の回収・整理</b></div>
              <div className="finance-hero-task finance-hero-task--analysis"><span aria-hidden="true">▥</span><b>差異の分析</b></div>
              <div className="finance-hero-task finance-hero-task--forecast"><span aria-hidden="true">↗</span><b>予測の更新</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="finance-worker-types" aria-labelledby="finance-worker-types-title">
        <div className="finance-inner">
          <p className="finance-label finance-worker-types__label">01 PROTEIN WORKER / SILICON WORKERとは？</p>
          <img
            className="finance-worker-types__comparison"
            src="/images/finance/protein-silicon-worker.png"
            alt="Protein Workerはタンパク質でできた労働力、Silicon Workerは半導体でできた労働力。互いに矢印を向け、同じチームの一員として働く。"
            width="2000"
            height="309"
          />
          <p className="finance-worker-types__statement">同じチームの一員として、役割を持って働く。</p>
        </div>
      </section>

      <section className="finance-section finance-problem" id="problem">
        <div className="finance-inner">
          <div className="finance-problem__top">
            <div className="finance-problem__copy">
              <p className="finance-label">02 / PROBLEM</p>
              <h2>「月次を締める」で<br />終わってませんか。</h2>
              <p className="finance-lead">月次を締めることで精一杯。<br />数字を「作る」だけで、「使う」まで手が回らない。</p>
            </div>
            <div className="finance-problem__visual" aria-hidden="true">
              <img src="/images/finance/problem-worker-cutout.png" alt="" width="520" height="540" />
            </div>
          </div>
          <div className="finance-problem__intro"><span>FINANCE WORK / L1–L5</span><h3>財務経理の仕事は、数字を確定した先にも続きます。</h3><p>月次の期限があるL1・L2に追われ、L3〜L5が「余裕があればやる仕事」になっていませんか。</p></div>
          <ol className="ladder finance-ladder" aria-label="財務経理の仕事の5段階">
            {[
              "証憑から事実を記録",
              "数字を確定",
              "数字の意味を読み解く",
              "影響を把握し予測する",
              "経営判断につなげる",
            ].map((label, index) => <li className={index < 2 ? "ladder__item" : "ladder__item ladder__item--quiet"} key={label}><small>L{index + 1}</small><strong>{label}</strong>{index > 1 && <em>余裕があれば</em>}</li>)}
          </ol>
          <div className="finance-problem__groups"><p><span>いま、手いっぱいになりがちな領域</span><strong>L1・L2｜数字を「作る」</strong></p><p><span>後回しになりがちな領域</span><strong>L3〜L5｜数字を「使う」</strong></p></div>
          <blockquote className="quote">「なぜ？」を考える時間より、<br />「なぜ？」を考えられる<br className="finance-mobile" />状態にする時間の方が長い。</blockquote>
          <p className="finance-bridge">目指すのは、早く月次を締めることだけではありません。<br />経営が、まだ意味のあるタイミングで数字を見て判断できる財務経理です。</p>
        </div>
      </section>

      <section className="finance-section finance-section--soft finance-solution" id="solution">
        <div className="finance-inner">
          <p className="finance-label">03 / SOLUTION</p>
          <h2>そこで、貴社の財務経理部に<br />Silicon Workerという<br />新しいメンバーを。</h2>
          <p className="finance-lead">貴社の財務経理部に、Silicon Workerが配属されます。<br />既存のメンバーとSilicon Workerが、<strong className="finance-solution__emphasis">ひとつのチームとして一緒に働きます。</strong></p>
          <p className="finance-solution__bridge">Protein（人）とSilicon Worker（AI）が役割を分担しながら、Problemで示したL1〜L5の仕事全体とゴールを共有。<br />数字を「作る」で止めず、「<strong className="finance-solution__emphasis">読み解く・予測する・経営判断につなげる</strong>」までを一つのチームで目指します。</p>
          <div className="finance-solution__visuals" aria-label="同じチームと月次の協働イメージ">
          <div className="team-visual" aria-label="Proteinの3名とSilicon Workerの4名が一緒に働くチームのイメージ">
            <div className="team-visual__side">
              <span>貴社の財務経理チーム<span className="team-visual__protein-caption">（プロテイン）</span></span>
              <div className="team-visual__people">
                {[
                  { name: "経理担当", image: "経理担当" },
                  { name: "経理リーダー", image: "経理リーダー" },
                  { name: "財務経理部長", image: "財務経理部長" },
                ].map((person) => (
                  <div className="team-visual__person" key={person.name}>
                    <img src={`/images/finance/${person.image}.png`} alt={`${person.name}の人物イメージ`} width="80" height="80" />
                    <small>{person.name}</small>
                  </div>
                ))}
              </div>
            </div>
            <strong className="team-visual__plus" aria-hidden="true">＋</strong>
            <div className="team-visual__side team-visual__side--silicon">
              <span className="team-visual__silicon-heading">Silicon Worker<span className="team-visual__silicon-caption">（AI）</span></span>
              <div className="team-visual__people">
                {members.map((member) => (
                  <div className="team-visual__person" key={member.name}>
                    <img src={member.image} alt={`${member.name}の人物イメージ（AI）`} width="80" height="80" />
                    <small>{member.name}</small>
                    <b>{member.role}</b>
                  </div>
                ))}
              </div>
            </div>
            <div className="team-visual__goal"><b>ONE TEAM</b><span>ProteinとSilicon Workerが、互いの役割を活かして同じゴールに向かうチームです。</span><strong>数字を「作る」から、数字で「次を決める」へ。</strong></div>
          </div>
          <div className="finance-solution__members" id="members">
            <p className="finance-label">MEMBERS</p>
            <h3>配属されるSilicon Worker</h3>
            <p className="finance-lead">貴社の状況に合わせて、役割を持つメンバーを設計・配属します。</p>
            <div className="member-grid">{members.map((member) => <article className="member-card" key={member.name}><div className="member-card__avatar"><img src={member.image} alt={`${member.name}（Silicon Worker）の人物イメージ`} width="76" height="76" /></div><small>Silicon Worker / AI</small><h3>{member.name}</h3><b>{member.role}</b><p>{member.trait}</p><ul className="member-card__tasks">{member.work.split("、").map((task) => <li key={task}>{task}</li>)}</ul></article>)}</div>
            <p className="finance-members__note">※実際の導入ですべての企業へこの4名をセット配属するわけではありません。貴社の状況に合わせて必要なSilicon Workerを選び、役割・人数・担当範囲を設計します。</p>
          </div>
          <div className="finance-timeline" aria-label="ProteinとSilicon Workerが協働する月次業務のイメージ">
            <div className="finance-timeline__header">
              <div>
                <span className="finance-timeline__eyebrow">ONE TEAM / MONTHLY WORKFLOW</span>
                <h2>同じ月次を、同じチームで。</h2>
                <p>数字をつくる仕事から、読み解き、次の判断へ。ProteinとSilicon Workerが役割を分担しながら、一緒に進めます。</p>
              </div>
              <div className="finance-timeline__legend" aria-label="担当の凡例">
                <span><i className="finance-timeline__dot finance-timeline__dot--protein" />Protein</span>
                <span><i className="finance-timeline__dot finance-timeline__dot--silicon" />Silicon Worker</span>
              </div>
            </div>
            <ol className="finance-timeline__track">
              {[
                { phase: "01", time: "月初", title: "データ取込", people: ["protein"], detail: "月次のスタート" },
                { phase: "02", time: "収集・整理", title: "証憑の回収・整理", people: ["protein", "silicon"], detail: "未回収を確認" },
                { phase: "03", time: "月次締め", title: "数字を確定", people: ["protein", "silicon"], detail: "締めへの影響を共有" },
                { phase: "04", time: "読み解く", title: "差異分析・「なぜ？」の追及", people: ["silicon"], detail: "変化の背景を探る" },
                { phase: "05", time: "見通す", title: "予測の更新", people: ["silicon"], detail: "先行きへの影響を整理" },
                { phase: "06", time: "次の判断へ", title: "経営会議・論点の整理", people: ["protein", "silicon"], detail: "判断材料につなげる" },
              ].map((step) => (
                <li className="finance-timeline__step" key={step.phase}>
                  <div className="finance-timeline__markers" aria-label={step.people.map((person) => person === "protein" ? "Protein" : "Silicon Worker").join("・")}>
                    {step.people.map((person) => <i key={person} className={`finance-timeline__dot finance-timeline__dot--${person}`} />)}
                  </div>
                  <span className="finance-timeline__phase">{step.phase} / {step.time}</span>
                  <strong>{step.title}</strong>
                  <small>{step.detail}</small>
                </li>
              ))}
            </ol>

          </div>
          </div>
          <p className="finance-solution__footnote">※L1〜L5は財務経理の仕事の5段階です。下の6工程はチームの月次ワークフローと役割分担のイメージで、実際の担当範囲は個別に設計します。</p>
        </div>
      </section>

             <section className="finance-section finance-section--navy" id="working">
         <WorkingChatReveal />
         <div className="finance-inner finance-working__inner">
           <p className="finance-label">04 / WORKING</p>
           <h2>実際に、こんなふうに<br />一緒に働きます。</h2>
           <p className="finance-lead">ProteinとSilicon Workerが役割を分担し、数字を次の判断へつなげる働き方のイメージです。</p>
           <p className="finance-example-note">※以下の会話・数値は構想例であり、導入実績や成果を示すものではありません。</p>
           <div className="finance-scene">
             <h3><span>SCENE 01</span>月次締め ― 証憑を集め、数字を確定する</h3>
             <div className="finance-scene__grid">
                <aside className="finance-scene__artifact"><h4>未回収証憑一覧</h4><p>未回収の特定 → 影響確認 → 追跡・共有</p></aside>
                
               <div className="dialogue dialogue--chat" aria-label="ProteinとSilicon Workerの会話">
                  <div className="dialogue-chat dialogue-chat--protein">
                    <div className="dialogue-chat__speaker"><img src="/images/finance/経理担当-横顔.png" alt="" width="56" height="56" loading="lazy" /><span><b>経理担当</b><small>Protein</small></span></div>
                    <div className="dialogue-chat__bubble"><p>5営業日までに締めたいのに、○○部の証憑がまだ届かなくて……</p></div>
                  </div>
                  <div className="dialogue-chat dialogue-chat--silicon">
                    <div className="dialogue-chat__speaker"><img src="/images/finance/経理アシスタント-横顔.png" alt="" width="56" height="56" loading="lazy" /><span><b>高橋</b><small>経理アシスタント</small></span></div>
                    <div className="dialogue-chat__bubble"><p>未回収一覧があれば、対象を特定して回収完了までめげずに追います !!</p></div>
                  </div>
                  <div className="dialogue-chat dialogue-chat--protein">
                    <div className="dialogue-chat__speaker"><img src="/images/finance/経理担当-横顔.png" alt="" width="56" height="56" loading="lazy" /><span><b>経理担当</b><small>Protein</small></span></div>
                    <div className="dialogue-chat__bubble"><p>このままだと、月次締めに影響する？</p></div>
                  </div>
                  <div className="dialogue-chat dialogue-chat--silicon">
                    <div className="dialogue-chat__speaker"><img src="/images/finance/経理アシスタント-横顔.png" alt="" width="56" height="56" loading="lazy" /><span><b>高橋</b><small>経理アシスタント</small></span></div>
                    <div className="dialogue-chat__bubble"><p>大口1件が明日までに届かないと影響します。先に共有しますね。</p></div>
                  </div>
                </div>
             </div>
           </div>
           <div className="finance-scene">
             <h3><span>SCENE 02</span>数字を読み解き、次の打ち手を考える</h3>
             <div className="finance-scene__grid">
                <aside className="finance-scene__artifact"><h4>予実差サマリ</h4><p>差異発見 → 将来影響 → 経営判断の材料</p></aside>
                
               <div className="dialogue dialogue--chat" aria-label="ProteinとSilicon Workerの会話">
                  <div className="dialogue-chat dialogue-chat--protein">
                    <div className="dialogue-chat__speaker"><img src="/images/finance/経理担当-横顔.png" alt="" width="56" height="56" loading="lazy" /><span><b>経理担当</b><small>Protein</small></span></div>
                    <div className="dialogue-chat__bubble"><p>今月の月次、締まりました！</p></div>
                  </div>
                  <div className="dialogue-chat dialogue-chat--silicon">
                    <div className="dialogue-chat__speaker"><img src="/images/finance/経理分析担当-横顔.png" alt="" width="56" height="56" loading="lazy" /><span><b>佐藤</b><small>経理・分析担当</small></span></div>
                    <div className="dialogue-chat__bubble"><p>外注費が予算比＋18％です。○○案件が主因と考えられます。</p></div>
                  </div>
                  <div className="dialogue-chat dialogue-chat--protein">
                    <div className="dialogue-chat__speaker"><img src="/images/finance/経理リーダー-横顔.png" alt="" width="56" height="56" loading="lazy" /><span><b>経理リーダー</b><small>Protein</small></span></div>
                    <div className="dialogue-chat__bubble"><p>その増加は来月も続く？</p></div>
                  </div>
                  <div className="dialogue-chat dialogue-chat--silicon">
                    <div className="dialogue-chat__speaker"><img src="/images/finance/財務予測担当-横顔.png" alt="" width="56" height="56" loading="lazy" /><span><b>鈴木</b><small>財務・予測担当</small></span></div>
                    <div className="dialogue-chat__bubble"><p>来月も続く見込みです。売上見込みも確認できれば、その先への影響も整理できます。</p></div>
                  </div>
                  <div className="dialogue-chat dialogue-chat--protein">
                    <div className="dialogue-chat__speaker"><img src="/images/finance/経理担当-横顔.png" alt="" width="56" height="56" loading="lazy" /><span><b>経理担当</b><small>Protein</small></span></div>
                    <div className="dialogue-chat__bubble"><p>では、今月の経営会議に上げるべき論点を整理しよう。</p></div>
                  </div>
                  <div className="dialogue-chat dialogue-chat--silicon">
                    <div className="dialogue-chat__speaker"><img src="/images/finance/経理部長補佐-横顔.png" alt="" width="56" height="56" loading="lazy" /><span><b>渡部</b><small>経理部長補佐</small></span></div>
                    <div className="dialogue-chat__bubble"><p>予実差と今後の影響をまとめて、資料のたたき台を作りますね。</p></div>
                  </div>
                </div>
             </div>
           </div>
         </div>
       </section>

       <section className="finance-section finance-section--soft" id="growth">
         <div className="finance-inner">
           <p className="finance-label">05 / GROWTH</p>
           <h2>一緒に働き、フィードバックし合う。<br />チームが育つ。</h2>
           <p className="finance-lead">日々の仕事の中で得た気づきやフィードバック。ProteinとSilicon Workerが学び合うことで、チームの仕事はもっとよくなる。</p>
           <div className="finance-growth-dialogue" aria-label="ProteinとSilicon Workerのフィードバック会話例">
             <div className="finance-growth-dialogue__heading">
               <span>FEEDBACK MOMENT / 会話イメージ</span>
               <h3>振り返りから、次の仕事の進め方が変わる。</h3>
             </div>
             <div className="finance-growth-dialogue__messages">
               <div className="finance-growth-dialogue__message finance-growth-dialogue__message--silicon">
                 <img src="/images/finance/経理アシスタント.png" alt="" width="42" height="42" loading="lazy" />
                 <div><b>高橋 <small>経理アシスタント / Silicon Worker</small></b><p>今月の広告費は予算を12%上回っています。来月も同じ水準で推移すると予測します。</p></div>
               </div>
               <div className="finance-growth-dialogue__message finance-growth-dialogue__message--protein">
                 <img src="/images/finance/経理担当.png" alt="" width="42" height="42" loading="lazy" />
                 <div><b>経理リーダー <small>Protein</small></b><p>今月はキャンペーンがあったので、来月は通常月として見てください。特別な施策がある月は、予測に反映できるよう共有します。</p></div>
               </div>
               <div className="finance-growth-dialogue__message finance-growth-dialogue__message--silicon">
                 <img src="/images/finance/経理アシスタント.png" alt="" width="42" height="42" loading="lazy" />
                 <div><b>高橋 <small>経理アシスタント / Silicon Worker</small></b><p>ありがとうございます。キャンペーン費を分けて予測を更新し、次回から特別要因も確認します。</p></div>
               </div>
             </div>
           </div>
           <div className="finance-growth-layout">
             <ol className="finance-growth-cycle" aria-label="チームの仕事と振り返りの循環">
               <li><small>STEP 1</small><span>一緒に仕事する</span></li>
               <li><small>STEP 2</small><span>振り返る・フィードバック</span></li>
               <li><small>STEP 4</small><span>また一緒に仕事する</span></li>
               <li><small>STEP 3</small><span>次の仕事の仕方が変わる</span></li>
             </ol>
             <div className="finance-growth-pair">
               <article><img className="finance-growth-pair__icon finance-growth-pair__icon--silicon" src="/images/finance/経理アシスタント-横顔.png" alt="高橋（Silicon Worker）の顔画像" width="48" height="48" loading="lazy" /><div><b>Silicon Worker側 <span>蓄積が仕事に返る</span></b><p>日々の仕事で得た経験と、Proteinからのフィードバックをもとに、ナレッジや判断事例を更新し、次の仕事の進め方に反映します。</p></div></article>
               <article><img className="finance-growth-pair__icon finance-growth-pair__icon--protein" src="/images/finance/経理担当-横顔.png" alt="Proteinの顔画像" width="48" height="48" loading="lazy" /><div><b>Protein側 <span>伝え方が育つ</span></b><p>「Silicon Workerへ何を伝えれば、より良い仕事になるか」を、一緒に働くなかで理解し、情報共有や役割分担を見直していきます。</p></div></article>
             </div>
           </div>
           <p className="finance-growth-closing">ProteinとSilicon Workerが学び合うほど、チームの仕事はもっとよくなります。</p>


         </div>
       </section>

       <section className="finance-section" id="value">
         <div className="finance-inner">
           <p className="finance-label">06 / VALUE</p>
           <h2>財務経理の仕事は、<br />ここまで変わる。</h2>
           <p className="finance-lead">導入を通じて目指す、4つの変化。</p>
           <div className="finance-value-grid"><article><small>01</small><h3>早期化で終わらない</h3><p>締めた数字を、経営判断につなげる。</p></article><article><small>02</small><h3>「なぜ？」まで辿り着ける</h3><p>準備仕事に追われず、数字の意味を見る。</p></article><article><small>03</small><h3>誰もやれていなかった仕事を日常にする</h3><p>L3〜L5を「余裕があれば」から通常業務へ。</p></article><article><small>04</small><h3>一緒に働くほど、チームが育つ</h3><p>振り返りを通じ、翌月の仕事の進め方を見直す。</p></article></div>
         </div>
       </section>

<section className="finance-section finance-section--soft" id="support">
        <div className="finance-inner">
          <p className="finance-label">07 / SUPPORT</p>
          <h2>PwSが、配属から<br />定着まで伴走します。</h2>
          <p className="finance-lead">PwS共通の4段階フロー。Silicon WorkerだけでなくProtein側も、新しい同僚と働くための準備を整えます。</p>
          <SupportSteps />
        </div>
      </section>

      <section className="finance-section" id="faq">
        <div className="finance-inner finance-inner--narrow">
          <p className="finance-label">08 / FAQ</p>
          <h2>よくあるご質問</h2>
          {[
            {
              question: "どのSilicon Workerを配属するかは、どう決めますか？",
              answer: "貴社の業務を可視化し、課題・体制・業務の流れを確認したうえで、必要なSilicon Workerを選定します。役割・人数・担当範囲・Proteinとの連携方法まで、貴社に合わせて設計します。",
            },
            {
              question: "今使っている会計システムや業務フローは、そのまま使えますか？",
              answer: "現在のシステムや業務フローを確認したうえで、Silicon Workerがどこで、どのように一緒に働くかを設計します。新しいシステムへの一律の入れ替えを前提としたサービスではありません。",
            },
            {
              question: "Silicon Workerに、どこまで仕事を任せられますか？",
              answer: "業務の流れを整理したうえで、Silicon Workerが担う仕事と、Proteinによる判断・確認が必要な仕事を設計します。実際に一緒に働きながら、役割や担当範囲を見直していくこともできます。",
            },
            {
              question: "Silicon Workerは、どうやって当社のことを理解するのですか？",
              answer: "配属前に「Silicon Worker研修」を行います。企業理念や財務経理部の目的、業務フロー、利用システム、判断基準、過去事例など、仕事に必要な貴社の文脈を共有します。\n人が会社を知らずに働けないように、Silicon Workerも、会社を知らずには働けません。",
            },
            {
              question: "一緒に働く社員側にも、準備やAIの知識が必要ですか？",
              answer: "PwSでは、Protein側にも「新しい同僚との働き方研修」を行います。AIの操作方法を覚えることが目的ではありません。どんな情報を共有するか、判断が必要なときにどう連携するか、どうフィードバックするかなど、Silicon Workerとチームで働くための準備を一緒に行います。",
            },
            {
              question: "配属した後も、PwSに相談できますか？",
              answer: "はい。配属して終わりではなく、実際の仕事で得た気づきやフィードバックをもとに、ナレッジの更新、役割・担当範囲の見直し、判断事例の蓄積、Proteinとの連携改善などを支援します。必要に応じて、Silicon Workerの追加・再配置も検討します。",
            },
          ].map(({ question, answer }) => <details className="faq-item" key={question}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="finance-contact" id="contact">
        <div className="finance-inner"><p className="finance-label">09 / CONTACT</p><p className="finance-contact__eyecatch">財務経理部に、新しいメンバーを。</p><h2>数字を「作る」だけで終わらない。<br />数字で「次を決める」財務経理チームへ。</h2><p>貴社の仕事を一緒に見ながら、どんなSilicon Workerが必要か、一緒に考えます。まずはご相談ください。</p><Link className="finance-button finance-button--warm" href="/contact?service=finance">Silicon Workerの配属を相談する <span>↗</span></Link></div>
      </section>
    </main>
  );
}
