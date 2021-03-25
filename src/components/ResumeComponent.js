import React from 'react'
import PropTypes from 'prop-types'

class ResumeComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { title: this.props.title, period: this.props.period, school: this.props.school }
  }

  render () {
    return (
        <>
          <div className="resume-item">
            <h4>{this.state.title}</h4>
            <h5>{this.state.period}</h5>
            <p><em>{this.state.school}</em></p>
          </div>
        </>
    )
  }
}

ResumeComponent.propTypes = {
  title: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired
}

export default ResumeComponent
