import http from "node:http";
import { existsSync } from "node:fs";
import { Readable } from "node:stream";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const serverEntryPath = join(__dirname, "dist", "server", "index.js");
const hasBuild = existsSync(serverEntryPath);

let app = null;
if (hasBuild) {
  const mod = await import("./dist/server/index.js");
  app = mod.default;
}

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "0.0.0.0";

const server = http.createServer(async (req, res) => {
  try {
    if (!hasBuild || !app?.fetch || typeof app.fetch !== "function") {
      res.statusCode = 503;
      res.setHeader("content-type", "text/plain; charset=utf-8");
      res.end("Build files missing. Run `npm run build` then restart the app.");
      return;
    }

    const protocol =
      (req.headers["x-forwarded-proto"] || "").toString().split(",")[0].trim() || "http";
    const hostHeader = req.headers.host || `localhost:${port}`;
    const url = `${protocol}://${hostHeader}${req.url || "/"}`;

    const isBodyMethod = !req.method || !["GET", "HEAD"].includes(req.method);
    const requestInit = {
      method: req.method,
      headers: req.headers,
      body: isBodyMethod ? Readable.toWeb(req) : undefined,
      ...(isBodyMethod ? { duplex: "half" } : {}),
    };

    const request = new Request(url, requestInit);
    const response = await app.fetch(request);

    res.statusCode = response.status;
    res.statusMessage = response.statusText;

    const setCookies = response.headers.getSetCookie?.();
    if (setCookies && setCookies.length > 0) {
      res.setHeader("set-cookie", setCookies);
    }

    response.headers.forEach((value, key) => {
      if (key.toLowerCase() !== "set-cookie") {
        res.setHeader(key, value);
      }
    });

    if (!response.body) {
      res.end();
      return;
    }

    Readable.fromWeb(response.body).pipe(res);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
});

server.listen(port, host, () => {
  console.log(`SSR server listening on http://${host}:${port}`);
  if (!hasBuild) {
    console.warn("Build not found at dist/server/index.js. Run `npm run build` and restart.");
  }
});
