//! |-------------------|
//! | *** CODE AQUI *** |
//! |-------------------|

// console.log("00 process", process)
console.log("01 cwd", process.cwd()); // path - dir

console.log("02 ID", process.pid);

console.log("03 ARGV", process.argv); //* LISTA - ARRAY
/*
[
  'C:\\Users\\mauuu\\AppData\\Roaming\\nvm\\v20.17.0\\node.exe',
  'C:\\Users\\mauuu\\OneDrive\\Escritorio\\CODERHOUSE\\[ 74610 BACK-III MARTES 19-00 ]\\[ 74610 Back-III CLASE ]\\
CLASE-01\\PROCESS\\process.js',
  'hola',
  'mundo'
]
*/

/*
node index.js --mode dev 
node index.js -m dev 

node index.js --mode prod 
node index.js -m prod 

*/

const mode = process.argv[3] === "dev" ? "dev" : "prod";

console.log("result ->", mode);

function detectMode(){
    let mode = "dev"
    process.argv.forEach(element => {
        if(element === "--mode" || element === "-m"){
            
        } 
    });
}