const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'get mhs'
    })
})

router.post('/', (req, res, next) => {
    const mahasiswa = {
        nim : req.body.nim, // ini bisa karena body-parser
        nama : req.body.nama
    }
    res.status(200).json({
        message: 'post mhs',
        data: mahasiswa
    })
})

router.get('/:nim', (req, res, next) => {
    const nim = req.params.nim;
    res.status(200).json({
        message: `get mhs with nim ${nim}`
    })
})

router.put('/', (req, res, next) => {
    res.status(200).json({
        message: 'put mhs'
    })
})

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'delete mhs'
    })
})

module.exports = router;