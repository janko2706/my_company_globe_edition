import React from 'react';
import './button.css';
const Button = (props) => {
  return (
    <a
      class='button-86'
      style={{ height: `${props.height}`, width: `${props.width}` }}
      href='#services'
    >
      {props.text}
    </a>
  );
};

export default Button;
