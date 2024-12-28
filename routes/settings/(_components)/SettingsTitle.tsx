import { JSX } from "preact/jsx-runtime"

export default (
  props: JSX.DetailsHTMLAttributes<HTMLHeadingElement>,
) => {
  return <h2 {...props} class="font-bold text-2xl mt-6 mb-2" />
}
