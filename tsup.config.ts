import { defineConfig } from "tsup"

export const tsup = defineConfig({
    entry: ["src/index.ts"],
    dts: true,
    clean: true,
    format: ["esm"],
})
