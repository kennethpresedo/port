import React, { useState } from 'react';
//import { Link, animateScroll as scroll, Element } from 'react-scroll';
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
      <div className={styles.container}>   
      {(!isVisibleProjects && !isVisibleAbout && !isVisibleContact) && (
          <div className={styles.head} style={{marginTop:'50%vw', marginBottom: '2%'}}>Kenneth Presedo</div>
        )}
          <span className="scroll">
            <div className={styles.nav}>
              
                <button className={styles.nav} smooth={true} duration={800} onClick={handleProjectsClick}>
                  {isVisibleProjects ? 'Projects' : 'Projects'}
                </button>

              
                <button className={styles.nav} smooth={true} duration={800} onClick={handleAboutClick}>
                  {isVisibleAbout ? 'About' : 'About'}
                </button>

                <button className={styles.nav} smooth={true} duration={800} onClick={handleContactClick}>
                  {isVisibleContact ? 'Contact' : 'Contact'}
                </button>
            </div>
          </span>
        
        {isVisibleProjects && <Projects  /> }
        {isVisibleAbout && <About /> }
        {isVisibleContact && <Contact /> }
      </div>
    </>
  );
}
