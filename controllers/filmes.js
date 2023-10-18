const { json } = require('express');
const db = require('../database/connection');

module.exports = {
    async listarFilmes(request, response) {
        try {
            //armazena instruções SQL na constante
            const sql = 'SELECT fme_cod, fme_nome, fme_diretor, fme_lancamento, fme_genero, fme_sinopse, fme_duracao, fme_idioma, fme_classificacao, fme_estudio, fme_link from FILMES';
            //executa instruções SQL e armazena o resultado na variavel
            const filmes = await db.query(sql);

            const nReg = filmes[0].length

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Filmes cadastrados',
                    nItems: nReg,
                    items: filmes[0]
                }
                    );

        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async CadastrarFilmes(request, response) {
        try {

            //parâmetros recebidos pelo corpo da requisição
            const { fme_nome, fme_diretor, fme_lancamento, fme_genero, fme_sinopse, fme_duracao, fme_idioma, fme_classificacao, fme_estudio, fme_link } = request.body;

            const sql = 'INSERT INTO FILMES (fme_nome, fme_diretor, fme_lancamento, fme_genero, fme_sinopse, fme_duracao, fme_idioma, fme_classificacao, fme_estudio, fme_link) VALUES (?,?,?,?,?,?,?,?,?,?);';

            const values = [fme_nome, fme_diretor, fme_lancamento, fme_genero, fme_sinopse, fme_duracao, fme_idioma, fme_classificacao, fme_estudio, fme_link];

            const confirmacao = await db.query(sql,values);

            //identificação do ID do registro inserido 
            const fme_cod = confirmacao[0].insertId

            //responde a requisição com a mensagem confirmando o ID do registro inserido
            return response.status(200).json(
            {
                confirma: 'Sucesso',
                message: 'Cadastro de filmes efetuado',
                fme_cod
            }
                
                );
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