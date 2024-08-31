// simple module

//console.log('Hello World from the custom module!');

 

// // pattern 1 - define a global

// foo = function(){

//     console.log('Inside foo!');

// }

 

// // pattern 2 - export an anonymous function!

// module.exports = function(){

//     console.log('Anonymous Function!');

// }

 

// // pattern 3 - export an named function!

// module.exports.fun = function(){

//     console.log('Named Function!');

// }

 

// // pattern 4 - export an anonymous object

// // ES 5 class

// var Buz = function(){};

// Buz.prototype.log = function(){

//     console.log('Buz!');

// }

// module.exports = new Buz();

 

 

// // pattern 5 - export a named object

// // ES 5 class

// var Baz = function(){};

// Baz.prototype.log = function(){

//     console.log('Baz!');

// }

// module.exports.baz = new Baz();

 

// pattern 6 - export an anonymous class

module.exports.Student = function(){

    this.rollNo =123;

    this.Name = 'Ashish';

}

 

// pattern 7 - export a named class