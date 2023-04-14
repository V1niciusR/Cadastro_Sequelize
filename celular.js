const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const database = require('./link_bd');

const Celular = database.define('celulares', {
    ID: {
        type: sequelize.STRING,
        allownNull: false,
        primaryKey: true
    },
    marca: {
        type: Sequelize.STRING,
        allownNull: false,

    },
    modelo: {
        type: Sequelize.STRING,
        allownNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
    }
})

module.exports = Celular;

