import React from "react";
function Lifting(props) {
  return (
    <div>
      <h1 style={props.style}>{props.name} </h1>
      <button onClick={props.funct}>increse</button>
    </div>
  );
}
export default Lifting;
