import { Handlers } from "$fresh/server.ts"
import { getCookies } from "$std/http/cookie.ts"

import FaArrowLeft from "@preact-icons/fa/FaArrowLeft"
import { Head } from "$fresh/runtime.ts"

import { env } from "~/env.ts"

export const handler: Handlers = {
  GET(req, ctx) {
    if (getCookies(req.headers).rBucketAuth !== env.PASSWORD) {
      const url = new URL(req.url)
      url.pathname = "/signin"
      return Response.redirect(url)
    }

    return ctx.render!()
  },
}

export default () => {
  return (
    <>
      <Head>
        <title>rBucket | Bookmarks</title>
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
