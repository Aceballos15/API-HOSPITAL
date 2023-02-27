const boom = require("@hapi/boom");
const Doctor = require("../Models/Doctor");
const Report = require("../Models/Report");
const Patient = require("../Models/Patient");
const User = require("../Models/User");


// Create info
const CreateInfo = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { Identification: req.Identification },
    });
    if (user.Role === "D") {
      req.body.User_Identification = req.Identification;

      //Create a new Doctor on DB
      const NewDoctor = await Doctor.create(req.body);
      if (!NewDoctor) {
        throw boom.badRequest("Invalid data");
      }
      res.json({
        Message: "Doctor profile created successfully",
        Patient: NewDoctor,
      });
    }
    res.json({
      Message: "Usted no esta autorizado para hacer esta operacion ",
    });
  } catch (error) {
    res.json(error);
  }
};

//Medico que puede crear reporte
const CreateReport = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { Identification: req.Identification },
    });
    if (user.Role === "D") {
      const IdDoctor = await Doctor.findOne( { where: {
        User_Identification: req.body.Doctor_Id,
      }});
      const IdPatient = await Patient.findOne({ where: {
        User_Identification: req.body.Patient_Id,
      }});
      req.body.Doctor_Id = IdDoctor.Id;
      req.body.Patient_Id = IdPatient.Id;

      const NewReport = await Report.create(req.body);
      if (!NewReport) {
        throw boom.badRequest("Invalid data");
      } else {
        res.json({ "message": "Report create sucesfully", "Report": NewReport });
      }
    }else{
        res.json({ "Message": "Usted no esta autorizado para generar este reporte" });
    }
    
  } catch (error) {
    res.json(error);
  }
};

//Update a Report of Patient
const UpdateReport = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { Identification: req.Identification },
    });
    if (user.Role === "D") {
      const IdDoctor = await Doctor.findOne({
        User_Identification: req.body.Doctor_Id,
      });
      const IdPatient = await Patient.findOne({
        User_Identification: req.body.Patient_Id,
      });
      req.body.Doctor_Id = IdDoctor.Id;
      req.body.Patient_Id = IdPatient.Id;

      const NewReport = await Report.findOne({ where: { Id: req.params.id } });

      if (!NewReport) {
        throw boom.notFound("Este reporte no se encontro");
      }
      NewReport.set(req.body);
      await NewReport.save();

      res.json({ message: "Report Update sucesfully", Report: NewReport });
    } else {
      res.json({
        Message: "Usted no esta autorizado para Actualizar este reporte",
      });
    }
  } catch (error) {
    res.json(error);
  }
};

//Get my reports
const GetReports = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({
      where: { User_Identification: req.params.doctor },
    });
    const Rep = await Report.findAll({ where: { Doctor_Id: doctor.Id } });

    if (!Rep) {
      throw boom.notFound("Reportes no encontrado");
    }
    res.json({ Doctor: doctor.Name, Rep: Rep });
  } catch (error) {
    res.json(error);
  }
};

module.exports = { CreateInfo, CreateReport, UpdateReport, GetReports };
