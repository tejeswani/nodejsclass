//console.log('Hello World!');

// // ES 5 class
// function Employee(){
//     this.Id = 1;
//     this.Name = 'Sachin';
//     this.City = 'Mumbai';
// }
// var emp = new Employee();
// console.log('Id '+emp.Id+' Name '+emp.Name+' City '+emp.City);
// CommonJS way of Import

var empModule = require('./employee');
var emp = new empModule.Employee();
console.log('Id '+emp.Id+' Name '+emp.Name+' City '+emp.City);