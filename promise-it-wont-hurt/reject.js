'use strict';
require('es6-promise');

var promise = new Promise(executor);

function executor(fulfill, reject) {
	setTimeout(function() {
			reject(	new Error('REJECTED!'));
		}, 300);
}

// Your solution here
promise.then(null, onReject);

function onReject (error) {
  console.log(error.message);
}
// function onFulfill (data) {
//   console.log(data);
// }
