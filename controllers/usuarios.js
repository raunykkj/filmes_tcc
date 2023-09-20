const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar Usuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async CadastrarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar Usuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async EditarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar Usuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async ApagarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar Usuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};