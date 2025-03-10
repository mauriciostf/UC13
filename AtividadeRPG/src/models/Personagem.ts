export class Personagem {
    constructor(
        public nome: string,
        public vida: number,
        public forca: number,
        public defesa: number
    ) {}

    atacar(inimigo: Personagem): void {
        const dano = Math.max(this.forca - inimigo.defesa, 0);
        inimigo.receberDano(dano);
        console.log(`${this.nome} atacou ${inimigo.nome} causando ${dano} de dano!`);
    }

    receberDano(dano: number): void {
        this.vida -= dano;
        if (this.vida <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        } else {
            console.log(`${this.nome} tem ${this.vida} de vida restante.`);
        }
    }
}