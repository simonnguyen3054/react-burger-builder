import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          //Need to use arrow function to pass in an argument
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          //disabled prop returns true or false. It's a boolean value of the ingredent key ctrl
          disabled={props.disabled[ctrl.type]}/>
      ))}
      <button
        className="OrderButton"
        disabled={!props.purchasable}>ORDER NOW</button>
    </div>
  )
}

export default BuildControls;