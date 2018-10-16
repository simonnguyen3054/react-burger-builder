import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop'

const modal = props => {
  //we can pass anything to props.children
  //div should have some styling to make the modal looks good
  //add inline style to display modal
  return (
    <div>
      <Backdrop show={props.show} clicked={props.modalClosed}/>
      <div
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
        className="Modal">
        {props.children}
      </div>
    </div>
  )
}

export default modal;
//Add modal to the place(comppnent) where we wanna see it