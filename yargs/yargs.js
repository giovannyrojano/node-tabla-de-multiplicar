const argv=require('yargs')
            .options({
                            'b':
                            {
                            alias:'base',
                            type:'number',
                            demandOption:true,
                            describe:'Es el numero a multiplicar'
                        },  
                            'l':
                            {
                            alias:'listar',
                            type:'boolean',
                            default:false,
                            describe:'Decide si listar o no la tabla en pantalla'
                        },  
                            'h':
                            {
                            alias:'hasta',
                            type:'number',
                            default:10,
                            describe:'Decide hasta donde llegara la tabla en pantalla'
                        }
            
        }
        )
            .check((argv,options)=>{
                if(isNaN(argv.b)){
                    throw 'La base  debe ser un numero';

                }
                if(isNaN(argv.h)){
                    throw 'el hasta  debe ser un numero';

                }
                return true;
                     })
                  .argv;

module.exports=argv;