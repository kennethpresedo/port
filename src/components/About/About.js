import styles from './About.module.scss'

export default function About() {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.head}>About</div><br />
        <div className={styles.bio}>
          <span className={styles.lineLable}>Professional</span>
          <span className={styles.line1}>creative and motivated full stack software engineer</span>
          <span className={styles.line2}>skilled in frontend and backend development</span>
          <span className={styles.line3}>2 years of development experince | 10 years of airline experience</span>
          <span className={styles.line4}>gradulate of General Assembly's Software Engineering Immersive program</span>
          <span className={styles.line5}>well versed in multiple frameworks, libraries, runtime enviroments, databases</span><br />
          <span className={styles.lineLable}>Personal</span>
          <span className={styles.line6}>#latinoINtech, Argentinian born in the US</span>
          <span className={styles.line7}>dad to a 3 year old&nbsp;<a className={styles.Link} href='https://www.instagram.com/zurichthedoberman/' target="_blank" rel="noopener noreferrer">doberman</a>&nbsp;and 2 cats</span>
          <span className={styles.line8}>love sports, fitness, and music</span>
          <span className={styles.line9}>location: Miami, fl.</span>
        </div>
      </div>

    </>
  )
}