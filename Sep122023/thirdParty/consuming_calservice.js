const calcModule= require('./02Calservice/calculator');

const calc = new calcModule.Calculator();
console.log("addition is", calc.addition(4,5));
console.log("multiplecation", calc.multiplication(4,5))

const calcModuleI = require('./02Calservice');

console.log("new Addition index", calcModuleI.add(4,5));

const calcModuleII = require('./02CalserviceII');

console.log("new Multiplication index", calcModuleII.mult(4,5));

//console.log("new Add index", calcModuleII.add(4,5));