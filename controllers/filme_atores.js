const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarFilme_Atores(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar Filme_atores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async CadastrarFilme_Atores(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar Filme_atores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async EditarFilme_Atores(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar Filme_atores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async ApagarFilme_Atores(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar Filme_atores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};