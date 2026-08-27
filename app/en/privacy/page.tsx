import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Video Slim",
  description: "How Video Slim handles videos, photo library access, on-device data, and purchases.",
  alternates: {
    canonical: "/en/privacy",
    languages: { "ja-JP": "/privacy", "en-US": "/en/privacy" },
  },
  openGraph: {
    title: "Privacy Policy | Video Slim",
    description: "How Video Slim handles videos, photo library access, on-device data, and purchases.",
    images: [],
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Video Slim",
    description: "How Video Slim handles videos, photo library access, on-device data, and purchases.",
    images: [],
  },
};

export default function EnglishPrivacyPage() {
  return (
    <main className="policy-shell" lang="en">
      <nav className="policy-nav">
        <a href="/en">← Back to Support</a>
        <a href="/privacy" hrefLang="ja">日本語</a>
      </nav>
      <article className="policy">
        <p className="section-label">PRIVACY POLICY</p>
        <h1>Privacy Policy</h1>
        <p className="updated">Effective and last updated: August 27, 2026</p>

        <p>
          Video Slim compresses videos on your iPhone. It does not send videos,
          photos, photo-library identifiers, file names, or location data to a
          developer-operated server.
        </p>

        <h2>1. Data Collection</h2>
        <p>
          The developer does not collect, track, advertise to, or analyze users.
          No account is required, and the app contains no advertising, tracking,
          or analytics SDKs.
        </p>

        <h2>2. Photo Library</h2>
        <p>
          Video Slim uses iOS photo library access to list and preview videos,
          create and save compressed copies, and delete an original only when you
          choose to do so. You can change access in iOS Settings. A video stored
          only in iCloud Photos may be downloaded through Apple's services when
          you choose to preview or compress it.
        </p>

        <h2>3. Information Stored on Your Device</h2>
        <p>
          The number of successful compressions, exact cumulative space saved,
          migration flags from older versions, and the last app version that
          requested a rating are stored in UserDefaults on your iPhone. This
          information is not sent to the developer and is normally removed when
          you delete the app.
        </p>

        <h2>4. In-App Purchase</h2>
        <p>
          Pro purchase and restoration are handled through Apple's StoreKit and
          App Store. Video Slim verifies entitlement but does not receive or save
          payment information. Apple's privacy policy applies to Apple's handling
          of purchase information.
        </p>

        <h2>5. Deleting Originals</h2>
        <p>
          Originals are never deleted automatically. Deletion occurs only after
          a compressed copy has been saved, you explicitly choose deletion, and
          you confirm it in iOS. With iCloud Photos, deletion also applies to
          other devices using the same Apple Account.
        </p>

        <h2>6. Children's Privacy</h2>
        <p>The developer does not collect personal data from users of any age.</p>

        <h2>7. Changes and Contact</h2>
        <p>
          This policy may be updated when the app or applicable requirements
          change. Material revisions will update the date on this page.
        </p>
        <a className="primary policy-contact" href="https://github.com/somtum1120/video-slim-support/issues/new">
          Contact Us About Privacy
        </a>
      </article>
    </main>
  );
}
