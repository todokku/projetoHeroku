// db.js
const mysql = require('mysql');
const connMysql = function(){
    //console.log('Conexao com db estabelecida!!')
    return mysql.createConnection({
        host:'mysql',
        user:'root',
        password:'12345',
        database:'node'
    });
}
module.exports = function(){
    //console.log('AutoLoad modulo db');
    return connMysql;
}