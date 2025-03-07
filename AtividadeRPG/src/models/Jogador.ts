import { Personagem } from "./Personagem";
export class Jogador extends Personagem {
    constructor(nome: string) {
        super(nome, 100, 10, 5);
    }
}