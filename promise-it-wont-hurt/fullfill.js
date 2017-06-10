'use strict';
require('es6-promise');

var promise = new Promise(executor);

function executor(fulfill, reject) {
	setTimeout(function() {
			fulfill('FULFILLED!');
		}, 300);
}

// Your solution here
// promise.then(function(data) {
// 	console.log(data);
// });
promise.then(console.log);


