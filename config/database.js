const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'udemudb.c6b51esg16or.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    port: '3306',
    password: '2020111317',
    database: 'MyDB'
});

module.exports = {
    pool: pool
};