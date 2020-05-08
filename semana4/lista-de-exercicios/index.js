// LISTA DE EXERCÍCIOS:
                                        // Exerccícios de interpretção de código.
/* 
Exercício 1
o código converte o valor em dolar em reais. 
pega o valorEmDolar e multiplica pela cotação que foi inserida pelo prompt.
será impresso no console a const meuDinheiro. 100

Exercício 2
o código mostra o valor após investimento, de cada tipo de aplicação.
a function pega o tipo de investimento e o valor.
cria uma let ValorAposInvestimento. para armazenar os valores.
é criado um switch case para armazenar o tipo de cada investimento e seu valor respectivo para fazer a multiplicação.
retornará o valorAposInvestimento. 
será impresso no console novoMontante = ações 165 e
um alert para o segundoMontante, TIPO DE INVESTIMENTO INFORMADO INCORRETO!

Exercício 3
o código pega os números de uma array numeros. e que separa em números pares e impares.
é criado um for que vai fazer um loop da array, a condiçao if será se o número tem resto % 0 se dividido por 2.
se sim faz um push para uma nova array "array1". e se não for, será "else" que vai guardar o número na array2, que vai ser impar.
será impresso no console: 
quantidade total de números, 14
12,64,44,84,48,14
25,55,121,11,51,73,1111,283.

Exercício 4
o código faz uma comparação entre duas variaveis e um array 'números'
é determinado duas variaveis, numero1 e numero2. cria-se um for of, para saber se os valores do array são:
menor que infinity 'numero1' se não for, terá seu mesmo valor.
maior que 0 'numero2' também terá o seu mesmo valor.
será impresso no console:
25
25
..........eu acho :)
                                        //Exercícios de Lógica de Programação
Exercício 1



Exercício 2
a: false
b: true
c: true
d: true
e: true

Exercício 3



exercício 4
let ladoA = 2
let ladoB = 2
let ladoC = 2

let ladoIgual = ladoA === ladoB && ladoB === ladoC
let doisIguais = ladoA === ladoB && ladoB !== ladoC || ladoB === ladoC && ladoC !== ladoA || ladoC === ladoA && ladoA !== ladoB
let ladoDiferente = ladoA !== ladoB && ladoB !== ladoC

if (ladoIgual){
    console.log("o triangulo é Equilatero")
}else if (doisIguais) {
    console.log("o triangulo é Isósceles")
}else if (ladoDiferente) {
    console.log("o triangulo é Escaleno")
}
obs: desculpe, foi o unico jeito que encontrei de resolver a questão.... :)

Exercício 5
let n1 = 2
let n2 = 10

if (n1 > n2) {
    console.log(`o maior é ${n1}`)
}else {
    console.log(`o maior é ${n2}`)
}
if (n1 % n2 === 0){
    console.log(`${n1} é divisivel por ${n2}`)
}else {
    console.log(`${n1} não é divisivel por ${n2}`)
}
if (n1 % n2 !== 0) {
    console.log(`${n2} é divisivel por ${n1}`)
}

let diferenca = n1 - n2
let diferencaPositiva = n2 - n1

if (diferenca > 0) {
    console.log(`a diferença entre eles é ${diferenca}`)
}else {
    console.log(`a diferença entre eles é ${diferencaPositiva}`)
}



*/







