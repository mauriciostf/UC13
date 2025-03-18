import "reflect-metadata";
import express, { Application } from "express";
import { createConnection } from "typeorm";
import userRoutes from "./routes/userRoutes";

const app: Application = express();
app.use(express.json());
app.use(userRoutes);

createConnection()
  .then(() => {
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((error) => console.log(error));