import React from "react";
import propTypes from "prop-types";

import classes from "./BurgerIngredient.module.css";

const BurgerIngredient = ({ type }) => {
  const {
    BreadBottom,
    Meat,
    Salad,
    Seeds1,
    Seeds2,
    Cheese,
    Bacon,
    BreadTop
  } = classes;

  switch (type) {
    case "bread-bottom":
      return <div className={BreadBottom} />;

    case "meat":
      return <div className={Meat} />;
    case "cheese":
      return <div className={Cheese} />;
    case "salad":
      return <div className={Salad} />;
    case "bacon":
      return <div className={Bacon} />;

    case "bread-top":
      return (
        <div className={BreadTop}>
          <div className={Seeds1} />
          <div className={Seeds2} />
        </div>
      );

    default:
      return null;
  }
};

BurgerIngredient.propTypes = {
  type: propTypes.string.isRequired
};

export default BurgerIngredient;
