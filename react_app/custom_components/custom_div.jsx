import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import CustomHeader from './custom_header.jsx';

/*	
	properties list
	-this.props.age
	-this.props.code
*/
//http://cheng.logdown.com/posts/2015/09/29/converting-es5-react-to-es6
//https://github.com/emmenko/react-playground/blob/master/examples/react/main.jsx
//https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.qmwmmv1r9

const customState = {
	messageTitle : 'Ejemplo de divs dinámicos'
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
				<CustomHeader textTitle = {this.state.messageTitle}/>
				<div className='reportData'>
					<div>{this.props.title}</div>
					<div>{this.props.data}</div>
					<div>{this.props.description}</div>
					<div>{this.props.code}</div>
				</div>
			</div>
		)
	}
}

CustomDiv.propTypes = {						//ClassName.propTypes
    code: React.PropTypes.string.isRequired	//propName: React.PropTypes.JsDataType.option
}