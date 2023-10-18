const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarFilme_Atores(request, response) {
        try {
            //armazena instruções SQL na constante
            const sql = 'SELECT fme_cod, at_cod, fme_at_papel from FILME_ATORES';
            //executa instruções SQL e armazena o resultado na variavel
            const filme_atores = await db.query(sql);

            const nReg = filme_atores[0].length

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Filme_atores cadastrados',
                    nItems: nReg,
                    items: filme_atores[0]
                }
                    );

        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async CadastrarFilme_Atores(request, response) {
            try {
    
                //parâmetros recebidos pelo corpo da requisição
                const { fme_cod, at_cod, fme_at_papel } = request.body;
    
                const sql = 'INSERT INTO FILMES (fme_cod, at_cod, fme_at_papel) VALUES (?,?,?);';
    
                const values = [fme_cod, at_cod, fme_at_papel];
    
                const confirmacao = await db.query(sql,values);
    
                //responde a requisição com a mensagem confirmando o ID do registro inserido
                return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Cadastro de filmes efetuado',
                    fme_cod,
                    at_cod
                }
                    
                    );
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