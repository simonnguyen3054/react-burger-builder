import React from 'react';
import './Button.css';

//backdrop is used for modal
const button = props => {
  //use concat to join classes if a className is a passed as a prop
  return (
    <button className={props.btnType + " Button"} onClick={props.clicked}>
      {props.children}
    </button>
  )
}

export default button;