import React from "react";
// import Pdf from "../../assets/Documents/Chase-Christenson.pdf";
import newPdf from "../../assets/Documents/Chase Christenson.pdf";

function Resume() {
  return (
    <section id="resume" className="resume">
      <h3>Resume</h3>
      <button>
        <a href={newPdf} target="_blank" rel="noreferrer">
          Click here to download resume
        </a>
      </button>
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
    </section>
  );
}

export default Resume;
