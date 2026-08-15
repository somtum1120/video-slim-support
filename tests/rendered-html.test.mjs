import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the support page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>動画スリム サポート<\/title>/i);
  assert.match(html, /元動画は自動で消えますか/);
  assert.match(html, /問い合わせを書く/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview/);
});

test("server-renders the privacy policy with route-specific metadata", async () => {
  const response = await render("/privacy");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>プライバシーポリシー \| 動画スリム<\/title>/i);
  assert.match(html, /開発者による利用者データの収集、追跡、広告配信、行動分析を行いません/);
  assert.match(html, /UserDefaults/);
  assert.doesNotMatch(html, /og\.png/);
});
