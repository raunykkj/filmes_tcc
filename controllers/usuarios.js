const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarUsuarios(request, response) {
        try {
            //armazena instruções SQL na constante
            const sql = 'SELECT usu_cod, usu_email, usu_nome, usu_dtnasc, usu_celular, usu_senha, usu_adm from USUARIOS';
            //executa instruções SQL e armazena o resultado na variavel
            const usuarios = await db.query(sql);
            return response.status(200).json({confirma: usuarios});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async CadastrarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'Cadastrar Usuarios'});
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