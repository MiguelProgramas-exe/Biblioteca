const livroModel = require('../models/livroModel');

// GET - Listar todos os livros
const getTodosLivros = (req, res) => {
    const livros = livroModel.getTodosLivros();

    res.json(livros);
};

// GET - Buscar livro pelo título
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

// GET - Buscar livros pelo autor
const getLivroAutor = (req, res) => {
    const autor = req.params.autor;

    const livros = livroModel.getLivroAutor(autor);

    if (livros.length === 0) {
        return res.status(404).json({
            erro: 'Nenhum livro encontrado para esse autor'
        });
    }

    res.json(livros);
};

// POST - Criar livro
const criarLivro = (req, res) => {
    const novoLivro = livroModel.criarLivro(req.body);

    res.status(201).json(novoLivro);
};

// PUT - Editar livro
const atualizarLivro = (req, res) => {
    const isbn = req.params.isbn;

    const livro = livroModel.atualizarLivro(
        isbn,
        req.body
    );

    if (!livro) {
        return res.status(404).json({
            erro: 'Livro não encontrado'
        });
    }

    res.json(livro);
};

// DELETE - Excluir livro
const deletarLivro = (req, res) => {
    const isbn = req.params.isbn;

    const livro = livroModel.deletarLivro(isbn);

    if (!livro) {
        return res.status(404).json({
            erro: 'Livro não encontrado'
        });
    }

    res.json({
        mensagem: 'Livro excluído com sucesso',
        livro: livro
    });
};

module.exports = {
    getTodosLivros,
    getLivroTitulo,
    getLivroAutor,
    criarLivro,
    atualizarLivro,
    deletarLivro
};