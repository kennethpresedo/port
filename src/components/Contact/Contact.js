import styles from './Contact.module.scss'

export default function Contact() {

    return (
        <>

            <div className={styles.container}>
                <div className={styles.head}>
                    Contact
                </div>
                <div className={styles.contact}>
                    <a className={styles.socialsLinkedin} href="https://www.linkedin.com/in/kenneth-presedo/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    resume email
                </div>
            </div>

        </>
    )
}

