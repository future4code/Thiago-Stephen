
// RESPOSTAS EXERCICIOS.
/*
EXERCÍCIO 1:
O código pega um número fornecido pelo usúario e retorna se ele passou no teste ou não.
se foi o que eu entendi da pergunta, o tipo para "passou no teste" é number. E para "não passou no teste" é string.
----------------------------------------------------------------------------
EXERCÍCIO 2:
a- o codigo serve para o usuário escrever o nome da fruta e ver o valor correspondente.
b- o preço da fruta é R$ 2.25
c- eu pagaria R$ 24,55
d- O preço da fruta  Pêra  é  R$  5
-------------------------------------------------------------------------------
EXERCÍCIO 3:
haverá um erro no terminal. porque o "console.log(mensagem)" está fora do bloco da função. e não funciona
porque a variavel "mensagem" só tem valor dentro do bloco.
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
EXERCÍCIO DE ESCRITA DE CÓDIGO.
EXERCÍCIO 4-A:
const numero1 = prompt ("digite um número")
const numero2 = prompt ("digite mais um número")
const espaco = (" ")

if (numero1 > numero2) {
    console.log(numero1 + espaco + numero2)
} else {
    console.log(numero2 + espaco + numero1)
}
ele imprime os dois números. pois não distingue se é maior, menor ou igual.

exercício B:
const numero1 = prompt ("digite um número")
const numero2 = prompt ("digite mais um número")
const numero3 = prompt ("digite o terceiro número")
const espaco = (" ")

if (numero1 > numero2 && numero2 > numero3) {
    console.log(numero1 + espaco + numero2 + espaco + numero3)

} else if (numero1 > numero2 && numero2 < numero3) 
{
    console.log(numero1 + espaco + numero3 + espaco + numero2)

} else if (numero3 > numero1 && numero1 < numero2)
{
    console.log(numero3 + espaco + numero2 + espaco + numero1)
} else if (numero1 < numero2 && numero2 < numero3)
{
    console.log(numero3 + espaco + numero1 + espaco + numero2)
} else if (numero1 < numero2 && numero2 > numero3)
{
    console.log(numero2 + espaco + numero3 + espaco + numero1)
} else if (numero1 < numero2 && numero2 > numero3)
{
    console.log(numero2 + espaco + numero1 + espaco + numero3)
}
não acontece nada quando inserir os 3 numeros iguais.

Exercício C:
const numero1 = prompt ("digite um número")
const numero2 = prompt ("digite mais um número")
const numero3 = prompt ("digite o terceiro número")
const espaco = (" ")

if (numero1 > numero2 && numero2 > numero3) {
    console.log(numero1 + espaco + numero2 + espaco + numero3)

} else if (numero1 > numero2 && numero2 < numero3) 
{
    console.log(numero1 + espaco + numero3 + espaco + numero2)

} else if (numero3 > numero1 && numero1 < numero2)
{
    console.log(numero3 + espaco + numero2 + espaco + numero1)
} else if (numero1 < numero2 && numero2 < numero3)
{
    console.log(numero3 + espaco + numero1 + espaco + numero2)
} else if (numero1 < numero2 && numero2 > numero3)
{
    console.log(numero2 + espaco + numero3 + espaco + numero1)
} else if (numero1 < numero2 && numero2 > numero3)
{
    console.log(numero2 + espaco + numero1 + espaco + numero3)
} else if (numero1 === numero2 && numero2 === numero3)
{
    console.log("não é permitido inserir os 3 números iguais. Por favor recarregue a pagina e tente novamente, com pelo menos 1 numero diferente :)")
}
=========================================================================================
=========================================================================================
EXERCÍCIO 5
link para diagrama
https://drive.google.com/open?id=13UyqQF7dM6vTBIP_fUhligX5_F_5UAdZ

*/



