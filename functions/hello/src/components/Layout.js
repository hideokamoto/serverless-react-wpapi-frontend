import React, { Component } from 'react';

export default class Layout extends Component {
	constructor( props, context ) {
		super( props );
	}

	render() {
		return(
			<div>
				<h1>Example wbbsite</h1>
				{this.props.children}
			</div>
		)
	}
}
