import React from 'react';
import Button from '../UI/Button/Button'

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey => {
    return (
      <li key={igKey  }>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    )
  });

  return (
    <div>
      <h3>Your Order</h3>
      <p>Ingredients you've added to make your delicious burger</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
    </div>
  )
}

export default orderSummary;