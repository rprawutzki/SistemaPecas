//Váriaveis, sõa espaços na memória para guardar algum valor
let pesoPeca = 150

if(pesoPeca > 100) {
    console.log("peso maior que 100g, logo, pode cadastrar a peça!")
} else {
    console.log("Peso insuficiente,não é possível cadastar.")
}

let numeroPecas = 9

if(numeroPecas < 10) {
    console.log ("Ainda há espaço na caixa, podemos cadastar a peça")
} else {
    console.log ("Não há espaço disponível na caixa")
}

let nomePeca = "Di"

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length < 3) {
    console.log ("nome de peça muito curto, não é possível cadastrar")
} else {
    console.log("nome de peça adequado, podemos cadastrar")
}