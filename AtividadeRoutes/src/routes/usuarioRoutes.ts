import { Usuario } from "../models/Usuario";
import { Router, Request, Response } from "express";
import { usuarios } from "../database";

const router = Router();


router.post("/usuarios", (req: Request, res: Response) => {
  const { id, nome, email } = req.body;
  const novoUsuario = new Usuario(id, nome, email);
  usuarios.push(novoUsuario);
  res.status(201).json({ mensagem: "Usuário criado com sucesso!", usuario: novoUsuario });
});

router.get("/usuarios", (req: Request, res: Response) => {
  res.status(200).json(usuarios);
});

export default router;