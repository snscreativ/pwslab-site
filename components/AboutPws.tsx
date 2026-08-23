import Link from "next/link";
export default function AboutPws() {
  return (
    <section className="c-about-pws">
      <div className="c-about-pws__inner">
        <p className="c-about-pws__label">ABOUT PWS</p>

        <h2 className="c-about-pws__title">
          実践に基づく組織づくりを
          <br className="u-sp" />
          共に進めます
        </h2>

        <div className="c-about-pws__text">
          <p>
            PwSは、グループ会社である
            <a
              href="https://www.mamasan.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Mamasan&amp;Company株式会社
            </a>
            が十数年にわたり実践し、
            <br />
            磨き続けてきた組織運営の仕組みを体系化し、
            他の企業でも実装するために生まれた会社です。
            <br />
            在宅ワークという制約から生まれた業務プロセスの可視化、役割設計、
            <br />
            誰もが安心して働けるコミュニケーション文化、そしてそれらを支えるIT環境。
          </p>

          <p>
            その実践を、AI時代の組織設計思想
            <span className="c-about-pws__keyword">
              Human Driven Design（HDD）
            </span>
            へと発展させ、人とAIの協働を実現しています。
          </p>

          <div className="c-about-pws__hdd">
            <h3>Human Driven Design（HDD）とは</h3>

            <p>
              人間の働き方や組織の仕組みを中心に考え、
              AIを「道具」ではなく「組織の一員」として設計するPwS独自の組織設計思想です。
              人とAIがそれぞれの役割を担い、協働できる組織づくりを目指しています。
            </p>
          </div>

          <p>
            私たちがお届けするのは、机上の理論ではありません。
            <br />
            現場で実践し、失敗し、改善を重ねてきた組織づくりの知見を、
            <br />
            それぞれの企業に合わせて再設計し、実装まで共に進めます。
          </p>
        </div>

        <div className="c-about-white">
          <Link href="/contact" className="c-button c-button--text">
            お問い合わせはこちら <span className="c-icon-arrow">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
