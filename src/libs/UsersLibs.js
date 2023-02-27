// lib for encrypt 
const bcrypt = require('bcrypt');

const nodemailer = require('nodemailer')

//Encrypt password 
const EncryiptPassword = async (Password) => {
    const salt = await bcrypt.genSalt(10); 
    const HashPassword = await bcrypt.hash(Password, salt)

    return HashPassword 
}

//Compare password 
const ComparePassword = async (password, UserPassword) => {

    const Verify = await bcrypt.compare(password, UserPassword)
}

//Send mails 

const SendMail= async (email)=>{

     // Send email to new User
     const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "",
          pass: "",
        },
      });

      const mailOptions = {
        from: "ceballoscardonaalexander@gmail.com",
        to: email, // Use email register
        subject: "Confirmación de registro",
        text:
          "Para confirmar tu registro, por favor ingresa al siguiente enlace: http://localhost:8000/Api/users/confirm?email=" +
          email, // this link contains the email
      }

      await transporter.sendMail(mailOptions);
    }
module.exports = { EncryiptPassword, ComparePassword, SendMail }

