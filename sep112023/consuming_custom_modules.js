// // consuming custom module

// require('./custom_modules');
// // pattern 1
// require('./custom_modules');
// foo();

// // pattern 2
// var funName = require('./custom_modules');
// funName();

// // pattern 3
// var moduleName = require('./custom_modules');
// moduleName.fun();

// // pattern 4
// var buz = require('./custom_modules');
// buz.log();

// // pattern 5
// var bazModule = require('./custom_modules');
// bazModule.baz.log();

// pattern 6
var studentDetails = require('./custom_modules');
var std = new studentDetails.Student();
console.log('Roll No '+std.rollNo+' Name '+std.Name);