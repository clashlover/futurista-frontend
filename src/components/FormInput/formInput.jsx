import React from "react";
import "./formInput.scss";

const FormInput = ({ type, name, ...props }) => {
  return <input className="form-control" type={type} name={name} {...props} />;
};

export default FormInput;
