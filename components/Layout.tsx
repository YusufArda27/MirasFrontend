import styles from './layout.module.css'

export default function Layout({ children }) {
  return <div id={styles.container} className="flex-container">{children}</div>
}


