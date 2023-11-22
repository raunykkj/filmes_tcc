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
    
            //parâmetros recebidos pelo corpo da requisição
            const { usu_cod, perf_foto, perf_nome } = request.body;
    
            const { perf_cod } = request.params;
    
            const sql = 'UPDATE perfis SET usu_cod = ?, perf_foto = ?, perf_nome = ? WHERE perf_cod =?;'
    
            const values = [ usu_cod, perf_foto, perf_nome, perf_cod ];
    
            const atualizacao = await db.query(sql,values);
    
            //responde a requisição com a mensagem confirmando o ID do registro inserido
            return response.status(200).json(
            {
                confirma: 'Sucesso',
                message: 'Perfis ' + perf_cod + " atualizado com sucesso!",
                registrosAtualizados: atualizacao[0].affectRows
            }
                
                );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async ApagarPerfis(request, response) {
        try { 
            // parâmetro passado via url na chamada da api pelo front-end
            const {perf_cod} = request.params;
            // comando de exclusão
            const sql = ' DELETE FROM perfis WHERE perf_cod = ?';
            // definição de array com os pârametros que receberam os valores do front-end
            const values = [ perf_cod ];
            // executa a instrução de exclusão no banco de dados
            await db.query(sql, values);
            //mensagem de retorno no formato JSON
            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message:'Perfis com id ' + perf_cod + ' excluído com sucesso'
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};