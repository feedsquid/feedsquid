import type { Handlers } from "$fresh/server.ts"

import { isAuthed, redirect } from "~/util.ts"

import { Head } from "$fresh/runtime.ts"

export const handler: Handlers = {
  GET(req, ctx) {
    if (isAuthed(req)) return redirect(req, "/")

    return ctx.render!()
  },
}

export default () => {
  return (
    <>
      <Head>
        <title>feedSquid | Login</title>
      </Head>
      <form
        class="flex size-full items-center justify-center"
        method="post"
        action="/api/auth/signin"
      >
        <div class="flex flex-col gap-2 w-80">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            class="bg-slate-700 rounded h-10 px-4"
          />
          <button
            type="submit"
            class="flex items-center justify-center h-10 w-full bg-slate-100 text-slate-950 hover:bg-slate-200 active:bg-slate-300 rounded"
          >
            Login
          </button>
        </div>
      </form>
    </>
  )
}
