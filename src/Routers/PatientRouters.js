const { Router } = require('express')

const router = Router()
const VerifyToken = require('../libs/VerifyToken')

//Validator handler 
const ValidatorHandler = require('../Middlewares/ValidatorHandler')

//Schema
const CreatePatient = require('../Schemas/PatientSchema')

//Hospital controllers 
const {CreateInfo, PatientReports} = require('../Controllers/PatientControllers')

//Create a patient Information 
router.post('/register', VerifyToken, ValidatorHandler(CreatePatient, 'body'), CreateInfo)

//View my reports 
router.get('/reports/:patient', VerifyToken, PatientReports)

module.exports = router 