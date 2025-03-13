import { Personagem } from "./Personagem";
import { Inimigo } from "./Inimigo";
import { Refrigerante } from "./Refrigerante";

export class PeteFesteiro extends Personagem implements Inimigo {
    constructor() {
        super("Pete Festeiro", 120, 20, 5);
    }

    droparItem(): void {
        const refrigerante = new Refrigerante();
        console.log(`🥤 Pete Festeiro derrubou um ${refrigerante.nome}!`);
    }
}
