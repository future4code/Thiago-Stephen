// Exercicio 1
// a: GET /subscribers/all
// b: async antes da function 
// c:

import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews/"

//async function allSubscribers(): Promise<any[]> {
//    const users = await axios.get(`${baseUrl}/subscribers/all`)
//    return users.data
//}

//-------------------------------------------------------------------------------------
//Exercicio 2
// a: eu não vejo muita diferença. só no async que recebe (). 

//const allSubscribers = async (): Promise<User[]> => {
//    const users = await axios.get(`${baseUrl}/subscribers/all`)
//    return users.data
//}

//=====================================================================================
//Exercicio 3
// a: nõa teremos erro de tipagem
// b: quando não sabemos o que a promise vai retornar

const allSubscribers = async (): Promise<User[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`)
    return users.data.map((response: any) => {
        return {
            id: response.id,
            name: response.name,
            email: response.email
        }
    })
}

type User ={
    id: string
    name: string
    email: string
}

//==================================================================================
//Exercicio 4
// a: 

async function createNews(
    title: string,
    content: string,
    date: number
): Promise<void> {
    await axios.put(`${baseUrl}/news`, {
        title: title,
        content: content,
        date: date
    })
}

//==================================================================================
//Exercicio 5
// a: é altamente recomendado para que a promise não fique aguardando um recebimento acabar para fazer outro pedido.

const sendNotifications = async (
    users: User[],
    message: string
): Promise<void> => {
    const promiseArray: Promise<any>[] = []
    for (const user of users) {
        await axios.post(`${baseUrl}/notifications/send`, {
            subscriberId: user.id,
            message: message
        })
    }
    console.log("todas notific")
}

//==================================================================================
//Exercicio 6
// a: 

const sendNotifications = async (
    users: User[],
    message: string
  ): Promise<void> => {
    const promiseArray = [];
    for (const user of users) {
      promiseArray.push(
        axios.post(`${baseUrl}/notificati


