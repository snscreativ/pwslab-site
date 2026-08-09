export default function ProfileMatsui() {
  return (
    <aside
      className="p-article__profile"
      aria-labelledby="profile-matsui-title"
    >
      <div className="p-article__profile-image">
        <img src="/images/profile/matsui.png" alt="松井先生" loading="lazy" />
      </div>

      <div className="p-article__profile-body">
        <p className="p-article__profile-label">PROFILE</p>

        <h2 id="profile-matsui-title" className="p-article__profile-name">
          松井 勇策
        </h2>

        <p className="p-article__profile-role">
          雇用系シンクタンク iU組織研究機構代表理事・社労士
        </p>

        <p className="p-article__profile-text">
          雇用関係の政策や法令を、企業の人材戦略と融合して推進する領域の専門家。AI関連の支援にも注力。ほか、社労士の価値の向上に繋がる新しい業務モデルや知見の発信も多く手掛けている。
        </p>
      </div>
    </aside>
  );
}
