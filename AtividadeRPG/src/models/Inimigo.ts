import { Personagem } from "./Personagem";

export interface Inimigo {
    atacar(alvo: Personagem): void;
    receberDano(dano: number): void;
}
