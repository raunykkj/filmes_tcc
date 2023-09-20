const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarUsuarios_Filmes(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar Usuarios_filmes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async CadastrarUsuarios_Filmes(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar Usuarios_filmes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async EditarUsuarios_Filmes(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar Usuarios_filmes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async ApagarUsuarios_Filmes(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar Usuarios_filmes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};