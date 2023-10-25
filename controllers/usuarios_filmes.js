const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarUsuarios_Filmes(request, response) {
        try {
            //armazena instruções SQL na constante
            const sql = 'SELECT usfm_cod, perf_cod, fme_cod, usfm_curtida = 1 as usfm_curtida, usfm_assitido = 1 as usfm_assitido, usfm_assistindo = 1 as usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao= 1 as ufsm_moderacao from USUARIOS_FILMES';
            //executa instruções SQL e armazena o resultado na variavel
            const usuarios_filmes = await db.query(sql);

            const nReg = usuarios_filmes[0].length

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Usuarios_filmes cadastrados',
                    nItems: nReg,
                    items: usuarios_filmes[0]
                }
                    );

        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async CadastrarUsuarios_Filmes(request, response) {
        try {

            //parâmetros recebidos pelo corpo da requisição
            const {perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao} = request.body;

            const sql = 'INSERT INTO USUARIOS_FILMES (perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao) VALUES (?,?,?,?,?,?,?,?);';

            const values = [perf_cod, fme_cod, usfm_curtida, usfm_assitido, usfm_assistindo, ufsm_tempo, ufsm_comentario, ufsm_moderacao];

            const confirmacao = await db.query(sql,values);

            const usfm_cod = confirmacao[0].insertId

            //responde a requisição com a mensagem confirmando o ID do registro inserido
            return response.status(200).json(
            {
                confirma: 'Sucesso',
                message: 'Cadastro de filmes efetuado',
                usfm_cod
            }
                
                );
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