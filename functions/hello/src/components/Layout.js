import React, { Component } from 'react';

export default class Layout extends Component {
	constructor( props, context ) {
		super( props );
	}

	render() {
		return(
			<div>
				<h1>{this.props.data.name}</h1>
				<h2>{this.props.data.description}</h2>
				{this.props.children}
			</div>
		)
	}
}
