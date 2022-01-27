import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/header.svg" alt="tanku Logo" className={styles.logo} /> for you
      </footer>
    </>
  )
}
