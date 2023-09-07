const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('aulabd', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = sequelize
