const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarUsuarios_Filmes(request, response) {
        try {
            //armazena instruções SQL na constante
            const sql = 'SELECT usfm_cod, perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao from USUARIOS_FILMES';
            //executa instruções SQL e armazena o resultado na variavel
            const usuarios_filmes = await db.query(sql);
            return response.status(200).json({confirma: usuarios_filmes});
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