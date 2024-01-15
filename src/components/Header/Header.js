import React, { useState } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import styles from './Header.module.scss';

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
      <div className={styles.container} smooth={true} duration={100} >
        {(!isVisibleProjects && !isVisibleAbout && !isVisibleContact) && (
          <div className={styles.head}>Kenneth Presedo</div>
        )}
        <div className={styles.nav}>

          <button
            className={styles.nav}
            style={{ backgroundColor: isVisibleProjects ? '#e9f5f9' : '', color: isVisibleProjects ? '#000' : '' }}
            onClick={handleProjectsClick}
          >
            {isVisibleProjects ? 'Portfolio' : 'Portfolio'}
          </button>

          <button
            className={styles.nav}
            style={{ backgroundColor: isVisibleAbout ? '#e9f5f9' : '' , color: isVisibleAbout ? '#000' : ''}}
            onClick={handleAboutClick}
          >
            {isVisibleAbout ? 'About' : 'About'}
          </button>

          <button
            className={styles.nav}
            style={{ backgroundColor: isVisibleContact ? '#e9f5f9' : '', color: isVisibleContact ? '#000' : '' }}
            onClick={handleContactClick}
          >
            {isVisibleContact ? 'Contact' : 'Contact'}
          </button>
        </div>

        {isVisibleProjects && <Projects />}
        {isVisibleAbout && <About />}
        {isVisibleContact && <Contact />}
      </div>
    </>
  );
}
