import React from "react";

import classes from "./BuildControl.module.css";

const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        disabled={props.disabled}
        className={classes.Less}
        onClick={() => props.onRemoveIngredient(props.type)}
      >
        Less
      </button>
      <button
        className={classes.More}
        onClick={() => props.onAddIngredient(props.type)}
      >
        More
      </button>
    </div>
  );
};

export default buildControl;
