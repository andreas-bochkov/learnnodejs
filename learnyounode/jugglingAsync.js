var http = require('http');
var myhttp = require('./httpClient');

http.get(process.argv[2], myhttp.juggling);