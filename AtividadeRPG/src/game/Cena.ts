import * as readline from "readline";
import { Refrigerante } from "../models/Refrigerante";
import { PeteFesteiro } from "../models/PeteFesteiro";
import { Personagem } from "../models/Personagem";
import { Rigby } from "../models/Rigby";
import { Mordecai } from "../models/Mordecai";

export class Jogo {
    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    private cenaAtual: number = 1;
    private jogador: Personagem;
    private pete = new PeteFesteiro();
    private refrigerante = new Refrigerante();
    
    constructor() {
        this.jogador = new Mordecai();
    }

    iniciar(): void {
        console.log("Escolha seu personagem:");
        console.log("1. Mordecai");
        console.log("2. Rigby");
        this.rl.question("Digite 1 ou 2: ", (resposta) => {
            if (resposta === "2") {
                this.jogador = new Rigby();
            }
            console.log(`Você escolheu ${this.jogador.nome}!`);
            this.executarCena();
        });
    }

    private executarCena(): void {
        switch (this.cenaAtual) {
            case 1:
                console.log("Pete Festeiro tomou refrigerantes demais, isso fez com que ele se tornasse um deus da festa, ele esta destruindo a casa, oque voces fazem?");
                console.log("1. Tentar convence-lo a sair");
                console.log("2. Desligar a musica");
                console.log("3. Atacar Pete");
                this.esperarEscolha([1, 2, 3], { 1: 2, 2: 3, 3: 4 })
                break;
            case 2:
                console.log("Pete ignora voces e continua dançando!Ele esta muito animado!");
                console.log("1. Chamar Musculoso");
                console.log("2. Desafiar Pete para uma dança")
                console.log("3. Tomar um refrigerante")
                this.esperarEscolha([1, 2, 3], { 1: 5, 2: 6, 3: 11});
                break;
            case 3:
                console.log("Vocês tentam desligar a música, mas Pete impede vocês e aumenta o volume!");
                this.cenaAtual = 2;
                this.executarCena();
                break;
            case 4:
                console.log("Pete esta  pronto para lutar! Você entra em combate!");
                this.jogador.atacar(this.pete);
                this.pete.atacar(this.jogador);
                if (Math.random() < 0.3) {
                    this.pete.droparItem();
                    this.jogador.adicionarItem(new Refrigerante());
                }
                console.log("1. Continuar lutando");
                console.log("2. Usar refrigerante");
                this.esperarEscolha([1, 2], { 1: 7, 2: 8 });
                break;
            case 5:
                console.log("Musculoso nao pode fazer nada contra Pete! Ele continua a festa!");
                this.cenaAtual = 4;
                this.executarCena();
                break;
            case 6:
                console.log("Pete aceita o desafio e começa a dançar! Quem ganhar, decide o destino da festa!");
                console.log("1. Fazer movimentos épicos");
                console.log("2. Tentar imitar Pete");
                this.esperarEscolha([1, 2], { 1: 9, 2: 10 });
                break;
            case 7:
                console.log("Pete é muito forte! Você precisa de um plano melhor!");
                this.cenaAtual = 6;
                this.executarCena();
                break;
            case 8:
                if (this.jogador.inventario.length > 0) {
                    this.jogador.usarRefrigerante();
                } else {
                    console.log("❌ Você não tem refrigerantes!");
                }
                this.cenaAtual = 4;
                this.executarCena();
                break;
            case 9:
                console.log("Seus movimentos são incríveis! Pete admite a derrota e encerra a festa!");
                console.log("Parabéns! Você salvou o parque!");
                this.rl.close();
                break;
            case 10:
                console.log("Pete ri de você e continua dançando! Você perdeu a chance de vencer!");
                this.rl.close();
                break;
            case 11:
                if (this.jogador.inventario.length > 0) {
                    this.jogador.usarRefrigerante();
                } else {
                    console.log("❌ Você não tem refrigerantes!");
                }
                console.log("1. Chamar o musculoso")
                console.log("2. Tentar desligar a musica")
                this.esperarEscolha([1, 2], { 1: 5, 2: 3});
               
                break
            
            default:
                console.log("Escolha inválida, tente novamente.");
                this.executarCena();
        }
    }

    private esperarEscolha(opcoesValidas: number[], proximasCenas: { [key: number]: number }): void {
        this.rl.question("Escolha uma opção: ", (resposta) => {
            const escolha = parseInt(resposta);
            if (opcoesValidas.includes(escolha)) {
                this.cenaAtual = proximasCenas[escolha];
                this.executarCena();
            } else {
                console.log("Escolha inválida, tente novamente.");
                this.executarCena();
            }
        });
    }
}
