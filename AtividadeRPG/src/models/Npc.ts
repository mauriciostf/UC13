import { Personagem } from "./Personagem";
export class NPC extends Personagem {
    constructor(nome: string, vida: number, forca: number, defesa: number) {
        super(nome, vida, forca, defesa);
    }
}