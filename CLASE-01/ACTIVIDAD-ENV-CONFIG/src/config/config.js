//! |-------------------|
//! | *** CODE AQUI *** |
//! |-------------------|
const { Command, Option } = require("commander");

const program = new Command();

program.addOption(
  new Option("-m, --mode <MODE>", "Modo de ejecución del server")
    .choices(["prod", "dev"]) // -p --port <PORT>
    .default("dev")
);

program.allowUnknownOption();
program.allowExcessArguments();

program.parse();
console.log(program.opts());

const { mode } = program.opts();

//* process
process.loadEnvFile(mode === "prod" ? "./.env.prod" : "./.env.dev");

const config = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
};

module.exports = { config };

// Descanso de 10 minutos - Regresamos a las "20:32"


const obj = {
    name: "Pepe",
    age: 21
}

console.log(obj.username)