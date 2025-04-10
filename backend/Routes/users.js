import express from "express";
import {getUsers,getUserById,addUser,updateUser,deleteUser} from "../Controllers/users.js";

const router = express.Router(); // organiza as rotas em arquivos separados

router.get("/", getUsers); // rota GET para listar os usuários
router.get("/:id", getUserById); // rota GET para um usuário específico
router.post("/", addUser); // rota POST para criar usuário
router.put("/:id", updateUser); // rota PUT para atualizar usuário
router.delete("/:id", deleteUser); // rota DELETE para deletar usuário

export default router;
