import React from 'react'
import PropTypes from 'prop-types'

class PortfolioComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      image: this.props.image,
      link: this.props.link,
      filter: this.props.filter,
      title: this.props.title
    }
  }

  render () {
    return (
        <>
            <div className={`col-lg-4 col-md-6 portfolio-item filter-${this.state.filter}`}>
                <div className="portfolio-wrap">
                    <img style={{ width: '100%', height: '180px' }} src={this.state.image} className="img-fluid" alt={this.state.title} />
                    <div className="portfolio-links">
                      {/* <a href={this.state.image} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a> */}
                      <a style={{ width: '100%' }} href={this.state.link} title="Mais detalges" target="_blank" rel="noreferrer"><i className="bx bx-link"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
  }
}

PortfolioComponent.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default PortfolioComponent
