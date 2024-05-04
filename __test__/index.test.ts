import { test } from "vitest"
import { FetchStream } from "../src/index"

test("FetchStream", async () => {
    const stream = new FetchStream({
        preset: "text"
    }).createFetchRequest(
        "http://localhost:8088"
    )
    console.log(await stream)
})
