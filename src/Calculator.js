import React from 'react';
//import logo from './logo.svg';
import './Calculator.css';
import Input from './components/input';
import MathPanel from './components/mathPanel';


function Calculator() {

  
  return (
    <div className="calculator">
     <Input />
     <MathPanel />
    </div>
  );
}

export default Calculator;
