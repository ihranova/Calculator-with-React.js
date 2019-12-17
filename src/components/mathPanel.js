import React, { Component } from 'react';
import Button from './button';

export default class mathPanel extends Component {
    render() {
        let symbol = {
            math: [
                ["C", "/", "*"],
                [7, 8, 9, "-"],
                [4, 5, 6, "+"],
                [1, 2, 3, "="],
                [0, "."]
            ]
        };
        let Panel = () => {
            return symbol.math.map((row, i) => {
                return row.map((op, i) => {
                    //let rename operand
                    let operand = op;
                    if (op === "C" || op === "±" || op === "/" || op === "*" || op === "-" || op === "+") {
                        operand = "operand";
                    }
                    return <Button key = {i} op = {operand} symbol = {op} onClick = {this.props.passClick}/>;
                });
            })
        }
        return (
            <div id = "mathtable" >{Panel()}</div>
        );
    }
}