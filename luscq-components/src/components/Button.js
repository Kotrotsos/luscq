import React from 'react';

import './Button.css';

function Button(props) {
  let flow = props.flow? props.flow : '';
  return (
    <button className={'button button-' + props.type + ' ' + flow }>
      {props.label} 
    </button>
  );
}

export default Button;
