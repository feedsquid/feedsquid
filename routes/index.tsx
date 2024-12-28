import type { Handlers } from "$fresh/server.ts"
import type { JSX } from "preact"

import { getCookies } from "$std/http/cookie.ts"
import { asset } from "$fresh/runtime.ts"
import { env } from "~/env.ts"

import FaBookmark from "@preact-icons/fa/FaBookmark"
import FaTag from "@preact-icons/fa/FaTag"
import FaCog from "@preact-icons/fa/FaCog"
import { FeedItem } from "~/components/FeedItem.tsx"

export const handler: Handlers = {
  GET(req, ctx) {
    if (getCookies(req.headers).feedSquidAuth !== env.PASSWORD) {
      const url = new URL(req.url)
      url.pathname = "/signin"
      return Response.redirect(url)
    }

    return ctx.render!()
  },
}

function NavButton(
  props:
    & { icon: typeof FaBookmark }
    & JSX.AnchorHTMLAttributes<HTMLAnchorElement>,
) {
  const { icon, ...anchorProps } = props
  const Icon = icon

  return (
    <a
      {...anchorProps}
      class="flex items-center justify-center size-10 rounded hover:bg-slate-800"
    >
      <Icon size={16} color="white" />
    </a>
  )
}

export default () => {
  return (
    <>
      <nav class="flex w-full justify-center">
        <div class="flex items-center justify-between p-2 w-full h-16 max-w-5xl">
          <div class="flex items-center">
            <img width="32" src={asset("/logo.svg")} />
            <span class="font-black text-2xl">feedSquid</span>
          </div>
          <div class="flex items-center gap-1">
            <form>
              <input
                disabled
                type="search"
                name="search"
                placeholder="WIP"
                class="p-1 rounded"
              />
            </form>
            <NavButton href="/bookmarks" icon={FaBookmark} />
            <NavButton href="/tags" icon={FaTag} />
            <NavButton href="/settings" icon={FaCog} />
          </div>
        </div>
      </nav>

      <main class="w-full max-w-5xl mx-auto mt-12">
        <FeedItem feedName="name">
          <div>content</div>
        </FeedItem>
      </main>
    </>
  )
}
