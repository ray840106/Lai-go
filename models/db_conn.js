require('dotenv').config()
let mysql = require('mysql2/promise');
const {CHAT_HOST,CHAT_USER,CHAT_PASSWORD,CHAT_DATABASE}=process.env;

// const CHAT_HOST = 'social.mysql.database.azure.com'
// const CHAT_USER = 'social'
// const CHAT_PASSWORD = 'Xup654bjo4'
// const CHAT_DATABASE = 'chat'

var conn = mysql.createPool({
    host: CHAT_HOST,
    user: CHAT_USER,
    password: CHAT_PASSWORD,
    database: CHAT_DATABASE,
    port: 3306,
    multipleStatements:true,
});

module.exports = conn
