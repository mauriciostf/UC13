import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";

export class UserController {
  static async create(req: Request, res: Response) {
    const { name, email } = req.body;
    const user = UserRepository.create({ name, email });
    await UserRepository.save(user);
    res.status(201).json(user);
    return;
  }

  static async getAll(req: Request, res: Response) {
    const users = await UserRepository.find();
    res.json(users);
    return;
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await UserRepository.findOneBy({ id: Number(id) });
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    res.json(user);
    return;
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;
    await UserRepository.update(id, { name, email });
    res.json({ message: "User updated successfully" });
    return;
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    await UserRepository.delete(id);
    res.json({ message: "User deleted successfully" });
    return;
  }
}