const mysql = require('mysql');
const dbConfig = require('../config/dbconfig');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB

});

connection.connect(err => {
    if (err) throw err;
    console.log("connected to database");
});

module.exports = connection;