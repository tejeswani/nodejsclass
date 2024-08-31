module.exports.add= function(x,y){
    const calcModule = require('./calculator');
    const calc = new calcModule.Calculator();
    return calc.addition(x,y);
}