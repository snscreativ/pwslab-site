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

`NOTION_TOKEN` は絶対に `NEXT_PUBLIC_` を付けないでください。ブラウザ側に公開されてしまうためです。

## CSS方針

- Tailwind CSSは使わない
- CSS Modulesも使わない
- 通常CSSを `styles/` に分割して管理
- 色とフォントファミリーのみ `:root` のCSS変数で管理
- font-sizeは `--fz-sm` などにせず、各classに `rem` / `clamp()` で直接書く
- 余白も基本は `rem` / `clamp()` を直接書く
- 1pxのborderなどはpxのままでOK

## class名ルール

- `l-`：レイアウト用
  - 例：`l-header`, `l-footer`, `l-section`, `l-inner`
- `c-`：共通コンポーネント用
  - 例：`c-button`, `c-card`, `c-section-heading`
- `p-`：ページ固有用
  - 例：`p-top-hero`, `p-contact-form`
- `js-`：JavaScript操作用。現時点では未使用

## 触ってよい場所

- `components/pages/HomePage.tsx`：トップページの中身
- `components/pages/ContactPage.tsx`：お問い合わせページの中身
- `components/pages/PrivacyPage.tsx`：プライバシーポリシーの中身
- `components/pages/ThanksPage.tsx`：送信完了ページの中身
- `app/**/page.tsx`：Next.jsの入口ファイル。基本は薄く保つ
- `components/Header.tsx`：ヘッダー
- `components/Footer.tsx`：フッター
- `components/ContactForm.tsx`：お問い合わせフォームUI
- `styles/`：CSS調整

## 基本触らない場所

- `app/api/contact/route.ts`：お問い合わせ送信処理
- `lib/notion.ts`：今後Notion連携を入れる場所
- `package.json`：依存関係
- `next.config.js`：Next.js設定

## Notion連携

知見記事は `/knowledge` に一覧、`/knowledge/[slug]` に詳細ページとして表示します。

### Notion DBのプロパティ

以下のプロパティ名で取得します。

```txt
Title: タイトル
Slug: URL用文字列。例 knowledge-001
EyecatchUrl: 外部画像URL
EyecatchFile: Notionにアップロードした画像
Summary: 一覧・description用の概要
SaitoComment: 記事下部の齊藤コメント
Published: 公開チェック
PublishDate: 公開日
UpdatedDate: 更新日
```

本文はNotionページ下部の本文ブロックを取得します。対応している主なブロックは、段落、見出し、箇条書き、番号リスト、引用、コールアウト、区切り線、画像です。
