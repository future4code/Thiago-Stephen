/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
	// o que fazer se o usuário clicar "ok"
} else {
   console.log("O Jogo Acabou!")
}
 

const carta = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)

const carta2 = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta2.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta2.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)

let jogador1 = [0]
let jogador2 = [0]




