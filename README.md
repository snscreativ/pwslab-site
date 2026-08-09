# PwS Next.js

## ローカル環境起動方法

コードエディタ　ターミナル
node -v
npm -v
Node.jsとnpmが入ってるか確認
入ってなければ

```bash
npm install
```

node_modules が作られます
（node_modulesはgithubにはアップロードしないでください）
その後

```bash
npm install
npm run dev
```

ブラウザで以下を確認できます

```txt
http://localhost:3000
```

## 環境変数

お問い合わせ送信をローカルで完全に動かす場合、以下の環境変数が必要です。

```txt
GOOGLE_PRIVATE_KEY
GOOGLE_CLIENT_EMAIL
GOOGLE_SHEET_ID
GOOGLE_SHEET_RANGE
RESEND_API_KEY
FROM_EMAIL
TO_EMAIL
```

本番ではVercelのEnvironment Variablesに設定します。

Notion連携では

```txt
NOTION_TOKEN
NOTION_KNOWLEDGE_DATA_SOURCE_ID
NOTION_NEWS_DATA_SOURCE_ID
```

を使用します。

`NOTION_TOKEN` は絶対に `NEXT_PUBLIC_` を付けないでください。ブラウザ側に公開されてしまうためです。

## CSS方針

- Tailwind CSSは使わない
- CSS Modulesも使わない
- 通常CSSを `styles/` に分割して管理
- 色とフォントファミリーのみ `:root` のCSS変数で管理
- font-sizeは `--fz-sm` などにせず、各classに `rem` / `clamp()` で直接書く
- 余白も基本は `rem` / `clamp()` を直接書く
- borderのみ必要に応じてpx指定

## class名ルール

- `l-`：レイアウト用
  - 例：`l-header`, `l-footer`, `l-section`, `l-inner`
- `c-`：共通コンポーネント用
  - 例：`c-button`, `c-card`, `c-section-heading`
- `p-`：ページ固有用
  - 例：`p-top-hero`, `p-contact-form`
- `js-`：JavaScript操作用。現時点では未使用

## 触ってよい場所

app/
→ ページ本体

components/
→ 共通パーツ・機能

lib/
→ データ取得処理

styles/
→ CSS

public/
→ 画像などの静的ファイル

詳細

- `app/page.tsx`：トップページの中身
- `app/contact/page.tsx`：お問い合わせページの中身
- `app/privacy/page.tsx`：プライバシーポリシーページの中身
- `app/thanks/page.tsx`：送信完了ページの中身
- `app/knowledge/page.tsx`：知見記事一覧ページ
- `app/knowledge/[slug]/page.tsx`：知見記事詳細ページ
- `app/news/page.tsx`：お知らせ一覧ページ
- `app/news/[slug]/page.tsx`：お知らせ詳細ページ
- `components/Header.tsx`：ヘッダー
- `components/Footer.tsx`：フッター
- `components/ContactForm.tsx`：お問い合わせフォームUI
- `components/NotionBlocks.tsx`：Notion本文ブロックの表示処理
- `components/ProfileSaito.tsx`：齊藤さんプロフィール
- `components/ProfileMatsui.tsx`：松井先生プロフィール
- `styles/`：CSS調整

## 重要ファイル

- `app/layout.tsx`
  - サイト全体の共通レイアウト
  - Header / Footer
  - Metadata
  - OGP
  - favicon
  - Google Analytics
  - 共通CSS読み込み

## 基本触らない場所

- `app/api/contact/route.ts`：お問い合わせ送信処理
- `lib/notion.ts`：Notion API・データ取得処理
- `package.json`：依存関係
- `next.config.js`：Next.js設定

## Notion連携

知見記事は `/knowledge` に一覧、`/knowledge/[slug]` に詳細ページとして表示します。
お知らせは `/news` に一覧、`/news/[slug]` に詳細ページとして表示します。

### Notion DBのプロパティ

以下のプロパティ名で取得します。

```txt
Title: 記事タイトル
Slug: URL用文字列。例 knowledge
EyecatchUrl: アイキャッチ画像URL
EyecatchFile: Notionにアップロードしたアイキャッチ画像
Summary: 一覧ページ・description用の概要
Published: チェック入りで公開
PublishDate: 公開日
UpdatedDate: 更新日

ReferenceTitle: 参考記事タイトル
ReferenceUrl: 参考記事URL
この２つの記入がある場合のみ松井先生の参考記事ブロックが表示されます。
```

# アイキャッチ画像

画像は

```txt
public/images/knowledge/
```

へ配置します。

Notionには

```txt
https://www.pwslab.jp/images/knowledge/001.webp
```

のようにURLを設定します。

# 本文ブロック

対応しているブロック

- h2
- h3
- 本文
- 箇条書きリスト
- 引用
- コールアウト
- 画像（100％の大きさで表示）

---

# RichText対応

- 太字
- 斜体
- 下線
- 打ち消し線
- テキストリンク、URL
- 文字色（赤、青、オレンジ、緑）
- 区切り線

---

# 特殊Callout

本文中のCalloutは以下の文字列を自動判定します。

---

## COMMENT_SAITO

```txt
COMMENT_SAITO
```

齊藤さんコメントとして専用デザインで表示します。

---

## PROFILE_SAITO

```txt
PROFILE_SAITO
```

齊藤さんプロフィールを表示します。

---

## PROFILE_MATSUI

```txt
PROFILE_MATSUI
```

松井先生プロフィールを表示します。
