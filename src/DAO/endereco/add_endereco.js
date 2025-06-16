const {conexao} = require('../conexao.js')
 
 
async function addEndereco(infos){
   const data = [infos]   
   const query = `INSERT INTO tbl_endereco (id, logradouro, cep, numero, bairro, cidade) VALUES ?`

    const conn = await conexao()

    try {

      const [results] = await conn.query(query,[data])
      
      await conn.end()
      return results

    } catch (error) {
      return error.message      
    }


   
}
module.exports = {addEndereco}