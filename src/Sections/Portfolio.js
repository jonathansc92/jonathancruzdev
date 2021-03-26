import React from 'react'
import PropTypes from 'prop-types'
import PortfolioComponent from '../components/PortfolioComponent'
import apiBooksPortfolio from '../img/portfolio/apibooks.jpg'
import fenixPortfolio from '../img/portfolio/fenix.JPG'
import sitePortfolio from '../img/portfolio/website.JPG'
import noticiesPortfolio from '../img/portfolio/register-noticies.jpg'
import chatPortfolio from '../img/portfolio/chat.jpg'
import apiPHPPortfolio from '../img/portfolio/api-php.jpg'
import frontBooksPortfolio from '../img/portfolio/frontbooks.jpg'
import apiNodePortfolio from '../img/portfolio/apinode.jpg'

class Portfolio extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      all: this.props.all,
      title: this.props.title
    }
  }

  render () {
    return (
        <>
          <section id="portfolio" className="portfolio section-bg">
            <div className="container">
              <div className="section-title">
                <h2>{this.state.title}</h2>
              </div>
              <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">{this.state.all}</li>
                    <li data-filter=".filter-php">PHP</li>
                    {/* <li data-filter=".filter-vuejs">VUEJS</li> */}
                    <li data-filter=".filter-nodejs">NodeJS</li>
                    <li data-filter=".filter-react">React</li>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                <PortfolioComponent
                  filter="php"
                  link="https://www.fenixpre.com.br/"
                  image={fenixPortfolio}
                  title="Fênix Vestibulares"
                />
                <PortfolioComponent
                  filter="nodejs"
                  link="https://www.fenixpre.com.br/"
                  image={apiBooksPortfolio}
                  title="Api Books"
                />
                <PortfolioComponent
                  filter="react"
                  link="#"
                  image={sitePortfolio}
                  title="This Web Site"
                />
                <PortfolioComponent
                  filter="nodejs"
                  link="https://github.com/jonathansc92/register_noticies"
                  image={noticiesPortfolio}
                  title="Register Noticies"
                />
                <PortfolioComponent
                  filter="nodejs"
                  link="https://github.com/jonathansc92/multiroom_chat_nodejs"
                  image={chatPortfolio}
                  title="Multi Chat"
                />
                <PortfolioComponent
                  filter="php"
                  link="https://github.com/jonathansc92/deliveryIt"
                  image={apiPHPPortfolio}
                  title="Api Laravel"
                />
                <PortfolioComponent
                  filter="react"
                  link="https://github.com/jonathansc92/front-books"
                  image={frontBooksPortfolio}
                  title="Front Books"
                />
                <PortfolioComponent
                  filter="nodejs"
                  link="https://github.com/jonathansc92/api-node"
                  image={apiNodePortfolio}
                  title="Api Node"
                />
              </div>
            </div>
          </section>
        </>
    )
  }
}

Portfolio.propTypes = {
  all: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Portfolio
