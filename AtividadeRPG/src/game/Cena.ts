import * as readline from "readline";

export class Cena {
    private descricao: string;
    private escolhas: Map<string, () => void>;
    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    constructor(descricao: string, escolhas: { [key: string]: () => void }) {
        this.descricao = descricao;
        this.escolhas = new Map(Object.entries(escolhas));
    }

    exibirCena(): void {
        console.log("\n" + this.descricao);
        let opcoes = Array.from(this.escolhas.keys());

        opcoes.forEach((opcao, index) => {
            console.log(`${index + 1}. ${opcao}`);
        });

        this.rl.question("Escolha uma opção: ", (resposta) => {
            const escolhaIndex = parseInt(resposta) - 1;
            if (escolhaIndex >= 0 && escolhaIndex < opcoes.length) {
                const escolha = opcoes[escolhaIndex];
                this.escolhas.get(escolha)?.();
            } else {
                console.log("Escolha inválida, tente novamente.");
                this.exibirCena();
            }
        });
    }
}