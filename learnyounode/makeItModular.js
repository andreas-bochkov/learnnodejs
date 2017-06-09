var mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], callback);

function callback(err, list) {
	if (err) return console.error(err);
	list.forEach( function(file) { console.log(file) } );
}