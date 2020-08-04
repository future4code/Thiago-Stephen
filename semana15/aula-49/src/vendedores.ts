import { User } from "./user";

export class Vendedor extends User {
    constructor(id:string, email: string, name: string, password: string){
        
        super(id, email, name, password )
        console.log("estou no vendedor")
    }

}