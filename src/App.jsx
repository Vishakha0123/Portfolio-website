import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Achievement from './Components/Achievements/Achievement'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Achievement/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App