"use client";

import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://formspree.io/f/xjvnnblb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="contact-about">
              <h3>Akeshya</h3>
              <p>
                Designers, developers &amp; marketeers capable of delivering
                solutions according to your needs,
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div className="info">
              <div>
                <i className="ri-map-pin-line"></i>
                <p>
                  26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh
                  524004
                </p>
              </div>

              <div>
                <i className="ri-mail-send-line"></i>
                <p>info@akeshya.com</p>
              </div>

              <div>
                <i className="ri-phone-line"></i>
                <p>+91 94942 40922 </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12">
            <form className="php-email-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required=""
                ></textarea>
              </div>
              <div className="my-3">
                {status === "SUCCESS" && (
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                )}
                {status === "ERROR" && (
                  <div className="error-message">
                    Oops! There was an error sending your message.
                  </div>
                )}
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
