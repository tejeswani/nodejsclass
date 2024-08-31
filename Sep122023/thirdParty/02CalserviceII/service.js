module.exports.mult= function(x,y){
    const calcModule = require('./calculator');
    const calc = new calcModule.Calculator();
    return calc.multiplication(x,y);
}