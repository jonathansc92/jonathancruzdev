import React from 'react'
import PropTypes from 'prop-types'

class SkillsComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { skill: this.props.skill, progress: this.props.progress }
  }

  render () {
    return (
        <div>
            <div className="progress">
                <span className="skill">{ this.state.skill } <i className="val">{ this.state.progress }%</i></span>
                <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    )
  }
}

SkillsComponent.propTypes = {
  skill: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired
}

export default SkillsComponent
