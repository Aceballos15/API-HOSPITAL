const joi = require('joi')


const Name = joi.string()
const Adress = joi.string()
const Birthday = joi.date()
const User_Identification = joi.number()

const CreatePatient = joi.object({
    Name: Name.required(),
    Adress: Adress.required(),
    Birthday: Birthday.required(), 
    User_Identification: User_Identification.required()
})


module.exports = CreatePatient 