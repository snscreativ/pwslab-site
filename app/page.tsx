import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { getNewsList } from "@/lib/notion";
import "@/styles/top.css";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const newsList = await getNewsList();
  const latestNews = newsList[0];

  return (
    <main className="p-top">
      {/* hero section */}
      <section className="p-top-hero" id="top">
        <div className="p-top-hero__block">
          <div className="p-top-hero__body">
            <h1 className="p-top-hero__title">
              人とAIの協働を設計し、
              <br />
              組織を進化させる。
            </h1>
            <p className="p-top-hero__lead">
              PwSは、戦略・組織・プロダクトをつなぎ、
              <br />
              人とAIがそれぞれの強みを発揮できる仕組みを
              <br className="u-tb" />
              デザインします。
            </p>
            <Button href="/#services">サービスを見る</Button>
          </div>

          <div className="p-top-hero__graphic" aria-hidden="true">
            <img src="/images/top/hero.png" alt="" />
          </div>
        </div>
        {latestNews && (
          <div className="p-top-news">
            <span className="p-top-news__label">NEWS</span>

            <span className="p-top-news__date">
              {latestNews.publishDate.replaceAll("-", ".")}
            </span>

            <a href={`/news/${latestNews.slug}`} className="p-top-news__link">
              {latestNews.title}
              <span className="p-top-news__arrow">›</span>
            </a>
          </div>
        )}
      </section>

      <section className="p-top-problem l-section" id="problem">
        <div className="l-inner">
          <div className="p-top-problem__body">
            <p>人手不足や採用難が続く中でも、仕事の進め方は変わっていない。</p>
            <p>
              AIを導入しても、仕事の進め方が変わらなければ、
              <br className="u-pc" />
              AIの成果を確認する仕事が増えただけ。
            </p>
            <p>
              人件費に加え、AIやSaaSへの投資も増えている。
              <br className="u-pc" />
              その効果を説明できる組織は多くない。
            </p>
            <p>同じ人数でも、生み出せる価値の差が広がっている。</p>
            <div className="p-top-problem__line"></div>
            <div className="p-top-problem__closing">
              <h2>
                人の問題ではなく、
                <br className="u-sp" />
                AIの問題でもない。
                <br />
                組織の問題かもしれません。
              </h2>
            </div>
          </div>
        </div>
        <div className="p-top-problem__graphic" aria-hidden="true">
          <img src="images/top/problem.png" alt="" />
        </div>
      </section>

      <section className="p-top-philosophy l-section" id="philosophy">
        <div className="l-inner">
          <div className="p-top-philosophy__graphic" aria-hidden="true">
            <img src="/images/top/philosophy.png" alt="" />
          </div>
          <div className="p-top-philosophy__text">
            <h2 className="c-heading-primary">
              働き方の常識を疑うところから始まる
            </h2>
            <div className="p-top-philosophy__rule" />
            <p>
              私たちは、在宅ワーカーとの組織運営を通じて、
              <br />
              働き方を再定義してきました。
            </p>
            <p>
              4,000を超える業務ID。
              <br />
              業務単位制 / 非同期 / 在宅 / 時短 / 分散型組織。
            </p>
            <p className="p-top-philosophy__highlight">
              時間ではなく、
              <br className="u-xs" />
              役割と成果によって成立する働き方
            </p>{" "}
            <p>
              その経験が、人とAIが共に機能する組織設計へと広がり、
              <br className="u-hide-xs" />
              新たな働き方の再定義へとつながっています。
            </p>
          </div>
        </div>
      </section>

      <section className="p-top-services l-section" id="services">
        <div className="l-inner">
          <SectionHeading label="SERVICES" title="私たちができること" />

          <div className="p-top-services__grid">
            <article className="c-card p-top-services__card">
              <div className="c-card__border">
                <div className="c-card__icon">
                  <img src="/images/top/service-1.png" alt="" />
                </div>
                <h3 className="c-card__title">組織設計支援</h3>
                <div className="c-card__point"></div>
                <p className="c-card__text">
                  人とAIがそれぞれの強みを発揮できる組織構造を設計します。役割定義から業務フローの再設計まで、組織全体を俯瞰した支援を行います。
                </p>
              </div>
            </article>

            <article className="c-card p-top-services__card">
              <div className="c-card__border">
                <div className="c-card__icon">
                  <img src="/images/top/service-2.png" alt="" />
                </div>
                <h3 className="c-card__title">業務構造化支援</h3>
                <div className="c-card__point"></div>
                <p className="c-card__text">
                  業務を単位ごとに分解・定義し、非同期・分散型での遂行を可能にする構造化を支援します。4,000超の業務ID構築の知見を活かします。
                </p>
              </div>
            </article>

            <article className="c-card p-top-services__card">
              <div className="c-card__border">
                <div className="c-card__icon">
                  <img src="/images/top/service-3.png" alt="" />
                </div>
                <h3 className="c-card__title">AI協働設計支援</h3>
                <div className="c-card__point"></div>
                <p className="c-card__text">
                  AIの導入で終わらせない。人とAIの役割分担を設計し、組織の中でAIが真に機能する仕組みをデザインします。
                </p>
              </div>
            </article>
          </div>

          <div className="p-top-services__cta">
            <Button href="/contact">まずはご相談ください</Button>
          </div>
        </div>
      </section>

      <section className="p-top-diagnosis l-section" id="diagnosis">
        <div className="l-inner">
          <SectionHeading
            label="DIAGNOSIS"
            title="AI協働成熟度診断"
            align="center"
            lead={
              "いくつかの質問にご回答いただくだけで、 \n組織のAI活用に向けた「現在地」を診断します。"
            }
          />
          <div className="p-top-diagnosis__card">
            <iframe
              src="https://app.relevanceai.com/form/bcbe5a/5ff8a9f7-2326-4697-8fe9-8c743f32f511?version=latest&hideLogo=true&ctaText=%E8%A8%BA%E6%96%AD%E9%96%8B%E5%A7%8B+%28%E8%A8%BA%E6%96%AD%E3%81%AB%E3%81%AF+15%E7%A7%92%EF%BD%9E20%E7%A7%92%E3%81%8B%E3%81%8B%E3%82%8A%E3%81%BE%E3%81%99%29"
              title="AI協働成熟度診断フォーム"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="p-top-company l-section" id="company">
        <div className="l-inner">
          <div className="p-top-company__grid">
            <div>
              <SectionHeading label="COMPANY" title="会社概要" />
              <table className="p-top-company__table">
                <tbody>
                  <tr>
                    <td>商号</td>
                    <td>
                      株式会社PwS
                      <br className="u-xs" />
                      （ピーダブリュエス）
                    </td>
                  </tr>
                  <tr>
                    <td>所在地</td>
                    <td>
                      〒102-0083
                      <br />
                      東京都千代田区麹町6-6-2
                      <br />
                      番町麹町ビルディング <br className="u-xs" />
                      WeWork麹町
                    </td>
                  </tr>
                  <tr>
                    <td>設立</td>
                    <td>2026年6月4日</td>
                  </tr>
                  <tr>
                    <td>役員構成</td>
                    <td>
                      代表取締役　齊藤 加奈子
                      <br />
                      取締役　田中 茂樹
                    </td>
                  </tr>
                  <tr>
                    <td>資本金</td>
                    <td>5,000,000円</td>
                  </tr>
                  <tr>
                    <td>事業内容</td>
                    <td>
                      組織設計支援
                      <br />
                      業務構造化支援
                      <br />
                      AI協働設計支援
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-top-company__story">
              <p>
                私たちは、在宅ワーカーとの組織運営を通じて、
                <br className="u-hide-xs" />
                働き方を再定義してきました。
              </p>
              <p>
                時間ではなく、
                <br />
                役割と成果によって成立する働き方。
              </p>
              <p>
                その経験が、
                <br className="u-hide-xs" />
                人とAIが共に機能する組織設計へと広がり、
                <br className="u-hide-xs" />
                新たな働き方の再定義へとつながっています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-top-history l-section">
        <div className="l-inner">
          <div className="c-section-heading">
            <p className="c-label">OUR HISTORY</p>

            <h2 className="c-heading-primary">
              原点｜実践で磨き続けた <br className="u-sp" />
              PwS Method
            </h2>

            <p className="c-section-heading__lead">
              PwS Methodは、
              <br className="u-sp" />
              Mamasan&amp;Company株式会社が
              <br />
              15年以上磨き続けてきた組織運営の
              <br className="u-xs" />
              実践から生まれたメソッドです。
              <br />
              働き方の制約を乗り越えるために
              <br className="u-xs" />
              積み重ねてきた実践が、 <br className="u-sp" />
              現在のPwS Methodへとつながっています。
            </p>
          </div>

          <div className="p-top-history__list">
            {/* STEP 01 */}
            <div className="p-top-history__item">
              {/* PC・タブレット用 */}
              <p className="p-top-history__step p-top-history__step--pc">
                STEP 01
                <span className="p-top-history__year">2008</span>
              </p>

              <div className="p-top-history__line">
                <span className="p-top-history__dot"></span>
              </div>

              <div className="p-top-history__content">
                {/* スマホ用 */}
                <div className="p-top-history__meta p-top-history__meta--sp">
                  <div className="p-top-history__step-info">
                    <span className="p-top-history__step-sp">STEP 01</span>
                    <span className="p-top-history__year-sp">2008</span>
                  </div>

                  <p className="p-top-history__label">ORIGIN</p>
                </div>

                {/* PC・タブレット用 */}
                <p className="p-top-history__label p-top-history__label--pc">
                  ORIGIN
                </p>

                <h3 className="p-top-history__title">
                  短時間しか働けないことは、仕事の制約条件ではない。
                </h3>

                <p className="p-top-history__text">
                  働く意欲があっても、従来の働き方では力を発揮できない人たち。
                  その課題から、「動ける時間ではなく、成果を生み出す仕組み」を
                  設計する組織づくりが始まりました。
                </p>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="p-top-history__item">
              {/* PC・タブレット用 */}
              <p className="p-top-history__step p-top-history__step--pc">
                STEP 02
              </p>

              <div className="p-top-history__line">
                <span className="p-top-history__dot"></span>
              </div>

              <div className="p-top-history__content">
                {/* スマホ用 */}
                <div className="p-top-history__meta p-top-history__meta--sp">
                  <div className="p-top-history__step-info">
                    <span className="p-top-history__step-sp">STEP 02</span>
                  </div>

                  <p className="p-top-history__label">APPROACH</p>
                </div>

                {/* PC・タブレット用 */}
                <p className="p-top-history__label p-top-history__label--pc">
                  APPROACH
                </p>

                <h3 className="p-top-history__title">
                  「分散処理」という働き方の発見。
                </h3>

                <p className="p-top-history__text">
                  一人で完結する仕事ではなく、複数人で一つの成果を生み出す
                  「分散処理」という働き方を確立。
                  時間や場所の制約を超えて、成果を生み出せる組織へと進化しました。
                </p>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="p-top-history__item">
              {/* PC・タブレット用 */}
              <p className="p-top-history__step p-top-history__step--pc">
                STEP 03
              </p>

              <div className="p-top-history__line">
                <span className="p-top-history__dot"></span>
              </div>

              <div className="p-top-history__content">
                {/* スマホ用 */}
                <div className="p-top-history__meta p-top-history__meta--sp">
                  <div className="p-top-history__step-info">
                    <span className="p-top-history__step-sp">STEP 03</span>
                  </div>

                  <p className="p-top-history__label">CULTURE</p>
                </div>

                {/* PC・タブレット用 */}
                <p className="p-top-history__label p-top-history__label--pc">
                  CULTURE
                </p>

                <h3 className="p-top-history__title">
                  必須要件は業務の見える化。
                </h3>

                <p className="p-top-history__text">
                  「あの人しか分からない」では、組織は成り立ちません。
                  業務の見える化を組織運営の必須要件とし、
                  フローチャート・マニュアル・判断基準を整備。
                  誰が担当しても、同じ品質で成果を生み出せる文化を築いてきました。
                </p>
              </div>
            </div>

            {/* STEP 04 */}
            <div className="p-top-history__item">
              {/* PC・タブレット用 */}
              <p className="p-top-history__step p-top-history__step--pc">
                STEP 04
                <span className="p-top-history__year">2018</span>
              </p>

              <div className="p-top-history__line">
                <span className="p-top-history__dot"></span>
              </div>

              <div className="p-top-history__content">
                {/* スマホ用 */}
                <div className="p-top-history__meta p-top-history__meta--sp">
                  <div className="p-top-history__step-info">
                    <span className="p-top-history__step-sp">STEP 04</span>
                    <span className="p-top-history__year-sp">2018</span>
                  </div>

                  <p className="p-top-history__label">ORGANIZATION</p>
                </div>

                {/* PC・タブレット用 */}
                <p className="p-top-history__label p-top-history__label--pc">
                  ORGANIZATION
                </p>

                <h3 className="p-top-history__title">
                  400名超のフルリモート組織運営へ。
                </h3>

                <p className="p-top-history__text">
                  業務の見える化を土台に、多様な業種・業態のBPOで実践を積み重ね、
                  400名を超えるフルリモート組織へと成長。
                  働く場所や時間にとらわれない組織運営を磨き続けてきました。
                </p>
              </div>
            </div>

            {/* STEP 05 */}
            <div className="p-top-history__item">
              {/* PC・タブレット用 */}
              <p className="p-top-history__step p-top-history__step--pc">
                STEP 05
                <span className="p-top-history__year">2023</span>
              </p>

              <div className="p-top-history__line">
                <span className="p-top-history__dot"></span>
              </div>

              <div className="p-top-history__content">
                {/* スマホ用 */}
                <div className="p-top-history__meta p-top-history__meta--sp">
                  <div className="p-top-history__step-info">
                    <span className="p-top-history__step-sp">STEP 05</span>
                    <span className="p-top-history__year-sp">2023</span>
                  </div>

                  <p className="p-top-history__label">NEW MEMBER</p>
                </div>

                {/* PC・タブレット用 */}
                <p className="p-top-history__label p-top-history__label--pc">
                  NEW MEMBER
                </p>

                <h3 className="p-top-history__title">
                  AIという新しいメンバーが、自然に組織へ加わる。
                </h3>

                <p className="p-top-history__text">
                  人には人の、AIにはAIの得意分野があります。
                  それぞれが最も力を発揮できる役割を担い、一つの価値を生み出す。
                  役割を設計する文化があったからこそ、
                  AIも自然に組織の一員となりました。
                </p>
              </div>
            </div>

            {/* STEP 06 */}
            <div className="p-top-history__item">
              {/* PC・タブレット用 */}
              <p className="p-top-history__step p-top-history__step--pc">
                STEP 06
              </p>

              <div className="p-top-history__line">
                <span className="p-top-history__dot"></span>
              </div>

              <div className="p-top-history__content">
                {/* スマホ用 */}
                <div className="p-top-history__meta p-top-history__meta--sp">
                  <div className="p-top-history__step-info">
                    <span className="p-top-history__step-sp">STEP 06</span>
                  </div>

                  <p className="p-top-history__label">PwS METHOD</p>
                </div>

                {/* PC・タブレット用 */}
                <p className="p-top-history__label p-top-history__label--pc">
                  PwS METHOD
                </p>

                <h3 className="p-top-history__title">
                  Human Driven. AI Managed.
                </h3>

                <p className="p-top-history__text">
                  MACで15年以上磨き続けてきた実践を、PwSがメソッドとして体系化。
                  その土台には、常に「業務の見える化」があります。
                  働き方の制約は、
                  <span className="p-top-history__emphasis">
                    役割を設計する文化
                  </span>
                  を育てました。
                </p>
              </div>
            </div>
          </div>

          <p className="p-top-history__closing">
            役割を設計すれば、
            <br className="u-xs" />
            働く場所や時間を問わず、
            <br />
            人もAIも、それぞれの力を活かし、
            <br className="u-sp" />
            一つの価値を生み出せる。
            <br />
            <br />
            これが、PwS Methodです。
          </p>
        </div>
      </section>

      <section className="p-top-cta">
        <h2>
          あなたの組織について、
          <br />
          お聞かせください。
        </h2>
        <p>
          組織設計、業務構造化、AI協働について、
          <br className="u-xs" />
          まずはご相談ください。
        </p>
        <Button href="/contact">お問い合わせフォームへ</Button>
        <div className="p-top-cta__graphic">
          <img src="/images/top/contact.png" alt="" />
        </div>
      </section>
    </main>
  );
}
