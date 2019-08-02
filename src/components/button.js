import React, {Component} from 'react';


class Button extends Component{
	
	render(){
		
		return(<div className = { `cell cell-op cell-${this.props.op}`}>{this.props.symbol}</div>);
		}
	

}

export default Button;