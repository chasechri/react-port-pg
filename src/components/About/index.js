import React from "react";
import photo from "../../assets/images/picture.jpg";

function About() {
  return (
    <section id="about" className="about-me">
      <div>
        <img src={photo} alt="about me" className="about-me-img" />
      </div>
      <div className="about-me-text">
        <h3>About Me</h3>
        <p>
          Hello my name is Chase Christenson. I am a 21 year old who recently
          earned a certificate in full stack development at the University of
          Minnesota. I love to learn new things, I'm goal oriented, focused, and
          not afraid of hard work. In my spare time I enjoy playing basketball
          and watching tv shows.
        </p>
      </div>
    </section>
  );
}

export default About;
