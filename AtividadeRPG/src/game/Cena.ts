export class Cena {
    constructor(
        public descricao: string,
        public escolhas: { [key: string]: () => void }
    ) {}

    exibirCena(): void {
        console.log(this.descricao);
        Object.keys(this.escolhas).forEach((opcao, index) => {
            console.log(`${index + 1}. ${opcao}`);
        });
    }

    escolher(opcao: string): void {
        if (this.escolhas[opcao]) {
            this.escolhas[opcao]();
        } else {
            console.log("Escolha invalida.");
        }
    }
}
