import React from 'react'
import PropTypes from 'prop-types'
class Hero extends React.Component {
  constructor (props) {
    super(props)
    this.state = { name: this.props.name, iam: this.props.iam, topics: this.props.topics }
  }

  render () {
    return (
        <>
          <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
              <div className="hero-container" data-aos="fade-in">
                <h1>{this.state.name}</h1>
                <p>{this.state.iam} <span className="typed" data-typed-items={this.state.topics}></span></p>
              </div>
          </section>
        </>
    )
  }
}

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  iam: PropTypes.string.isRequired,
  topics: PropTypes.string.isRequired
}

export default Hero
