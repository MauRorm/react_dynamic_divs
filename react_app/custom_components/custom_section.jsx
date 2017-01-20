import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import CustomDiv from './custom_div.jsx';

/*
	list properties
	-this.props.desc
	-this.props.code
	-this.props.cityName
	-this.props.municipalName
	https://medium.com/react-redux/introducci%C3%B3n-a-redux-js-8bdf4fe0751e#.u63846v53
*/

const customState = {
	dataArray: ['Dato 1','Dato 2','Dato 3','Dato 4', 'Dato 5', 'Dato 6', 'Dato 7', 'Dato 8', 'Dato 8', 'Dato 9']
};

export default class CustomSection extends Component {

	constructor(props) {
		super(props);
		this.state = customState;
	}

	render() {
		return (
			<section>
				{
					this.state.dataArray.map((item, index) => {
						return <CustomDiv
							key = {index}
							description = 'cualquier descripción'
							code = 'cualquier código'
							title = 'Cualquier titulo'
							data = {item}
						/>;
					})
				}
			</section>
		)
	}
}