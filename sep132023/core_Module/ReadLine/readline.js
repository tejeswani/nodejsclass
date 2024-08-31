// The node:readline module provides an interface for reading data from a readable stream (such as process.stdin)
 //one line at a time

 // for core modules generally methods are asynchronous, along with it's synchronous version that suffix with sync

 const readline = require ('readline')
 const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
 })

 //By using callback

 r1.question('enter a number',(input) => {
    console.log(`you have entered ${input}`);
    r1.close();
 })

 r1.question('enter a frist number',(input1)=>{
    console.log(`u have entered ${input1}`);
    r1.question('enter a second number',(input2)=>{
        console.log(`u have entered $${input2}`);
        let sum = parseInt(input1)+ parseInt(input2)
        console.log('result is:', sum)
    })
 })