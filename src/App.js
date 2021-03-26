import Header from './Header'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Resume from './Sections/Resume'
import Portfolio from './Sections/Portfolio'
// import Testimonials from './Sections/Testimonials'
// import Contact from './Sections/Contact';
import Footer from './Footer'
import React from 'react'
import $ from 'jquery'
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
  translate
} from 'react-switch-lang'
import en from './assets/locale/en.json'
import ptBr from './assets/locale/pt-Br.json'
import PropTypes from 'prop-types'
const queryString = require('query-string')

setTranslations({ en, ptBr })
setDefaultLanguage('en')

setLanguageCookie()

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { t: {} }

    const parsed = queryString.parse(location.search)

    this.handleSetLanguage(parsed.language ? parsed.language : 'en')
  }

  componentDidMount () {
    $.getScript(process.env.PUBLIC_URL + '/assets/js/main.js')
  }

  handleSetLanguage (key) {
    setLanguage(key)
  }

  render () {
    const { t } = this.props
    return (
      <>
      <Header name={t('name')} menu={t} />
      <Hero name={t('name')} iam={t('hero.iam')} topics={t('hero.topics')} />
      <main id="main">
        <About about={t} title={t('menu.about')}/>
        <Skills title={t('menu.skills')} />
        <Resume resume={t} titles={t} experiences={t('resume.experiences')} />
        <Portfolio title={t('menu.portfolio')} all={t('portfolio.all')} />
      </main>
      <Footer />
      </>
    )
  }
}

App.propTypes = {
  t: PropTypes.object.isRequired
}

export default translate(App)
