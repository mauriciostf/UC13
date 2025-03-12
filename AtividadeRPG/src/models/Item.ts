import { Personagem } from "./Personagem";

export class Item {
    constructor(public nome: string, public aplicarEfeito: (personagem: Personagem) => void ) {}
}
