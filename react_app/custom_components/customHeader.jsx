import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

/*	
	properties list
	-this.props.age
	-this.props.code
*/

var customState = {
}

export default class CustomHeader extends Component{

	constructor(props) {
		super(props);
		this.state = customState;
		this.eventHandler = this.eventHandler.bind(this);
	}

	eventHandler() {
		console.log("Onclick event Header");
		alert("click en header");
	}

	render(){
		return (
			<p className='headerText' onClick={this.eventHandler}>{this.props.titleText}</p>
		)
	}
}
