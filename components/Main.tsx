import type { JSX } from "preact/jsx-runtime"

export function Main(props: JSX.HTMLAttributes<HTMLElement>) {
  return <main {...props} class="w-full max-w-5xl mx-auto mt-12" />
}
