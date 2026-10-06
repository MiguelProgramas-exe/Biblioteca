const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(
        path.join(__dirname, '../views/public/usuarios.html')
    );
});

const usuarioController = require('../controllers/usuarioController');

router.get('/usuario', usuarioController.getTodosUsuarios);

router.get('/usuario/:cpf', usuarioController.getUsuarioCpf);

router.post('/usuario', usuarioController.criarUsuario);

router.put('/usuario/:cpf', usuarioController.atualizarUsuario);

router.delete('/usuario/:cpf', usuarioController.deletarUsuario);

module.exports = router;