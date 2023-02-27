const express = require('express');
const app = express();

const Connection  = require('./Database/Connection')
const BoomError = require('./Middlewares/ErrorHandler')

//User routes 
const UserRouters = require('./Routers/UserRouters')

//Hospiatl routers 
const HospitalRouters = require('./Routers/HospitalRouters')

//Patient Routers 
const PatientRouters = require('./Routers/PatientRouters')

//Doctor Routers 
const DoctorRouters = require('./Routers/DoctorRouters')

//Middlewares 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//Routes 
app.use('/Api/users', UserRouters)
app.use('/Api/hospital', HospitalRouters)
app.use('/Api/patients', PatientRouters)
app.use('/Api/doctor', DoctorRouters)

//error MIddlewares 
app.use(BoomError)


//Run server on port 8000
app.listen(process.env.PORT || 8000, async ()=>{
    //  await Connection.sync( { force: false })
    console.log('listening on port', process.env.PORT || 8000)
    
});