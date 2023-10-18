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

            //parâmetros recebidos pelo corpo da requisição
            const { usu_cod, perf_foto, perf_nome } = request.body;

            const sql = 'INSERT INTO PERFIS (usu_cod, perf_foto, perf_nome) VALUES (?,?,?);';

            const values = [usu_cod, perf_foto, perf_nome];

            const confirmacao = await db.query(sql,values);

            //identificação do ID do registro inserido 
            const perf_cod = confirmacao[0].insertId

            //responde a requisição com a mensagem confirmando o ID do registro inserido
            return response.status(200).json(
            {
                confirma: 'Sucesso',
                message: 'Cadastro de perfil efetuado',
                perf_cod
            }
                
                );
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