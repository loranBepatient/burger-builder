import React from "react";

import logoImage from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logoImage} alt="Brand Logo" />
    </div>
  );
};

export default Logo;
