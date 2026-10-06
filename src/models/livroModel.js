let livros = [
    {
        titulo: 'Dom Quixote',
        isbn: 1,
        autor: 'Miguel de Cervantes'
    },
    {
        titulo: 'Memórias Póstumas',
        isbn: 2,
        autor: 'Machado de Assis'
    },
    {
        titulo: 'O Cortiço',
        isbn: 3,
        autor: 'Aluísio Azevedo'
    }
];

// GET - Listar todos os livros
const getTodosLivros = () => {
    return livros;
};

// GET - Buscar livro pelo título
const getLivroTitulo = (titulo) => {
    return livros.find(
        livro => livro.titulo.toLowerCase() === titulo.toLowerCase()
    );
};

// GET - Buscar livro pelo autor
const getLivroAutor = (autor) => {
    return livros.filter(
        livro => livro.autor.toLowerCase() === autor.toLowerCase()
    );
};

// POST - Criar livro
const criarLivro = (livroData) => {
    const novoLivro = {
        isbn: livros.length > 0
            ? Math.max(...livros.map(livro => livro.isbn)) + 1
            : 1,
        titulo: livroData.titulo,
        autor: livroData.autor
    };

    livros.push(novoLivro);

    return novoLivro;
};

// PUT - Editar livro
const atualizarLivro = (isbn, livroData) => {
    const livro = livros.find(
        livro => livro.isbn === Number(isbn)
    );

    if (!livro) {
        return null;
    }

    livro.titulo = livroData.titulo;
    livro.autor = livroData.autor;

    return livro;
};

// DELETE - Excluir livro
const deletarLivro = (isbn) => {
    const index = livros.findIndex(
        livro => livro.isbn === Number(isbn)
    );

    if (index === -1) {
        return null;
    }

    return livros.splice(index, 1)[0];
};

module.exports = {
    getTodosLivros,
    getLivroTitulo,
    getLivroAutor,
    criarLivro,
    atualizarLivro,
    deletarLivro
};