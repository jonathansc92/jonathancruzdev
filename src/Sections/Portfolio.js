import React from 'react'
import portfolio1 from '../img/portfolio/portfolio-1.jpg'

class Portfolio extends React.Component {
  render () {
    return (
        <>
          <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">PHP</li>
              <li data-filter=".filter-card">VUEJS</li>
              <li data-filter=".filter-web">NodeJS</li>
              <li data-filter=".filter-web">React</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio1} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href={portfolio1} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
        </>
    )
  }
}

export default Portfolio
