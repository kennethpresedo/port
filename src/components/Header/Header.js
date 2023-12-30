import styles from './Header.module.scss'

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.head}>Kenneth Presedo</div><br />
        <div className={styles.nav}>
          <span className={styles.about}>About</span> &nbsp;
          <span className={styles.projects}>Projects</span>&nbsp;
          <span className={styles.contact}>Contact</span>
        </div>
      </div>
    </>
  )
}