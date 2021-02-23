import React from 'react';

class SkillsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { image: this.props.image, link: this.props.link, title: this.props.title }
	}

    render() {
      return (
        <div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                <img src={this.state.image} className="img-fluid" alt={this.state.title} />
                <div className="portfolio-links">
                    <a href={this.state.image} data-gallery="portfolioGallery" className="portfolio-lightbox" title={this.state.title}><i className="bx bx-plus"></i></a>
                    <a href={this.props.link} title="More Details"><i className="bx bx-link"></i></a>
                </div>
                </div>
            </div>
        </div>
      );
    }
}

export default SkillsComponent;

