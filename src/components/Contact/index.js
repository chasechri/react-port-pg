import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // const [errorMessage, setErrorMessage] = useState("");

  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const { name, email, message } = formState;

  // function handleChange(e) {
  //   if (e.target.name === "email") {
  //     const isValid = validateEmail(e.target.value);
  //     console.log(isValid);
  //     // isValid conditional statement
  //     if (!isValid) {
  //       setErrorMessage("Your email is invalid.");
  //     } else {
  //       setErrorMessage("");
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage("");
  //     }
  //   }
  //   if (!errorMessage) {
  //     setFormState({ ...formState, [e.target.name]: e.target.value });
  //   }
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formState);
  // }

  // JSX
  return (
    <section className="contact" id="contact">
      <h1 className="con">Contact</h1>
      <card className="contact-card">
        <h4>(612) 513-1010</h4>
        <h4>
          <a
            href="mailto:christensonchase451@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            christensonchase451@gmail.com
          </a>
        </h4>
        <h4>
          <a
            href="https://www.linkedin.com/in/chase-christenson-308444238/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </h4>
        <h4>
          <a
            href="https://github.com/chasechri"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </h4>
      </card>
      {/* <li>GitHub: </li> */}
      {/* <form id="contact-form" onSubmit={handleSubmit} className="contact-form">
        <div className="name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        <div className="message">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onChange={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div className="contact-btn">
          <button type="submit">Submit</button>
        </div>
      </form> */}
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
    </section>
  );
}

export default ContactForm;
