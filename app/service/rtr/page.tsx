import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceLabel from "@/components/ServiceLabel";
import "./rtr.css";

export const metadata: Metadata = {
  title: "RTR｜Real-time Relationship Cycle",
  description:
    "人と人のあいだを見つめ、必要な対話を設計し、関係性を動かし続ける組織マネジメントサイクル『RTR』。AI面談システム『ヒトコ』とコーチング支援を一体化し、関係性に向き合う運用を組織文化へつなげます。",
  alternates: { canonical: "/service/rtr" },
  openGraph: {
    title: "RTR｜Real-time Relationship Cycle",
    description: "人と人のあいだを見つめ、関係性を動かし続ける仕組み。",
    url: "https://www.pwslab.jp/service/rtr",
    images: [
      {
        url: "/images/rtr/fv-interview.png",
        width: 1536,
        height: 1024,
        alt: "RTR",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "RTR (Real-time Relationship Cycle)",
  url: "https://www.pwslab.jp/service/rtr",
  provider: { "@id": "https://www.pwslab.jp/#organization" },
  description:
    "AI面談システム『ヒトコ』とコーチング支援を一体化し、人と人の関係性を見つめ、対話と運用につなげる組織マネジメントサイクル。",
  areaServed: "JP",
};

export default function RtrPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="p-rtr">
        <section className="c-service-hero p-rtr-hero" id="top">
          <ServiceLabel
            name="RTR"
            description="人と人のあいだをマネジメントする組織マネジメントサービス"
          />
          <div className="p-rtr-wrap p-rtr-hero-grid">
            <ScrollReveal
              revealId="rtr-hero-heading"
              className="p-rtr-hero__heading"
            >
              <h1>
                <span className="p-rtr-hero__line">
                  片手にはハラスメント
                  <br className="u-sp" />
                  ガイドラインを握り締め、
                </span>
                <span className="p-rtr-hero__line">
                  決死の覚悟で臨む部下との
                  <br className="u-sp" />
                  定期面談。
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal revealId="rtr-block-01" className="p-rtr-hero-copy">
              <p className="p-rtr-hero-sub">
                本当の自分を、
                <br className="u-xs" />
                組織に取り戻しませんか。
              </p>
              <p className="p-rtr-lead">
                面談はある。制度もある。それでも本音は届かず、
                <br />
                関係はすれ違い、離職や停滞が起きていく。
              </p>

              <div className="p-rtr-hero-actions">
                <a
                  className="p-rtr-button p-rtr-button-primary"
                  href="/contact?service=rtr"
                >
                  導入イメージを相談する <span>→</span>
                </a>
                <a
                  className="p-rtr-button p-rtr-button-secondary"
                  href="#concept"
                >
                  RTRの考え方を知る <span>→</span>
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal
              revealId="rtr-block-02"
              aria-label="緊張感のある定期面談と、つながりきらない関係性を表すビジュアル"
              className="p-rtr-hero-interview"
            >
              <img
                alt="緊張感のある定期面談。机上にハラスメントガイドラインが置かれ、二人の関係性が途切れかけているイメージ"
                className="p-rtr-hero-visual-img"
                src="/images/rtr/fv-interview.png"
              />
            </ScrollReveal>
          </div>
          <p className="p-rtr-hero-lead-strong">
            必要なのは、面談の回数を増やすことではなく、
            <br />
            <span>
              人と人のあいだを
              <wbr />
              動かし続ける仕組みです。
            </span>
          </p>
        </section>

        <section className="p-rtr-problem-overview" id="problem">
          <ScrollReveal revealId="rtr-block-01" className="p-rtr-wrap">
            <div className="p-rtr-problem-intro-compact">
              <div className="p-rtr-problem-intro-content">
                <p className="p-rtr-eyebrow">01 THE ISSUE</p>
                <h2 className="p-rtr-section-heading">
                  面談しても、<span>本音</span>が上がってこない。
                  <br />
                  制度があるのに、<span>関係は噛み合わない。</span>
                </h2>
              </div>
            </div>
            <div className="p-rtr-problem-cards">
              <article className="p-rtr-problem-card">
                <h3>言葉を選び続ける</h3>
                <p>上司は地雷を踏まないように、言葉を選び続ける。</p>
              </article>
              <article className="p-rtr-problem-card">
                <h3>本音を飲み込む</h3>
                <p>部下は本音を飲み込んだまま、無難な返答をする。</p>
              </article>
              <article className="p-rtr-problem-card">
                <h3>すれ違いが残る</h3>
                <p>同僚や先輩後輩のすれ違いは、表面化するまで放置される。</p>
              </article>
              <article className="p-rtr-problem-card">
                <h3>兆しを見落とす</h3>
                <p>離職の前から始まっている、関係性の揺らぎを見落とす。</p>
              </article>
            </div>
            <div className="p-rtr-problem-close p-rtr-text-close">
              足りていないのは、制度でも面談回数でもなく、
              <br />
              <strong>
                人間関係をマネジメント
                <br className="u-sp" />
                対象として扱う視点です。
              </strong>
            </div>
          </ScrollReveal>
        </section>

        <section className="p-rtr-section p-rtr-section-white" id="concept">
          <ScrollReveal revealId="rtr-block-02" className="p-rtr-wrap">
            <p className="p-rtr-eyebrow">02 REDEFINE</p>
            <h2 className="p-rtr-section-heading p-rtr-concept-heading">
              人は見てきた。
              <br />
              でも、組織を止めていたのは
              <br />
              <em>“人と人のあいだ”</em>だった。
            </h2>
            <div className="p-rtr-concept-layout">
              <div className="p-rtr-concept-copy">
                <p>
                  評価・育成・配置・面談など、これまでの人材マネジメントは主に個人を見てきました。
                  <br />
                  しかし現場を止めるのは、言えない、伝わらない、頼れない、遠慮・萎縮・誤解など、人と人のあいだにあるズレや揺らぎです。
                </p>
                <p className="p-rtr-concept-copy__last">
                  RTRが着目したのは、人ではなく、
                  <br />
                  <strong>
                    人と人のあいだを
                    <br className="u-xs" />
                    動かし続ける仕組み。
                  </strong>
                </p>
              </div>
              <div
                aria-label="従来の人を見る考え方とRTRの線を見る考え方の比較"
                className="p-rtr-relation-compare"
              >
                <div className="p-rtr-compare-panel p-rtr-conventional">
                  <span>従来</span>
                  <h3>
                    <b>「人」</b>を見る
                  </h3>
                  <div className="p-rtr-compare-visual p-rtr-compare-visual-left">
                    <img
                      alt="孤立した人物が並ぶ「人を見る」イメージ"
                      src="/images/rtr/relation-compare1.png"
                    />
                  </div>
                  <p>評価・能力・配置など、一人ひとりを「点」として捉える。</p>
                </div>
                <div className="p-rtr-compare-panel p-rtr-panel">
                  <span>RTR</span>
                  <h3>
                    <b>「線」</b>を見る
                  </h3>
                  <div className="p-rtr-compare-visual p-rtr-compare-visual-right">
                    <img
                      alt="人物同士が線でつながる「線を見る」イメージ"
                      src="/images/rtr/relation-compare2.png"
                    />
                  </div>
                  <p>人と人のあいだにある、つながり・揺らぎを捉える。</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section
          className="p-rtr-section p-rtr-section-dark p-rtr-brand-section"
          id="about"
        >
          <ScrollReveal
            revealId="rtr-block-03"
            className="p-rtr-wrap p-rtr-brand-center"
          >
            <p className="p-rtr-eyebrow">03 ABOUT RTR</p>
            <div className="p-rtr-brand-wrap">
              <div className="p-rtr-brand-mark">
                R<span>eal</span>T<span>ime</span>R<span>elationship</span>
                <span className="cycle">CYCLE</span>
              </div>
              <div className="p-rtr-brand-cycle" aria-hidden="true">
                <svg viewBox="0 0 400 400">
                  <defs>
                    <marker
                      id="cycle-arrow"
                      markerWidth="18"
                      markerHeight="18"
                      refX="14"
                      refY="9"
                      orient="auto"
                      markerUnits="userSpaceOnUse"
                    >
                      <path
                        d="M2,2 L15,9 L2,16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </marker>
                  </defs>

                  <path
                    className="p-rtr-cycle-line"
                    d="M 55 115 A 170 170 0 0 1 347 115"
                  />
                  <path
                    className="p-rtr-cycle-line"
                    d="M 368 165 A 170 170 0 0 1 200 370"
                  />

                  <path
                    className="p-rtr-cycle-line"
                    d="M 150 362 A 170 170 0 0 1 35 175"
                  />
                </svg>
              </div>
            </div>
            <h2>人間関係を動かし続ける仕組み</h2>
            <p className="p-rtr-lead p-rtr-centered">
              RTRは、スタッフ100名以上の企業を主対象に、AI面談システム「ヒトコ」とコーチング支援を一体化した組織マネジメントサイクルです。関係性を見つめ、必要な対話を設計・運用し、組織文化として根づかせます。人間関係を当事者任せにせず、組織で育てていく仕組みです。
            </p>
            <div className="p-rtr-brand-definition">
              人材マネジメントが“人”を扱うなら、
              <strong>RTRは“関係性”を扱います。</strong>
            </div>
          </ScrollReveal>
        </section>

        <section className="p-rtr-hitoko-section" id="hitoko">
          <div className="p-rtr-wrap p-rtr-wrap">
            <div className="p-rtr-hitoko-grid">
              <ScrollReveal revealId="rtr-block-04">
                <p className="p-rtr-eyebrow p-rtr-light">
                  04 HITOKO / AI INTERVIEW
                </p>
                <h2 className="p-rtr-section-heading p-rtr-section-heading-light">
                  <span>ヒトコ</span>
                  ひとことを拾うAI面談
                </h2>
                <h3 className="p-rtr-brace-ttl">
                  届いていない
                  <span className="u-nowrap">一言を拾い、</span>
                  <br />
                  人と人をつなぎ続ける。
                </h3>
                <p className="p-rtr-light-text">
                  社員がPC／スマホのブラウザからアバターと音声対話し、節目ごとのストーリーの中で自然に言葉を交わす。その対話から、雑談ににじむ違和感・遠慮・本音の兆しを拾い、次の対話に向き合う材料として整理します。
                </p>
                <div className="p-rtr-hitoko-close">
                  <strong>関係性は、壊れてから気づくには遅すぎる。</strong>
                  <br />
                  ヒトコは、その前にある小さなサインを拾います。
                </div>
              </ScrollReveal>
              <ScrollReveal
                revealId="rtr-block-08"
                className="p-rtr-system-showcase"
              >
                <div className="p-rtr-system-window">
                  <div className="p-rtr-system-window-bar">
                    <div aria-hidden="true" className="p-rtr-window-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="p-rtr-system-label">
                      HITOKO / AI INTERVIEW SYSTEM
                    </div>
                  </div>
                  <img
                    alt="AI面談システム『ヒトコ』の利用画面イメージ"
                    src="/images/rtr/hitoko-system.png"
                  />
                  <div className="p-rtr-hitoko-quotes">
                    <span>「実は……」</span>
                    <span>「ちょっと気になっていて……」</span>
                    <span>「ほんとうは、こう思ってる……」</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <p className="p-rtr-hitoko-emphasis p-rtr-text-close">
              拾うのは、答えではなく<span>兆し</span>。
              <br />
              つなぐのは、情報ではなく<span>関係性</span>。
            </p>
          </div>
        </section>

        <section className="p-rtr-section p-rtr-section-white" id="cycle">
          <ScrollReveal revealId="rtr-block-05" className="p-rtr-wrap">
            <p className="p-rtr-eyebrow">05 HOW IT WORKS</p>
            <h2 className="p-rtr-section-heading">
              関係性は、偶然よくなるものではない。
              <br />
              節目ごとに<span>設計し、対話し、循環させる。</span>
            </h2>
            <div
              aria-label="ヒトコからRTRの循環までの流れ"
              className="p-rtr-flow-summary"
            >
              <div className="p-rtr-flow-head">
                <h3 className="p-rtr-brace-ttl">
                  “ひとこと”を拾い、関係性が動くまで。
                </h3>
                <p>
                  管理職と部下、それぞれの声をヒトコが受け止め、関係の兆しを見つける。
                  <br />
                  兆しを対話につなぎ、その対話を節目ごとに循環させます。
                </p>
              </div>
              <div className="p-rtr-flow-steps">
                <article>
                  <span className="p-rtr-flow-number">01</span>
                  <img
                    className="p-rtr-flow-image"
                    src="/images/rtr/rtr-flow1.png"
                    alt=""
                    loading="lazy"
                  />
                  <div className="p-rtr-flow-text">
                    <h4 className="p-rtr-flow-title">今、起きていること</h4>
                    <p>
                      言葉を選ぶ上司と、本音を飲み込む部下。見えにくいすれ違いに目を向ける。
                    </p>
                  </div>
                </article>
                <article>
                  <span className="p-rtr-flow-number">02</span>
                  <img
                    className="p-rtr-flow-image"
                    src="/images/rtr/rtr-flow2.png"
                    alt=""
                    loading="lazy"
                  />
                  <div className="p-rtr-flow-text">
                    <h4 className="p-rtr-flow-title">ヒトコが間に入る</h4>
                    <p>
                      直接の面談だけでは届きにくい“ひとこと”を、AI面談を通じて拾う。
                    </p>
                  </div>
                </article>
                <article>
                  <span className="p-rtr-flow-number">03</span>
                  <img
                    className="p-rtr-flow-image"
                    src="/images/rtr/rtr-flow3.png"
                    alt=""
                    loading="lazy"
                  />
                  <div className="p-rtr-flow-text">
                    <h4 className="p-rtr-flow-title">関係の兆しを見つける</h4>
                    <p>
                      対話から関係性の兆しを拾い、次の面談に活かすレポートに整理する。
                    </p>
                  </div>
                </article>
                <article>
                  <span className="p-rtr-flow-number">04</span>
                  <img
                    className="p-rtr-flow-image"
                    src="/images/rtr/rtr-flow4.png"
                    alt=""
                    loading="lazy"
                  />
                  <div className="p-rtr-flow-text">
                    <h4 className="p-rtr-flow-title">人と人の対話へつなぐ</h4>
                    <p>
                      レポートをもとに必要な関係者が向き合い、次の対話へつなげる。
                    </p>
                  </div>
                </article>
                <article className="p-rtr-flow-cycle">
                  <svg
                    className="p-rtr-flow-return"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <defs>
                      <marker
                        id="rtr-flow-return-arrow"
                        viewBox="0 0 10 10"
                        refX="8"
                        refY="5"
                        markerWidth="9"
                        markerHeight="9"
                        orient="auto"
                        markerUnits="userSpaceOnUse"
                      >
                        <path
                          d="M1 1 L8 5 L1 9"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </marker>
                    </defs>
                    <path
                      d="M1000 0 V50 Q1000 100 945 100 H55 Q0 100 0 50 V0"
                      markerEnd="url(#rtr-flow-return-arrow)"
                    />
                  </svg>
                  <span className="p-rtr-flow-number">05</span>
                  <img
                    className="p-rtr-flow-cycle-image"
                    src="/images/rtr/rtr-flow-last.png"
                    alt="Trigger（きっかけ）、Stage（場）、Dialogue（対話）、Cycle（循環）を繰り返すサイクル"
                    loading="lazy"
                  />
                  <h4 className="p-rtr-flow-title">RTRとして回し続ける</h4>
                  <p>
                    Trigger・Stage・Dialogue・Cycleを節目ごとに回し、
                    <br />
                    関係性に向き合う運用を文化にする。
                  </p>
                </article>
              </div>
              <article
                className="p-rtr-signal-explanation"
                aria-labelledby="rtr-signal-heading"
              >
                <h3 className="p-rtr-brace-ttl">
                  ヒトコが拾う"関係性の変化の兆し"
                </h3>
                <p className="p-rtr-signal-description">
                  ヒトコが答えを出すのではなく、拾った兆しを人と人の対話につなげます。
                </p>
                <div
                  aria-label="RTRが見る関係の兆し"
                  className="p-rtr-relationship-signal-visual"
                >
                  <div className="p-rtr-signal-side p-rtr-signal-good">
                    <span className="p-rtr-signal-kicker">GOOD SIGNALS</span>
                    <h4 className="p-rtr-signal-title">育てたい関係性</h4>
                    <div>
                      <span className="p-rtr-signal-item">信頼</span>
                      <span className="p-rtr-signal-item">安心</span>
                      <span className="p-rtr-signal-item">尊敬</span>
                      <span className="p-rtr-signal-item">期待</span>
                    </div>
                  </div>
                  <div className="p-rtr-signal-center">
                    <img
                      alt="人と人のあいだを見るイメージ"
                      className="p-rtr-signal-center-image"
                      loading="lazy"
                      src="/images/rtr/relation-signal-center.png"
                    />
                    <h4 className="p-rtr-signal-hitoko">ヒトコ</h4>
                  </div>
                  <div className="p-rtr-signal-side p-rtr-signal-alert">
                    <span className="p-rtr-signal-kicker">EARLY SIGNS</span>
                    <h4 className="p-rtr-signal-title">見逃したくない揺らぎ</h4>
                    <div>
                      <span className="p-rtr-signal-item">遠慮</span>
                      <span className="p-rtr-signal-item">萎縮</span>
                      <span className="p-rtr-signal-item">孤立</span>
                      <span className="p-rtr-signal-item">疲れ</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </ScrollReveal>
        </section>

        <section className="p-rtr-section p-rtr-section-soft" id="difference">
          <ScrollReveal revealId="rtr-block-06" className="p-rtr-wrap">
            <p className="p-rtr-eyebrow">06 DIFFERENCE</p>
            <h2 className="p-rtr-section-heading">
              既存手法を否定するのではなく、
              <br />
              届かなかった<span>領域を補う。</span>
            </h2>
            <p className="p-rtr-lead p-rtr-difference-lead">
              1on1、サーベイ、360度評価、タレントマネジメントはいずれも必要です。RTRは、既存手法では拾いきれなかった「人と人のあいだ」を見つめ、必要な対話と運用を設計し、既存施策が機能する土台そのものを支えます。
            </p>
            <div className="p-rtr-comparison-grid">
              <section
                className="p-rtr-comparison-methods"
                aria-labelledby="rtr-methods-heading"
              >
                <h3
                  id="rtr-methods-heading"
                  className="p-rtr-comparison-heading"
                >
                  既存手法
                </h3>
                <div className="p-rtr-comparison-method">
                  <img
                    className="p-rtr-comparison-icon"
                    src="/images/rtr/diff-1on1.png"
                    alt=""
                  />
                  <div>
                    <h4 className="p-rtr-comparison-name">1on1</h4>
                    <p className="p-rtr-comparison-caption">「対話の場」</p>
                  </div>
                </div>
                <div className="p-rtr-comparison-method">
                  <img
                    className="p-rtr-comparison-icon"
                    src="/images/rtr/diff-survey.png"
                    alt=""
                  />
                  <div>
                    <h4 className="p-rtr-comparison-name">サーベイ</h4>
                    <p className="p-rtr-comparison-caption">「状態を測る」</p>
                  </div>
                </div>
                <div className="p-rtr-comparison-method">
                  <img
                    className="p-rtr-comparison-icon"
                    src="/images/rtr/diff-360.png"
                    alt=""
                  />
                  <div>
                    <h4 className="p-rtr-comparison-name">360度評価</h4>
                    <p className="p-rtr-comparison-caption">「人を見る」</p>
                  </div>
                </div>
                <div className="p-rtr-comparison-method">
                  <img
                    className="p-rtr-comparison-icon"
                    src="/images/rtr/diff-talent.png"
                    alt=""
                  />
                  <div>
                    <h4 className="p-rtr-comparison-name">
                      タレントマネジメント
                    </h4>
                    <p className="p-rtr-comparison-caption">
                      「人材を活かす仕組み」
                    </p>
                  </div>
                </div>
              </section>
              <div
                className="p-rtr-comparison-addition"
                aria-label="RTRを加える"
              >
                <span aria-hidden="true">＋ RTR</span>
              </div>
              <section
                className="p-rtr-comparison-relations"
                aria-labelledby="rtr-relations-heading"
              >
                <h3
                  id="rtr-relations-heading"
                  className="p-rtr-comparison-heading"
                >
                  関係性まで扱う
                </h3>
                <p className="p-rtr-comparison-result">
                  対話が機能する関係性をつくる
                </p>
                <p className="p-rtr-comparison-result">関係性を動かす</p>
                <p className="p-rtr-comparison-result">
                  「人」だけでなく「線」を見る
                </p>
                <p className="p-rtr-comparison-result">
                  関係性を機能させる仕組み
                </p>
              </section>
            </div>
          </ScrollReveal>
        </section>

        <section className="p-rtr-section p-rtr-coaching" id="coaching">
          <ScrollReveal revealId="rtr-block-7" className="p-rtr-wrap">
            <p className="p-rtr-eyebrow">07 SUPPORT</p>
            <h2 className="p-rtr-section-heading">
              導入して終わりではなく、
              <br />
              <span>運営側の一員</span>として回し切る。
            </h2>
            <p className="p-rtr-lead">
              ツールを入れるだけでは、文化にはなりません。
              <br />
              <span id="mac">
                <a href="https://mama-sun.com/jp/" target="_blank">
                  Mamasan&amp;Company株式会社（MAC）
                </a>
              </span>
              で磨かれPwS
              Methodとして体系化された実践知を背景に、PwSがコーチング型でともに歩みます。
            </p>
            <div className="p-rtr-roadmap-intro">
              <h3 className="p-rtr-brace-ttl">
                導入から定着・文化化までの流れ
              </h3>
              <p>
                設計から現場導入、日々の運用、定着・文化化まで、段階に合わせて伴走します。
              </p>
            </div>
            <div className="p-rtr-roadmap">
              <article className="p-rtr-roadmap-step p-rtr-left">
                <div className="p-rtr-roadmap-copy">
                  <span className="p-rtr-roadmap-number">01</span>
                  <h4 className="p-rtr-roadmap-title">初期構築支援</h4>
                  <p>
                    Trigger整理・イベント再設計・ヒトコ学習など、組織に合う土台をつくる。
                  </p>
                </div>
                <img
                  alt="初期構築支援のイメージ"
                  className="p-rtr-roadmap-image"
                  loading="lazy"
                  src="/images/rtr/phase01.png"
                />
              </article>
              <svg
                className="p-rtr-roadmap-chevron"
                viewBox="0 0 160 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M2 2 L80 21 L158 2" />
              </svg>
              <article className="p-rtr-roadmap-step p-rtr-right">
                <div className="p-rtr-roadmap-copy">
                  <span className="p-rtr-roadmap-number">02</span>
                  <h4 className="p-rtr-roadmap-title">
                    現場導入・キックオフ支援
                  </h4>
                  <p>
                    Stage／Dialogueの準備、現場へのオリエンテーションを支える。
                  </p>
                </div>
                <img
                  alt="現場導入・キックオフ支援のイメージ"
                  className="p-rtr-roadmap-image"
                  loading="lazy"
                  src="/images/rtr/phase02.png"
                />
              </article>
              <svg
                className="p-rtr-roadmap-chevron"
                viewBox="0 0 160 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M2 2 L80 21 L158 2" />
              </svg>
              <article className="p-rtr-roadmap-step p-rtr-left">
                <div className="p-rtr-roadmap-copy">
                  <span className="p-rtr-roadmap-number">03</span>
                  <h4 className="p-rtr-roadmap-title">管理職支援・運用相談</h4>
                  <p>
                    面談・声かけ・ヒトコの読み解きなど、現場の迷いをともに整理する。
                  </p>
                </div>
                <img
                  alt="管理職支援・運用相談のイメージ"
                  className="p-rtr-roadmap-image"
                  loading="lazy"
                  src="/images/rtr/phase03.png"
                />
              </article>
              <svg
                className="p-rtr-roadmap-chevron"
                viewBox="0 0 160 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M2 2 L80 21 L158 2" />
              </svg>
              <article className="p-rtr-roadmap-step p-rtr-right">
                <div className="p-rtr-roadmap-copy">
                  <span className="p-rtr-roadmap-number">04</span>
                  <h4 className="p-rtr-roadmap-title">定着支援・文化化支援</h4>
                  <p>
                    振り返り・称賛・共有を通じ、関係性に向き合う文化を育てる。
                  </p>
                </div>
                <img
                  alt="定着支援・文化化支援のイメージ"
                  className="p-rtr-roadmap-image"
                  loading="lazy"
                  src="/images/rtr/phase04.png"
                />
              </article>
            </div>
            <div className="p-rtr-coaching-close">
              <p>RTRは、面談システムを導入するサービスではありません。</p>
              <strong>
                関係性をマネジメントできる組織を、現場とともに育てるサービスです。
              </strong>
            </div>
          </ScrollReveal>
        </section>

        <section className="p-rtr-section p-rtr-section-white" id="effects">
          <ScrollReveal revealId="rtr-block-8" className="p-rtr-wrap">
            <p className="p-rtr-eyebrow">08 EFFECTS</p>
            <h2 className="p-rtr-section-heading">
              最初に変わるのは、離職と面談。
              <br />
              その先に、<span>組織の動き方が変わっていく。</span>
            </h2>
            <div className="p-rtr-effects">
              <div className="p-rtr-effects-center">
                <h3 className="p-rtr-effects-center-ttl">RTRの導入後</h3>
                <p className="p-rtr-effects-center-text">
                  関係性が動きはじめると、
                  <br />
                  組織にこんな変化が生まれます。
                </p>
              </div>
              <svg
                className="p-rtr-effects-connections"
                viewBox="0 0 1000 160"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M500 80 Q360 80 250 0 M500 80 Q640 80 750 0 M500 80 Q300 80 80 160 M500 80 V160 M500 80 Q700 80 920 160" />{" "}
              </svg>
              <article className="p-rtr-effects-item p-rtr-effects-item--1">
                <div className="p-rtr-effects-image" aria-hidden="true">
                  <img
                    src="/images/rtr/effects1.png"
                    alt="離職の兆しに、もっと早く向き合える"
                  />
                </div>
                <h3 className="p-rtr-effects-title">
                  離職の兆しに、もっと早く向き合える
                </h3>
                <p>
                  表面化する前の小さな違和感や距離を、兆しとして拾える状態へ。
                </p>
              </article>
              <article className="p-rtr-effects-item p-rtr-effects-item--2">
                <div className="p-rtr-effects-image" aria-hidden="true">
                  <img
                    src="/images/rtr/effects2.png"
                    alt="面談が“こなすもの”から“前に進めるもの”へ"
                  />
                </div>
                <h3 className="p-rtr-effects-title">
                  面談が“こなすもの”から“前に進めるもの”へ
                </h3>
                <p>向き合う材料と意味がある、次につながる対話へ。</p>
              </article>
              <article className="p-rtr-effects-item p-rtr-effects-item--3">
                <div className="p-rtr-effects-image" aria-hidden="true">
                  <img
                    src="/images/rtr/effects3.png"
                    alt="先輩後輩・同僚間も扱える"
                  />
                </div>
                <h3 className="p-rtr-effects-title">
                  先輩後輩・同僚間も扱える
                </h3>
                <p>上下だけでなく、日常の連携や期待値のズレにも向き合う。</p>
              </article>
              <article className="p-rtr-effects-item p-rtr-effects-item--4">
                <div className="p-rtr-effects-image" aria-hidden="true">
                  <img
                    src="/images/rtr/effects4.png"
                    alt="管理職が一人で背負わない"
                  />
                </div>
                <h3 className="p-rtr-effects-title">
                  管理職が一人で背負わない
                </h3>
                <p>関係性を管理職のセンスではなく、組織で支える運用へ。</p>
              </article>
              <article className="p-rtr-effects-item p-rtr-effects-item--5">
                <div className="p-rtr-effects-image" aria-hidden="true">
                  <img
                    src="/images/rtr/effects5.png"
                    alt="関係性に向き合うことが組織の文化になる"
                  />
                </div>
                <h3 className="p-rtr-effects-title">
                  関係性に向き合うことが
                  <br />
                  組織の文化になる
                </h3>
                <p>節目ごとの対話が、組織の自然な習慣として根づいていく。</p>
              </article>
            </div>
          </ScrollReveal>
        </section>

        <section className="p-rtr-section p-rtr-section-dark" id="background">
          <ScrollReveal
            revealId="rtr-block-9"
            className="p-rtr-wrap p-rtr-background-inner"
          >
            <p className="p-rtr-eyebrow">09 TRUST</p>
            <h2 className="p-rtr-section-heading p-rtr-background-heading">
              この仕組みは、机上のアイデアから
              <br />
              生まれたものではありません。
            </h2>
            <p className="p-rtr-background-lead">
              約400名規模の3Tワーカー組織での実践が、RTRの原点です。
            </p>
            <ol className="p-rtr-heritage" aria-label="RTRが生まれるまでの歩み">
              <li className="p-rtr-heritage-step p-rtr-heritage-step--mac">
                <h3 className="p-rtr-heritage-title">MAC</h3>
                <p className="p-rtr-heritage-description">
                  18年間の現場運営で培った
                  <br />
                  「つながり」の実践知
                </p>
              </li>
              <li className="p-rtr-heritage-step p-rtr-heritage-step--method">
                <h3 className="p-rtr-heritage-title">PwS Method</h3>
                <p className="p-rtr-heritage-description">
                  現場の実践知を
                  <br />
                  方法論として体系化
                </p>
              </li>
              <li className="p-rtr-heritage-step p-rtr-heritage-step--pws">
                <h3 className="p-rtr-heritage-title">PWS</h3>
                <p className="p-rtr-heritage-description">
                  組織×AI時代の
                  <br />
                  コーチングサービスへ
                </p>
              </li>
              <li className="p-rtr-heritage-step p-rtr-heritage-step--rtr">
                <h3 className="p-rtr-heritage-title">RTR</h3>
                <p className="p-rtr-heritage-description">
                  人と人のあいだを扱う
                  <br />
                  仕組みとして提供
                </p>
              </li>
            </ol>
            <p className="p-rtr-background-closing">
              18年間の現場運営から、コーチングのかたちへ。
            </p>
          </ScrollReveal>
        </section>

        <section className="p-rtr-contact" id="contact">
          <ScrollReveal
            revealId="rtr-block-10"
            className="p-rtr-wrap p-rtr-contact-inner"
          >
            <h2 className="p-rtr-contact-heading">
              人間関係を、当事者任せで終わらせない。
            </h2>
            <p className="p-rtr-contact-copy">
              離職の前にある、すれ違いへ。
              <br />
              停滞の前にある、言えない一言へ。
              <br />
              RTRは、その「あいだ」に向き合います。
            </p>
            <div className="p-rtr-contact-actions">
              <a
                className="p-rtr-button p-rtr-button-primary"
                href="/contact?service=rtr"
              >
                自社での活用イメージを相談する
              </a>
              <a
                className="p-rtr-button p-rtr-button-secondary"
                href="#concept"
              >
                RTRの考え方を詳しく知る <span aria-hidden="true">→</span>
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </>
  );
}
