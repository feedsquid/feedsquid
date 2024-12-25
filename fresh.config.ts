import { defineConfig } from "$fresh/server.ts"
import tailwind from "$fresh/plugins/tailwind.ts"
import { initDB } from "~/db/index.ts"

// https://fresh.deno.dev/docs/examples/init-the-server
await initDB()

export default defineConfig({
  plugins: [tailwind()],
})
