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
      resume: this.props.menu('menu.resume'),
      portfolio: this.props.menu('menu.portfolio')
    }

    console.log(typeof this.state.about)
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
                        <a href="https://pt-br.facebook.com/" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="https://pt-br.facebook.com/" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="https://pt-br.facebook.com/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        <a href="https://pt-br.facebook.com/" className="linkedin"><i className="bx bxl-github"></i></a>
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
