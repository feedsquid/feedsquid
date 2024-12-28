import { getCookies } from "$std/http/cookie.ts"
import { env } from "~/env.ts"

export type Result<T> =
  | {
    success: true
    data?: T
  }
  | {
    success: false
    reason: string
  }

export function isAuthed(req: Request): boolean {
  return getCookies(req.headers).feedSquidAuth === env.PASSWORD
}

export function redirect(req: Request, pathname: string) {
  const url = new URL(req.url)
  url.pathname = pathname
  return Response.redirect(url)
}

export enum HTTPStatus {
  UNAUTHORIZED = 401, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
  INTERNAL_SERVER_ERROR = 500, // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
}
