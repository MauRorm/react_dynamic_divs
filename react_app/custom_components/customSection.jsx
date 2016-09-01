import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import CustomDiv from './customDiv.jsx';

/*	
	properties list
	-this.props.desc
	-this.props.code
	-this.props.cityName
	-this.props.municipalName
	https://medium.com/react-redux/introducci%C3%B3n-a-redux-js-8bdf4fe0751e#.u63846v53
*/

var customState = {
	municipalName: ['GAM','MIGUEL HIDALGO','COYOACAN','BENITO JUAREZ', 'GAM', 'MIGUEL HIDALGO', 'MILPA ALTA', 'AZCAPOTZALCO', 'IZTAPALAPA', 'IZTACALCO']
}

export default class CustomSection extends Component{

	constructor(props) {
		super(props);
		this.state = customState;
	}

	render(){
		return (
			<section>
				{this.state.municipalName.map((item) => {
					return <CustomDiv desc = 'Asalto' code = 'rj-4f-df-4w-5s' cityName='CDMX' municipalName={item}/>;
				})}
			</section>
		)
	}
}