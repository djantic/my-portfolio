import React from 'react';
import './about.css';
import aboutMe from '../../assets/waves.jpg';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutMe} alt="about-me" />
          </div>
        </div>
        <div className="about__content">
          <p>
            I ' am web developer from Serbia, currently still learning and
            adapting my skill set . I enjoy developing full stack applications
            ranging from single page application to progressive web apps.The
            fact that I can convert an idea into an actual entity, through my
            code, is what excites me the most about the development process.
            Outside of coding my hobbies include hiking,gaming and traveling.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
