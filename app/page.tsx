export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">VIDEO SLIM SUPPORT</span>
          <h1>動画スリム</h1>
          <p className="lead">
            iPhoneの動画を、端末の外へ送らずに小さくするアプリです。
          </p>
          <div className="actions">
            <a className="primary" href="#support">サポートを見る</a>
            <a className="secondary" href="/privacy">プライバシー</a>
          </div>
        </div>
        <img className="app-icon" src="/app-icon.png" alt="動画スリムのアプリアイコン" />
      </section>

      <section className="section" id="support">
        <p className="section-label">SUPPORT</p>
        <h2>よくある質問</h2>
        <div className="cards">
          <article>
            <h3>元動画は自動で消えますか？</h3>
            <p>消えません。圧縮版の保存を確認したあと、利用者が選んだ場合だけiOSの削除確認を表示します。</p>
          </article>
          <article>
            <h3>動画はアップロードされますか？</h3>
            <p>アップロードしません。動画の読み込み、圧縮、確認はiPhone上で行います。</p>
          </article>
          <article>
            <h3>圧縮後も容量が減らない</h3>
            <p>削除した元動画は「最近削除した項目」に残ります。完全削除するまで空き容量に反映されない場合があります。</p>
          </article>
        </div>
        <div className="contact">
          <div>
            <p className="section-label">CONTACT</p>
            <h2>解決しないとき</h2>
            <p>動画そのものは添付せず、iPhone機種、iOSバージョン、表示されたメッセージをお知らせください。</p>
          </div>
          <a className="primary" href="https://github.com/somtum1120/video-slim-support/issues/new">問い合わせを書く</a>
        </div>
      </section>

      <footer>
        <span>© 2026 Video Slim</span>
        <a href="/privacy">プライバシーポリシー</a>
      </footer>
    </main>
  );
}
