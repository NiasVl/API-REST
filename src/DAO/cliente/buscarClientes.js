const {conexao} = require('../conexao.js')
 
 
async function buscarClientes(){
    const sql = `SELECT * FROM tbl_cliente`
    const conn = await conexao()
    try {

        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}
module.exports = {buscarClientes}