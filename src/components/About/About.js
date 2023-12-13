import styles from './About.module.scss'

export default function About() {

  return (
<>
    <div className={styles.head}>Kenneth Presedo</div><br/>
    <div className={styles.nav}>
      <span className={styles.about}>About</span> &nbsp;
      <span className={styles.projects}>Projects</span>&nbsp;
      <span className={styles.contact}>Contact</span>
   </div>

</>
  )
}