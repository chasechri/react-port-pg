import React from "react";
import npwa from "../../assets/images/national-weather-img.png";
import pizza from "../../assets/images/pizza-hunt-img.png";
import password from "../../assets/images/random-password-img.png";
import zookeepr from "../../assets/images/zookeepr-img.png";
import pport from "../../assets/images/photo-port-img.png";
import quiz from "../../assets/images/quiz-app-img.png";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h3 className="projects">Portfolio</h3>
      <div className="work">
        <article className="national-weather-app">
          <img alt="" src={npwa} />
          <div className="park-text">
            <h4>National Park Planner App</h4>
            <p>
              Allows you to see the 5-day weather forecast of the top 5 ranked
              National Parks.
            </p>
            <br></br>
            <p>Languages/Tech: HTML, CSS, Tailwind, and JavaScript</p>
            <br></br>
            <a
              href="https://github.com/chasechri/National-Park"
              target="_blank"
              rel="noreferrer"
            >
              Click to see repository!
            </a>
            <br></br>
            <a
              href="https://chasechri.github.io/National-Park/"
              target="_blank"
              rel="noreferrer"
            >
              Click to see the live site!
            </a>
          </div>
        </article>
        <article className="pizza-hunt">
          <img alt="" src={pizza} />
          <div className="pizza-text">
            <h4>Pizza Hunt</h4>
            <p>Allows you to create and share your favorite pizza recipes.</p>
            <br></br>
            <p>
              Languages/Tech: Node, JavaScript, CSS, Heroku, HTML, Express, and
              Mongodb.
            </p>
            <br></br>
            <a
              href="https://github.com/chasechri/pizza-hunt"
              target="_blank"
              rel="noreferrer"
            >
              Click to see repository!
            </a>
            <br></br>
            <a
              href="https://young-tundra-07546.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Click to see the live site!
            </a>
          </div>
        </article>
        <article className="random-password">
          <img alt="" src={password}></img>
          <div className="password-text">
            <h4>Random Password Generator</h4>
            <p>
              Allows you to generate a secure password between 8 and 128
              characters in length.
            </p>
            <br></br>
            <p>Languages/Tech: HTML, CSS, and JavaScript.</p>
            <br></br>
            <br></br>
            <a
              href="https://github.com/chasechri/randompassword-by-cc"
              target="_blank"
              rel="noreferrer"
            >
              Click to see repository!
            </a>
            <br></br>
            <a
              href="https://chasechri.github.io/randompassword-by-cc/"
              target="_blank"
              rel="noreferrer"
            >
              Click to see the live site!
            </a>
          </div>
        </article>
        <article className="zookeepr-app">
          <img alt="" src={zookeepr}></img>
          <div className="zookeepr-text">
            <h4>Zookeepr</h4>
            <p>
              Allows you to view and add to a catalog of animals and zookeepers.
            </p>
            <br></br>
            <p>
              Languages/Tech: HTML, CSS, JavaScript, Node, Jest, and Express.
            </p>
            <br></br>
            <a
              href="https://github.com/chasechri/zookeepr"
              target="_blank"
              rel="noreferrer"
            >
              Click to see repository!
            </a>
            <br></br>
            <a
              href="https://ancient-thicket-09140.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Click to see the live site!
            </a>
          </div>
        </article>
        <article className="photo-port">
          <img alt="" src={pport}></img>
          <div className="photo-text">
            <h4>Photographer Portfolio</h4>
            <p>Portfolio website built for a photgrapher.</p>
            <br></br>
            <p>Languages/Tech: JavaScript, React, Node, and CSS. </p>
            <br></br>
            <a
              href="https://github.com/chasechri/photo-port"
              target="_blank"
              rel="noreferrer"
            >
              Click to see repository!
            </a>
            <br></br>
            <a
              href="https://chasechri.github.io/photo-port/"
              target="_blank"
              rel="noreferrer"
            >
              Click to see the live site!
            </a>
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={quiz}></img>
          <div className="quiz-text">
            <h4>Quiz App</h4>
            <p>A simple 5 question timed quiz</p>
            <br></br>
            <p>Languages/Tech: HTML, CSS, and JavaScript.</p>
            <br></br>
            <br></br>
            <a
              href="https://github.com/chasechri/codeine-quiz"
              target="_blank"
              rel="noreferrer"
            >
              Click to see repository!
            </a>
            <br></br>
            <a
              href="https://chasechri.github.io/codeine-quiz/"
              target="_blank"
              rel="noreferrer"
            >
              Click to see the live site!
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
