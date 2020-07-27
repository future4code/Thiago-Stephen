const minhaString: string = "5" //coloquei como string agora para não ficar marcando erro..
// a: acusa erro pois ela está aguardando receber uma string e não number

const meuNumero: number = 10
// b: podemos usar o union type. inserindo uma | entre os tipos. Ex: number | string


enum CORARCOIRIS {
    VIOLETA = "violeta", 
    ANIL = "anil", 
    AZUL = "azul", 
    VERDE = "verde",
    AMARELO = "amarelo", 
    LARANJA = "laranja", 
    VERMELHO = "vermelho"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORARCOIRIS
}

const thiago: pessoa = {
    nome: "Thiago",
    idade: 26,
    corFavorita: CORARCOIRIS.VERMELHO
}
const tayna: pessoa = {
    nome: "Tayná",
    idade: 25,
    corFavorita: CORARCOIRIS.VIOLETA
}
const alvaro: pessoa = {
    nome: "Alvaro", 
    idade: 3, 
    corFavorita: CORARCOIRIS.AMARELO
}
const aline: pessoa = {
    nome: "aline",
    idade: 18,
    corFavorita: CORARCOIRIS.ANIL
}
const bruna: pessoa = {
    nome: "Bruna",
    idade: 26,
    corFavorita: CORARCOIRIS.LARANJA
}


























