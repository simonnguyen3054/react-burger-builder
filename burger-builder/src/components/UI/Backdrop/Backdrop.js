import React from 'react';
import './Backdrop.css';

//backdrop is used for modal
const backdrop = props => {
  return (
    props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
  )
}

export default backdrop;