import React from "react";
import npwa from "../../assets/images/national-weather-img.png";
import pizza from "../../assets/images/pizza-hunt-img.png";
import password from "../../assets/images/random-password-img.png";
import zookeepr from "../../assets/images/zookeepr-img.png";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h3 className="projects">Projects</h3>
      <div className="work">
        <article className="national-weather-app">
          <img alt="" src={npwa} />
        </article>
        <article className="pizza-hunt">
          <img alt="" src={pizza}></img>
        </article>
        <article className="random-password">
          <img alt="" src={password}></img>
        </article>
        <article className="zookeepr-app">
          <img alt="" src={zookeepr}></img>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
