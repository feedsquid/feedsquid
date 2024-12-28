import type { Handlers } from "$fresh/server.ts"

import { setCookie } from "$std/http/cookie.ts"
import { HTTPStatus } from "~/util.ts"
import { env } from "~/env.ts"

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url)
    const form = await req.formData()

    if (form.get("password") !== env.PASSWORD) {
      return new Response(null, { status: HTTPStatus.FORBIDDEN })
    }

    const headers = new Headers()

    setCookie(headers, {
      name: "feedSquidAuth",
      value: env.PASSWORD, // todo: change to session token
      maxAge: 60 * 60 * 24 * 365, // year
      sameSite: "Lax", // this is important to prevent CSRF attacks
      domain: url.hostname,
      path: "/",
      secure: true,
    })

    headers.set("location", "/")

    return new Response(null, { status: HTTPStatus.SEE_OTHER, headers })
  },
}
