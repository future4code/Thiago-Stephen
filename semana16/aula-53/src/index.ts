import knex from "knex";
import dotenv from "dotenv";
import express, {Request, Response } from "express";
import { AddressInfo } from "net";

dotenv.config();

const app = express();

app.use(express.json());

const conection = knex(
  {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    }
  }
);

const getActorById = async (id: string): Promise<any> => {
  try {
      const result = await conection.raw(`
        SELECT * FROM Actor WHERE id = "${id}"
      `);
      console.log(result)
      return result[0][0]
      
  }catch (error) {
    console.log(error)
  }
}

const searchActor = async (name: string) : Promise<any> => {
  const result = await conection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `);
  console.log(result)
  return result
}

const countActors = async (gender: string) : Promise<any> => {
  const result = await conection.raw(`
    SELECT COUNT(*) AS count FROM Actor WHERE gender = "${gender}"
  `);
  console.log(result)
  const count = result[0][0].count;
  return count;
};

const createActor = async (
  id: string,
  name: string,
  salary: number,
  birth_date: string,
  gender: string
): Promise<void> => {
  await conection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: birth_date,
      gender: gender
    })
    .into("Actor")
};

createActor("010", "James Sam", 800000, "1965-06-19", "male")

//app.get("/pokemon", async (req: Request, res: Response) => {
//  try {//
//    const pokemons = await getAllPokemons();
//    res.send(pokemons).status(200)
//  } catch (error) {
//    res.send({message: error.message}).status(400);
//  }
//});

//app.get("/oi/:nome", async (req: Request, res: Response) => {
//  res.send("oi, "+req.params.nome).status(200);
//});

//app.post("/pokemon", async (req: Request, res: Response) => {
//  try{
//    const pokemonData = {
//      id: req.body.id,
//      name: req.body.name,
//      type: req.body.type
//    };
//    await createPokemon(pokemonData.id, pokemonData.name, pokemonData.type);
//    res.status(200).send({message: "pokemon criado com sucesso!"});
//  } catch (error){
//    res.status(400).send({message: error.message})
//}})







//async function createPokemonTable() : Promise<void> {
//  try {
//    await conection.raw(`
//      CREATE TABLE pokemons (
//        id INT PRIMARY KEY,
//        name VARCHAR(255) UNIQUE NOT NULL,
//        type VARCHAR(255) NOT NULL
//      );
//    `)
//    console.log("sucess")
//  } catch (error) {
//    console.log(error)
//  }
//};//

//createPokemonTable();

//async function createPokemon (
//id: number,
//  name: string,
//  type: string
//) : Promise<void> {
//  try {
//    await conection.raw(`
//      INSERT INTO pokemons VALUES (
//        ${id},
//        "${name}",
//        "${type}"
//      );
//    `)
//    console.log("sucess")
//  } catch (error) {
//    console.log(error)
//  }
//};

//createPokemon(2, "Ivysaur", "Grass/Poison");
//createPokemon(3, "venusaur", "Grass/Poison");
//createPokemon(4, "Blastoise", "Water");

//async function getAllPokemons() : Promise<any> {
//  try {
//   const result = await conection.raw(`
//    SELECT * FROM pokemons
//    `);
//    console.log(result[0])
//    return result[0]
// } catch (error) {
//    console.log(error)
//  }
//};

//getAllPokemons();

/*
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
  const address = server.address() as AddressInfo;
  console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
  console.error(`Failure upon starting server.`);
  }
 });
*/









