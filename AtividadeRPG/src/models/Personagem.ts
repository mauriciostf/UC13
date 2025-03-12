import { Item } from "./Item";
import { Refrigerante } from "./Refrigerante";

export class Personagem {
    nome: string;
    vida: number;
    forca: number;
    defesa: number;
    inventario: Refrigerante[] = [] 

    constructor(nome: string, vida: number, forca: number, defesa: number) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
        this.inventario = [];
    }

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
    
    adicionarItem(item: Refrigerante): void {
        this.inventario.push(item);
        console.log(`🥤 ${this.nome} pegou um ${item.nome}!`);
    }

    usarRefrigerante(): void {
        if (this.inventario.length > 0) {
            const item = this.inventario.pop();
            item?.aplicarEfeito(this);
        } else {
            console.log("❌ Você não tem refrigerantes para usar!");
        }
    }
}