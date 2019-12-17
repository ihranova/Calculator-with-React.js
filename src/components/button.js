import React, { Component } from 'react';
const Button = (props) =>(
        <div className={`cell cell-op cell-${props.op}`} data-id={props.symbol} onClick={props.onClick}>{props.symbol}</div>
);
export default Button;