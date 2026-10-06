const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(
        path.join(__dirname, '../views/public/livros.html')
    );
});

const livroController = require('../controllers/livroController');

router.get('/livro', livroController.getTodosLivros);

router.get(
    '/livro/titulo/:titulo',
    livroController.getLivroTitulo
);

router.get(
    '/livro/autor/:autor',
    livroController.getLivroAutor
);

router.post('/livro', livroController.criarLivro);

router.put(
    '/livro/:isbn',
    livroController.atualizarLivro
);

router.delete(
    '/livro/:isbn',
    livroController.deletarLivro
);

module.exports = router;