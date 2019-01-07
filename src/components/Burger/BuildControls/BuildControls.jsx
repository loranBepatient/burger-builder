import React from "react";
import BuilControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" }
];
const buildControls = ({
  ingredients,
  price,
  onAddIngredient,
  onRemoveIngredient,
  onPurchasing
}) => {
  const { BuildControls, OrderButton } = classes;
  return (
    <div className={BuildControls}>
      <p>
        Current Price: <strong>{price}$</strong>
      </p>
      {controls.map(control => (
        <BuilControl
          key={control.label}
          label={control.label}
          type={control.type}
          onAddIngredient={onAddIngredient}
          onRemoveIngredient={onRemoveIngredient}
          disabled={ingredients[control.type] === 0}
        />
      ))}
      <button
        disabled={price === 0}
        className={OrderButton}
        onClick={onPurchasing}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
