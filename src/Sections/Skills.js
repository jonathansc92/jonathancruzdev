import React from 'react'
import SkillsComponent from '../components/SkillsComponent'
import PropTypes from 'prop-types'

class Skills extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: this.props.title
    }
  }

  render () {
    return (
        <>
            <section id="skills" className="skills section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.state.title}</h2>
                    </div>
                    <div className="row skills-content">
                        <div className="col-lg-6" data-aos="fade-up">
                            <SkillsComponent skill="PHP" progress="90" />
                            <SkillsComponent skill="VueJS" progress="80" />
                            <SkillsComponent skill="React JS" progress="60" />
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <SkillsComponent skill="NodeJS" progress="60" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
  }
}

Skills.propTypes = {
  title: PropTypes.string.isRequired
}

export default Skills
