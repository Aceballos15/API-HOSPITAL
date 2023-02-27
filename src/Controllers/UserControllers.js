const boom = require("@hapi/boom");
const User = require("../Models/User");
const nodemailer = require("nodemailer");
const { EncryiptPassword, ComparePassword, SendMail } = require("../libs/UsersLibs");


// import jsonwebtoken 
const jwt = require('jsonwebtoken')


//Create a new user
const CreateUser = async (req, res) => {
  try {
    // Encrypt the passwrod
    const NewPassword = await EncryiptPassword(req.body.Password);
    req.body.Password = NewPassword;

    //Create a new user on DB
    const NewUser = await User.create(req.body);

    if (!NewUser) {
      throw boom.badRequest("Invalid data");
    } else{
      //Send the verification mail 
      await SendMail(req.body.Email)
    }
    res.json({ Messsage: "New user created", User: NewUser });
  } catch (error) {
    res.json(error);
  }
};

//Confirm the new account
const ConfirmUser = async (req, res) => {
  try {
    const email = req.query.Email;
    const user = await User.findOne({ where: { Email: email }});

    if (!user) {
      throw boom.notFound("User not exists");
    }
    user.Verification = true;
    await user.save();

    res.json({ message: "Usuario verfificado" });
  } catch (error) {
    res.json(error);
  }
};

//Login

const LoginUser = async (req, res) => {
  const Identification = req.body.Identification;
  const Password = req.body.Password;

  const user = await User.findOne({
    where: { Identification: Identification },
  });
  try {
    if (user) {
      if (user.Verification === false) {
        res.json({ message: "Este usuario no esta verificado. Realice este proceso primero antes de iniciar" });
      } else {
        const Response = ComparePassword(Password, user.Password);
        if (Response) {

          //Generate a token 
          const token = jwt.sign({ Identification }, "SECRETKEY" , { expiresIn: '1h'})

          res.json({ token });
        }
      }
    } else {
      throw boom.notFound("Identificacion o contraseña incorrectos"); 
    }
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  CreateUser,
  ConfirmUser,
  LoginUser,
};
