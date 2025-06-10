const {conexao} = require('../conexao.js')
 
 
async function addStatus(infos){
   const data = [infos]   
   const query = `INSERT INTO tbl_status (id, nome) VALUES ?`

    const conn = await conexao()

    try {

      const [results] = await conn.query(query,[data])
      
      await conn.end()
      return results

    } catch (error) {
      return error.message      
    }


   
}
module.exports = {addStatus}