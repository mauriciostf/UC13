
import express, { Application} from "express";

import { AppDataSource } from "./data-sources";
import { error } from "console";

const app: Application = express();

app.use(express.json());

AppDataSource.initialize().then(() => {
    console.log("Conexao bem sucedida")
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
    })
}).catch((error => {
    console.log("erro ao conectar ao banco", error)
}))