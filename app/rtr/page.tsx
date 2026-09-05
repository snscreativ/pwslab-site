import type { Metadata } from "next";
import RtrClient from "./RtrClient";
import "./rtr.css";

export const metadata: Metadata = {
  title: "RTR｜Real-time Relationship Cycle",
  description: "人と人のあいだを見つめ、必要な対話を設計し、関係性を動かし続ける組織マネジメントサイクル『RTR』。AI面談システム『ヒトコ』とコーチング支援を一体化し、関係性に向き合う運用を組織文化へつなげます。",
  alternates: { canonical: "/rtr" },
  openGraph: {
    title: "RTR｜Real-time Relationship Cycle",
    description: "人と人のあいだを見つめ、関係性を動かし続ける仕組み。",
    url: "https://www.pwslab.jp/rtr",
    images: [{ url: "/images/rtr/fv-interview.png", width: 1536, height: 1024, alt: "RTR" }],
  },
};

const rtrHtml = `
<main class="rtr-page">
<section class="hero" id="top">
<div class="wrap hero-grid">
<div class="hero-copy reveal">
<p class="eyebrow">REAL-TIME RELATIONSHIP CYCLE</p>
<h1 class="hero-title">片手にはハラスメントガイドラインを握り締め、<br/>決死の覚悟で臨む部下との定期面談。</h1>
<p class="hero-sub">本当の自分を、組織に取り戻しませんか。</p>
<span class="short-line"></span>
<p class="lead">面談はある。制度もある。それでも本音は届かず、関係はすれ違い、離職や停滞が起きていく。</p>
<p class="hero-lead-strong">必要なのは、面談の回数を増やすことではなく、人と人のあいだを動かし続ける仕組みです。</p>
<div class="hero-actions">
<a class="button button-primary" href="/contact?service=rtr">導入イメージを相談する <span>→</span></a>
<a class="button button-secondary" href="#concept">RTRの考え方を知る <span>→</span></a>
</div>
</div>
<div aria-label="緊張感のある定期面談と、つながりきらない関係性を表すビジュアル" class="hero-interview reveal"><img alt="緊張感のある定期面談。机上にハラスメントガイドラインが置かれ、二人の関係性が途切れかけているイメージ" class="hero-visual-img" src="/images/rtr/fv-interview.png"/></div>
</div>
</section>
<section class="problem-overview" id="problem">
<div class="wrap reveal">
<div class="problem-intro"><div class="problem-number"></div><div class="problem-heading-wrap"></div><div class="problem-lead-wrap"><p class="lead">1on1・評価面談・サーベイ・ハラスメント研修など、制度や施策が整っていても、現場には「言えない」「頼れない」「すれ違う」が残っています。プロジェクトの停滞や現場のギクシャクも、個人の問題として処理されがちです。</p></div></div>
<div class="problem-intro-compact"><div class="problem-intro-number"></div><div class="problem-intro-content"><p class="eyebrow">02</p><h2 class="section-heading">面談があるのに、本音が上がってこない。<br/>制度があるのに、関係は噛み合わない。</h2></div></div><div class="problem-cards">
<article class="problem-card"><img alt="" src="/images/rtr/icons/chat.png"/><h3>言葉を選び続ける</h3><p>上司は地雷を踏まないように、言葉を選び続ける。</p></article>
<article class="problem-card"><img alt="" src="/images/rtr/icons/single.png"/><h3>本音を飲み込む</h3><p>部下は本音を飲み込んだまま、無難な返答をする。</p></article>
<article class="problem-card"><img alt="" src="/images/rtr/icons/people.png"/><h3>すれ違いが残る</h3><p>同僚や先輩後輩のすれ違いは、表面化するまで放置される。</p></article>
<article class="problem-card"><img alt="" src="/images/rtr/icons/manager.png"/><h3>兆しを見落とす</h3><p>離職の前から始まっている、関係性の揺らぎを見落とす。</p></article>
</div>
<div class="problem-close">足りていないのは、制度でも面談回数でもなく、<br/><strong>人間関係をマネジメント対象として扱う視点です。</strong></div>
<div aria-label="RTRが目指すこと" class="rtr-goal-strip">
<div class="rtr-goal-main">
<small>GOAL</small>
<strong>人間関係が原因で止まっている組織を動かす</strong>
<div class="rtr-goal-tags"><span>離職予防</span><span>関係改善</span><span>管理職負担軽減</span></div>
</div>
<div class="rtr-goal-flow">
<article><small>課題</small><p>人は見てきた。<br/>でも、人と人のあいだには目を向けていない・見えていない。</p></article>
<span aria-hidden="true" class="rtr-goal-arrow">→</span>
<article><small>原因</small><p>本音や違和感が届かず、必要な対話のきっかけをつくれない。</p></article>
<span aria-hidden="true" class="rtr-goal-arrow">→</span>
<article class="rtr-goal-solution"><small>RTR</small><p>ヒトコが間に入り、関係性の兆しを拾い、人と人の対話へつなぐ。</p></article>
</div>
</div>
</div>
</section>
<section class="section section-soft" id="concept">
<div class="wrap reveal">
<p class="eyebrow">03</p>
<h2 class="section-heading concept-heading">人は見てきた。<br/>でも、組織を止めていたのは<br/><em>“人と人のあいだ”</em>だった。</h2>
<div class="concept-layout">
<div class="concept-copy"><p>評価・育成・配置・面談など、これまでの人材マネジメントは主に個人を見てきました。しかし現場を止めるのは、言えない、伝わらない、頼れない、遠慮・萎縮・誤解など、人と人のあいだにあるズレや揺らぎです。</p><p>RTRが着目したのは、人ではなく、<strong>人と人のあいだを動かし続ける仕組み。</strong></p></div>
<div aria-label="従来の人を見る考え方とRTRの線を見る考え方の比較" class="relation-compare">
<div class="compare-panel conventional"><small>従来</small><h3>「人」を見る</h3><div class="compare-visual compare-visual-left"><img alt="孤立した人物が並ぶ「人を見る」イメージ" src="/images/rtr/relation-compare.png"/></div><p>評価・能力・配置など、<br/>一人ひとりを「点」として捉える。</p></div>
<div class="compare-panel rtr-panel"><small>RTR</small><h3>「線」を見る</h3><div class="compare-visual compare-visual-right"><img alt="人物同士が線でつながる「線を見る」イメージ" src="/images/rtr/relation-compare.png"/></div><p>人と人のあいだにある<br/>つながり・揺らぎを捉える。</p></div>
</div>
</div>
</div>
</section>
<section class="section section-white rtr-brand-section" id="about">
<div class="wrap brand-center reveal">
<p class="eyebrow">04</p>
<div aria-hidden="true" class="brand-cycle"><span></span><i></i><i></i><i></i></div>
<div class="brand-mark">RTR</div>
<p class="brand-sub">REAL-TIME RELATIONSHIP CYCLE</p>
<h2>人間関係を動かし続ける仕組み</h2>
<p class="lead centered">RTRは、スタッフ100名以上の企業を主対象に、AI面談システム「ヒトコ」とコーチング支援を一体化した組織マネジメントサイクルです。関係性を見つめ、必要な対話を設計・運用し、組織文化として根づかせます。人間関係を当事者任せにせず、組織で育てていく仕組みです。</p>
<div class="brand-definition">人材マネジメントが“人”を扱うなら、<strong>RTRは“関係性”を扱います。</strong></div>
</div>
</section>
<section class="section section-soft" id="difference">
<div class="wrap reveal">
<p class="eyebrow">05</p>
<h2 class="section-heading">既存手法を否定するのではなく、<br/>届かなかった領域を補う。</h2>
<p class="lead difference-lead">1on1、サーベイ、360度評価、タレントマネジメントはいずれも必要です。RTRは、既存手法では拾いきれなかった「人と人のあいだ」を見つめ、必要な対話と運用を設計し、既存施策が機能する土台そのものを支えます。</p>
<div class="comparison-grid comparison-grid-updated">
<article><div class="comparison-icon"><img alt="" src="/images/rtr/icons/diff-1on1.svg"/></div><span>1on1</span><p>“対話の場”</p><div class="comparison-bridge"><span>↓</span></div><strong>“対話が機能する関係性”をつくる。</strong></article>
<article><div class="comparison-icon"><img alt="" src="/images/rtr/icons/diff-survey.svg"/></div><span>サーベイ</span><p>“状態を測る”</p><div class="comparison-bridge"><span>↓</span></div><strong>“関係性を動かす”</strong></article>
<article><div class="comparison-icon"><img alt="" src="/images/rtr/icons/diff-360.svg"/></div><span>360度評価</span><p>“人を見る”</p><div class="comparison-bridge"><span>↓</span></div><strong>“線を見る”</strong></article>
<article><div class="comparison-icon"><img alt="" src="/images/rtr/icons/diff-talent.svg"/></div><span>タレントマネジメント</span><p>“人材を活かす仕組み”</p><div class="comparison-bridge"><span>↓</span></div><strong>“関係性を機能させる仕組み”</strong></article>
</div>
</div>
</section>
<section class="hitoko-section" id="hitoko">
<div class="wrap hitoko-grid">
<div class="reveal">
<p class="eyebrow light">06</p>
<h2 class="section-heading section-heading-light">ヒトコ／ひとことを拾うAI面談</h2>
<p class="hitoko-lead">届いていない一言を拾い、人と人をつなぎ続ける。</p>
<p class="light-text">社員がPC／スマホのブラウザからアバターと音声対話し、節目ごとのストーリーの中で自然に言葉を交わす。その対話から、雑談ににじむ違和感・遠慮・本音の兆しを拾い、次の対話に向き合う材料として整理します。</p>
<div class="hitoko-quotes"><span>「実は……」</span><span>「ちょっと気になっていて……」</span><span>「ほんとうは、こう思ってる……」</span></div>
<div class="hitoko-close"><strong>関係性は、壊れてから気づくには遅すぎる。</strong><span>ヒトコは、その前にある小さなサインを拾います。</span></div>
<p class="hitoko-emphasis">拾うのは、答えではなく兆し。<br/>つなぐのは、情報ではなく関係性。</p>
</div>
<div class="system-showcase reveal">
<div class="system-window">
<div class="system-window-bar"><div aria-hidden="true" class="window-dots"><span></span><span></span><span></span></div><div class="system-label">HITOKO / AI INTERVIEW SYSTEM</div></div>
<img alt="AI面談システム『ヒトコ』の利用画面イメージ" src="/images/rtr/hitoko-system.png"/>
</div>
</div>
</div>
</section>
<section class="section section-white" id="cycle">
<div class="wrap reveal">
<p class="eyebrow">07</p>
<h2 class="section-heading">関係性は、偶然よくなるものではない。<br/>節目ごとに設計し、対話し、循環させる。</h2>
<div class="cycle-grid cycle-flow">
<article><img alt="" src="/images/rtr/icons/trigger.png"/><span>01</span><h3>Relationship Trigger<small>きっかけ</small></h3><p>入社・異動・評価・PJ開始／終了などを、関係性が動く節目として捉える。</p></article>
<article><img alt="" src="/images/rtr/icons/stage.png"/><span>02</span><h3>Relationship Stage<small>場</small></h3><p>ヒトコとのAI面談で、信頼・安心だけでなく遠慮・萎縮・孤立等の揺らぎを拾う。</p></article>
<article><img alt="" src="/images/rtr/icons/dialogue.png"/><span>03</span><h3>Relationship Dialogue<small>対話</small></h3><p>兆しをもとに、必要な関係者の間に意味のある対話を設計する。</p></article>
<article><img alt="" src="/images/rtr/icons/cycle.png"/><span>04</span><h3>Relationship Cycle<small>循環</small></h3><p>節目ごとに回し続け、関係性に向き合う運用を組織文化として定着させる。</p></article>
</div>
<div aria-hidden="true" class="cycle-ring"><span>Trigger</span><span>Stage</span><span>Dialogue</span><span>Cycle</span></div>
<div class="cycle-close">RTRは、関係性の変化を“気づき”で終わらせず、<strong>“運用”として回し続ける仕組みです。</strong></div>
<div aria-label="ヒトコからRTRの循環までの流れ" class="rtr-flow-summary">
<div class="rtr-flow-head">
<small>HOW RTR WORKS</small>
<h3>“ひとこと”を拾い、関係性が動くまで。</h3>
<p>管理職と部下、それぞれの声をヒトコが受け止め、関係の兆しを見つける。兆しを対話につなぎ、その対話を節目ごとに循環させます。</p>
</div>
<div class="rtr-flow-steps">
<article><span>01</span><strong>今、起きていること</strong><p>言葉を選ぶ上司と、本音を飲み込む部下。まず、表面化しにくいすれ違いに目を向ける。</p></article>
<article><span>02</span><strong>ヒトコが間に入る</strong><p>直接の面談だけでは届きにくい“ひとこと”を、AI面談を通じて拾う。</p></article>
<article><span>03</span><strong>関係の兆しを見つける</strong><p>信頼・安心などの良い兆しも、遠慮・萎縮・孤立など注意すべき揺らぎも捉える。</p></article>
<article><span>04</span><strong>人と人の対話へつなぐ</strong><p>兆しを答えにせず、必要な関係者が向き合うための対話を設計する。</p></article>
<article><span>05</span><strong>RTRとして回し続ける</strong><p>Trigger・Stage・Dialogue・Cycleを節目ごとに回し、関係性に向き合う運用を文化にする。</p></article>
</div>
<div aria-label="RTRが見る関係の兆し" class="relationship-signal-visual">
<div class="signal-side signal-good"><small>GOOD SIGNALS</small><strong>育てたい関係性</strong><div><span>信頼</span><span>安心</span><span>尊敬</span><span>期待</span></div></div>
<div class="signal-center"><img alt="人と人のあいだを見るイメージ" class="signal-center-image" loading="lazy" src="/images/rtr/relation-signal-center.png"/></div>
<div class="signal-side signal-alert"><small>EARLY SIGNS</small><strong>見逃したくない揺らぎ</strong><div><span>遠慮</span><span>萎縮</span><span>孤立</span><span>疲れ</span></div></div>
</div>
<p class="signal-note">ヒトコが答えを出すのではなく、拾った兆しを、人と人の対話につなげます。</p>
</div>
</div>
</section>
<section class="section section-soft" id="coaching">
<div class="wrap reveal">
<p class="eyebrow">08</p>
<h2 class="section-heading">導入して終わりではなく、<br/>運営側の一員として回し切る。</h2>
<p class="lead">ツールを入れるだけでは、文化にはなりません。組織ごとの設計から現場導入、管理職の運用相談、定着・文化化まで、<span id="mac"><a href="https://mama-sun.com/jp/" target="_blank">MAC（Mamasan&amp;Company）</a></span>で磨かれPwS Methodとして体系化された実践知を背景に、PwSがコーチング型でともに歩みます。</p>
<div class="roadmap">
<article><span>PHASE 01</span><strong>初期構築支援</strong><p>Trigger整理・イベント再設計・ヒトコ学習など、組織に合う土台をつくる。</p><img alt="初期構築支援のイメージ" class="roadmap-image" loading="lazy" src="/images/rtr/phase01.png"/></article>
<article><span>PHASE 02</span><strong>現場導入・キックオフ支援</strong><p>Stage／Dialogueの準備、現場へのオリエンテーションを支える。</p><img alt="現場導入・キックオフ支援のイメージ" class="roadmap-image" loading="lazy" src="/images/rtr/phase02.png"/></article>
<article><span>PHASE 03</span><strong>管理職支援・運用相談</strong><p>面談・声かけ・ヒトコの読み解きなど、現場で生まれる迷いをともに整理する。</p><img alt="管理職支援・運用相談のイメージ" class="roadmap-image" loading="lazy" src="/images/rtr/phase03.png"/></article>
<article><span>PHASE 04</span><strong>定着支援・文化化支援</strong><p>振り返り・称賛・いい話の共有を通じ、関係性に向き合う運用を文化へつなげる。</p><img alt="定着支援・文化化支援のイメージ" class="roadmap-image" loading="lazy" src="/images/rtr/phase04.png"/></article>
</div>
<div class="coaching-close"><p>RTRは、面談システムを導入するサービスではありません。</p><strong>関係性をマネジメントできる組織を、現場とともに育てるサービスです。</strong></div>
</div>
</section>
<section class="section section-white" id="effects">
<div class="wrap reveal">
<p class="eyebrow">09</p>
<h2 class="section-heading">最初に変わるのは、離職と面談。<br/>その先に、組織の動き方が変わっていく。</h2>
<div class="effects effects-five">
<article><span>01</span><strong>離職の兆しに、もっと早く向き合える</strong><p>表面化する前の小さな違和感や距離を、兆しとして拾える状態へ。</p></article>
<article><span>02</span><strong>面談が“前に進めるもの”へ</strong><p>向き合う材料と意味がある、次につながる対話へ。</p></article>
<article><span>03</span><strong>先輩後輩・同僚間も扱える</strong><p>上下だけでなく、日常の連携や期待値のズレにも向き合う。</p></article>
<article><span>04</span><strong>管理職が一人で背負わない</strong><p>関係性を管理職のセンスではなく、組織で支える運用へ。</p></article>
<article><span>05</span><strong>関係性に向き合うことが文化になる</strong><p>節目ごとの対話が、組織の自然な習慣として根づいていく。</p></article>
</div>
</div>
</section>
<section class="section section-soft" id="background">
<div class="wrap reveal background-inner">
<p class="eyebrow">10</p>
<h2 class="section-heading">この仕組みは、机上のアイデアから<br/>生まれたものではありません。<br/><small>── 18年間の現場運営から、コーチングのかたちへ。</small></h2>
<p class="lead">MACが18年間、約400名規模の3Tワーカー組織を運営する中で培った「つながり」の実践知を、PwS Methodとして体系化。組織×AI時代へ拡張し、PwSからRTRとして提供します。</p>
<div class="heritage"><div><strong>MAC</strong><small>出自</small></div><span>→</span><div><strong>PwS Method</strong><small>方法論</small></div><span>→</span><div><strong>PwS</strong><small>リリース</small></div><span>→</span><div><strong>RTR</strong><small>Real-time Relationship Cycle</small></div></div>
</div>
</section>
<section class="contact" id="contact">
<div class="wrap reveal">
<p class="eyebrow">11</p>
<h2 class="section-heading contact-heading">人間関係を、当事者任せで終わらせない。</h2>
<div class="contact-copy"><p>本音が届かない面談を続けるのか。<br/>人と人のあいだを見つめ、関係性を育てる仕組みをつくるのか。</p><p><strong>RTRは、後者のためのサービスです。</strong></p></div>
<div class="hero-actions centered-actions"><a class="button button-primary" href="/contact?service=rtr">自社での活用イメージを相談する <span>→</span></a><a class="button button-secondary" href="#concept">RTRの考え方を詳しく知る <span>→</span></a></div>
<div class="contact-closing">離職の前にある、すれ違いへ。<br/>停滞の前にある、言えない一言へ。<br/><strong>RTRは、その“あいだ”に向き合います。</strong></div>
</div>
</section>
</main><button aria-label="ページトップへ" class="to-top rtr-to-top" id="toTop" type="button">
<span></span>
</button>
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "RTR (Real-time Relationship Cycle)",
  url: "https://www.pwslab.jp/rtr",
  provider: { "@id": "https://www.pwslab.jp/#organization" },
  description: "AI面談システム『ヒトコ』とコーチング支援を一体化し、人と人の関係性を見つめ、対話と運用につなげる組織マネジメントサイクル。",
  areaServed: "JP",
};

export default function RtrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div dangerouslySetInnerHTML={{ __html: rtrHtml }} />
      <RtrClient />
    </>
  );
}
