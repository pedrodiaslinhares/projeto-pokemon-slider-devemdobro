/* 
Objetivo 1 - quando clicarmos na seta de avanço, sobreposição do próximo cartão da lista
    -passo 1 - pegar o elemento HTML da seta avançar
    -passo 2 - identificar o clique do usuário nas setas
    -passo 3 - após o clique fazer aparecer o próximo cartão da lista
    -passo 4 - buscar o cartão que está selecionado e esconder(tirar a class)

Objetivo 2 - quando clicarmos na seta de voltar, mostrar o cartão anterior da lista
    -passo 1 - pegar o elemento HTML da seta voltar
    -passo 2 - identificar o clique do usuário nas setas
    -passo 3 - após o clique fazer aparecer o cartão anterior
    -passo 4 - buscar o cartão que está selecionado e esconder

*/

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado () {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao (indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}


btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual)
});

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual)
});
