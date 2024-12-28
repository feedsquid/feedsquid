import type { Handlers } from "$fresh/server.ts"

import { deleteCookie } from "$std/http/cookie.ts"
import { HTTPStatus } from "~/util.ts"

export const handler: Handlers = {
  GET(req) {
    const url = new URL(req.url)
    const headers = new Headers(req.headers)
    deleteCookie(headers, "feedSquidAuth", { path: "/", domain: url.hostname })

    headers.set("location", "/")

    return new Response(null, { status: HTTPStatus.FOUND, headers })
  },
}
