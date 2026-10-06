const usuarioModel = require('../models/usuarioModel');

// GET - Listar todos os usuários
const getTodosUsuarios = (req, res) => {
    const usuarios = usuarioModel.getTodosUsuarios();

    res.json(usuarios);
};

// GET - Buscar usuário pelo CPF
const getUsuarioCpf = (req, res) => {
    const cpf = req.params.cpf;

    const usuario = usuarioModel.getUsuarioCpf(cpf);

    if (!usuario) {
        return res.status(404).json({
            erro: 'Usuário não encontrado'
        });
    }

    res.json(usuario);
};

// POST - Criar usuário
const criarUsuario = (req, res) => {
    const novoUsuario = usuarioModel.criarUsuario(req.body);

    res.status(201).json(novoUsuario);
};

// PUT - Editar usuário
const atualizarUsuario = (req, res) => {
    const cpf = req.params.cpf;

    const usuario = usuarioModel.atualizarUsuario(
        cpf,
        req.body
    );

    if (!usuario) {
        return res.status(404).json({
            erro: 'Usuário não encontrado'
        });
    }

    res.json(usuario);
};

// DELETE - Excluir usuário
const deletarUsuario = (req, res) => {
    const cpf = req.params.cpf;

    const usuario = usuarioModel.deletarUsuario(cpf);

    if (!usuario) {
        return res.status(404).json({
            erro: 'Usuário não encontrado'
        });
    }

    res.json({
        mensagem: 'Usuário excluído com sucesso',
        usuario: usuario
    });
};

module.exports = {
    getTodosUsuarios,
    getUsuarioCpf,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};