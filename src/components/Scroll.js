import React from 'react';

function Scroll(props) {
  return (
    <div style={{overflowY: 'scroll' , border: '1px solid rgba(0,0,0,0.01' , height:'80vh'}}>
      {props.children}
    </div>
  );
}

export default Scroll;