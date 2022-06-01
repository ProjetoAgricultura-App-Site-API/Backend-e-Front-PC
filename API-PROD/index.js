const fs = require('fs');
const express = require('express')
const cors = require('cors')

const app = express()

app.listen(5600, () => console.log('Rodando na porta http://localhost:5600/api'))

app.use(cors())

app.use(express.json())

fs.readFile("prods.json", function(err, data){
  if(err){
    throw err;
  }

  users = JSON.parse(data);
})


app.route('/api').get((req, res) => res.json({
  users
}))

app.route('/api/:id').get((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  res.json(user)
})

app.route('/api').post((req, res) => {
  const lastId = users[users.length - 1].id
  users.push({
    id: lastId + 1,
    Nome: req.body.Nome,
    Sobrenome: req.body.Sobrenome,
    Email: req.body.Email,
    Numero: req.body.Numero,
    Produto: req.body.Produto,
    Quantidade: req.body.Quantidade,
    Data: req.body.Data
  })
  res.json('Saved user')
  fs.writeFile("prods.json",JSON.stringify(users), err => {
    if (err) {throw err;}
  })
})

app.route('/api/:id').put((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  const updatedUser = {
    ...user,
    Nome: req.body.Nome,
    Sobrenome: req.body.Sobrenome,
    Email: req.body.Email,
    Numero: req.body.Numero,
    Produto: req.body.Produto,
    Quantidade: req.body.Quantidade,
    Data: req.body.Data
  }

  users = users.map(user => {
    if (Number(user.id) === Number(userId)) {
      user = updatedUser
    }
    return user
  })

  res.json("Updated user")
})

app.route('/api/:id').delete((req, res) => {
  const userId = req.params.id

  users = users.filter(user => Number(user.id) !== Number(userId))

  res.json('Deleted User')
})