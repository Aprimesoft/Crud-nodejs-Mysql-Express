
const bd = require('../database/connection');  
const sequelize = require('sequelize');

const cliente = bd.define('tbcliente',{
    nome:{
        type: sequelize.STRING,
        allowNull: false
    },
    email:{
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha:{
        type: sequelize.STRING,
        allowNull: false
    }
});
//cliente.sync({force:true})

module.exports = cliente;
