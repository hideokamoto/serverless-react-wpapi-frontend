import λ from 'apex.js';
import 'babel-polyfill';
import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';

class App extends Component {
	render() {
		return (
			<div>
				<h1>hello React</h1>
				<p>This is a Example page rendered by AWS Lambda & React</p>
			</div>
		);
	};
}



function renderFullPage(renderedContent) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'></head><body><div id="container">${renderedContent}</div></body></html>`;
}

export default λ( (e, ctx) => {
	const renderedContent = renderToString( <App /> );
	const renderedPage = renderFullPage( renderedContent );
	return (renderedPage);
});
