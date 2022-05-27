const express = require('express')
const cors = require('cors')

const app = express()

app.listen(5500, () => console.log('Rodando na porta http://localhost:5500/api'))

app.use(cors())

app.use(express.json())

let users = [{
  id: 1,
  Nome: "Mario",
  Sobrenome: "Guerra",
  Email: "marioguerra@gmail.com",
  Senha: "123456"
}]


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
    Senha: req.body.Senha
  })
  res.json('Saved user')
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
    Senha: req.body.Senha
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