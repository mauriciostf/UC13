import { Personagem } from "./Personagem";

// Classe base Item
export class Item {
    constructor(public nome: string, public aplicarEfeito: (personagem: Personagem) => void ) {}
}
