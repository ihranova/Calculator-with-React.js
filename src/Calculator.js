import React, { Component } from 'react';
//import logo from './logo.svg';
import './Calculator.css';
import Input from './components/input';
import MathPanel from './components/mathPanel';

export default class Calculator extends Component {
    state = {
        current: '0',
        previous: [],
    }
    calculate = (e) => {
        let button = e.target.dataset.id;
        //reset function
        if (['C'].indexOf(button) > -1) {
            this.setState({
                current: '0',
                previous: [],

            })
        }
        //add calculate on top
        if (['/', '*', '+', '-'].indexOf(button) > -1) {
            let { previous } = this.state;
            previous.push(this.state.current + button);
            this.setState({
                previous: this.state.previous,
                current: '0'
            });
            //console.log(previous);
        }
        //typing into current
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].indexOf(button) > -1) {
            if (this.state.current === '0' && button !== '.') {
                this.setState({
                    current: button
                });
            }
            else {
                let { current } = this.state;
                if (!(button === '.' && current.indexOf('.') > -1)) {
                    this.setState({
                        current: this.state.current + button
                    });
                }
            }
        }
        //calculate 
        if (['='].indexOf(button) > -1) {
            let { current, previous } = this.state;
            if (previous.length > 0) {
                this.setState({
                    current: (eval(previous.join('') + current)).toString(10),
                    previous: []
                })
            }
        }
    }
    render() {
        return (
            <div className="calculator">
                <Input result={this.state.current} prev={this.state.previous} />
                <MathPanel passClick={this.calculate} />
            </div>
        )
    };
}