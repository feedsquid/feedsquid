import type FaTag from "@preact-icons/fa/FaTag"
import type { ComponentChildren, JSX } from "preact"

export function NavButton(
  props:
    & { icon: typeof FaTag }
    & JSX.AnchorHTMLAttributes<HTMLAnchorElement>,
) {
  const { icon, ...anchorProps } = props
  const Icon = icon

  return (
    <a
      {...anchorProps}
      class="flex items-center justify-center size-10 rounded hover:bg-slate-800"
    >
      <Icon size={16} color="white" />
    </a>
  )
}

export function Navbar(
  props: { justify?: "normal" | "between"; children: ComponentChildren },
) {
  const { children } = props
  const justify = props.justify || "between"
  const gap = justify === "normal" ? "gap-2" : ""

  return (
    <nav class="flex w-full justify-center">
      <div
        class={`flex items-center justify-${justify} ${gap} p-3 w-full max-w-5xl border-slate-800 lg:border-x border-b lg:rounded-b-xl`}
      >
        {children}
      </div>
    </nav>
  )
}
