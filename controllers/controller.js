const tbcliente = tbcliente =require('../models/model_cliente')

const novoCliente = async(req,res)=>{
    try{
        const cliente = await tbcliente.create({
            Nome: req.body.Nome,
            Email: req.body.Email,
            Senha: req.body.Senha
        })
        res.status(201).render('/')
    }catch(err){
        res.status(400).redirect('/')
    }
}


module.exports = novoCliente