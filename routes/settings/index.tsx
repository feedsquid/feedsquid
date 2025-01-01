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
import { NavButton } from "~/components/Navbar.tsx"
import { Navbar } from "~/components/Navbar.tsx"

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

      <Navbar justify="normal">
        <NavButton href="/" title="Go back to home" icon={FaArrowLeft} />
        <h1 class="font-black text-2xl">Settings</h1>
      </Navbar>

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
