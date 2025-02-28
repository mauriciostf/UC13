import { Personagem } from "./Personagem";
export class Mago extends Personagem {
    constructor(nome: string) {
        super(nome, 70, 10, 5);
    }
}