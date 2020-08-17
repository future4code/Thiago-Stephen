import { connection } from "..";




export async function createNewUser(
    id: string,
    email: string,
    password: string
): Promise<void> {
    try {
        await connection.raw(`
            INSERT INTO User VALUES (
                "${id}",
                "${email}",
               "${password}"
            )
        `)
        console.log("sucess")
    } catch (error) {
        console.log(error)
    }
};