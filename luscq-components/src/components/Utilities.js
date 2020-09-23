import React from 'react';

import './Utilities.css';

function Spacer(props) {
  return (
    <div className={'spacer-10 spacer-' + props.size}></div>
  );
}

export { Spacer }
