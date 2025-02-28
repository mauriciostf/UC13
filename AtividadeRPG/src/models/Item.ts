import { Personagem } from "./Personagem";
export class Item {
    constructor(public nome: string, public efeito: (personagem: Personagem) => void) {}
    
    aplicarEfeito(personagem: Personagem): void {
        this.efeito(personagem);
    }
}
