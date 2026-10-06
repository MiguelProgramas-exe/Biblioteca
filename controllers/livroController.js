const path = require('path');
const livroModel = require('../models/livroModel');
// GET /livro
// Listar todos os livros
const getTodosLivros = (req, res) => {
    const livros = livroModel.getTodosLivros();
    res.json(livros);
};
// GET /livro/:titulo
// Obter livro pelo título
const getLivroTitulo = (req, res) => {
    const titulo = req.params.titulo;
    const livro = livroModel.getLivroTitulo(titulo);
    if (!livro) {
        return res.status(404).json({
            erro: 'Livro não encontrado'
        });
    }
    res.json(livro);
};

// GET /livro/autor/:autor
// Obter livro pelo autor
const getLivroAutor = (req, res) => {
    const autor = req.params.autor;
    const livro = livroModel.getLivroAutor(autor);
    if (!livro) {
        return res.status(404).json({
            erro: 'Livro não encontrado'
        });
    }
    res.json(livro);
};
// GET /
// Página inicial
const paginaInicial = (req, res) => {
    res.sendFile(
        path.join(__dirname, '../../view/paginaInicial/index.html')
    );
};
// POST /livro
// Criar um novo livro
const criarLivro = (req, res) => {
    const novo = livroModel.criarLivro(req.body);
    res.status(201).json(novo);
};

module.exports = {
    getTodosLivros,
    getLivroTitulo,
    getLivroAutor,
    criarLivro,
    paginaInicial
};

// Base da URL do seu servidor Express (ajuste a porta se for diferente de 3000)
const API_URL = 'http://localhost:3000';

// Elemento da tela onde vamos exibir as respostas do servidor
const painelResultado = document.getElementById('resultado');

// --- 1. FUNÇÃO: LISTAR TODOS OS LIVROS ---
document.getElementById('btnListar').addEventListener('click', async () => {
    try {
        const response = await fetch(`${API_URL}/livro`);
        const dados = await response.json();
        painelResultado.textContent = JSON.stringify(dados, null, 2);
    } catch (erro) {
        painelResultado.textContent = 'Erro ao buscar livros.';
    }
});

// --- 2. FUNÇÃO: BUSCAR LIVRO POR TÍTULO ---
document.getElementById('btnBuscarTitulo').addEventListener('click', async () => {
    const titulo = document.getElementById('inputTitulo').value;
    if (!titulo) return alert('Digite um título!');

    try {
        // Envia o título na URL: /livro/NomeDoLivro
        const response = await fetch(`${API_URL}/livro/${encodeURIComponent(titulo)}`);
        const dados = await response.json();
        painelResultado.textContent = JSON.stringify(dados, null, 2);
    } catch (erro) {
        painelResultado.textContent = 'Erro ao buscar por título.';
    }
});

// --- 3. FUNÇÃO: BUSCAR LIVRO POR AUTOR ---
document.getElementById('btnBuscarAutor').addEventListener('click', async () => {
    const autor = document.getElementById('inputAutor').value;
    if (!autor) return alert('Digite um autor!');

    try {
        // Envia o autor na URL: /livro/autor/NomeDoAutor
        const response = await fetch(`${API_URL}/livro/autor/${encodeURIComponent(autor)}`);
        const dados = await response.json();
        painelResultado.textContent = JSON.stringify(dados, null, 2);
    } catch (erro) {
        painelResultado.textContent = 'Erro ao buscar por autor.';
    }
});

// --- 4. FUNÇÃO: CRIAR UM NOVO LIVRO ---
document.getElementById('btnCriar').addEventListener('click', async () => {
    const titulo = document.getElementById('novoTitulo').value;
    const autor = document.getElementById('novoAutor').value;

    if (!titulo || !autor) return alert('Preencha todos os campos!');

    // Monta o objeto que o seu req.body espera receber no backend
    const dadosLivro = { titulo, autor };

    try {
        const response = await fetch(`${API_URL}/livro`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosLivro) // Envia os dados no corpo da requisição
        });
        
        const dados = await response.json();
        painelResultado.textContent = 'Criado com sucesso:\n' + JSON.stringify(dados, null, 2);
    } catch (erro) {
        painelResultado.textContent = 'Erro ao criar livro.';
    }
});
