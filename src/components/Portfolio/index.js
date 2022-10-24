import React from "react";
import npwa from "../../assets/images/national-weather-img.png";
import pizza from "../../assets/images/pizza-hunt-img.png";
import password from "../../assets/images/random-password-img.png";
import zookeepr from "../../assets/images/zookeepr-img.png";
import pport from "../../assets/images/photo-port-img.png";
import quiz from "../../assets/images/quiz-app-img.png";
import search from "../../assets/images/searcheng.png";
import task from "../../assets/images/taskinator.png";
import contact from "../../assets/images/contactcard.png";
import emptrack from "../../assets/images/employee-track.jpg";
import ecom from "../../assets/images/ecom.jpg";
import portgen from "../../assets/images/portgen.jpg";
import sonet from "../../assets/images/social-netss.jpg";
import teampg from "../../assets/images/teampg.jpg";
import readme from "../../assets/images/readmegenss.jpg";
import runbud from "../../assets/images/runbuddy-ss-1.jpg";
import note from "../../assets/images/note.jpg";
import work from "../../assets/images/workday.jpg";
import pickup from "../../assets/images/pickup.jpg";
import hor from "../../assets/images/clock.jpg";
import deep from "../../assets/images/deep-thoughts.jpg";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h3 className="projects">Portfolio</h3>
      <div className="work">
        <article className="quiz-app">
          <img alt="" src={deep}></img>
          <div className="quiz-text">
            <h4>Deep Thoughts</h4>
            <p>Social network for sharing thoughts with your friends.</p>
            <br></br>
            <p>
              Languages/Tech: HTML, CSS, JavaScript, Mongo, Express, React, and
              Node.
            </p>
            <div className="links">
              <a
                href="https://github.com/chasechri/deep-thoughts"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
              <br></br>
              <a
                href="https://gentle-spire-50154.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Click to see the live site!
              </a>
            </div>
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={search}></img>
          <div className="quiz-text">
            <h4>Book Search Engine</h4>
            <p>
              A google search engine for finding books and saving them to your
              profile.
            </p>
            <br></br>
            <p>
              Languages/Tech: MongoDB, Express, React, Node, JavaScript, CSS.
            </p>
            <div className="links">
              <a
                href="https://github.com/chasechri/book-search-engine-bycc"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
              <br></br>
              <a
                href="https://sheltered-bayou-52718.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Click to see the live site!
              </a>
            </div>
          </div>
        </article>
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
            <div className="links">
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
            <div className="links">
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
            <div className="links">
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
            <div className="links">
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
          </div>
        </article>
        <article className="photo-port">
          <img alt="" src={pport}></img>
          <div className="photo-text">
            <h4>Photographer Portfolio</h4>
            <p>Portfolio website built for a photgrapher.</p>
            <br></br>
            <br></br>
            <p>Languages/Tech: JavaScript, React, Node, and CSS. </p>
            <div className="links">
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
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={quiz}></img>
          <div className="quiz-text">
            <h4>Quiz App</h4>
            <p>A simple 5 question timed quiz</p>
            <br></br>
            <br></br>
            <p>Languages/Tech: HTML, CSS, and JavaScript.</p>
            <div className="links">
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
          </div>
        </article>

        <article className="quiz-app">
          <img alt="" src={task}></img>
          <div className="quiz-text">
            <h4>Taskinator</h4>
            <p>
              This application allows you to create, edit, and delete tasks.
            </p>
            <br></br>
            <p>Languages/Tech: HTML, CSS, and JavaScript.</p>
            <div className="links">
              <a
                href="https://github.com/chasechri/taskinator"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
              <br></br>
              <a
                href="https://chasechri.github.io/taskinator/"
                target="_blank"
                rel="noreferrer"
              >
                Click to see the live site!
              </a>
            </div>
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={contact}></img>
          <div className="quiz-text">
            <h4>Contact Cards</h4>
            <p>
              This application allows you to create and save contact
              information. The app is also installable.
            </p>
            <br></br>
            <p>Languages/Tech: Webpack, JavaScript, CSS, HTML, and Express.</p>
            <div className="links">
              <a
                href="https://github.com/chasechri/contact-card"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
              <br></br>
              <a
                href="https://guarded-lake-12434.herokuapp.com/#"
                target="_blank"
                rel="noreferrer"
              >
                Click to see the live site!
              </a>
            </div>
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={emptrack}></img>
          <div className="quiz-text">
            <h4>Employee Tracker</h4>
            <p>
              This is a command-line application built to help manage a
              company's employee database
            </p>
            <br></br>
            <p>Languages/Tech: Node.js, Inquirer, MySQL, and JavaScript</p>
            <br></br>
            <br></br>
            <div className="repo-link">
              <a
                href="https://github.com/chasechri/employee-track-cc"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
            </div>
            <br></br>
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={ecom}></img>
          <div className="quiz-text">
            <h4>E-commerce Backend</h4>
            <p>
              This project comprises of back-end code for an e-commerce website.
            </p>
            <br></br>
            <br></br>
            <p>
              Languages/Tech: Express.js, API, Insomnia, Sequelize, and MySQL
              database.
            </p>
            <br></br>
            <br></br>
            <div className="repo-link">
              <a
                href="https://github.com/chasechri/E-commerce-backend-cc"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
            </div>
            <br></br>
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={portgen}></img>
          <div className="quiz-text">
            <h4>Portfolio Generator</h4>
            <p>
              Command-line application used to create a professional portfolio.
            </p>
            <br></br>
            <br></br>
            <p>Languages/Tech: Node, Inquirer, HTML, CSS, and JavaScript.</p>
            <br></br>
            <div className="repo-link">
              <a
                href="https://github.com/chasechri/portfolio-generator"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
            </div>
            <br></br>
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={sonet}></img>
          <div className="quiz-text">
            <h4>Social Network Backend</h4>
            <p>
              Backend api for social network. Capable of creating, reading,
              updating, and deleting data.
            </p>
            <br></br>
            <p>
              Languages/Tech: JavaScript, Node, Mongo, Express, Mongoose, and
              Insomnia.
            </p>
            <br></br>
            <div className="repo-link">
              <a
                href="https://github.com/chasechri/social-network-bycc"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
            </div>
            <br></br>
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={teampg}></img>
          <div className="quiz-text">
            <h4>Team Profile Generator</h4>
            <p>
              Command-line application for generating and organizing a team.
            </p>
            <br></br>
            <br></br>
            <p>Languages/Tech: HTML, CSS, JavaScript, Node, and Jest.</p>
            <br></br>
            <div className="repo-link">
              <a
                href="https://github.com/chasechri/team-profile-general-byCC"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
            </div>
            <br></br>
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={readme}></img>
          <div className="quiz-text">
            <h4>README Generator</h4>
            <p>
              Command-line application used to save time by generating a
              professional readme.
            </p>
            <br></br>
            <p>Languages/Tech: JavaScript and Node.</p>
            <br></br>
            <br></br>
            <br></br>
            <div className="repo-link">
              <a
                href="https://github.com/chasechri/team-profile-general-byCC"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
            </div>
            <br></br>
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={runbud}></img>
          <div className="quiz-text">
            <h4>Run Buddy</h4>
            <p>Website for people interested in getting into running</p>
            <br></br>
            <p>Languages/Tech: HTML and CSS.</p>
            <br></br>
            <div className="links">
              <a
                href="https://github.com/chasechri/Run-Buddy"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
              <br></br>
              <a
                href="https://chasechri.github.io/Run-Buddy/index.html"
                target="_blank"
                rel="noreferrer"
              >
                Click to see the live site!
              </a>
            </div>
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={note}></img>
          <div className="quiz-text">
            <h4>Note Taker</h4>
            <p>Application for writing and saving notes.</p>
            <br></br>
            <br></br>
            <p>
              Languages/Tech: HTML, CSS, JavaScript, Express, Bootstrap, and
              Heroku.
            </p>
            <div className="links">
              <a
                href="https://github.com/chasechri/note-taker-cc"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
              <br></br>
              <a
                href="https://elegant-chaise-05713.herokuapp.com/notes"
                target="_blank"
                rel="noreferrer"
              >
                Click to see the live site!
              </a>
            </div>
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={work}></img>
          <div className="quiz-text">
            <h4>Work Day Scheduler</h4>
            <p>
              Application for planning out your day and keeping up with
              everything you have to do.
            </p>
            <br></br>
            <br></br>
            <p>Languages/Tech: HTML, CSS, JavaScript, and JQuery.</p>
            <br></br>
            <div className="links">
              <a
                href="https://github.com/chasechri/note-taker-cc"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
              <br></br>
              <a
                href="https://elegant-chaise-05713.herokuapp.com/notes"
                target="_blank"
                rel="noreferrer"
              >
                Click to see the live site!
              </a>
            </div>
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={pickup}></img>
          <div className="quiz-text">
            <h4>Pick Up</h4>
            <p>
              Web application for people seeking out others to play a sport with
              at a location near them.
            </p>
            <br></br>
            <p>
              Languages/Tech: HTML, CSS, JavaScript, Tailwind, Node, Express,
              Handlebars, MySQL2, Sequelize, Heroku, and dotenv.
            </p>
            <div className="links">
              <a
                href="https://github.com/chasechri/pick-up"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
              <br></br>
              <a
                href="https://pick-up-event.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Click to see the live site!
              </a>
            </div>
          </div>
        </article>
        <article className="quiz-app">
          <img alt="" src={hor}></img>
          <div className="quiz-text">
            <h4>Clock</h4>
            <p>Created a simple clock app.</p>
            <br></br>
            <br></br>
            <br></br>
            <p>Languages/Tech: HTML, CSS, and JavaScript.</p>
            <br></br>
            <div className="links">
              <a
                href="https://github.com/chasechri/clock"
                target="_blank"
                rel="noreferrer"
              >
                Click to see repository!
              </a>
              <br></br>
              <a
                href="https://chasechri.github.io/clock/"
                target="_blank"
                rel="noreferrer"
              >
                Click to see the live site!
              </a>
            </div>
          </div>
        </article>
      </div>
      <footer>
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
    </section>
  );
}

export default Portfolio;
