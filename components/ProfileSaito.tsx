export default function ProfileSaito() {
  return (
    <aside className="p-article__profile" aria-labelledby="profile-saito-title">
      <div className="p-article__profile-image">
        <img src="/images/profile/saito.jpg" alt="齊藤加奈子" loading="lazy" />
      </div>

      <div className="p-article__profile-body">
        <p className="p-article__profile-label">PROFILE</p>

        <h2 id="profile-saito-title" className="p-article__profile-name">
          齊藤 加奈子
        </h2>

        <p className="p-article__profile-role">
          株式会社PwS 代表取締役・Mamasan&amp;Company 株式会社 取締役
        </p>

        <p className="p-article__profile-text">
          組織設計・業務設計を担当。 Mamasan&amp;Companyで培った業務可視化や
          分散型組織運営の知見をもとに、
          人とAIが協働できる仕組みづくりを支援しています。
        </p>
      </div>
    </aside>
  );
}
