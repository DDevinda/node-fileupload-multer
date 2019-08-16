var mysql = require('mysql');
var connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1qaz2wsx",
    database: "todoSample",
    multipleStatements: true //will allow to execute multiple queries in the same statement. 
});
module.exports = connection;