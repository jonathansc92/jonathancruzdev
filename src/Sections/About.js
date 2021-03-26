import React from 'react'
import profileImg from '../img/profile-img.jpg'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
const { AgeFromDateString } = require('age-calculator')

class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: this.props.title,
      descrption: this.props.about('about.description'),
      role: this.props.about('about.role'),
      age: new AgeFromDateString('1992-01-31').age,
      email: this.props.about('general.city'),
      city: this.props.about('about.city'),
      titleCity: this.props.about('about.titleCity'),
      titleAge: this.props.about('about.titleAge')
    }
  }

  render () {
    return (
            <>
                <section id="about" className="about">
                    <div className="container">
                        <div className="section-title">
                            <h2>{this.state.title}</h2>
                            <p style={{ textAlign: 'justify' }}>{ReactHtmlParser(this.state.descrption)}</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4" data-aos="fade-right">
                                <img src={profileImg} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>{this.state.role}</h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>{this.state.titleCity}:</strong> <span>{this.state.city}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>{this.state.titleAge}:</strong> <span>{this.state.age}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jonathansc92@gmail.com</span></li>
                                        </ul>
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

About.propTypes = {
  about: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default About
