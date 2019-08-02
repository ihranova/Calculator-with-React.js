import React, {Component} from 'react';


class Input extends Component{
	render(){
		return(
		<div id = "result">
           <div className = "doingMath">
            {(this.props.prev.length > 0) ?
            	this.props.prev.join('')
            	: null

            }
           </div>
           <div className = "answer">{this.props.result}</div>
         </div>);
	}

}

export default Input;