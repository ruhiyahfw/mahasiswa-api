var Sequelize = require('sequelize')
var db = new Sequelize("mahasiswa_api","root",'aayaichi',{
    dialect: 'mysql',
    host:'localhost'
})

module.exports = db;