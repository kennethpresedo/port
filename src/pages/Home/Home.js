//import React from 'react'
import React from 'react';
import { Element } from 'react-scroll'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

export default function Home() {

  return (
    <>
      <Header />
      <Element name="projectsSection">
        <Projects />
      </Element>

      <Element name="aboutSection">
        <About />
      </Element>

      <Element name="contactSection">
        <Contact />
      </Element>
    </>
  )
}