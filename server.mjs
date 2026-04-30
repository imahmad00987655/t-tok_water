import http from "node:http";
import { Readable } from "node:stream";

const { default: app } = await import("./dist/server/index.js");

if (!app?.fetch || typeof app.fetch !== "function") {
  throw new Error("SSR handler not found. Run `npm run build` before `npm start`.");
}

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "0.0.0.0";

const server = http.createServer(async (req, res) => {
  try {
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
});
