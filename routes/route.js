const express = require('express')
const app = express()
const path = require('path')

const router = express.Router()
router.use(express.static('public'))

router.get('/home', (req, res) => {
    res.render('dashboard/dashboard_administrator')
})

router.get('/home1', (req, res) => {
    res.render('dashboard/dashboard_fakultas')
})

router.get('/home2', (req, res) => {
    res.render('dashboard/dashboard_program_studi')
})

router.get('/home3', (req, res) => {
    res.render('dashboard/dashboard_mahasiswa')
})

//ini buat ngatur rolenya
router.get('/dashboard', function(req, res) {
    if (req.user.role === 'administrator') {
        res.render('administrator/dashboard'); // Render halaman dashboard administrator
    } else if (req.user.role === 'fakultas') {
        res.render('fakultas/dashboard'); // Render halaman dashboard fakultas
    } else {
        res.redirect('/login'); // Redirect jika peran tidak dikenali
    }
});


router.get('/pengajuan', (req, res) => {
    res.render('pengajuan/index')
})

router.post('/riwayat', (req, res) => {

})

router.get('/', (req, res) => {
    res.render('dashboard/dashboard_administrator')
})

router.get('/jenisBeasiswa', (req, res) => {
    res.render('master_data/jenisBeasiswa')
})
module.exports = router