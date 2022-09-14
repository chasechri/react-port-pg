import React from "react";

function Nav() {
  return (
    <header>
      <h2>
        <a href="/">Chase Christenson</a>
      </h2>
      <nav>
        <ul>
          <li>
            <a href="#about-me">About me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
