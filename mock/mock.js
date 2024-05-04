import Koa from "koa"
import path from "path"
import { createReadStream } from "fs"
const app = new Koa()

app.use(async (ctx, next) => {
    ctx.body = createReadStream(path.resolve("mock", "file.txt"), "utf8")
})

app.listen(8088, () => {
    console.log("Server is running at http://localhost:8088")
})
