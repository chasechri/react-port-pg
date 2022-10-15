import React from "react";
import photo from "../../assets/images/picture.jpg";

function About() {
  return (
    <div>
      <section id="about" className="about-me">
        <div>
          <img src={photo} alt="about me" className="about-me-img" />
        </div>
        <div className="about-me-text">
          <h3>About Me</h3>
          <p>
            Hello my name is Chase Christenson. I am a 21 year old who recently
            earned a certificate in full stack development at the University of
            Minnesota. I love to learn new things, I'm goal oriented, focused,
            and not afraid of hard work. In my spare time I enjoy playing
            basketball and watching tv shows.
          </p>
        </div>
      </section>
      <footer className="about-footer">
        <div className="foot-con">
          <h1>
            <a
              href="https://github.com/chasechri"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi-github"></i>
            </a>
          </h1>
          <h1>
            <a
              href="https://www.linkedin.com/in/chase-christenson-308444238/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="bi-linkedin"></i>
            </a>
          </h1>
          <h1>
            <a
              href="https://mobile.twitter.com/nbachase1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi-twitter"></i>
            </a>
          </h1>
        </div>
      </footer>
    </div>
  );
}

export default About;
