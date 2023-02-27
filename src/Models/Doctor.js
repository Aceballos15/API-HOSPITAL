const Connection = require('../Database/Connection')
const { DataTypes } = require ('Sequelize')
const User = require('./User')

const Doctor = Connection.define('Doctor', {
    Id: {
        type : DataTypes.INTEGER,
        primaryKey : true, 
        autoIncrement: true
    }, 
    Name: {
        type : DataTypes.STRING
    }, 
    Speciality: {
        type: DataTypes.STRING
    }
})

User.hasOne(Doctor, {
    foreignKey: 'User_Identification', 
    sourceKey: 'Identification' 
})

Doctor.belongsTo(User, {
    foreignKey: 'User_Identification',
    TarjetId: 'Identification'
})

module.exports = Doctor