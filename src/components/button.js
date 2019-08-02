import React, {Component} from 'react';


class Button extends Component{
	constructor(props){
		super(props);
		console.log(props);
	}
	

	onClick = (e) =>{
		//console.log(e);
		//console.log('success 1');
		//return e.target.dataset.id
		
	}
	
	render(){
		
		return(<div className = {`cell cell-op cell-${this.props.op}`} data-id = {this.props.symbol}  onClick = {this.props.onClick	}>{this.props.symbol}</div>);
		}
	

}

export default Button;