const Connection = require('../Database/Connection')
const { DataTypes } = require ('Sequelize')

const User = require('./User')

// Definition table 'Patient'
const Patient = Connection.define('Patient', {
    Id: {
        type : DataTypes.INTEGER,
        primaryKey : true, 
        autoIncrement: true
    }, 
    Name: {
        type : DataTypes.STRING
    }, 
    Adress: {
        type: DataTypes.STRING
    }, 
    Birthday: {
        type: DataTypes.DATE
    }
})


User.hasOne(Patient, {
    foreignKey: 'User_Identification', 
    sourceKey: 'Identification' 
})

Patient.belongsTo(User, {
    foreignKey: 'User_Identification',
    TarjetId: 'Identification'
})

module.exports = Patient