const mysql = require('mysql');
const dbConfig = require('../config/dbconfig');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    insecureAuth: true

});

connection.connect(err => {
    if (err) {
        console.log("error: could not connect to database")
       throw new Error("technical error"); 
    } 
    console.log("connected to database");
});

module.exports = connection;