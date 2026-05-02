import styles from '../styles/app.module.css'

export const List = ({ children }) => <ul className={styles.list}>{children}</ul>
export const Item = ({ item }) => <li className={styles.item}>{item}</li>
