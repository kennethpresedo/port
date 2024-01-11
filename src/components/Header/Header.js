import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import styles from './Header.module.scss'
import React, { useState } from 'react';

export default function Header() {
  const [isVisibleProjects, setIsVisibleProjects] = useState(false);
  const [isVisibleAbout, setIsVisibleAbout] = useState(false);
  const [isVisibleContact, setIsVisibleContact] = useState(false);

  
  const handleProjectsClick = () => {
    setIsVisibleProjects(!isVisibleProjects);
    setIsVisibleAbout(false);
    setIsVisibleContact(false);
  };

  const handleAboutClick = () => {
    setIsVisibleAbout(!isVisibleAbout);
    setIsVisibleProjects(false);
    setIsVisibleContact(false);
  };

  const handleContactClick = () => {
    setIsVisibleContact(!isVisibleContact);
    setIsVisibleProjects(false);
    setIsVisibleAbout(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.head}>Kenneth Presedo</div><br />
        <div className={styles.nav}>
        <button className={styles.nav} onClick={handleProjectsClick}>
        {isVisibleProjects ? 'Projects' : 'Projects'}
      </button> 

      <button className={styles.nav} onClick={handleAboutClick}>
        {isVisibleAbout ? 'About' : 'About'}
      </button>

      <button className={styles.nav} onClick={handleContactClick}>
        {isVisibleContact ? 'Contact' : 'Contact'}
      </button>


         </div>
      {isVisibleProjects && <Projects />}
      {isVisibleAbout && <About />}
      {isVisibleContact && <Contact />}

      </div>
    </>
  )
}


{/* <Link to="projectsSection" smooth={true} duration={800}>
<span className={styles.projects}>Projects</span>&nbsp;
</Link>


<Link to="aboutSection" smooth={true} duration={800}>
<span className={styles.about}>About</span>&nbsp;
</Link>

<Link to="contactSection" smooth={true} duration={800}>
<span className={styles.contact}>Contact</span>
</Link> */}