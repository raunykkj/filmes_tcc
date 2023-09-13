const mysql = require('mysql2/promise');

const bd_usuario = 'usu_tcc_23'; // usuario usu_tcc_23
const bd_senha = 'SNfilmes9823'; // senha SNfilmes9823
const bd_servidor = '10.120.168.203'; // servidor
const bd_porta = '3306'; // porta
const bd_banco = 'filmes'; // nome do banco
let connection;

const config ={
    host: bd_servidor,
    port: bd_porta, //Default: 3306
    user: bd_usuario,
    password: bd_senha,
    database: bd_banco,
    waitForConnections : true,
    connectionLimit : 10,
    queueLimit : 0,
}








try {
    connection = mysql.createPool(config);

    console.log('Chamou conexão MySql!');

} catch (error) {
    console.log(error);
}

module.exports = connection;