import { Personagem } from "./Personagem";
import { Inimigo } from "./Inimigo";
import { Refrigerante } from "./Refrigerante";

export class PeteFesteiro extends Personagem implements Inimigo {
    constructor() {
        super("Pete Festeiro", 100, 15, 5);
    }

    atacar(alvo: Personagem): void {
        console.log(`${this.nome} ataca ${alvo.nome}, causando ${this.forca} de dano!`);
        alvo.receberDano(this.forca);
    }

    receberDano(dano: number): void {
        this.vida -= dano;
        console.log(`${this.nome} recebeu ${dano} de dano! Vida restante: ${this.vida}`);

        if (this.vida <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        } else {
            this.droparItem();
        }
    }
    private droparItem(): void {
        if (Math.random() < 0.5) { 
            const refrigerante = new Refrigerante();
            console.log(`🥤 Pete Festeiro derrubou um ${refrigerante.nome}!`);
        }
    }
}
