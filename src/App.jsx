//import { useState } from 'react'
import './components/Navegation/Nav.jsx'
import Nav from './components/Navegation/Nav.jsx'
import Hero from './components/Hero/Hero.jsx'
import Section from './components/Section/Section.jsx'
import Projects from './components/Projects/Projects.jsx'
import Footer from './components/Footer/Footer.jsx'
import ThemeToggle from './components/Button/Button.jsx'

function App() {

  return (
    <>
    <ThemeToggle />
    <Nav />
    <Hero />
    <Section />
    <Projects />
    <Footer />
    </>
  )
}



export default App
