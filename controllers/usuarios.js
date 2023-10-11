const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarUsuarios(request, response) {
        try {
            //armazena instruções SQL na constante
            const sql = 'SELECT usu_cod, usu_email, usu_nome, usu_dtnasc, usu_celular, usu_senha, usu_adm = 1 as usu_adm from USUARIOS';
            //executa instruções SQL e armazena o resultado na variavel
            const usuarios = await db.query(sql);

            const nReg = usuarios[0].length

            return response.status(200).json(
            {
                confirma: 'Sucesso',
                message: 'Usuarios cadastrados',
                nItems: nReg,
                items: usuarios[0]
            }
                );
                
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async CadastrarUsuarios(request, response) {
        try {

            //parâmetros recebidos pelo corpo da requisição
            const { usu_email, usu_nome, usu_dtnasc, usu_celular, usu_senha, usu_adm } = request.body;

            const sql = 'INSERT INTO USUARIOS (usu_email, usu_nome, usu_dtnasc, usu_celular, usu_senha, usu_adm) VALUES (?,?,?,?,?,?);';

            const values = [usu_email, usu_nome, usu_dtnasc, usu_celular, usu_senha, usu_adm];

            const confirmacao = await db.query(sql,values);

            //identificação do ID do registro inserido 
            const usu_cod = confirmacao[0].insertId

            //responde a requisição com a mensagem confirmando o ID do registro inserido
            return response.status(200).json(
            {
                confirma: 'Sucesso',
                message: 'Cadastro de usuario efetuado',
                usu_cod
            }
                
                );
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