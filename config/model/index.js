// menyimpan model2 yang akan dipakai
const mahasiswa = require('./mahasiswa')
const jurusan = require('./jurusan');
const model = {};

model.mahasiswa = mahasiswa;
model.jurusan = jurusan;
module.exports = model