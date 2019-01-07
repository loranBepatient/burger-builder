import React, { Component } from "react";

import Aux from "../../hoc/Aux";

import Modal from "../../components/UI/Modal/Modal";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const PRICES = Object.freeze({
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
});

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchasing: false
  };

  addIngredientHandler = type => {
    let { ingredients, totalPrice } = this.state;
    ingredients[type]++;
    totalPrice = +(totalPrice + PRICES[type]).toFixed(2);

    this.setState({ ingredients, totalPrice });
  };

  removeIngredientHandler = type => {
    let { ingredients, totalPrice } = this.state;
    if (ingredients[type] > 0) {
      ingredients[type]--;
      totalPrice = +(totalPrice - PRICES[type]).toFixed(2);
      this.setState({ ingredients, totalPrice });
    }
  };

  purchasingHandler = () => {
    this.setState({ purchasing: !this.state.purchasing });
  };

  orderHandler = () => {
    alert("time to pay");
  };

  render() {
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          onModalClose={this.purchasingHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            onCancel={this.purchasingHandler}
            onContinue={this.orderHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          onAddIngredient={this.addIngredientHandler}
          onRemoveIngredient={this.removeIngredientHandler}
          onPurchasing={this.purchasingHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
