import { Personagem } from "./Personagem";
export class Item {
    constructor(public nome: string, public efeito: (personagem: Personagem) => void) {}
}

export const refrigerante = new Item("Refrigerante", (personagem) => {
    personagem.vida += 20;
    console.log(`${personagem.nome} tomou um refrigerante e recuperou 20 de vida!`);
});

