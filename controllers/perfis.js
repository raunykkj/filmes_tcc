const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarPerfis(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar Perfis'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async CadastrarPerfis(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar Perfis'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async EditarPerfis(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar Perfis'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async ApagarPerfis(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar Perfis'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};