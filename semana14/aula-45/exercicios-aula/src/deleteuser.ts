import * as fs from 'fs'
const fileData: any = fs.readFileSync("./users.json").toString()


let users;

try {
    users = JSON.parse(fileData)
    
} catch (error) {
    users = []
   console.log("Erro ao ler a base de dados: " + error.message) 
}
const id: number = Number(process.argv[2])

users.forEach((element: any, i: number, array: any) => {
    if (element.id === id) {
        array.splice(i, 1)
    }
});



try{
    const updatedUsers: string = JSON.stringify(users,null,5)
    fs.writeFileSync("./users.json", updatedUsers )
} catch (error) {
    console.log("erro ao atualizar a base de dados")
}





