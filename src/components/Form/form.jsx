import React, { useState } from "react";
import FormInput from "../FormInput/formInput";
import "./form.scss";

const defaultInput = {
  userName: "",
  companyName: "",
  email: "",
  number: "",
  message: "",
};

const Form = ({ closeModal }) => {
  const [formField, setFormField] = useState(defaultInput);
  const { userName, companyName, email, number, message } = formField;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://futurista-backend.onrender.com", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName,
        companyName,
        email,
        number,
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="userName"
        placeholder="Your Full Name"
        value={userName}
        onChange={handleChange}
        required
      />
      <FormInput
        type="text"
        name="companyName"
        placeholder="Your Company Name"
        value={companyName}
        onChange={handleChange}
        required
      />
      <FormInput
        type="email"
        name="email"
        placeholder="Your Email Address"
        value={email}
        onChange={handleChange}
        required
      />
      <FormInput
        type="mobile"
        name="number"
        placeholder="Your Contact Number"
        pattern="[0-9]{10}"
        maxLength="10"
        value={number}
        onChange={handleChange}
        required
      />
      <textarea
        className="form-control"
        name="message"
        placeholder="Your Message"
        value={message}
        onChange={handleChange}
        required
      />
      <div className="form-button-container">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <button className="btn btn-dark" type="button" onClick={closeModal}>
          Close
        </button>
      </div>
    </form>
  );
};

export default Form;
