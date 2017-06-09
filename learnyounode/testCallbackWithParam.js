// callback function
function tryMe (param1, param2, param3) { 
    console.log (param1 + " and " + param2 + " " + param3); 
} 

// callback executer 
function callbackTester (callback) { 
//this is the more obivous scenario as we use callback function
//only when we have some missing value
//get this data from ajax or compute
var extraParam = "this data was missing" ;

//call the callback when we have the data
    callback(extraParam); 
} 

// test function
callbackTester (function(k) {
    tryMe("hello", "goodbye", k); 
}); 