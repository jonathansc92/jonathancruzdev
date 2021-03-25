import React from 'react'
import profileImg from '../img/profile-img.jpg'
import PropTypes from 'prop-types'
const { AgeFromDateString } = require('age-calculator')

class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      about: this.props.about('about.title'),
      title: this.props.title,
      descrption: this.props.about('about.description'),
      role: this.props.about('about.role'),
      age: new AgeFromDateString('1992-01-31').age,
      email: this.props.about('general.email'),
      titleAge: this.props.about('about.titleAge')
    }

    console.log(typeof this.state.about)
  }

  render () {
    return (
            <>
                <section id="about" className="about">
                    <div className="container">

                        <div className="section-title">
                            <h2>{this.state.about}</h2>
                            <p>{this.state.descrption}</p>
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
                                            <li><i className="bi bi-chevron-right"></i> <strong>{this.state.titleAge}:</strong> <span>{this.state.age}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{this.state.email}</span></li>
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
