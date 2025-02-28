import { Personagem } from "./Personagem";
export class Guerreiro extends Personagem {
    constructor(nome: string) {
        super(nome, 100, 15, 10);
    }
}