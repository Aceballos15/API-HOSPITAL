const boom = require("@hapi/boom");
const Patient = require("../Models/Patient");
const Report = require("../Models/Report");
const User = require("../Models/User");

// Create info
const CreateInfo = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { Identification: req.Identification },
    });
    if (user.Role === "P") {
      req.body.User_Identification = req.Identification;

      //Create a new Patient on DB
      const NewPatient = await Patient.create(req.body);
      if (!NewPatient) {
        throw boom.badRequest("Invalid data");
      }else{
        res.json({
          "Message": "Patient created successfully",
          "Patient": NewPatient,
        });
      }
    }else{
      res.json({ "Message": "Usted no esta autorizado para realizar esta accion" });
    }
  } catch (error) {
    res.json(error);
  }
};

//Patient Reports
const PatientReports = async (req, res) => {
  try {
    const user = await Patient.findAll({
      where: { User_Identification: req.params.patient },
    });
    const Rep = await Report.findAll({ where: { Patient_Id: user[0].Id } });

    if (!Rep) {
      throw boom.notFound("Reportes no encontrado");
    }

    res.json(Rep);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { CreateInfo, PatientReports };
