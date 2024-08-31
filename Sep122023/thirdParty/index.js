const loadash = require('lodash');
//array
var output = loadash.without([11,22,33],11);
console.log(output);

let array = [1,2,3,4,5,6];
//fil loadash
console.log('before',array);
loadash.fill(array,99,0,4);
console.log('after',array);
//difference
let arr=[1,2,3,4,5,6]
let values =[1,2,3]
let newArr = loadash.difference(arr,values)
console.log(newArr)
console.log("programming Languages");
let prLanguages = ['c','c++','java','js'];
//foreach
loadash.forEach(prLanguages, function(v){
console.log(v);
})


// groupBy

let numbers=['one','two','three','four','five','six','seven','eight','nine','ten']

let grouped_data = loadash.groupBy(numbers,'length')
console.log(grouped_data)

