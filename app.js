// Variável para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const amigoInput = document.getElementById("amigo");
    const nomeAmigo = amigoInput.value.trim();

    // Verifica se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
    } else {
        // Adiciona o nome ao array de amigos
        amigos.push(nomeAmigo);

        // Limpa o campo de entrada
        amigoInput.value = "";

        // Atualiza a lista exibida
        exibirListaAmigos();
    }
}

// Função para exibir a lista de amigos na página
function exibirListaAmigos() {
    const lista = document.getElementById("listaAmigos");

    // Limpa a lista antes de adicionar os novos elementos
    lista.innerHTML = "";

    // Percorre o array de amigos e adiciona cada um como um item da lista
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo secreto aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado do sorteio
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>`;
}
