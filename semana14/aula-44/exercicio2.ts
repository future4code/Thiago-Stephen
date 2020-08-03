type infoEstatisticas = {
    maior: number,
    menor: number,
    media: number
}
type amostraDeIdades = {

    numeros: number = [21, 18, 65, 44, 15, 18],

    obterEstatisticas: () => {infoEstatisticas}
}

function obterEstatisticas(numeros: number[]) : infoEstatisticas {
    const numerosOrdenados : number = numeros.sort(
        (a : number, b : number) => a - b
    )
    let soma : number = 0
    for (let num of numeros) {
        soma += num
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}