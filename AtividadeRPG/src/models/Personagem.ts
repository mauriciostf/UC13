import { Item } from "./Item";
export class Personagem {
    constructor(
        public nome: string,
        public vida: number,
        public forca: number,
        public defesa: number,
        public inventario: Item[] = []
    ) {}

    atacar(inimigo: Personagem): void {
        const dano = Math.max(this.forca - inimigo.defesa, 0);
        inimigo.receberDano(dano);
        console.log(`${this.nome} atacou ${inimigo.nome} causando ${dano} de dano.`);
    }

    usarItem(item: Item): void {
        const index = this.inventario.indexOf(item);
        if (index > -1) {
            this.inventario.splice(index, 1);
            item.aplicarEfeito(this);
            console.log(`${this.nome} usou ${item.nome}.`);
        } else {
            console.log(`${this.nome} não possui ${item.nome} no inventário.`);
        }
    }

    receberDano(dano: number): void {
        this.vida -= dano;
        console.log(`${this.nome} agora tem ${this.vida} de vida.`);
        if (this.vida <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        }
    }
}