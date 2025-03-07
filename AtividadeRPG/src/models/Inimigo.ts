import { NPC } from "./Npc";
export class Inimigo extends NPC {
    constructor(nome: string, vida: number, forca: number, defesa: number) {
        super(nome, vida, forca, defesa);
    }
}