// Importar as dependencias
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const nodemon = require('nodemon')
const bodyparser = require('body-parser')
const routes = require('./config/routes')
const res = require('express/lib/response')



const app = express()

// Implementar as dependencias no app
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(routes)


// Criar o localhost
app.listen(21262, () => { 
    console.log(`Express started at http://localhost:21262`) 
})