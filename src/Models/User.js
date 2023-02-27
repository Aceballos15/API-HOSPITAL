const Connection = require('../Database/Connection')
const { DataTypes } = require ('Sequelize')

const User = Connection.define('User', {
    Identification: {
        type : DataTypes.INTEGER,
        primaryKey : true
    }, 
    Email: {
        type : DataTypes.STRING, 
        unique : true
    },
    Phone: {
        type: DataTypes.BIGINT, 
        unsigned: true
    }, 
    Password: {
        type: DataTypes.STRING
    }, 
    Role: {
        // ['hospital', 'Patient', 'Doctor]
        type: DataTypes.STRING
    }, 
    Verification: {
        type: DataTypes.BOOLEAN, 
        defaultValue: false 
    }
})


module.exports = User