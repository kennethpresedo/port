import styles from './Contact.module.scss'
import linkedinLogo from '../linkedinLogo.png'

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
                    <div className={styles.right}><div>
                        <a className={styles.socialsLinkedin} href="https://www.linkedin.com/in/kenneth-presedo/" target="_blank" rel="noopener noreferrer">
                            <img className={styles.logo} src={linkedinLogo} alt='logo' width='55vw' />
                        </a></div>
                        <div className={styles.arroba}>@</div>
                        <div className={styles.hash}>#</div>
                    </div>
                </div>
            </div>

        </>
    )
}

