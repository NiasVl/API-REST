const express = require("express")
const app = express ()

const { conexao, testarConexao, closeConexao } = require('./src/DAO/conexao.js')

//GETs
const {buscarClientes} = require('./src/DAO/cliente/buscarClientes.js')
const {buscarPedidos} = require("./src/DAO/pedidos/buscarPedidos.js") 
const {buscarProdutos} = require("./src/DAO/produtos/buscarProdutos.js")
const {buscarItensPedidos} = require("./src/DAO/itemspedidos/buscarItensPedidos.js")
const {buscarEnderecos} = require("./src/DAO/endereco/buscarEnderecos.js")
const {buscarStatus} = require("./src/DAO/status/buscarStatus.js")
const {buscarCategoria} = require("./src/DAO/categoria/buscarCategoria.js")

//POSTs
const {addClientes} = require ("./src/DAO/cliente/addClientes.js")
const {addProdutos} = require ("./src/DAO/produtos/addProdutos.js")
const {addPedido} = require ("./src/DAO/pedidos/addPedido.js")
const {addStatus} = require ("./src/DAO/status/add_status.js")
const {addItemPedido} = require ("./src/DAO/itemspedidos/add_itemPedido.js")

app.use(express.json());

//GETs

app.get('/empresa_produtos_limpeza/v1', (req, res) => {
    let respInicial = {
        msg: "Aplicação Funfando"
    }

    res.json(respInicial)
})

app.get('/empresa_produtos_limpeza/v1/cliente', async (req, res) => {
    let clientes = await buscarClientes()

    res.json(clientes)
})


app.get('/empresa_produtos_limpeza/v1/produtos', async (req, res) => {
    let produtos = await buscarProdutos()

    res.json(produtos)
})


app.get('/empresa_produtos_limpeza/v1/pedidos', async (req, res) => {
    let pedidos = await buscarPedidos()

    res.json(pedidos)
})

app.get('/empresa_produtos_limpeza/v1/itemspedidos', async (req, res) => {
    let lista = await buscarItensPedidos()

    res.json(lista)
})


app.get('/empresa_produtos_limpeza/v1/endereco', async (req, res) => {
    let enderecos = await buscarEnderecos()

    res.json(enderecos)
})

app.get('/empresa_produtos_limpeza/v1/status', async (req, res) => {
    let status = await buscarStatus()

    res.json(status)
})

app.get('/empresa_produtos_limpeza/v1/categoria', async (req, res) => {
    let categoria = await buscarCategoria()

    res.json(categoria)
})

// POSTs


app.post ('/empresa_produtos_limpeza/v1/add_cliente', async (req, res) => {
    
    let {codigo, telefone, nome, limite, endereco, status} = req.body

    if (codigo && telefone && nome && limite && endereco && status != "") {

        let infos = [codigo, telefone, nome, limite, endereco, status]

        try {
            
            let results = await addClientes(infos)

            if (results.affectedRows === 0){
                    res.status(500).json("Deu ruim")
            } else {
                    res.json("Cliente adicionado com sucesso")
            }
        } catch (error) {
            res.json(error)
        }

    } else {

        res.json("ferrou")
    }



})

app.post('/empresa_produtos_limpeza/v1/add_produto', async (req, res) => {
 
    let {codigo,nome,categoria,preco} = req.body

    if (codigo && nome && categoria && preco != ""){

        let infos = [codigo,nome,categoria,preco]

        try {
            
            let results = await addProdutos(infos)

            if (results.affectedRows === 0){
                    res.status(500).json("Deu ruim")
            } else {
                    res.json("Produto adicionado com sucesso")
            }
        } catch (error) {
            res.json(error)
        }

    } else {
        res.json("Deu ruim")
    }

})

app.post('/empresa_produtos_limpeza/v1/add_pedido', async (req, res) => {

    let {numero, data_elaboracao, cliente_id} = req.body

    if (numero && data_elaboracao && cliente_id != ""){

        let infos = [numero,data_elaboracao,cliente_id]

        try {
            
            let results = await addPedido(infos)

            if (results.affectedRows === 0){
                    res.status(500).json("Deu ruim")
            } else {
                    res.json("Pedido feito")
            }
        } catch (error) {
            res.json(error)
        }

    } else {
        res.json("Deu ruim")
    }

})

app.post('/empresa_produtos_limpeza/v1/add_status', async (req, res) => {

    let {id, nome} = req.body

    if (id && nome != ""){

        let infos = [id, nome]

        try {
            
            let results = await addStatus(infos)

            if (results.affectedRows === 0){
                    res.status(500).json("Deu ruim")
            } else {
                    res.json("Status adicionado")
            }
        } catch (error) {
            res.json(error)
        }

    } else {
        res.json("Deu ruim")
    }

})

app.post('/empresa_produtos_limpeza/v1/add_itemPedido', async (req, res) => {

    let {id, id_pedido, id_produto, qnt} = req.body

    if (id && id_pedido && id_produto && qnt != ""){

        let infos = [id, id_pedido, id_produto, qnt]

        try {
            
            let results = await addItemPedido(infos)

            if (results.affectedRows === 0){
                    res.status(500).json("Deu ruim")
            } else {
                    res.json("Item pedido adicionado")
            }
        } catch (error) {
            res.json(error)
        }

    } else {
        res.json("Deu ruim")
    }

})





const porta = 3000

app.listen (porta, () =>{
    console.log("operando na porta " + porta),
    testarConexao();
})

