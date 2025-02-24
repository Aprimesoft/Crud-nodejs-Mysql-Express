const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001 // default port

//Rotas da aplicação
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const database = require('./database/connection')
const Cliente = require('./models/model_cliente') 
app.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.findAll({raw:true})
        res.render('index',{clientes: clientes})
    } catch (error) {
        res.render('error', { error: error.message })
    }
})

//Registo de novo clientes
app.post('/Cliente/novo', async (req, res) => {
    try{
        const cliente = await  Cliente.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        })
        res.status(201).redirect('/')
    }catch(err){
        res.status(400).redirect('/')
    }
})
app.get('/cliente/excluir/:id', async (req, res) => {
    try {
        const cliente = await Cliente.destroy({
            where: {
                id: req.params.id
            }   
        })
        res.redirect('/')
    } catch (error) {
        res.status(404).send('Cliente não encontrado')  
    }
})
app.listen(port,(erro)=>{
    if(erro){
        console.error(`Error starting server: ${error}`)
        process.exit(1)
    }
    console.log(`Server running on port ${port}`)
})