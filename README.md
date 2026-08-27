# 動画スリム サポート

「動画スリム」は、iPhone内の大きな動画を見つけ、端末上で圧縮版を作成するアプリです。動画を開発者のサーバーへ送信しません。

このリポジトリは公式日本語サポート／プライバシーサイトの正本です。VM101 `/home/codex/homespace/projects/video-slim-support`で管理し、MacはSitesのビルド・配布にだけ使用します。

## ページ

- `/`: サポートとよくある質問
- `/privacy`: App Store Connectで使用する公開プライバシーポリシー
- `/en`: English support and FAQ
- `/en/privacy`: English privacy policy
- [`PRIVACY.md`](PRIVACY.md): GitHubから参照できる同内容の要約
- [`PRIVACY_EN.md`](PRIVACY_EN.md): English privacy policy summary

## よくある質問

### 元の動画は自動で削除されますか？

いいえ。圧縮版の保存と再生確認が完了した後も、元動画は残ります。削除を選んだ場合だけ、iOSの確認画面を経て削除します。

### iCloud写真の動画も圧縮できますか？

はい。取得が必要なときは、操作画面で通信と進捗を表示します。通信環境とiPhoneの空き容量をご確認ください。

### 購入を復元するには？

アプリの「設定」から「購入を復元」を選んでください。同じApple Accountで購入済みの非消費型アイテムが対象です。

## お問い合わせ

[新しいサポート依頼を作成](https://github.com/somtum1120/video-slim-support/issues/new)してください。個人情報や動画そのものは添付しないでください。

## 開発

```sh
npm install
npm run dev
npm test
```

公開サイトは利用者データを収集せず、認証、分析、広告、runtime secretを使用しません。

## English support

Video Slim finds large videos on your iPhone and creates smaller copies without
sending videos to a developer-operated server. Single-video compression is free
and unlimited. Video Slim Pro is a one-time purchase that unlocks batch
compression for 2–20 selected videos; there is no subscription.

### Are originals deleted automatically?

No. The original remains after a compressed copy is saved and verified. It is
deleted only if you explicitly choose deletion and confirm it in iOS.

### Can Video Slim compress videos stored in iCloud Photos?

Yes. When a video must be downloaded, the app shows network activity and
progress. A network connection and sufficient free space are required.

### How do I restore Pro?

Open Settings in Video Slim and choose Restore Purchase while signed in with
the Apple Account that made the original non-consumable purchase.

For help, [open a support request](https://github.com/somtum1120/video-slim-support/issues/new).
Do not attach personal information or the video itself.
