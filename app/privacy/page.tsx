import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 動画スリム",
  description: "動画スリムが扱うデータと写真ライブラリへのアクセスについて説明します。",
  openGraph: {
    title: "プライバシーポリシー | 動画スリム",
    description: "動画スリムが扱うデータと写真ライブラリへのアクセスについて説明します。",
    images: [],
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    title: "プライバシーポリシー | 動画スリム",
    description: "動画スリムが扱うデータと写真ライブラリへのアクセスについて説明します。",
    images: [],
  },
};

export default function PrivacyPage() {
  return (
    <main className="policy-shell">
      <nav className="policy-nav">
        <a href="/">← サポートへ戻る</a>
        <a href="/en/privacy" hrefLang="en">English</a>
      </nav>
      <article className="policy">
        <p className="section-label">PRIVACY POLICY</p>
        <h1>プライバシーポリシー</h1>
        <p className="updated">制定日・最終更新日：2026年8月15日</p>

        <p>
          動画スリム（以下「本アプリ」）は、利用者の動画をiPhone上で圧縮するアプリです。
          開発者のサーバーへ動画、写真、写真ライブラリの識別子、ファイル名、位置情報を送信しません。
        </p>

        <h2>1. 収集するデータ</h2>
        <p>
          本アプリは、開発者による利用者データの収集、追跡、広告配信、行動分析を行いません。
          アカウント作成も必要ありません。
        </p>

        <h2>2. 写真ライブラリ</h2>
        <p>
          動画の一覧表示、プレビュー、圧縮、圧縮版の保存、利用者が選択した元動画の削除のため、
          iOSの写真ライブラリへアクセスします。アクセス範囲は利用者がiOSの設定で変更できます。
          iCloud上にのみある動画は、利用者がプレビューまたは圧縮を選んだ場合にiOSを通じて取得されます。
        </p>

        <h2>3. 端末内に保存する情報</h2>
        <p>
          圧縮成功回数、削減できた容量の累計、旧バージョンからの移行フラグ、
          最後にレビュー表示を要求したアプリバージョンをiPhone内のUserDefaultsへ保存します。
          これらを開発者へ送信せず、アプリを削除すると通常は削除されます。
        </p>

        <h2>4. アプリ内購入</h2>
        <p>
          Proの購入と復元はAppleのStoreKitおよびApp Storeを通じて処理されます。
          本アプリは購入資格を検証しますが、支払情報を取得または保存しません。
          Appleによるデータの取り扱いにはAppleのプライバシーポリシーが適用されます。
        </p>

        <h2>5. 元動画の削除</h2>
        <p>
          元動画を自動で削除しません。圧縮版の保存後、利用者が明示的に削除を選び、
          iOSの確認を完了した場合だけ削除します。iCloud写真を使用している場合、
          削除は同じApple Accountのほかの端末にも反映されます。
        </p>

        <h2>6. 子どものプライバシー</h2>
        <p>本アプリは年齢を問わず、開発者による個人データの収集を行いません。</p>

        <h2>7. 変更とお問い合わせ</h2>
        <p>
          機能や法令の変更に応じて本ポリシーを更新する場合があります。
          重要な変更は本ページの日付を更新してお知らせします。
        </p>
        <a className="primary policy-contact" href="https://github.com/somtum1120/video-slim-support/issues/new">
          プライバシーについて問い合わせる
        </a>
      </article>
    </main>
  );
}
