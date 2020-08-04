import { User } from "./user";

export class Funcionario extends User {
    constructor(id:string, email: string, name: string, password: string){
        
        super(id, email, name, password )
        console.log("estou no funcionario")
    }
}