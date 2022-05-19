const express = require('express')
const res = require('express/lib/response')
const routes = express.Router()

// Pseudobase de dados
let db = [
    {'1': { Nome: 'Cliente 1', Produto: 'Abacaxi', Quantidade: '45 kg', Data: '12/05/2022' } },
    {'2': { Nome: 'Cliente 2', Produto: 'Melancia', Quantidade: '40 kg', Data: '25/05/2022' } },
    {'3': { Nome: 'Cliente 3', Produto: 'Macaxeira', Quantidade: '60 kg', Data: '26/05/2022' } }
]

// Buscar Dados
routes.get('/', (req, res) => {

    return res.json(db)

})

// Adicionar dados
routes.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
    
})


// Deletar dados
routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})



module.exports = routes