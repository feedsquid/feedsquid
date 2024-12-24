import type { Handlers } from "$fresh/server.ts"

import FaCog from "@preact-icons/fa/FaCog"

import { getCookies } from "$std/http/cookie.ts"
import { asset } from "$fresh/runtime.ts"

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
      <nav class="flex w-full justify-center">
        <div class="flex items-center justify-between p-2 w-full h-16 max-w-5xl">
          <div class="flex items-center">
            <img width="32" src={asset("/logo.svg")} />
            <span class="font-black text-2xl">rBucket</span>
          </div>
          <div class="flex items-center gap-3">
            <form>
              <input
                disabled
                type="search"
                name="search"
                placeholder="WIP"
                class="p-1 rounded"
              />
            </form>
            <a href="/settings" class="hover:bg-slate-800 p-2 rounded">
              <FaCog size={24} color="white" />
            </a>
          </div>
        </div>
      </nav>
      <main class="w-full max-w-5xl mx-auto">
      </main>
    </>
  )
}
