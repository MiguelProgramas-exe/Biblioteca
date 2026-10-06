const express = require('express');
const path = require('path');

const usuarioRoutes = require('./src/routes/usuarioRoutes');
const livroRoutes = require('./src/routes/livroRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Página inicial
app.get('/', (req, res) => {
    res.sendFile(
        path.join(__dirname, 'src/views/public/index.html')
    );
});

// Rotas de usuários
app.use('/usuarios', usuarioRoutes);

// Rotas de livros
app.use('/livros', livroRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});