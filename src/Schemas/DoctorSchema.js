const joi = require('joi')


const Name = joi.string()
const Speciality = joi.string()
const User_Identification = joi.number( )

const CreateDoctor = joi.object({
    Name: Name.required(),
    Speciality: Speciality.required(), 
    User_Identification: User_Identification
})


module.exports = CreateDoctor