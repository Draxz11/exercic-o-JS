// // Chamando a função alert e o que está em parenteses é o que voce está chamando por exemplo:
// alert("Hello World")

// // Chamando a função (ou método) log
// console.log("Olá Miguel")

// // Declaração da função - Ensinando o computador
// function bemVindo(nome) {
//     console.log("Bem Vindo " + nome);
// }


// // Chamda da função
// bemVindo("Miguer")

function somar (num1, num2){
    return num1 + num2;
}

let resultado = somar(6,5)

function mostrarSituaçaoAluno(nota1,nota2,nota3) {

    let somaNotas = nota1 + nota2 + nota3
    
    let media = somaNotas / 3 

    console.log(media);
}

