import React, { Component } from 'react';
import Layout from './Layout';
import Archive from './Archive';

export default class App extends Component {
	render() {
		return (
			<Layout data={this.props.data}>
				<Archive />
			</Layout>
		);
	};
}
