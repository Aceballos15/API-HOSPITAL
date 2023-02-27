const Connection = require('../Database/Connection')
const { DataTypes } = require ('Sequelize')
const Doctor = require('./Doctor')
const Patient = require('./Patient')


const Report = Connection.define('Report', {
    Id: {
        type : DataTypes.INTEGER,
        primaryKey : true, 
        autoIncrement: true
    }, 
    Observation: {
        type : DataTypes.STRING
    }, 
    Speciality: {
        type: DataTypes.STRING
    },
    HealthCondition: {
        type: DataTypes.STRING
    }
})

//ForeignKey from Doctor 
Doctor.hasMany(Report, {
    foreignKey: 'Doctor_Id',
    sourceKey : 'Id'
})

Report.belongsTo(Doctor, {
    foreignKey: 'Doctor_Id',
    TarjetId : 'Id'
})

//ForeignKey from Patient 
Patient.hasOne(Report, {
    foreignKey: 'Patient_Id',
    sourceKey : 'Id'
})
Report.belongsTo(Patient, {
    foreignKey: 'Patient_Id',
    TarjetId : 'Id'
})

module.exports = Report