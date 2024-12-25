interface Props {
  count: number
}

export function NotificationBadge({ count }: Props) {
  return (
    <div class="flex items-center justify-center font-bold rounded-full bg-red-500 size-6">
      {count}
    </div>
  )
}
