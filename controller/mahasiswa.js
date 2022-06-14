const model = require('../config/model/index');
const {Op} = require('sequelize');

const controller = {};

controller.getAll = async function(req,res){
    try{
        let mahasiswa = await model.mahasiswa.findAll({
            attributes: ['nim', 'nama'], //--> tidak pakai alias
            //attributes: [['nim', 'nimMhs'],['nama', 'namaMhs']] --> pakai alias
            order:[['nim','desc']],
            limit:2
        })
        if (mahasiswa.length > 0){
            res.status(200).json({
                message: 'Get method mahasiswa',
                data: mahasiswa
            })
        } else{
            res.status(200).json({
                message: 'Tidak ada data',
                data: []
            })
        }
    } catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}

controller.getSearch = async function(req,res){
    const search = req.query.keyword;
    try{
        let mahasiswa = await model.mahasiswa.findAll({
            attributes: ['nim', 'nama'], //--> tidak pakai alias
            //attributes: [['nim', 'nimMhs'],['nama', 'namaMhs']] --> pakai alias
            where:{
                [Op.or]:[{
                    nim:{
                        [Op.like]:`%${search}%`
                    }
                },{
                    nama:{
                        [Op.like]:`%${search}%`
                    }
                }]
            }
        })
        if (mahasiswa.length > 0){
            res.status(200).json({
                message: 'cari data method mahasiswa',
                data: mahasiswa
            })
        } else{
            res.status(200).json({
                message: 'Tidak ada data',
                data: []
            })
        }
    } catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}

controller.getOne = async function(req,res){
    try{
        let mahasiswa = await model.mahasiswa.findAll({
            where:{
                nim: req.params.nim
            }
        })
        if (mahasiswa.length > 0){
            res.status(200).json({
                message: `mahasiswa dengan nim ${req.params.nim} ditemukan`,
                data: mahasiswa
            })
        } else{
            res.status(200).json({
                message: 'Tidak ada data',
                data: []
            })
        }
    } catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}

controller.post = async function(req,res){
    try{
        let mahasiswa = await model.mahasiswa.create({
            nim: req.body.nim,
            nama: req.body.nama,
            jurusan: req.body.jurusan,
            angkatan: req.body.angkatan
        })
        res.status(201).json({
            message: `berhasil tambah data mhs`,
            data: mahasiswa
        })
    } catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}

controller.put = async function(req,res){
    try{
        let mahasiswa = await model.mahasiswa.update({
            nama: req.body.nama,
            jurusan: req.body.jurusan
        }, {
            where:{
                nim: req.params.nim,
            }
        })
        res.status(200).json({
            message: `berhasil ubah data mhs`,
            data: mahasiswa
        })
    } catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}

controller.delete = async function(req,res){
    try{
        let mahasiswa = await model.mahasiswa.destroy({
            where:{
                nim: req.params.nim,
            }
        })
        res.status(200).json({
            message: `berhasil hapus data mhs`,
            data: mahasiswa
        })
    } catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = controller;