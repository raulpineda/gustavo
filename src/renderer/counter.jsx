import React from "react";

const counter = props => <h2 onClick={props.handleClick}>{props.value}</h2>;

export default counter;
