// // Nome
// let nome = "Miguel"
// let nome = "José"


// // Apelido
// let Apelido = "Draxz"
// let Apelido1 = "Sr"

let pessoa1 = {
    nome: "Miguer",
    apelido: "Draxz"
}

let pessoa2 = {
    nome: "José",   
    apelido: "Sr"
}

let produto = {
    nomeProduto: "Tonico capilar",
    marca: "manual",
    descricao: "Acabe com a calvice",
    preco: 29.90
}

console.log(produto.preco + " " + produto.descricao);

console.log("Olá miguer, acabe com a calvice, ultilizando a manual")

console.log(`Olá ${pessoa1.nome},ultilizando a ${produto.marca}`)


let podutoCadastrado = {
    nome: "",
    valor: "",
    marca: ""
}

produtoCadastrado.nome = prompt("Digite o nome do produto: ")
produtoCadastrado.valor = parseFloat(prompt("Digite o valor do produto: "))
produtoCadastrado.marca = prompt("Digite a marca do produto: ")

console.log(produtoCadastrado);