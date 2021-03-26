import React from 'react'
import ResumeComponent from '../components/ResumeComponent'
import PropTypes from 'prop-types'

class Resume extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      resume: this.props,
      title: this.props.titles('menu.resume.title'),
      titleEducation: this.props.titles('menu.resume.education'),
      titleExperience: this.props.titles('menu.resume.experience')
    }
  }

  render () {
    return (
        <>
          <section id="resume" className="resume">
            <div className="container">

              <div className="section-title">
                <h2>{this.state.title}</h2>
              </div>

              <div className="row">
                <div className="col-lg-6" data-aos="fade-up">
                  <h3 className="resume-title">{this.state.titleEducation}</h3>
                  <ResumeComponent
                    period={this.props.resume('resume.education.graduate.period')}
                    info={this.props.resume('resume.education.graduate.school')}
                    title={this.props.resume('resume.education.graduate.title')}
                  />
                  <ResumeComponent
                    period={this.props.resume('resume.education.undergraduate.period')}
                    info={this.props.resume('resume.education.undergraduate.school')}
                    title={this.props.resume('resume.education.undergraduate.title')}
                  />
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                  <h3 className="resume-title">{this.state.titleExperience}</h3>
                  <ResumeComponent
                    period={this.props.resume('resume.experiences.fullTime.lyncas.period')}
                    description={this.props.resume('resume.experiences.fullTime.lyncas.description')}
                    info={this.props.resume('resume.experiences.fullTime.lyncas.company')}
                    title={this.props.resume('resume.experiences.fullTime.lyncas.position')}
                  />
                  <ResumeComponent
                    period={this.props.resume('resume.experiences.fullTime.nofaro.period')}
                    description={this.props.resume('resume.experiences.fullTime.nofaro.description')}
                    info={this.props.resume('resume.experiences.fullTime.nofaro.company')}
                    title={this.props.resume('resume.experiences.fullTime.nofaro.position')}
                  />
                  <ResumeComponent
                    period={this.props.resume('resume.experiences.fullTime.uol.period')}
                    description={this.props.resume('resume.experiences.fullTime.uol.description')}
                    info={this.props.resume('resume.experiences.fullTime.uol.company')}
                    title={this.props.resume('resume.experiences.fullTime.uol.position')}
                  />
                  <ResumeComponent
                    period={this.props.resume('resume.experiences.fullTime.uneworld.period')}
                    description={this.props.resume('resume.experiences.fullTime.uneworld.description')}
                    info={this.props.resume('resume.experiences.fullTime.uneworld.company')}
                    title={this.props.resume('resume.experiences.fullTime.uneworld.position')}
                  />

                <h3 className="resume-title">{this.props.resume('resume.experiences.freelancers.title')}</h3>
                  <ResumeComponent
                    period={this.props.resume('resume.experiences.freelancers.fenix.period')}
                    description={this.props.resume('resume.experiences.freelancers.fenix.description')}
                    info={this.props.resume('resume.experiences.freelancers.fenix.company')}
                    title={this.props.resume('resume.experiences.freelancers.fenix.position')}
                  />
                  <ResumeComponent
                    period={this.props.resume('resume.experiences.freelancers.popcorn.period')}
                    description={this.props.resume('resume.experiences.freelancers.popcorn.description')}
                    info={this.props.resume('resume.experiences.freelancers.popcorn.company')}
                    title={this.props.resume('resume.experiences.freelancers.popcorn.position')}
                  />
                  <ResumeComponent
                    period={this.props.resume('resume.experiences.freelancers.growplus.period')}
                    description={this.props.resume('resume.experiences.freelancers.growplus.description')}
                    info={this.props.resume('resume.experiences.freelancers.growplus.company')}
                    title={this.props.resume('resume.experiences.freelancers.growplus.position')}
                  />
                </div>
              </div>

            </div>
          </section>
        </>
    )
  }
}

Resume.propTypes = {
  resume: PropTypes.func.isRequired,
  titles: PropTypes.func.isRequired
}

export default Resume
