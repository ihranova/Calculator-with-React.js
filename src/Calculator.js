import React, { Component } from 'react';
//import logo from './logo.svg';
import './Calculator.css';
import Input from './components/input';
import MathPanel from './components/mathPanel';


class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
           
            current: '0',
            previous: [],
            added: true
        }
        
    }

    calculate = (e) => {
        let button = e.target.dataset.id;
        //reset function
        if(['C'].indexOf(button) > -1){
        	this.setState({
        		
	            current: '0',
	            previous: [],
                added: true
        	})
        }
        //add calculate on top
        if(['/','*','+','-'].indexOf(button) > -1){
        	
           let {previous} = this.state;
           
           previous.push(this.state.current + button);
           this.setState({
	            previous:this.state.previous,
	            current: '0'
	            
	        });
           //console.log(previous);
        }
        //typing into current
        if(['0','1','2','3','4','5','6','7','8','9','.'].indexOf(button) > -1){
        	if(this.state.current === '0' && button !== '.'){
        		this.setState({
		            current: button
		            
		        });
        	}else{
                if((this.state.current.includes('.')) && button === '.'){
            		this.setState({
    		            current: this.state.current,
    		            
    		        });
                }else{
                    this.setState({
                        current: this.state.current+button,
                        
                        
                    });
                }    
        	}
        	
        }
        //calculate 
        if(['='].indexOf(button) > -1){
        	
        		let {current,previous} = this.state;
        		
        		if(previous.length > 0){
        			this.setState({
        				current: eval(previous.join('') + current),
        			    previous: []
        			})
        		}
	           
        	
        }
 
        
    }


    render() {
        return (
            <div className="calculator">
	     <Input result = {this.state.current} prev = {this.state.previous}/>
	     <MathPanel passClick = {this.calculate}/>
	    </div>
        )
    };
}

export default Calculator;