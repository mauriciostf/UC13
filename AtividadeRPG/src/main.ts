//import { Mordecai } from "./models/Mordecai";
//import { Rigby } from "./models/Rigby";
import { PeteFesteiro } from "./models/PeteFesteiro";
import { Item } from "./models/Item";
import { Cena } from "./game/Cena";
import { Jogador } from "./models/Jogador";

const mordecai = new Jogador("Mordecai");
const rigby = new Jogador("Rigby");
const pete = new PeteFesteiro();
const refrigerante = new Item("Refrigerante Energético", (p) => p.vida += 20);

mordecai.inventario.push(refrigerante);

const cena1 = new Cena("Pete Festeiro invadiu o parque, e o Benson não pode ficar sabendo! O que o mordecai e o rigby fazem?", {
    "Tentam conversar": () => {
        
        cena2.exibirCena();
    },
    "Atacam Pete": () => {
        mordecai.atacar(pete);
        cena2.exibirCena();
    },
    "Mordecai toma um refrigerante": () => {
        mordecai.usarItem(refrigerante);
        cena2.exibirCena();
    }
});

const cena2 = new Cena("Pete ficou irritado! Ele avança para atacar vcs!", {
    "Defender-se": () => {
        console.log("Pete ataca, mas mordecai bloqueia parcialmente.");
        cena3.exibirCena;
        
    },
    "Correr": () => {
        console.log("Voce foge, mas Pete continua destruindo todo o parque.");
        cena4.exibirCena;
    }
});
const cena3 = new Cena("Apos Mordecai ser atacado por Pete, Rigby ajuda ele a se reerguer e o leva para falar com o Saltitao, então Saltitao pergunta a Mordecai se ele precisa de ajuda.", {
    "Aceitar ajuda de Saltitao.": () => {
        console.log("Saltitao chama seus amigos Prismo e os Bebes magicos") 
    },
    "Negar ajuda de Saltitao": () => {
        console.log("Mordecai e Rigby terao que enfrentar Pete Festeiro sozinhos!")
    }
})
const cena4 = new Cena("Mordecai e Rigby fugiram, mas Pete continua destruindo o parque, voces tem que decidir: enfrentar o Pete ou desistir do parque ",{
    "Desistir do parque": () =>{
    console.log("Voces desistira e deixaram com que todo o parque fosse destruido! Benson ficou decepcionado!")
    },
    "Enfrentar Pete": () => {
    console.log("Boa!! Voces vão precisar de ajuda para enfrentar Pete Festeiro! Que tal falar com a galera do parque?")
    }
})



cena1.exibirCena();

