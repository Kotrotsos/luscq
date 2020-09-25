import React from 'react';

import './Button.css';

function Button(props) {
  let flow = props.flow? props.flow : '';
  let position = props.position? props.position : '';

  return (
    <button className={'button button-' + position + ' button-' + props.type + ' ' + flow }>
      {props.label} 
    </button>
  );
}

export default Button;
