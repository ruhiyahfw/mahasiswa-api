var mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"aayaichi",
    database:"mahasiswa_api"
})

con.connect(function(err){
    if (err){
        throw err;
    }
    console.log("koneksi ke db berhasil");
})

module.exports = con;