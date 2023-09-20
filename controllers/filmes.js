const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarFilmes(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar Filmes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async CadastrarFilmes(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar Filmes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async EditarFilmes(request, response) {
        try {
            return response.status(200).json({confirma: 'Editar Filmes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async ApagarFilmes(request, response) {
        try {
            return response.status(200).json({confirma: 'Apagar Filmes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};