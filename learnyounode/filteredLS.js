
var fs = require('fs');
var path = require('path');

function callback (err, list) {
	if (err) return console.error(err)
	list.forEach( function(file) {
			if (path.extname(file) === '.md') {
				console.log(file);
			}
		}
	)
}

fs.readdir(process.argv[2], callback);
