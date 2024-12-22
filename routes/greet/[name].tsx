import { type PageProps } from "$fresh/server.ts"

export default (props: PageProps) => {
  return <div>Hello {props.params.name}</div>
}
