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
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  translate
} from 'react-switch-lang'
import en from './assets/locale/en.json'
import th from './assets/locale/pt-Br.json'
const queryString = require('query-string')

// Do this two lines only when setting up the application
setTranslations({ en, th })
setDefaultLanguage('en')

// If you want to remember selected language
setLanguageCookie()

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { name: '' }
    // const parsed = queryString.parse(location.search)

    // if (parsed.language === 'en') {
    //   console.log('oi')
    // } else {
    //   this.state.name = 'Pt'
    // }
  }

  componentDidMount () {
    $.getScript(process.env.PUBLIC_URL + '/assets/js/main.js')
    const parsed = queryString.parse(location.search)
    console.log(parsed)
    console.log(location.search)
  }

  render () {
    const { t } = this.props
    return (
      <>
      <Header />
      <Hero name={t('name')} iam={t('hero.iam')} />
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

export default translate(App)
