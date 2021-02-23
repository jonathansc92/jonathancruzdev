import React from 'react';

class Hero extends React.Component {
    render() {
      return (
        <div>
          <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
              <h1>Jonathan Cruz</h1>
              <p>I'm Developer</p>
            </div>
          </section>
        </div>
      );
    }
}

export default Hero;

