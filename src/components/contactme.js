import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./styling/contactme.css";

const contactMe = () => {
  const form = useRef();

  let sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_95fboxm",
        "template_svd3g0p",
        form.current,
        "user_wyBd7jAtG8fKIQt3RhrJz"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(form.current);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form className="contactme-form" ref={form} onSubmit={sendEmail}>
      <input
        className="contactme-name"
        type="text"
        name="from_name"
        placeholder="Name"
      />
      <input
        className="contactme-name"
        type="email"
        name="email"
        placeholder="Email"
      />
      <textarea
        className="contactme-message"
        name="message"
        placeholder="Message"
      />
      <input className="form-submit" type="submit" value="Send" />
    </form>
  );
};

export default contactMe;
