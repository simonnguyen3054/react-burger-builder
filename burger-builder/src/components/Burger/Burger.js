import React from 'react';
import './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
  //First we get an array of keys from the object ingredients
  //We map over each key and return a new array. props.ingredients[igKey] gives us the number of indices in the new array
  //We then map over the new array. We don't care about the key of this new array. We care only the index of this new array
  //the final return gives us the BurgerIngredients elements.
  const transformedIngredients = Object.keys(props.ingredients)
      .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
          return <BurgerIngredients key={igKey + i} type={igKey}/>
        });
      });

  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom"/>
    </div>
  )
}

export default Burger;