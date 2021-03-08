const fs= require('fs');

var colors = require('colors');

const NewFileMultiplicar=((base,listar,limite)=>{
const File= new Promise((resolve,reject)=>{
    var datos=' ';
    var nombre_tabla='';

   if(listar){
    console.log('================'.green)
    console.log(`| Tabla del ${base}  |`.bgBlue)
    console.log('================'.green)
    

   }
    for (let index = 0; index <= limite; index++) {
  
        datos+=`${base} x  ${index}  = ${base*index} \n` ;
    
    }
    if(listar){
        console.log(datos);
    
    }
    fs.writeFile(`./upload/Tabla-del-${base}.txt`,datos,(err)=>{
        if(err){
            reject(err);
        }
    nombre_tabla=`Tabla-del-${base}.txt`;
    resolve(nombre_tabla);
    }
    );
}

);
    
return File;}
);
module.exports= { NewFileMultiplicar};