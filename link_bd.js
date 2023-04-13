const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;