import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  //sum up ingredients value. If value is 0, it's not purchasable
  UpdatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0);
    this.setState({purchasable: sum > 0})
  }

  addIngredientHandler = (type) => {
    //what's the old count of an ingredient type
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount + 1;
    const updatedIngredients = {
      //distribute the old propertis of the state using spread operator
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCounted;
    const priceAddtion = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddtion;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    this.UpdatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    //what's the old count of an ingredient type
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }

    const updatedCounted = oldCount - 1;
    const updatedIngredients = {
      //distribute the old propertis of the state using spread operator
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCounted;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
    this.UpdatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHander = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHander = () => {
    alert('You continue!');
  }

  render () {
    //create an immutable object of ingredients
    //update the values of this new object with true or false
    //pass diabledInfo to BuildControls
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <div>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHander}>
          <OrderSummary
              purchaseCanceled={this.purchaseCancelHander}
              purchaseContinued={this.purchaseContinueHander}
              ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice}/>
      </div>
    )
  }
}

export default BurgerBuilder;