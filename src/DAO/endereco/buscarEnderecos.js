const {conexao} = require('../conexao.js')
 
 
async function buscarEnderecos(){
    const sql = `SELECT * FROM tbl_endereco;`
    const conn = await conexao()
    try {

        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
        
      } catch (err) {

        return err.message
      }
}
module.exports = {buscarEnderecos}