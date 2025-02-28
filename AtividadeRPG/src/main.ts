import { Guerreiro } from "./models/Guerreiro";
import { Mago } from "./models/Mago";
import { Item } from "./models/Item";
import { Cena } from "./game/Cena";

const pocaoVida = new Item("Poção de Vida", (personagem) => personagem.vida += 20);
const heroi = new Guerreiro("Arthur");
const inimigo = new Mago("Vilão Mágico");

heroi.inventario.push(pocaoVida);
heroi.usarItem(pocaoVida);
heroi.atacar(inimigo);

const cenaInicial = new Cena("Você está diante de uma floresta misteriosa. O que deseja fazer?", {
    "Explorar a floresta": () => console.log("Você avança cautelosamente pela floresta."),
    "Voltar para a cidade": () => console.log("Você decide retornar para a cidade em busca de informações."),
});

cenaInicial.exibirCena();
