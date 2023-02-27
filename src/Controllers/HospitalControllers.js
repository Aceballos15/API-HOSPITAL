const boom = require("@hapi/boom");
const Hospital = require("../Models/Hospital");
const Report = require('../Models/Report')
const Patient = require('../Models/Patient')
const User = require("../Models/User");

//My functions
const { SendMail, EncryiptPassword } = require('../libs/UsersLibs')

// lib for pdf 
const PDFDocument = require('pdfkit')

// Create info 
const CreateInfo = async (req, res)=>{

    try {
     req.body.User_Identification = req.Identification  
        
    //Create a new Doctor on DB
    const NewHospital = await Hospital.create(req.body);
    
        if (!NewHospital) {
        throw boom.badRequest("Invalid data");    
        }

    res.json({ "Message": "Hospital created successfully", "Hospital": NewHospital})
    }catch(error){
         res.json(error)
    }
}


const CreateDoctor = async (req, res, next)=>{
    try {
       const user = await User.findOne( { Identification: req.Identification  }) 
       if (user.Role == "H"){

            // Encrypt the passwrod
            const NewPassword = await EncryiptPassword(req.body.Password);
            req.body.Password = NewPassword;

            const NewDoctor = await User.create(req.body) 
        
            if(!NewDoctor){
                throw boom.badRequest('Invalid data')
            }else{
                SendMail(req.body.Email)
            }
            res.json({ "Message": "Doctor created successfully", "Doctor": NewDoctor})
       }
        res.json({"Message": "Usted no puede crear este usuario"})
    } catch (error) { 
        res.json(error)  
    }
}

//Download a patient report 
const DownloadReport = async (req, res)=>{

    try{
        const user = await Patient.findAll({ where: { User_Identification: req.params.patient }})
        const Rep = await Report.findAll({ where: { Patient_Id: user[0].Id}})

        const response = JSON.stringify(Rep); 
        if(!Rep){
            throw boom.notFound('Reportes no encontrado')
        }

        const Document = new PDFDocument()
        res.setHeader('Content-Type', 'application/pdf')
        res.setHeader('Content-Disposition', 'attachament; filename= Report.pdf')
        Document.pipe(res); 

        Document.fontSize(16).text(response)
        Document.end()

    }catch(error){

    }
}
 

module.exports = {CreateInfo, CreateDoctor, DownloadReport} 