import type { Handlers } from "$fresh/server.ts"

import { isAuthed, redirect } from "~/util.ts"

import { Head } from "$fresh/runtime.ts"
import FaArrowLeft from "@preact-icons/fa/FaArrowLeft"
import Account from "~/routes/settings/(_components)/settingsComponent/Account.tsx"
import Theme from "~/routes/settings/(_components)/settingsComponent/Theme.tsx"
import Language from "~/routes/settings/(_components)/settingsComponent/Language.tsx"
import Debug from "~/routes/settings/(_components)/settingsComponent/Debug.tsx"
import { Main } from "~/components/Main.tsx"
import About from "~/routes/settings/(_components)/settingsComponent/About.tsx"

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
        <title>feedSquid | Settings</title>
      </Head>

      <nav class="flex items-center mx-auto w-full max-w-5xl p-2 gap-2">
        <a href="/" class="flex items-center p-3 hover:bg-slate-800 rounded">
          <FaArrowLeft />
        </a>
        <h1 class="font-black text-2xl">Settings</h1>
      </nav>

      <Main>
        <Account />
        <Theme />
        <Language />
        <Debug />
        <About />
      </Main>
    </>
  )
}
