import styles from './Projects.module.scss'

export default function Projects() {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.head}>Projects</div><br />

        <div className={styles.projects}>

          <div className={styles.title}>
            <span className={styles.left}>
              <a className={styles.link} href="https://www.duluclearning.com/" target="_blank" rel="noopener noreferrer">
                <img className={styles.pic} src="https://i.imgur.com/GxTECvr.jpg" alt='' />
              </a>
            </span>
            <span className={styles.right}>duluc learning center</span>
          </div>

          <div className={styles.title}>
            <span className={styles.left}>
              <a className={styles.link} href="https://kennethpresedo.github.io/Dunder-Mifflin-Game/#" target="_blank" rel="noopener noreferrer">
                <img className={styles.pic} src="https://i.imgur.com/Rf5Kz3e.jpg" alt='' />
              </a>
            </span>
            <span className={styles.right}>dunder mifflin game</span>
          </div>

          <div className={styles.title}>
            <span className={styles.left}>
              <a className={styles.link} href="https://get-swole-gym.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img className={styles.pic} src="https://i.imgur.com/HcLI7iE.png" alt='' />
              </a>
            </span>
            <span className={styles.right}>fitness app</span>
          </div>

          <div className={styles.title}>
            <span className={styles.left}>
              <a className={styles.link} href="https://aesthetic-croquembouche-cc4a76.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img className={styles.pic} src="https://i.imgur.com/jTZOTvP.png" alt='' />
              </a>
            </span>
            <span className={styles.right}>ai article summarizer</span>
          </div>

          <div className={styles.title}>
            <span className={styles.left}>
              <a className={styles.link} href="https://tasteoftokyo.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img className={styles.pic} src="https://i.imgur.com/PtT74vm.png" alt='' />
              </a>
            </span>
            <span className={styles.right}>sushi.com</span>
          </div>

        </div>
      </div>

    </>
  )
}