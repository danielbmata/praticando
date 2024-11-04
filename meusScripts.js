// Seleciona elementos importantes
const batePapo = document.querySelector('.bate-papo');
const parteDireita = document.querySelector('.parte-direita');
const parteEsquerda = document.querySelector('.parte-esquerda');
const areaMensagens = document.querySelector('.area-mensagens');
const inputMensagem = document.querySelector('.area-input input[type="text"]');
const botaoEnviar = document.querySelector('.botao-enviar');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;


// Event Listeners para as bolinhas do menu
document.querySelector('.bolinha-verde').onclick = function () {
    parteDireita.classList.toggle('active');
    batePapo.classList.toggle('desfocado', parteDireita.classList.contains('active'));
};

document.querySelector('.bolinha-amarela').onclick = function () {
    parteEsquerda.classList.toggle('active');
    batePapo.classList.toggle('desfocado', parteEsquerda.classList.contains('active'));
};

document.querySelector('.bolinha-vermelha').onclick = function () {
    parteDireita.classList.remove('active');
    parteEsquerda.classList.remove('active');
    batePapo.classList.remove('desfocado');
};


// Funcionalidade de enviar mensagem
botaoEnviar.onclick = function () {
    const mensagemTexto = inputMensagem.value;
    if (mensagemTexto.trim() !== "") {
        const novaMensagem = document.createElement('div');
        novaMensagem.classList.add('mensagem', 'usuario');
        novaMensagem.textContent = mensagemTexto; // Define o texto da mensagem
        areaMensagens.appendChild(novaMensagem);
        inputMensagem.value = ""; // Limpa o input
        areaMensagens.scrollTo({
            top: areaMensagens.scrollHeight,
            behavior: 'smooth'
        });
    }
};

inputMensagem.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        botaoEnviar.click();
    }
});


// Funcionalidade do Dark Mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('dark-mode-ativo'); // Alterna a classe do botão também

    // Salva a preferência no localStorage
    localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

// Verifica a preferência ao carregar a página
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.classList.add('dark-mode-ativo'); // Adiciona a classe ao botão também
}