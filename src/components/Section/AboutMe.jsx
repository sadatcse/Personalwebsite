import React from 'react';

const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
    <div className="about--section--img">
      <img src="./img/about-me.png" alt="About Me" />
    </div>
    <div className="hero--section--content--box about--section--box">
      <div className="hero--section--content">
      
        <h1 className="skills-section--heading">About Me</h1>
        <p className="hero--section-description">
        As an aspiring developer, I bring a specialized skill set in React and its associated
            frameworks. Proficient in HTML, CSS, and JavaScript, I am actively seeking internship
            or job opportunities to apply and enhance my knowledge in these technologies.
        </p>
        <p className="hero--section-description">
        With hands-on experience in building responsive web applications, I thrive on collaborative projects that push the boundaries of user interface design. Seeking roles where I can contribute creativity and expertise in front-end development within a dynamic team environment.
        </p>
      </div>
    </div>
  </section>
  );
};

export default AboutMe;