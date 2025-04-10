import express from "express";
import userRoutes from "./Routes/users.js";
import cors from "cors";

const app = express(); // cria a aplicação Express

app.use(express.json()); // habilita o servidor a entender as requisições em JSON
app.use(cors()); // permite que outros domínios consigam acessar a API

app.use("/", userRoutes); // envia as requisições para as rotas

app.listen(8800, () => { // inicia o servidor na porta 8800
  console.log("Servidor rodando na porta 8800");
});
