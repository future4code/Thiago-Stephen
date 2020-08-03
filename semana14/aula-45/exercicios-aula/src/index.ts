import * as fs from 'fs'
const fileData: any = fs.readFileSync("./users.json").toString()




console.log(fileData)