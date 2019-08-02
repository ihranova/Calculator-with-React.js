import React, { Component } from 'react';
//import logo from './logo.svg';
import './Calculator.css';
import Input from './components/input';
import MathPanel from './components/mathPanel';


class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result: '0',
            prevRes: []
        }
        //this.calculate = this.calculate.bind(this);
    }

    calculate = (e) => {
        let button = e.target.dataset.id;

        this.setState({
            result: button,
            prevRev: this.state.prevRes.push(button)
        });
        //console.log(this.state.result);
    }




    render() {
        return (
            <div className="calculator">
	     <Input result = {this.state.result} prev = {this.state.prevRes}/>
	     <MathPanel passClick = {this.calculate}/>
	    </div>
        )
    };
}

export default Calculator;