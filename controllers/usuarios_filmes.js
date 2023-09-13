const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarUsuarios_Filmes(request, response) {
        try {
            return response.status(200).json({confirma: 'Listar Usuarios_filmes'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};