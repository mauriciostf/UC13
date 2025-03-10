# RPG Interativo - Documentação

## Como o Jogo Funciona
Esse jogo de RPG é um tipo de jogo onde o jogador faz escolhas que mudam a história. O jogador pode escolher um personagem, lutar contra inimigos, usar itens e decidir o que fazer em cada parte do jogo. Dependendo das escolhas, o final da história muda.

### Como o jogo acontece:
1. **Escolha de Personagem:** O jogador escolhe se quer jogar com o Mordecai ou o Rigby, e cada um tem habilidades diferentes.
2. **Cenas e Decisões:** A história é dividida em partes e, em cada uma, o jogador faz escolhas que mudam o que vai acontecer.
3. **Batalhas:** O jogador pode atacar os inimigos, tomar dano ou usar itens durante as lutas.
4. **Inventário:** O jogador pode pegar e usar itens que ajudam a recuperar vida ou melhorar suas habilidades.
5. **Finais Diferentes:** O jogo tem vários finais, dependendo das escolhas feitas.

## Como Criar Novos Personagens
1. Crie uma classe nova que seja uma “filha” da classe `Personagem`.
2. Defina as características do personagem: `nome`, `vida`, `força`, `defesa`, `itens`.
3. Coloque os métodos que ele vai usar, como `atacar`, `apanhar` e `usarItem`.

## Como Criar Novos Itens
1. Crie uma classe nova para o item.
2. Coloque o `nome` e o `efeito` que ele causa.
3. Crie um método `usar` para aplicar o efeito no personagem.

## Como as Classes Estão Organizadas
- **`Personagem`**: Classe principal, com as características e ações comuns de todos os personagens.
- **`Mordecai` e `Rigby`**: Personagens principais que herdam de `Personagem`.
- **`Refrigerante`**: Item principal que herda de `Item`.
- **`PeteFesteiro`**: Inimigo específico que segue a interface `Inimigo`.
- **`Item`**: Classe dos itens usados para ajudar os personagens.
- **`Jogo`**: Classe que controla a história, decisões e cenas.

---

## Descrição do Jogo

### Resumo da História
Pete Festeiro tomou refrigerante demais e virou um deus da festa, começando a destruir tudo. Mordecai e Rigby têm que impedir ele antes que tudo seja destruído!

### Personagens
- **Mordecai**: Equilibrado, tem força, defesa e vida medianas.
- **Rigby**: Rápido, mas tem menos vida e defesa.
- **Pete Festeiro**: Vilão forte, com muita vida e ataques poderosos.

### Escolhas e Consequências
- **Tentar convencer Pete a sair**: Tenta resolver sem lutar, mas Pete não escuta fácil.
- **Desligar a música**: Pete fica bravo e começa uma luta.
- **Atacar Pete**: Começa uma batalha direto.

### Possíveis Finais
- **Final Bom**: Derrota Pete na dança ou na luta.
- **Final Ruim**: Pete vence e destroi tudo.

