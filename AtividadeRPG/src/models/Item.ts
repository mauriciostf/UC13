import { Personagem } from "./Personagem";

// Classe base Item
export class Item {
    constructor(public nome: string, public efeito: (personagem: Personagem) => void) {}
}
