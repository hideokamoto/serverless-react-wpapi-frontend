import λ from 'apex.js';
import 'babel-polyfill';

export default λ( (e, ctx) => {
	let message = 'Hello World!';
	return ({
		"message": message
	});
});
