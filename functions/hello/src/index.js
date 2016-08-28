import λ from 'apex.js';
import 'babel-polyfill';
import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App';
import fetch from 'isomorphic-fetch';
function fetchData( api ) {
	return fetch(api);
}

function renderFullPage(renderedContent) {
  return `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
	</head>
	<body>
		<div id="container">${renderedContent}</div>
	</body>
</html>`;
}

var AWS = require('aws-sdk');
export default λ( (e, ctx, cb) => {

	return fetchData( 'http://wp-kyoto.net/wp-json/' )
	.then( res => {
		if ( res.status >= 400 ) {
			console.log(res);
			throw new Error('Bad request');
		}
		return res.json();
	}).then( data => {
		return data;
	}).catch( err => {
		return err;
	}).then( data => {
		const renderedContent = renderToString( <App data={data}/>);
		const renderedPage = renderFullPage( renderedContent );
		return renderedPage;
	});
});
