export type Result<T> =
  | {
    success: true
    data?: T
  }
  | {
    success: false
    reason: string
  }
