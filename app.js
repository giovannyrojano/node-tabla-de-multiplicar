
const fs= require('fs');
const argv= require('./yargs/yargs');
var colors = require('colors');

                  
const {NewFileMultiplicar}= require('./helpers/multiplicar');
console.clear()
//var base=10;
console.log(argv);
console.log('Base:',argv.b);
base=argv.b;
//console.log(process.argv);
//const[,,arg3]=process.argv;
//const [,base]=arg3.split('=');


NewFileMultiplicar(base, argv.l, argv.h).then((nombre_tabla)=>{
    console.log(nombre_tabla.yellow, 'creada'.underline.green);
}

).catch(err=>{console.log(err)});

