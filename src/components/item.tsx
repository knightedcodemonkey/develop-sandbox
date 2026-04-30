import styles from '../styles/app.module.css'
export const Item = ({ value }: { value: string | number }) => <li className={styles.item}>{value}</li>
