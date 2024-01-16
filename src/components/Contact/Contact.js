import styles from './Contact.module.scss'
import linkedinLogo from '../linkedinLogo.png'
import location from '../location.png'
import at from '../at.png'
import call from '../call.png'

export default function Contact() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.head}>
                    Contact
                </div>
                <div className={styles.contact}>
                    <div className={styles.left}>
                        KP
                    </div>
                    <div className={styles.break}></div>
                    <div className={styles.right}>
                            <div className={styles.top}>
                            <a className={styles.socialsLinkedin} href="https://www.linkedin.com/in/kenneth-presedo/" target="_blank" rel="noopener noreferrer">
                                <img className={styles.logo} src={linkedinLogo} alt='logo' width='55vw' />
                            </a>
                            <a className={styles.socialsEmail} href="mailto:kennethpresedo@live.com?subject=Just saw your portfolio!&body=Just wanted to let you know that, YOU ROCK!">
                                <div className={styles.arroba}>
                                    <img className={styles.pin} src={at} alt='logo' width='55vw' />
                                </div>
                            </a>
                            <div className={styles.hash}>
                                <img className={styles.pin} src={call} alt='logo' width='55vw' />
                            </div>
                            <div className={styles.pin}>
                                <img className={styles.pin} src={location} alt='logo' width='55vw' />
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            in/kenneth-presedo< br />
                            kennethpresedo@live.com<br />
                            786-247-3451<br />
                            miami, fl
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

