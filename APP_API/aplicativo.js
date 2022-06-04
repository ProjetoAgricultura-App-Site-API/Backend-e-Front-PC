const fs = require('fs');
const express = require('express')
const cors = require('cors')

const app = express()

app.listen(5700, () => console.log('Rodando na porta http://localhost:5700/api'))

app.use(cors())

app.use(express.json())

//LÊ OS DADOS DO .JSON PARA NÃO PERDER DADOS NOVOS
fs.readFile("app.json", function(err, data){ //PUXA DADOS DOS USUÁRIOS DO APLICATIVO
  if(err){
    throw err;
  }

  users = JSON.parse(data);
})

app.route('/api').get((req, res) => res.json({ //APLICATIVO
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

app.route('/api').post((req, res) => { //CADASTRA NOVOS USUÁRIOS DO APLICATIVO
  const lastId = users[users.length - 1].id
  users.push({
    id: lastId + 1,
    Login: req.body.Login,
    Senha: req.body.Senha,
    Nome: req.body.Nome,
    Sobrenome: req.body.Sobrenome,
    Email: req.body.Email,
    Telefone: req.body.Telefone
  })
  res.json('Saved user')
  fs.writeFile("app.json",JSON.stringify(users), err => { //ESCREVE DADOS RECEBIDOS PELA API NO .JSON
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
    Login: req.body.Login,
    Senha: req.body.Senha,
    Nome: req.body.Nome,
    Sobrenome: req.body.Sobrenome,
    Email: req.body.Email,
    Telefone: req.body.Telefone
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