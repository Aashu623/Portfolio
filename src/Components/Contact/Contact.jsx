import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

import { Loader } from "react-feather";
function Contact() {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [sendButtonDisabled, setSendButtonDisabled] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validatePhoneNumber = (input_str) => {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    return re.test(input_str);
  };
  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.phone
    ) {
      setErrorMessage("!Please fill in all fields");
      return false;
    }
    if (!validatePhoneNumber(formData.phone)) {
      setErrorMessage("!Please enter valid phone number");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const sendEmail = (e) => {
    setIsProcessing(true);
    e.preventDefault();
    if (validateForm()) {
      setSendButtonDisabled(true);
      emailjs
        .sendForm(
          "service_hpsv3ua",
          "template_w5ouvrk",
          form.current,
          "VyNNNOYUIwEMUdeaX"
        )
        .then(
          (result) => {
            setErrorMessage("Thankyou! I'll contact you soon");
            setSendButtonDisabled(false);
            setIsProcessing(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setSendButtonDisabled(false);
            setErrorMessage(error.text);
          }
        );
    }
  };

  return (
    <div className="container my-4" id="contact">
      <h1 className="component-heading">Contact Me</h1>
      <div className="d-flex align-items-center justify-content-center">
        <div className="left">
          <div
            data-aos="fade-up"
            className="span d-flex flex-column justify-content-center align-items-center"
          >
            <h1>Get in touch</h1>
            <h1>Contact me</h1>
          </div>
        </div>
        <div className="right">
          <form
            data-aos="fade-up"
            ref={form}
            onSubmit={sendEmail}
            className="d-flex flex-column gap-2 align-item-center justify-content-center w-75 m-auto"
            style={{ minWidth: "300px" }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              className="user"
              placeholder="Enter your name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              className="user"
              placeholder="Enter your phone "
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              className="user"
              placeholder="Enter your mail"
              onChange={handleChange}
            />
            <textarea
              name="message"
              value={formData.message}
              className="user"
              placeholder="Enter message"
              cols="30"
              rows="5"
              onChange={handleChange}
            ></textarea>
            <input
              type="submit"
              className={sendButtonDisabled ? "disable button" : "button"}
            />
          </form>
        </div>
      </div>
      {isProcessing && <Loader className="loader" />}
      <div className="error">{errorMessage}</div>
    </div>
  );
}

export default Contact;
