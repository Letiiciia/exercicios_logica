/*const comidaPreferida = "batata frita"

if(comidaPreferida == "beijinho"){
    console.log("Acompanha refrigerante")
}else{
    console.log("Sinto muito")
}*/

const readline = require('readline-sync')

//perguntar pra pessoa a comida preferida dela
// e o texto que ela escrever no campo vai ficar guardado em comidaPreferida
const comidaPreferida = readline.question("qual a sua comida preferida?")

console.log(comidaPreferida)

if(comidaPreferida === "batata frita"){
    console.log("Acompanha refrigerante?")
}else if(comidaPreferida === "bolo"){
     console.log("quer um chá?")
}else{
    console.log("Sinto mt por você")
}
