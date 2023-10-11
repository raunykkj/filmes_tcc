const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarPerfis(request, response) {
        try {
            //armazena instruções SQL na constante
            const sql = 'SELECT perf_cod, usu_cod, perf_foto, perf_nome from PERFIS';
            //executa instruções SQL e armazena o resultado na variavel
            const perfis = await db.query(sql);

            const nReg = perfis[0].length

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Perfis cadastrados',
                    nItems: nReg,
                    items: perfis[0]
                }
                    );

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