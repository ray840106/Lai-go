require('dotenv').config()
let mysql = require('mysql2/promise');
const {CHAT_HOST,CHAT_USER,CHAT_PASSWORD,CHAT_DATABASE}=process.env;

var conn = mysql.createPool({
    host: CHAT_HOST,
    user: CHAT_USER,
    password: CHAT_PASSWORD,
    database: CHAT_DATABASE,
    port: 3306,
    multipleStatements:true,
});

module.exports = conn
