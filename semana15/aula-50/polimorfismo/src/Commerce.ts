import { Place } from "./Place";

export class Comemerce extends Place {
    constructor(
        protected floorsQuantity: number,
        cep: string
    ){
        super(cep)
    }
    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}