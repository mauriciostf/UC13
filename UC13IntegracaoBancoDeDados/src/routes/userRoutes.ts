import { Router } from "express";
import { UserRepository } from "../repositories/UserRepository";

const router = Router();
const userRepository = new UserRepository();

router.post("/users", async (req, res) => {
  const { name, email } = req.body;
  await userRepository.createUser(name, email);
  res.status(201).send("User created");
});

router.get("/users", async (req, res) => {
  const users = await userRepository.getUsers();
  res.json(users);
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await userRepository.getUserById(Number(id));
  res.json(user);
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  await userRepository.updateUser(Number(id), name, email);
  res.send("User updated");
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  await userRepository.deleteUser(Number(id));
  res.send("User deleted");
});

export default router;