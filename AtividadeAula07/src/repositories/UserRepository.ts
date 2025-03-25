import { AppDataSource } from "../data-sources";
import { User } from "../model/User";

export const UserRepository = AppDataSource.getRepository(User);