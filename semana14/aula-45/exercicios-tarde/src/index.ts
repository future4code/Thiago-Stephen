// exercicio 1. a: usamos o process.argv


import * as fs from 'fs'

const name: string = process.argv[2]
const age: number = Number (process.argv [3])
const soma: number = age + 7

console.log(`Ola, ${name}! Voce tem ${age} anos. Em sete anos voce tera ${soma}`)



/*type person = {
  name: string
}
function createPerson(name: string): person {
	return {name: name} 
} 

const myPerson2 = createPerson("Robson");

console.log(myPerson2); */