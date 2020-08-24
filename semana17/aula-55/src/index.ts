import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import knex from "knex";
import { IdGenerator } from "./services/IdGenerator";
import testEndpoint from "./endpoints/testEndpoint";
import { createNewUser } from "./endpoints/signup";



dotenv.config();

const app = express();

app.use(express.json());

const userTableName = "User";

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});


/*
const createUser = async (id: string, email: string, password: string) => {
    
    await connection
      .insert({
        id,
        email,
        password,
      })
      .into(userTableName);
  };

*/

// ========================================================


const id = new IdGenerator().generate()

createNewUser(`${id}`, "email@email.com", "123456")
















app.get("/test", testEndpoint)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

