import styles from './Projects.module.scss'
import githubLogo from '../githubLogo.png'

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
            <span className={styles.right}><a className={styles.githubLink} href="https://github.com/kennethpresedo/duluc_learning_center" target="_blank" rel="noopener noreferrer">duluc learning center&nbsp;<img className={styles.logo} src={githubLogo} alt='logo' width='25vw'/></a></span>
            
          </div>

          <div className={styles.title}>
            <span className={styles.right}>
              <a className={styles.githubLink} href="https://github.com/kennethpresedo/Dunder-Mifflin-Game" target="_blank" rel="noopener noreferrer">dunder mifflin game&nbsp;<img className={styles.logo} src={githubLogo} alt='logo' width='25vw'/></a></span>
            <span className={styles.left}>
              <a className={styles.link} href="https://kennethpresedo.github.io/Dunder-Mifflin-Game/#" target="_blank" rel="noopener noreferrer">
                <img className={styles.pic} src="https://i.imgur.com/Rf5Kz3e.jpg" alt='' />
              </a>
            </span>
          </div>

          <div className={styles.title}>
            <span className={styles.left}>
              <a className={styles.link} href="https://get-swole-gym.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img className={styles.pic} src="https://i.imgur.com/HcLI7iE.png" alt='' />
              </a>
            </span>
            <span className={styles.right}>
            <a className={styles.githubLink} href="https://github.com/kennethpresedo/fitnessApp" target="_blank" rel="noopener noreferrer">fitness app&nbsp;<img className={styles.logo} src={githubLogo} alt='logo' width='25vw'/></a></span>
          </div>

          <div className={styles.title}>
            <span className={styles.right}><a className={styles.githubLink} href="https://github.com/kennethpresedo/AI-Summarizer" target="_blank" rel="noopener noreferrer">ai article summarizer&nbsp;<img className={styles.logo} src={githubLogo} alt='logo' width='25vw'/></a></span>
            <span className={styles.left}>
              <a className={styles.link} href="https://aesthetic-croquembouche-cc4a76.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img className={styles.pic} src="https://i.imgur.com/jTZOTvP.png" alt='' />
              </a>
            </span>
          </div>

          <div className={styles.title}>
            <span className={styles.left}>
              <a className={styles.link} href="https://tasteoftokyo.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img className={styles.pic} src="https://i.imgur.com/PtT74vm.png" alt='' />
              </a>
            </span>
            <span className={styles.right}>
            <a className={styles.githubLink} href="https://github.com/kennethpresedo/sushi" target="_blank" rel="noopener noreferrer">sushi.com&nbsp;<img className={styles.logo} src={githubLogo} alt='logo' width='25vw'/></a></span>
          </div>

        </div>
      </div>
    </>
  )
}