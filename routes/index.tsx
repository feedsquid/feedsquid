import type { Handlers } from "$fresh/server.ts"

import { asset } from "$fresh/runtime.ts"
import { isAuthed, redirect } from "~/util.ts"

import FaTag from "@preact-icons/fa/FaTag"
import FaCog from "@preact-icons/fa/FaCog"
import { FeedItem } from "~/components/FeedItem.tsx"
import { Main } from "~/components/Main.tsx"
import { Navbar, NavButton } from "~/components/Navbar.tsx"

export const handler: Handlers = {
  GET(req, ctx) {
    if (!isAuthed(req)) return redirect(req, "/signin")

    return ctx.render!()
  },
}

export default () => {
  return (
    <>
      <Navbar>
        <div class="flex items-center">
          <img
            alt="feedSquid logo showing a monochrome image of a cute squid"
            width="32"
            src={asset("/logo.svg")}
          />
          <span class="font-black text-xl select-none">feedSquid</span>
        </div>

        <div class="flex items-center gap-1">
          <form>
            <input
              disabled
              title="Search"
              type="search"
              name="search"
              placeholder="WIP"
              class="p-1 rounded"
            />
          </form>
          <NavButton title="Manage tags" href="/tags" icon={FaTag} />
          <NavButton title="Settings" href="/settings" icon={FaCog} />
        </div>
      </Navbar>

      <Main>
        <FeedItem feedName="name">
          <div>content</div>
        </FeedItem>
      </Main>
    </>
  )
}
