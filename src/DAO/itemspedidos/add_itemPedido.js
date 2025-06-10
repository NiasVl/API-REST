const {conexao} = require('../conexao.js')
 
 
async function addItemPedido(infos){
   const data = [infos]   
   const query = `INSERT INTO tbl_itempedido (id, id_pedido, id_produto, qnt) VALUES ?`

    const conn = await conexao()

    try {

      const [results] = await conn.query(query,[data])
      
      await conn.end()
      return results

    } catch (error) {
      return error.message      
    }


   
}
module.exports = {addItemPedido}