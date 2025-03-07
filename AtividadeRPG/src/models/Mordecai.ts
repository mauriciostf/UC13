import { Jogador } from "./Jogador";
export class Mordecai extends Jogador {
    constructor() {
        super("Mordecai");
        this.forca = 12;
        this.defesa = 8;
    }
}