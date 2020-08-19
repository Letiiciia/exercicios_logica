const readline = require('readline-sync')

const tempo = readline.question("Qual o tempo hoje?")

//se for sol vai a praia
//se for nublado vai andar de bicileta
//se for de chuva fica em casa
//se não for nada fala "atividade não encontrada"

if(tempo == "sol"){
    console.log("Vai a praia")
}else if(tempo == "nublado"){
    console.log("vai andar de bike")
}else if(tempo == "chuva"){
    console.log("Fica em casa")
}else{
    console.log("Atividade não encontrada")
}