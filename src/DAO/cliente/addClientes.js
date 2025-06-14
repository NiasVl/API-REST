const {conexao} = require('../conexao.js')
 
 
async function addClientes(infos){
   const data = [infos]   
   const query = `INSERT INTO tbl_cliente (codigo,nome,telefone,limite,id_endereco,id_status) VALUES ?`

    const conn = await conexao()

    try {

      const [results] = await conn.query(query,[data])
      
      await conn.end()
      return results

    } catch (error) {
      return error.message      
    }


   
}
module.exports = {addClientes}