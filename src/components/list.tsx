import type { ReactNode } from 'react'
import styles from '../styles/app.module.css'

export const List = ({ children }: { children: ReactNode }) => {
  return (
    <ul className={styles.list}>{children}</ul>
  )
}
