const Connection = require('../Database/Connection')
const { DataTypes } = require ('Sequelize')
const User = require('./User') 

const Hospital = Connection.define('Hospital', {
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
    MedicalServices: {
        type: DataTypes.STRING
    }
    
})

User.hasOne(Hospital, {
    foreignKey: 'User_Identification', 
    sourceKey: 'Identification'
})


Hospital.belongsTo(User, {
    foreignKey: 'User_Identification', 
    TarjetId: 'Identification'
})

module.exports = Hospital