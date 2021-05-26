import Link from 'next/link'
import styles from './navigation.module.scss'

const navigation = () => {
  return (
    <nav>
      <Link href="/">
        <a className={styles.link}>Ana Sayfa</a>
      </Link>
      <Link href="/about">
        <a>Hakkımda</a>
      </Link>
    </nav>
  )
}

export default navigation
