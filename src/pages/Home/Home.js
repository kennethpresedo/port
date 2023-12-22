import React from 'react'
//import styles from './Home.scss';
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Break from '../../components/Break/Break'

export default function Home(){
return(
  <>
  <Header />
  <About />
  <Break />
  <Projects />
  </>
)
}