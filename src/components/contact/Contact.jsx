import React, { useRef } from "react";
import "./Contact.css";
import mail_img from "../../assets/mail.png";
import phone_img from "../../assets/phone.png";
import location_img from "../../assets/location.png";
const accessKey = import.meta.env.VITE_APP_WEBFORM_ACCESS_KEY;

const Contact = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (formRef.current.value.trim() === "") {
      alert("Please fill the form.");
    } else {
      formData.append("access_key", accessKey);

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        // console.log("Success", res);
        alert("Message sent Successfully.");
      }
    }
  };
  return (
    <section id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <hr />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'am currently available to take on new projects. Feel free to
            contact me for any related projects.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={phone_img} alt="phone" />
              <p>9860627444</p>
            </div>
            <div className="contact-detail">
              <img src={mail_img} alt="mail" />
              <p>bohorabishalbabu@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_img} alt="location" />
              <p>Godawari-10, Lalitpur</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            ref={formRef}
            type="text"
            placeholder="Enter your name."
            name="name"
            required
          />
          <label htmlFor="">Email</label>
          <input
            ref={formRef}
            type="email"
            placeholder="Enter your email."
            name="email"
            required
          />
          <label htmlFor="">Write your message here.</label>
          <textarea
            ref={formRef}
            name="message"
            rows="8"
            placeholder="Enter your message."
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
