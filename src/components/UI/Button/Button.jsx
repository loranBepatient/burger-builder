import React from "react";

import classes from "./Button.module.css";

const Button = ({ children, onClicked, type }) => {
  const buttonClass = type => {
    return `${classes.Button} ${classes[type]}`;
  };
  return (
    <button onClick={onClicked} className={buttonClass(type)}>
      {children}
    </button>
  );
};

export default Button;
