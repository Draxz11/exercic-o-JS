// Fazer o menu de exercicios ultilizando o exemplo dado em aula
// Criar um menu onde é possível executar 6 dos exercicios anteriores.
// Cada exercicio deve ser encapsulado (Dentro) de uma função, e o menu deve executar essas funções
// O usuario poderá escolher qual exercicio ele poderá vizualizar

//  O usuario deverá digitar 0 para sair do menu.

let opcao = prompt("Escolha uma opção: \n1 - Exemplo Hello World\n2 - Exemplo de repeticao ")

switch (opcao) {
    case "1":
        console.log("Hello World");
        break;

        case "2":
        exemploRepeticao()
        break;

        default:
            break;


}