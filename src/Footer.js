import React from 'react'

class Footer extends React.Component {
  render () {
    return (
        <>
          <footer id="footer">
            <div className="container">
              <div className="copyright">
                &copy; Copyright <strong><span>Jonathan Cruz</span></strong>
              </div>
              <div className="credits">
                <a href="mailto:jonathansc92@gmail.com?subject=Website%20again">jonathansc92@gmail.com</a>
              </div>
            </div>
          </footer>
        </>
    )
  }
}

export default Footer
