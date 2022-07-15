/*
Ao clicar no ポケモン da lista, temos que esconder o ポケモンのカードゲーム 
aberto e assim mostrar o カードゲーム correspondente ao que foi
selecionado na listagem.

para isso vamos precisar trabalhar com dois elementos, sendo eles:
1- listagem
2- ポケモンのカードゲーム

O que pricisamos:
Criar duas variaveis no JS para trabalhar com os elementos na tela

Tambem precisaremos trabalhar com um evento de clique (feito pelo usuario)

- remover a classe aberto so do カードゲーム que esta aberto.
- ao clicar em um ポケモン da listagem, pegar o id desse para assim
saber qual cartao mostrar.
- remover a classe ativa que marca o ポケモン selecionado 
(fundo botao identificador)
- adicionar a classe ativo no item da lista selecionado

- Problemas: Imagem de pokemon aparecendo abaixo
- Local problema: parte principal de informacoes dos pokemons
- Referencia local do erro: tipo do pokemon (escrito em Kanji)
- Solucão problema: Apenas dar espaço entre o tipo (escrito em Kanji)

- Problemas: Background colorida Pokemon nao aparecendo
- Local problema: parte principal de informacoes dos Pokemons
- Referencia local do erro: ポケモン図鑑カードゲーム e id do pokemon
- Solução problema: Apenas adicionar o Kanji (特性-もうか) e a caracterristica
do pokemon após um traço.
- Obs: Fazer isso em todos

- Problemas: Card pokemon não lendo/não aparecendo
- Local do problema: parte principal de informações dos Pokemons
- Referência local do erro: (id dos pokemons)
- Solução do problema: Apenas adicionar um nome lógico para o id como (カードゲーム-ヒトカゲ)
- Assim apenas sendo necessário adicionar a palavra card, traço e o nome do pokemon (card-nomeDoPokemon)

- Problemas: Card Pokemon sumia após o mesmo ser selecionado mais de uma vez seguida.
- Local do Problema: JavaScript, ordem do código com (ClassList.remove),
- abaixo do código com (ClassList.add)
- Referência local do erro: JavaScript
- Solução do Problema: Apenas foi necessário inverter a ordem dos códigos, ou seja,
passar o código com (ClassList.remove) acima do (ClassList.add).

- Problemas: Card Pokemon（ポッポ）, Background não lendo/aparecendo
- Local do problema: Parte principal de informações dos Pokemons ou no CSS
- Referência local erro: Local de informações referente ao Pokemon informado
- Solução do problema: o problema era relacionado ao nome estar diferente
do informado no HTML, assim ocasionando de o Background não aparecer.
*/

const ポケモンの選ぶリスト = document.querySelectorAll('.ポケモン')
const ポケモン図鑑カードゲーム = document.querySelectorAll('.ポケモン図鑑カードゲーム')

ポケモンの選ぶリスト.forEach(ポケモン => {
    ポケモン.addEventListener('click', () => {

        const ポケモンカードゲームオープン = document.querySelector('.オープン')
        ポケモンカードゲームオープン.classList.remove('オープン')
        
        const idポケモン選びました = ポケモン.attributes.id.value

        const ポケモンカードゲームを開けます = document.getElementById('カードゲーム-' + idポケモン選びました)
        ポケモンカードゲームを開けます.classList.add('オープン')

        const ポケモン鮮やかリスト = document.querySelector('.鮮やか')
        ポケモン鮮やかリスト.classList.remove('鮮やか')

        const ポケモン選びましたリスト = document.getElementById(idポケモン選びました)
        ポケモン選びましたリスト.classList.add('鮮やか')

    })
})