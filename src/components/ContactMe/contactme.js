import React, { useRef } from "react";
import "./contactme.css";
import emailjs from "emailjs-com";


const ContactMe = () => {
  const form = useRef();
  
  const email = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ip9r72o",
        "template_9t3a4wo",
        form.current,
        "-Djc0VYbgfBg6I47GH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(alert("Thanks for reaching out!"))
      .then(e.target.reset());
  };

  return (
    <section id="contactme">
      <h4>Contact Me</h4>
      <div className="emailform">
        <form ref={form} onSubmit={email}>
          <input
            className="form_input"
            type="text"
            name="name"
            placeholder="Enter Name Here"
            required
          ></input>
          <input
            className="form_input"
            type="email"
            name="email"
            placeholder="Enter Email Here"
            required
          ></input>
          <textarea
            className="form_text"
            name="message"
            rows="5"
            placeholder="Enter Message Here"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Message Me
          </button>
        </form>
      </div>
    </section>
  );
};
