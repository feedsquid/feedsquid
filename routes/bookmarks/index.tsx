import type { Handlers } from "$fresh/server.ts"

import { isAuthed, redirect } from "~/util.ts"

import { Head } from "$fresh/runtime.ts"
import FaArrowLeft from "@preact-icons/fa/FaArrowLeft"

export const handler: Handlers = {
  GET(req, ctx) {
    if (!isAuthed(req)) return redirect(req, "/signin")

    return ctx.render!()
  },
}

export default () => {
  return (
    <>
      <Head>
        <title>feedSquid | Bookmarks</title>
      </Head>

      <nav class="flex items-center mx-auto w-full max-w-5xl p-2 gap-2">
        <a href="/" class="flex items-center p-3 hover:bg-slate-800 rounded">
          <FaArrowLeft />
        </a>
        <h1 class="font-black text-2xl">Bookmarks</h1>
      </nav>

      <main class="w-full max-w-5xl mx-auto">
      </main>
    </>
  )
}
