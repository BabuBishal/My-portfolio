import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
    </div>
  )
}

export default App