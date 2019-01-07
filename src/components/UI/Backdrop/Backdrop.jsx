import React from "react";

import classes from "./Backdrop.module.css";

const Backdrop = ({ show, onClicked }) => {
  const content = <div className={classes.Backdrop} onClick={onClicked} />;
  return show ? content : null;
};

export default Backdrop;
