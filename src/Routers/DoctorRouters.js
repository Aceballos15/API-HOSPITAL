const { Router } = require('express')

const router = Router()
const VerifyToken = require('../libs/VerifyToken')

//Validator handler 
const ValidatorHandler = require('../Middlewares/ValidatorHandler')

//Schema
const CreateDoctor = require('../Schemas/DoctorSchema')

//Doctor controllers 
const {CreateInfo, CreateReport, UpdateReport, GetReports} = require('../Controllers/DoctorControllers')

//Create a Doctor Information 
router.post('/register', VerifyToken, ValidatorHandler(CreateDoctor, 'body'), CreateInfo)

//Create a report Information 
router.post('/report/create', VerifyToken, CreateReport )

//Update a report 
router.put('/report/update/:id', VerifyToken, UpdateReport)

//Get reports
router.get('/reports/:doctor', VerifyToken, GetReports)

module.exports = router 