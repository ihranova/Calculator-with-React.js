import React, { Component } from 'react';
const Input = (props) => (
    <div id="result">
        <div className="doingMath">
            {(props.prev.length >= 0) ?
                props.prev.join('')
                : null
            }
        </div>
        <div className="answer">{props.result}</div>
    </div>
);
export default Input;