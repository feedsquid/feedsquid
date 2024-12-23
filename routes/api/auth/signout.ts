import { Handlers } from "$fresh/server.ts"

import { deleteCookie } from "$std/http/cookie.ts"

export const handler: Handlers = {
  GET(req) {
    const url = new URL(req.url)
    const headers = new Headers(req.headers)
    deleteCookie(headers, "rBucketAuth", { path: "/", domain: url.hostname })

    headers.set("location", "/")

    return new Response(null, {
      // 302 Found
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302
      status: 302,
      headers,
    })
  },
}
