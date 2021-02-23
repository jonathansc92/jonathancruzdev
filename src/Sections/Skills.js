import React from 'react';
import SkillsComponent from '../components/SkillsComponent';

class Skills extends React.Component {
    render() {
      return (
        <div>
            <section id="skills" className="skills section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row skills-content">
                        <div className="col-lg-6" data-aos="fade-up">
                            <SkillsComponent skill="PHP" progress="90" />
                            <SkillsComponent skill="VueJS" progress="80" />
                            <SkillsComponent skill="React JS" progress="50" />
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <SkillsComponent skill="NodeJS" progress="50" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
      );
    }
}

export default Skills;

