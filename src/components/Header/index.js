import React, { useState } from "react";
import Nav from "../Nav";
import About from "../About";
import ContactForm from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  document.title = currentPage;

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;
