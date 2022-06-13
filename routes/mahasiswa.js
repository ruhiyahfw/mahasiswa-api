const express = require('express');
const router = express.Router();
const db = require('../config/database/mysql');
const controller = require('../controller/index');

router.get('/', controller.mahasiswa.getAll);

router.post('/', (req, res, next) => {
    var nim = req.body.nim // ini bisa karena body-parser
    var nama = req.body.nama
    var jurusan = req.body.jurusan
    var sql = `INSERT INTO MAHASISWA (NIM, NAMA, JURUSAN) VALUES (${nim}, "${nama}", "${jurusan}")`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'post mhs success',
        })
    })
})

router.get('/:nim', (req, res, next) => {
    const nim = req.params.nim;
    var sql = "SELECT * FROM MAHASISWA WHERE NIM = "+nim;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: `get mhs with nim ${nim}`,
            data: result
        })
    })
})

router.put('/', (req, res, next) => {
    var nim = req.body.nim // ini bisa karena body-parser
    var nama = req.body.nama
    var jurusan = req.body.jurusan
    var sql = `UPDATE mahasiswa SET nama = "${nama}", jurusan = "${jurusan}" WHERE nim = ${nim}`
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: 'put mhs success',
        })
    })
})

router.delete('/:nim', (req, res, next) => {
    const nim = req.params.nim;
    var sql = "DELETE FROM MAHASISWA WHERE NIM = "+nim;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({
            message: `delete mhs with nim ${nim}`,
            data: result
        })
    })
})

module.exports = router;