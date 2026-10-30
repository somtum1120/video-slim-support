import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隱私權政策 | Video Slim",
  description: "了解 Video Slim 如何處理影片、照片圖庫權限和裝置內資料。",
  alternates: {
    canonical: "/zh-Hant/privacy",
    languages: { "ja-JP": "/privacy", "en-US": "/en/privacy", "zh-Hant": "/zh-Hant/privacy" },
  },
  openGraph: {
    title: "隱私權政策 | Video Slim",
    description: "了解 Video Slim 如何處理影片、照片圖庫權限和裝置內資料。",
    images: [],
    type: "article",
    locale: "zh_TW",
  },
  twitter: {
    card: "summary",
    title: "隱私權政策 | Video Slim",
    description: "了解 Video Slim 如何處理影片、照片圖庫權限和裝置內資料。",
    images: [],
  },
};

export default function TraditionalChinesePrivacyPage() {
  return (
    <main className="policy-shell" lang="zh-Hant">
      <nav className="policy-nav">
        <a href="/en">← 支援頁面</a>
        <a href="/privacy" hrefLang="ja">日本語</a>
        <a href="/en/privacy" hrefLang="en">English</a>
      </nav>
      <article className="policy">
        <p className="section-label">PRIVACY POLICY</p>
        <h1>隱私權政策</h1>
        <p className="updated">最後更新日期：2026年10月30日</p>
        <p>Video Slim 會存取你在 iPhone 上允許使用的影片，以便壓縮影片及協助整理照片圖庫。</p>
        <h2>1. 開發者收集的資料</h2>
        <p>開發者不會收集你的個人資訊、影片、照片、使用紀錄、裝置識別碼或位置資料。App 不使用廣告 SDK、行為追蹤 SDK、分析 SDK 或開發者帳號系統。</p>
        <h2>2. 影片與照片圖庫</h2>
        <p>App 使用 Apple 的照片圖庫功能列出、預覽和播放影片，儲存壓縮版本，並確認未編輯影片是否完全相同。影片在你的 iPhone 上處理，不會傳送至開發者的伺服器。你可以在 iOS 設定中變更存取範圍。</p>
        <p>若影片只儲存在 iCloud 照片，當你選擇預覽、壓縮或分享時，可能需要透過 Apple 的服務下載。你也可以使用系統分享功能，自行選擇將已儲存的影片傳送到其他 App 或服務；接收方對資料的處理依其規定辦理。</p>
        <h2>3. 刪除影片</h2>
        <p>壓縮後不會自動刪除原始影片。你可以在符合條件的壓縮版本儲存並確認後，選擇刪除原始影片；刪除需要你的明確操作及 iOS 確認。重複影片整理也需要你選擇保留的影片並確認刪除，不會自動選擇刪除目標。</p>
        <p>若使用 iCloud 照片，刪除也會同步至使用相同 Apple Account 的其他裝置。刪除的影片通常會暫時保留在「照片」的「最近刪除」中，可用空間可能不會立即更新。</p>
        <h2>4. 儲存在裝置上的資訊</h2>
        <p>App 會在裝置上儲存壓縮次數、累計節省的容量、舊版本的移轉狀態，以及上次要求評分的版本。為了讓你重新查看儲存結果，App 最多保留最近 100 筆紀錄，包括照片圖庫識別碼、儲存時間、影片大小、長度和壓縮狀態；這些紀錄不包含影片內容、縮圖或原始檔名。</p>
        <p>App 也可能在裝置上暫存影片大小、照片圖庫識別碼及用於完全一致檢查的雜湊結果，以減少重複處理。這些資訊不會傳送給開發者。</p>
        <h2>5. 其他服務</h2>
        <p>舊版本的 Pro 購買狀態可能透過 Apple 的 StoreKit 確認。Apple 對相關服務的資料處理依其條款及隱私權政策辦理。你主動分享影片或聯絡支援時，所選服務的資料處理方式依該服務的規定辦理。</p>
        <h2>6. 聯絡與更新</h2>
        <p>如有隱私權問題，請透過支援頁面聯絡我們，並請勿附上個人資訊或影片本身。政策變更時會更新本頁及日期。</p>
        <a className="primary policy-contact" href="https://github.com/somtum1120/video-slim-support/issues/new">聯絡支援</a>
      </article>
    </main>
  );
}
