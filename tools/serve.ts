import Koa from 'koa';
import Router from 'koa-router';
import fs from 'fs'

let port = Number.parseInt(process.env.PORT ?? "");
if (Number.isNaN(port)) {
    port = 3000;
}
const host = process.env.HOST ?? "localhost";

const app = new Koa();
const router = new Router();

router.get("/data.json", async ctx => {
  ctx.set("Content-Type", "application/json; charset=utf-8");
  ctx.body = fs.createReadStream("public/data.json");
});

router.get("/", async ctx => {
  ctx.set("Content-Type", "text/html; charset=utf-8");
  ctx.body = fs.createReadStream("public/index.html");
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(port, host);

console.log(`Listen on http://${host}:${port}`);