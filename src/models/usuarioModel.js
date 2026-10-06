let usuarios = [
    { cpf: 1, nome: 'Miguel' },
    { cpf: 2, nome: 'Luis' },
    { cpf: 3, nome: 'Pedro' }
];

// GET - Listar todos os usuários
const getTodosUsuarios = () => {
    return usuarios;
};

// GET - Buscar usuário pelo CPF
const getUsuarioCpf = (cpf) => {
    return usuarios.find(usuario => usuario.cpf === Number(cpf));
};

// POST - Criar usuário
const criarUsuario = (usuarioData) => {
    const novoUsuario = {
        cpf: usuarios.length > 0
            ? Math.max(...usuarios.map(usuario => usuario.cpf)) + 1
            : 1,
        nome: usuarioData.nome
    };

    usuarios.push(novoUsuario);

    return novoUsuario;
};

// PUT - Editar usuário
const atualizarUsuario = (cpf, usuarioData) => {
    const usuario = usuarios.find(
        usuario => usuario.cpf === Number(cpf)
    );

    if (!usuario) {
        return null;
    }

    usuario.nome = usuarioData.nome;

    return usuario;
};

// DELETE - Excluir usuário
const deletarUsuario = (cpf) => {
    const index = usuarios.findIndex(
        usuario => usuario.cpf === Number(cpf)
    );

    if (index === -1) {
        return null;
    }

    return usuarios.splice(index, 1)[0];
};

module.exports = {
    getTodosUsuarios,
    getUsuarioCpf,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};