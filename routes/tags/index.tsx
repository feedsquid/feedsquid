import type { Handlers, PageProps } from "$fresh/server.ts"
import type { Tag } from "~/db/tag.ts"

import { listTags } from "~/db/tag.ts"
import { HTTPStatus, isAuthed, redirect } from "~/util.ts"

import { Head } from "$fresh/runtime.ts"
import FaArrowLeft from "@preact-icons/fa/FaArrowLeft"
import { Main } from "~/components/Main.tsx"
import { Navbar, NavButton } from "~/components/Navbar.tsx"

interface Data {
  tags: Tag[]
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    if (!isAuthed(req)) {
      return redirect(req, "/signin")
    }

    const tagsResult = await listTags()
    if (!tagsResult.success) {
      return new Response(null, {
        status: HTTPStatus.INTERNAL_SERVER_ERROR,
      })
    }

    return ctx.render!({ tags: tagsResult.data! })
  },
}

export default ({ data }: PageProps<Data>) => {
  const { tags } = data

  return (
    <>
      <Head>
        <title>feedSquid | Tags</title>
      </Head>

      <Navbar justify="normal">
        <NavButton href="/" title="Go back to home" icon={FaArrowLeft} />
        <h1 class="font-black text-2xl">Tags</h1>
      </Navbar>

      <Main>
        {JSON.stringify(tags)}
      </Main>
    </>
  )
}
