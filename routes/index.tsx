import type { Handlers } from "$fresh/server.ts"

import { getCookies } from "$std/http/cookie.ts"

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
      <a href="/api/auth/signout">Logout</a>
    </>
  )
}
