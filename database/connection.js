const sequelize =require('sequelize');

//conexao com o banco de dados
const database = new sequelize('dbdgenesis','root','',{
    host:'localhost',
    dialect:'mysql'
})

//verificar a autenticação
database.authenticate().then(()=>{
    console.log('Conexão com o banco de dados realizada com sucesso!');
}).catch((erro)=>{
    console.log('Erro ao conectar com o banco de dados:',erro);
})

module.exports = database;