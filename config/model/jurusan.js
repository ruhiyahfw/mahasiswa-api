const Sequelize = require('sequelize')
const db = require('../database/mysql')

var jurusan = db.define('jurusan',{
    kd_jurusan: {type:Sequelize.STRING,primaryKey:true},
    jurusan: Sequelize.INTEGER
},{
    freezeTableName: true,
    timestamps: false
});

jurusan.removeAttribute('id');
module.exports = jurusan;