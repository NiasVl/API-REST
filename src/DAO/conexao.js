const mysql = require("mysql2/promise")
const { config } = require("dotenv")
 
config()
 
async function conexao(){
    const pool = mysql.createPool({
        host: process.env.HOST_DATABASE, 
        port:  process.env.PORTA_BD,
        user: process.env.DB_USER, 
        password: process.env.PASSWORD, 
        database: process.env.DATA_BASE
    })
 
    return pool
}
 
module.exports = {conexao}