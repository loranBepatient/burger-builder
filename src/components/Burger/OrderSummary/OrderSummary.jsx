import React from "react";

import Button from "../../UI/Button/Button";
const OrderSummary = ({ ingredients, onCancel, onContinue }) => {
  const ingredientsSummary = Object.keys(ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>
          {key}: {ingredients[key]}
        </span>
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your order</h3>
      <p>made from these ingredients</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to checkout?</p>
      <Button type={"Danger"} onClicked={onCancel}>
        CANCEL
      </Button>
      <Button type={"Success"} onClicked={onContinue}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;
