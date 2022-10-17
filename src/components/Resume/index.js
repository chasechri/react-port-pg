import React from "react";
// import Pdf from "../../assets/Documents/Chase-Christenson.pdf";
import newPdf from "../../assets/Documents/Chase Christenson.pdf";

function Resume() {
  return (
    <div>
      <section id="resume" className="resume">
        <h3>Resume</h3>
        <button>
          <a href={newPdf} target="_blank" rel="noreferrer">
            Click here to download resume
          </a>
        </button>
        <div className="prof">
          <div>
            <h4>Frontend Proficiencies</h4>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            <li>JQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
          </div>
          <div>
            <h4>Backend Proficiencies</h4>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequellize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
          </div>
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

export default Resume;
