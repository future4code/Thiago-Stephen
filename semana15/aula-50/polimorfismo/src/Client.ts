export interface Client {
    name: string
    
    registerNumber: number

    consumedEnergy: number

    calculateBill(): number

}

const client: Client = {
    name: "Thiago",
    registerNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2
    }
}