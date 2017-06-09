
var fs = require('fs');
var path = require('path');

function filerOut(err, list, extname, callback) {
	if (err) return callback(err);
	var res = [];
	list.forEach( function(file) {
			if (path.extname(file) === '.' + extname) {
				res.push(file);
			}
		}
	)
	return callback(null, res);
}

module.exports = function (dir, extname, callback) {
	fs.readdir(dir, function(err, data) { filerOut(err, data, extname, callback) });
}

