const fs = require('fs');
const express = require('express')
const cors = require('cors')

const app = express()

app.listen(5500, () => console.log('Rodando na porta http://localhost:5500/api'))

app.use(cors())

app.use(express.json())

//LÊ OS DADOS DO .JSON PARA NÃO PERDER DADOS NOVOS
fs.readFile("users.json", function(err, data){ //PUXA DADOS DOS USUÁRIOS DO SITE
  if(err){
    throw err;
  }

  users = JSON.parse(data);
})

fs.readFile("app_users.json", function(err, data){ //PUXA DADOS DOS USUÁRIOS DO APP
  if(err){
    throw err;
  }

  app_users = JSON.parse(data);
})



app.route('/api').get((req, res) => res.json({ //SITE
  users
}))

app.route('/api/APP').get((req, res) => res.json({ //APP
  app_users
}))

app.route('/api/:id').get((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  res.json(user)
})

app.route('/api').post((req, res) => { //CADASTRA NOVOS USUÁRIOS DO SITE
  const lastId = users[users.length - 1].id
  users.push({
    id: lastId + 1,
    Nome: req.body.Nome,
    Sobrenome: req.body.Sobrenome,
    Email: req.body.Email,
    Senha: req.body.Senha
  })
  res.json('Saved user')
  fs.writeFile("users.json",JSON.stringify(users), err => { //ESCREVE DADOS RECEBIDOS PELA API NO .JSON
    if (err) {throw err;} 
  })
})

app.route('/api/APP').post((req, res) => { //CADASTRA NOVOS USUÁRIOS DO APP
  const lastId = users[users.length - 1].id
  app_users.push({
    id: lastId + 1,
    Nome: req.body.Nome,
    Sobrenome: req.body.Sobrenome,
    Email: req.body.Email,
    Numero: req.body.Numero,
    Senha: req.body.Senha
  })
  res.json('Saved user')
  fs.writeFile("app_users.json",JSON.stringify(users), err => { //ESCREVE DADOS RECEBIDOS PELA API NO .JSON
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