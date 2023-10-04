const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarAtores(request, response) {
        try {
            //armazena instruções SQL na constante
            const sql = 'SELECT at_cod, at_nome, at_dtnasc, at_img from ATORES';
            //executa instruções SQL e armazena o resultado na variavel
            const atores = await db.query(sql);
            return response.status(200).json({confirma: atores});
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