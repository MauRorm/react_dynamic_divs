import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import CustomHeader from './customHeader.jsx';

/*	
	properties list
	-this.props.age
	-this.props.code
*/
//http://cheng.logdown.com/posts/2015/09/29/converting-es5-react-to-es6
//https://github.com/emmenko/react-playground/blob/master/examples/react/main.jsx
//https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.qmwmmv1r9

var customState = {
	messageTitle : 'Reportes de México'
}

export default class CustomDiv extends Component{

	constructor(props) {
		super(props);
		this.state = customState;
		this.eventHandler = this.eventHandler.bind(this);
	}

	eventHandler() {
		console.log("Onclick event");
	}

	render(){
		return (
			<div>
				<CustomHeader titleText = {this.state.messageTitle}/>
				<div className='reportData'>
					<div>{this.props.cityName}</div>
					<div>{this.props.municipalName}</div>
					<div>{this.props.desc}</div>
					<div>{this.props.code}</div>
				</div>
			</div>
		)
	}
}

CustomDiv.propTypes = {						//ClassName.propTypes
    code: React.PropTypes.string.isRequired	//propName: React.PropTypes.JsDataType.option
}