import { Mordecai } from "./models/Mordecai";
import { Rigby } from "./models/Rigby";
import { PeteFesteiro } from "./models/PeteFesteiro";
import { Item } from "./models/Item";
import { Cena } from "./game/Cena";

const refrigeranteEnergetico = new Item("Refrigerante Energético", (personagem) => personagem.vida += 20);
const mordecai = new Mordecai();
const rigby = new Rigby();
const pete = new PeteFesteiro();

mordecai.inventario.push(refrigeranteEnergetico);
mordecai.usarItem(refrigeranteEnergetico);
mordecai.atacar(pete);

const cenaInicial = new Cena("Pete Festeiro está destruindo o parque com uma festa! O que vocês fazem?", {
    "Tentar convencer Pete a parar": () => console.log("Pete ri da sua tentativa e aumenta o volume da música!"),
    "Desafiar Pete para uma batalha de dança": () => console.log("Pete aceita o desafio! Prepare-se para a batalha!"),
    "Pedir ajuda a Skips": () => console.log("Skips diz que Pete só pode ser derrotado de uma forma específica...")
});

cenaInicial.exibirCena();
