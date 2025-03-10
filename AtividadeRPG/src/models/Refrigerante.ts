import { Item } from "./Item";
import { Personagem } from "./Personagem";

// Classe Refrigerante, herda de Item
export class Refrigerante extends Item {
    constructor() {
        super("Refrigerante", (personagem: Personagem) => {
            personagem.vida += 20;
            console.log(`${personagem.nome} tomou um refrigerante e recuperou 20 de vida!`);
        });
    }
}
