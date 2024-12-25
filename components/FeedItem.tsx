import type { JSX } from "preact"

import FaChevronRight from "@preact-icons/fa/FaChevronRight"
import FaCheckDouble from "@preact-icons/fa/FaCheckDouble"
import FaPen from "@preact-icons/fa/FaPen"
import { NotificationBadge } from "~/components/NotificationBadge.tsx"

interface Props {
  feedName: string
}

export function FeedItem(
  props: Props & JSX.DetailsHTMLAttributes<HTMLDetailsElement>,
) {
  return (
    <details
      {...props}
      class="group"
    >
      <summary class="flex items-center justify-between p-1 rounded cursor-pointer hover:bg-slate-800">
        <div class="flex items-center">
          <FaChevronRight class="group-open:rotate-90 duration-75 mx-2" />
          {props.feedName}
        </div>
        <div class="flex items-center gap-2">
          <NotificationBadge count={1} />
          <button class="flex items-center justify-center size-10 rounded hover:bg-slate-700">
            <FaCheckDouble />
          </button>
          <button class="flex items-center justify-center size-10 rounded hover:bg-slate-700">
            <FaPen />
          </button>
        </div>
      </summary>
      {props.children}
    </details>
  )
}
