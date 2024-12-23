import { type Handlers } from "$fresh/server.ts"

export const handler: Handlers = {
  GET(_req, ctx) {
    return ctx.render!()
  },
}

export default () => {
  return (
    <form method="post" action="/api/auth/signin">
      <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  )
}
