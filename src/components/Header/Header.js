import styles from './Header.module.scss'
import React from 'react';
import { Link } from 'react-scroll';

export default function Header() {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.head}>Kenneth Presedo</div><br />
        <div className={styles.nav}>


  
          <Link to="projectsSection" smooth={true} duration={800}>
            <span className={styles.projects}>Projects</span>&nbsp;
          </Link>


          <Link to="aboutSection" smooth={true} duration={800}>
            <span className={styles.about}>About</span>&nbsp;
          </Link>

          <Link to="contactSection" smooth={true} duration={800}>
            <span className={styles.contact}>Contact</span>
          </Link>

        </div>
      </div>
    </>
  )
}