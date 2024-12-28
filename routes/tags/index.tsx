import type { Handlers, PageProps } from "$fresh/server.ts"
import type { Tag } from "~/db/tag.ts"

import { listTags } from "~/db/tag.ts"
import { HTTPStatus, isAuthed, redirect } from "~/util.ts"

import { Head } from "$fresh/runtime.ts"
import FaArrowLeft from "@preact-icons/fa/FaArrowLeft"
import { Main } from "~/components/Main.tsx"

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

      <nav class="flex items-center mx-auto w-full max-w-5xl p-2 gap-2">
        <a href="/" class="flex items-center p-3 hover:bg-slate-800 rounded">
          <FaArrowLeft />
        </a>
        <h1 class="font-black text-2xl">Tags</h1>
      </nav>

      <Main>
        {JSON.stringify(tags)}
      </Main>
    </>
  )
}
