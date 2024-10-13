
const cartao = document.getElementById('cartao');
const titulo = document.getElementById('titulo');
const conteudo = document.getElementById('conteudo');


const corFundo = document.getElementById('cor-fundo');
const tamanhoBorda = document.getElementById('tamanho-borda');
const corBorda = document.getElementById('cor-borda');
const tamanhoTexto = document.getElementById('tamanho-texto');
const novoTexto = document.getElementById('novo-texto');
const novoTitulo = document.getElementById('novo-titulo');


corFundo.addEventListener('input', () => {
    cartao.style.backgroundColor = corFundo.value;
});

tamanhoBorda.addEventListener('input', () => {
    cartao.style.borderWidth = `${tamanhoBorda.value}px`;
});


corBorda.addEventListener('input', () => {
    cartao.style.borderColor = corBorda.value;
});

tamanhoTexto.addEventListener('input', () => {
    cartao.style.fontSize = `${tamanhoTexto.value}px`;
});

novoTexto.addEventListener('input', () => {
    conteudo.textContent = novoTexto.value;
});

novoTitulo.addEventListener('input', () => {
    titulo.textContent = novoTitulo.value;
})