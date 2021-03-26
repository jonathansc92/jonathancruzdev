import React from 'react'
import PropTypes from 'prop-types'

class ResumeComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: this.props.title,
      period: this.props.period,
      info: this.props.info ? this.props.info : '',
      description: this.props.description ? this.props.description : null
    }
  }

  render () {
    return (
        <>
          <div className="resume-item">
            <h4>{this.state.title}</h4>
            <h5>{this.state.period}</h5>
            <p><em>{this.state.info}</em></p>
            <p>{this.state.description}</p>
          </div>
        </>
    )
  }
}

ResumeComponent.propTypes = {
  title: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default ResumeComponent
