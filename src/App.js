import Header from './Header'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Facts from './Sections/Facts'
import Skills from './Sections/Skills'
import Resume from './Sections/Resume'
import Portfolio from './Sections/Portfolio'
import Services from './Sections/Services'
import Testimonials from './Sections/Testimonials'
// import Contact from './Sections/Contact';
import Footer from './Footer'
import React from 'react'
import $ from 'jquery'
class App extends React.Component {
  componentWillMount () {
    $.getScript(process.env.PUBLIC_URL + '/assets/js/main.js')
  }

  render () {
    return (
      <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
      </main>
      <Footer />
      </>
    )
  }
}

export default App
