import { getConnection } from "typeorm";
import { User } from "../models/User";

export class UserRepository {
  async createUser(name: string, email: string) {
    const query = `INSERT INTO user (name, email) VALUES ('${name}', '${email}')`;
    await getConnection().query(query);
  }

  async getUsers() {
    const query = `SELECT * FROM user`;
    return await getConnection().query(query);
  }

  async getUserById(id: number) {
    const query = `SELECT * FROM user WHERE id = ${id}`;
    return await getConnection().query(query);
  }

  async updateUser(id: number, name: string, email: string) {
    const query = `UPDATE user SET name = '${name}', email = '${email}' WHERE id = ${id}`;
    await getConnection().query(query);
  }

  async deleteUser(id: number) {
    const query = `DELETE FROM user WHERE id = ${id}`;
    await getConnection().query(query);
  }
}