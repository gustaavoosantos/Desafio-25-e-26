// Array inicial de desenhos animados dos anos 2000
let desenhosAnimados = [
    "Bob Esponja",
    "Os Padrinhos Mágicos",
    "Kim Possible",
    "As Aventuras de Jackie Chan",
    "Hora de Aventura",
    "Avatar: A Lenda de Aang",
    "Ben 10",
    "X-Men: Evolution",
    "Duck Dodgers",
    "Danny Phantom"
];

let indiceSubstituicao = 0; // Índice para controlar a substituição

// Função para exibir a lista de desenhos animados
function exibirLista() {
    const lista = document.querySelector('.lista-desenhos'); // Corrigido para usar querySelector
    lista.innerHTML = ''; // Limpa a lista antes de preenchê-la novamente

    desenhosAnimados.forEach(desenho => {
        const item = document.createElement('li'); // Corrigido para passar 'li' como string
        item.textContent = desenho;
        lista.appendChild(item);
    });
}

// Função para adicionar um novo desenho
function adicionarDesenho() {
    const novoDesenho = document.getElementById('novo-desenho').value; // Corrigido para acessar o valor do input
    if (novoDesenho.trim() !== '') { // Corrigido para chamar trim() no valor do input
        desenhosAnimados[indiceSubstituicao] = novoDesenho; // Corrigido para usar o valor do input
        indiceSubstituicao = (indiceSubstituicao + 1) % desenhosAnimados.length; // Atualiza o índice para a próxima substituição
        exibirLista(); // Corrigido para chamar a função com parênteses
        document.getElementById('novo-desenho').value = ''; // Limpa o input
    }
}

// Exibe a lista inicial quando a página carrega
window.onload = function() { // Corrigido para atribuir uma função a window.onload
    exibirLista();
};
