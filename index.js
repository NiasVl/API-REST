const express = require("express")
const {buscarClientes} = require('./src/DAO/cliente/buscarClientes.js')
const app = express ()

app.get('/app', (req, res) => {
    let respInicial = {
        msg: "Aplicação Funfando"
    }

    res.json(respInicial)
})

app.get('/app/v1/cliente', async (req, res) => {
    let clientes = await buscarClientes()

    res.json(clientes)
})

const porta = 3000

app.listen (porta, () =>{
    console.log("operando na porta " + porta)
})