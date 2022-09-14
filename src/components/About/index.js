import React from "react";
import photo from "../../assets/images/picture.jpg";

function About() {
  return (
    <section id="about-me" className="about-me">
      <div>
        <img src={photo} alt="about me" className="about-me-img" />
      </div>
      <div className="about-me-text">
        <h3>About Me</h3>
        <p>
          Hello my name is Chase Christenson. I am a 21 year old currently
          learning full stack development at the University of Minnesota.
        </p>
      </div>
    </section>
  );
}

export default About;
