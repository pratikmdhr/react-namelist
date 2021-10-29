import React from 'react';
import Styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={Styles.btn}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
