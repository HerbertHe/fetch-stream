import Koa from "koa"
import Router from "koa-router"

import fs from "fs"
import path from "path"
import { PassThrough } from "stream"

const app = new Koa()
const router = new Router()

router.get("/", async (ctx, next) => {
    ctx.body = fs.readFileSync(path.resolve("mock", "index.html"), "utf-8")
})

router.get("/fetch-stream.js", async (ctx, next) => {
    ctx.set("Content-Type", "application/javascript")
    ctx.body = fs.readFileSync(path.resolve("dist", "index.js"), "utf-8")
})

router.get("/mock", async (ctx, next) => {
    ctx.set({
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
    })

    const stream = new PassThrough()

    ctx.body = stream

    let count = 0

    const interval = setInterval(() => {
        stream.write(`data: ${Date.now()}\n`)
        stream.write(`asdasdasda\n`)
        stream.write(`qcakmk\n\n`)
        count++

        if (count >= 100) {
            stream.end()
        }
    }, 200)

    stream.on("close", () => {
        clearInterval(interval)
    })
})

app.use(router.routes())

app.listen(8088, () => {
    console.log("Server is running at http://localhost:8088")
})
