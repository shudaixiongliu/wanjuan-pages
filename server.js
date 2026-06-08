const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || "127.0.0.1";
const ROOT = __dirname;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

function contentType(filePath) {
  return mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream";
}

function safePath(urlPath) {
  const pathname = decodeURIComponent(new URL(urlPath, `http://${HOST}`).pathname);
  const normalized = path.normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(ROOT, normalized === "/" ? "index.html" : normalized);
  return filePath.startsWith(ROOT) ? filePath : path.join(ROOT, "index.html");
}

const server = http.createServer((req, res) => {
  if (req.url === "/__local_health") {
    res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ ok: true, mode: "wanjuan-local-spa" }));
    return;
  }

  const filePath = safePath(req.url || "/");
  const target = fs.existsSync(filePath) && fs.statSync(filePath).isFile()
    ? filePath
    : path.join(ROOT, "index.html");

  res.writeHead(200, {
    "content-type": contentType(target),
    "cache-control": "no-store",
  });
  fs.createReadStream(target).pipe(res);
});

server.listen(PORT, HOST, () => {
  console.log(`万卷本地系统已启动：http://${HOST}:${PORT}/#/analytics`);
});
