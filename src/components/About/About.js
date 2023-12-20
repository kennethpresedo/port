import styles from './About.module.scss'

export default function About() {

  return (
<>
  <div className={styles.container}>
    <div className={styles.head}>About</div><br/>
    <div className={styles.bio}>
      <span className={styles.line1}>creative and motivated full stack software engineer</span>
      <span className={styles.line2}>skilled in frontend and backend development</span>
      <span className={styles.line3}>2 years of development experince | 10 years of airline experience</span>
      <span className={styles.line4}>gradulate of General Assembly's Software Engineering Immersive program</span>
      <span className={styles.line5}>apt in multiple frameworks, libraries, runtime enviroments, databases</span>
   </div>
   </div>

</>
  )
}