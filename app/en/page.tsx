import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Slim Support",
  description: "Support and privacy information for Video Slim, an on-device iPhone video compressor.",
  alternates: {
    canonical: "/en",
    languages: { "ja-JP": "/", "en-US": "/en" },
  },
  openGraph: {
    title: "Video Slim Support",
    description: "Support and privacy information for Video Slim, an on-device iPhone video compressor.",
    images: ["/og.png"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Slim Support",
    description: "Support and privacy information for Video Slim, an on-device iPhone video compressor.",
    images: ["/og.png"],
  },
};

export default function EnglishSupportPage() {
  return (
    <main lang="en">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">VIDEO SLIM SUPPORT</span>
          <h1>Video Slim</h1>
          <p className="lead">
            Make smaller video copies on your iPhone without sending videos off your device.
          </p>
          <div className="actions">
            <a className="primary" href="#support">View Support</a>
            <a className="secondary" href="/en/privacy">Privacy</a>
            <a className="secondary" href="/" hrefLang="ja">日本語</a>
          </div>
        </div>
        <img className="app-icon" src="/app-icon.png" alt="Video Slim app icon" />
      </section>

      <section className="section" id="support">
        <p className="section-label">SUPPORT</p>
        <h2>Frequently Asked Questions</h2>
        <div className="cards">
          <article>
            <h3>Are originals deleted automatically?</h3>
            <p>No. The app offers deletion only after a compressed copy has been saved and verified, and only you can confirm it in iOS.</p>
          </article>
          <article>
            <h3>Are videos uploaded?</h3>
            <p>No. Video loading, compression, and verification run on your iPhone. Videos are never sent to a developer-operated server.</p>
          </article>
          <article>
            <h3>Why did free space not increase?</h3>
            <p>Deleted originals usually remain in Recently Deleted in Photos. Storage may not be reclaimed until they are permanently removed.</p>
          </article>
          <article>
            <h3>How do I restore Pro?</h3>
            <p>Open Settings in Video Slim and choose Restore Purchase while using the Apple Account that made the one-time purchase.</p>
          </article>
        </div>
        <div className="contact">
          <div>
            <p className="section-label">CONTACT</p>
            <h2>Still need help?</h2>
            <p>Tell us your iPhone model, iOS version, and the message shown. Do not attach the video or personal information.</p>
          </div>
          <a className="primary" href="https://github.com/somtum1120/video-slim-support/issues/new">Open a Support Request</a>
        </div>
      </section>

      <footer>
        <span>© 2026 Video Slim</span>
        <a href="/en/privacy">Privacy Policy</a>
        <a href="/" hrefLang="ja">日本語</a>
      </footer>
    </main>
  );
}
