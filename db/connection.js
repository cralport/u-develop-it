const mysql = require('mysql2');

const db = mysql.createConnection({
        host: 'localhost',
        //Your MySQL Username,
        user: 'root',
        //Your MySQL Password
        password: 'Fight4er!1207',
        database: 'election'
});






module.exports = db;