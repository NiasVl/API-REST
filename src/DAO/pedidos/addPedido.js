const {conexao} = require('../conexao.js')
 
 
async function addPedido(infos){
   const data = [infos]   
   const query = `INSERT INTO tbl_pedido (numero, data_elaboracao, cliente_id) VALUES ?`

    const conn = await conexao()

    try {

      const [results] = await conn.query(query,[data])
      
      await conn.end()
      return results

    } catch (error) {
      return error.message      
    }


   
}
module.exports = {addPedido}