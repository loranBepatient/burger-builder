import React from "react";

import classes from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const burger = ({ ingredients }) => {
  const ingredientsParser = Object.keys(ingredients)
    .filter(ingredientKey => ingredients[ingredientKey] > 0)
    .map(ingredientKey => {
      return [...Array(ingredients[ingredientKey])].map((_, i) => {
        return (
          <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        );
      });
    });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsParser.map(ingredient => ingredient)}

      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
