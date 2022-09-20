const mysql = require('mysql2');
const password = require('./password');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: password,
        database: 'election'
    }
);
module.exports = db;