const express = require("express")
const app = express ()


const {buscarClientes} = require('./src/DAO/cliente/buscarClientes.js')
const { conexao, testarConexao, closeConexao } = require('./src/DAO/conexao.js')
const {buscarPedidos} = require("./src/DAO/pedidos/buscarPedidos.js") 
const {buscarProdutos} = require("./src/DAO/produtos/buscarProdutos.js")
const {buscarItensPedidos} = require("./src/DAO/itemspedidos/buscarItensPedidos.js")
const {buscarEnderecos} = require("./src/DAO/endereco/buscarEnderecos.js")
const {buscarStatus} = require("./src/DAO/status/buscarStatus.js")
const {buscarCategoria} = require("./src/DAO/categoria/buscarCategoria.js")

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



app.post ('/empresa_produtos_limpeza/v1/add_cliente', async (req, res) => {

    let codigo = ParseInt(req.body.codigo)

    try {


      if (codigo != ""){
        res.send("OPa")
      }

    } catch (error) {
        res.status(400).send("deu ruim")
    }
    


})

app.post('/empresa_produtos_limpeza/v1/add_produtos', async (req, res) => {
    let produtos = await buscarProdutos()

    res.json(produtos)
})

app.post('/empresa_produtos_limpeza/v1/add_pedidos', async (req, res) => {
    let pedidos = await buscarPedidos()

    res.json(pedidos)
})





const porta = 3000

app.listen (porta, () =>{
    console.log("operando na porta " + porta),
    testarConexao();
})

