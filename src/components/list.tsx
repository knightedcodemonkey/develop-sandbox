import type { ReactNode } from 'react'

export const List = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="list">{children}</ul>
  )
}
