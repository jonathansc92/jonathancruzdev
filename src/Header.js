import React from 'react'
import profileImg from './img/profile-img.jpg'
import PropTypes from 'prop-types'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name,
      about: this.props.menu('menu.about'),
      skills: this.props.menu('menu.skills'),
      home: this.props.menu('menu.home'),
      resume: this.props.menu('menu.resume.title'),
      portfolio: this.props.menu('menu.portfolio')
    }
  }

  render () {
    return (
        <>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src={profileImg} alt="" className="img-fluid rounded-circle" />
                        <h1 className="text-light"><a href="index.html">{this.state.name}</a></h1>
                        <div className="social-links mt-3 text-center">
                        <a href="https://web.facebook.com/Jonathanscruz92" className="facebook" target="_blank" rel="noreferrer"><i className="bx bxl-facebook"></i></a>
                        <a href="https://www.instagram.com/jonathanscruzdev/" className="instagram" target="_blank" rel="noreferrer"><i className="bx bxl-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/jonathancruz/" className="linkedin" target="_blank" rel="noreferrer"><i className="bx bxl-linkedin"></i></a>
                        <a href="https://github.com/jonathansc92/" className="github" target="_blank" rel="noreferrer"><i className="bx bxl-github"></i></a>
                        </div>
                    </div>
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                        <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>{this.state.home}</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>{this.state.about}</span></a></li>
                        <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-check"></i> <span>{this.state.skills}</span></a></li>
                        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>{this.state.resume}</span></a></li>
                        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>{this.state.portfolio}</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  menu: PropTypes.func.isRequired
}

export default Header
