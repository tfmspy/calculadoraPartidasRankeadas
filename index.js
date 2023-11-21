let qtdVitorias = 0
let qtdDerrotas = 0
let resultado = 0
let nivel = ""

calcular(50, 20)

function calcular(qtdVitorias, qtdDerrotas) {
 resultado = qtdVitorias - qtdDerrotas
  
    if (resultado < 10) {
        nivel = "Ferro"
    }
    else if (resultado <= 20) {
        nivel = "Bronze"
    } 
    else if (resultado <= 50) {
        nivel = "Prata"
    } 
    else if (resultado <= 80 ) {
        nivel = "Ouro"
    } 
    else if (resultado <= 90) {
        nivel = "Diamante"
    } 
    else if (resultado <= 100) {
        nivel = "Lendário"
    } 
    else if (resultado > 100) {
        nivel = "Imortal"
    } 
}

console.log("O Herói tem de saldo de " +  resultado + " está no nível de " + nivel)