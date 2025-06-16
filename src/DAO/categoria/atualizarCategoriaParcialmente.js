const {conexao} = require('../conexao.js')

async function editarParcialmenteCategoria(valor, codigo, campo){
    const data = [valor, codigo]
    
    const colunasPermitidas = ['id' , 'nome']; // Adicione as colunas permitidas
    if (!colunasPermitidas.includes(campo)) {
        throw new Error('Coluna inválida')
    }

    const sql = `UPDATE tbl_categoria set ${campo} = ? WHERE codigo = ? ;`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql, data);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {editarParcialmenteCategoria}