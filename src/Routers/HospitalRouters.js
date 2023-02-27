const { Router } = require('express')

const router = Router()
const VerifyToken = require('../libs/VerifyToken')


//Hospital controllers 
const {CreateInfo, CreateDoctor, DownloadReport} = require('../Controllers/HospitalControllers')

//Create a hospital Information 
router.post('/register', VerifyToken, CreateInfo)

//Create a Doctor
router.post('/register/doctor', VerifyToken, CreateDoctor)

//download a report
router.get('/reports/download/:patient', VerifyToken, DownloadReport)

module.exports = router 