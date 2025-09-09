// npm i commander <- Librería para crear CLI y manejar comandos
//! |-------------------|
//! | *** CODE AQUI *** |
//! |-------------------|

// npm i commander <- Librería para crear CLI y manejar comandos
const { Command, Option } = require('commander');
const program = new Command();

/*
{program}
*/
//* nombre corto, nombre largo, descripción y valor por defecto
program.option("-p, --port <PORT>","Puerto donde escuchará el server", 3000)
program.option("-d, --debug", "Activa mode debug", false)
program.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del script").choices(["prod", "dev", "test"]).default("prod"))

program.allowUnknownOption() // permite los comandos desconocidos
program.allowExcessArguments()  //  Permite argumentos excesivos

program.parse()

const opts = program.opts()
console.log("-opts->", opts);


/*
*->comando que ejecutamos --> node index.js --mode prod --debug --port 3003 
 { port: '3003', mode: 'prod', debug: true }
*/