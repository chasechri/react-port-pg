import React from "react";

function Nav(props) {
  const tabs = ["About", "Portfolio", "Resume", "Contact"];
  return (
    <header>
      <h2>
        <a href="/">Chase Christenson</a>
      </h2>
      <nav>
        <ul>
          {" "}
          {tabs.map((tab) => (
            <li className={props.currentPage === tab} key={tab}>
              <a href onClick={() => props.handlePageChange(tab)}>
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
