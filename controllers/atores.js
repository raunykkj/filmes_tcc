const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarAtores(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar Atores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async CadastrarAtores(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar Atores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async EditarAtores(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar Atores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async ApagarAtores(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar Atores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};