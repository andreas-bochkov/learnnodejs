var http = require('http');
var bl = require('bl');

http.get(process.argv[2], juggling);

// module.exports = function printLog(response) {
// response.on("error", function (error) { 
// 	console.error(error);
// });
// response.on("data", function (data) { 
// 	console.log(String(data));
// });
// response.on("end", function (end) { 
// 	return;
// });
// }

// module.exports = function collect(response) {
// response.on("error", function (error) { 
// 	console.error(error);
// });
// response.pipe(bl(function (err, data) { 
// 	console.log(data.length);;
// 	console.log(String(data));
// }))
// response.on("end", function (end) { 
// 	return;
// });
// }

function juggling(response) {
response.on("error", function (error) { 
	console.error(error);
});
response.pipe(bl(function (err, data) { 
	console.log(data.length);;
	console.log(String(data));
}))
response.on("end", function (end) { 
	return;
});
}