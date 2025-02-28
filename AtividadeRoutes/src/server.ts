import express, { Application, application } from "express";
import usuarioRoutes from "./routes/usuarioRoutes";
import produtoRoutes from "./routes/produtoRoutes";

const app: Application = express();
app.use(express.json());

app.use("/api", usuarioRoutes);
app.use("/api", produtoRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000!"));