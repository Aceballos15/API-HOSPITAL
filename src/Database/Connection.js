const sequelize = require('Sequelize');

//Create a new connection to the database using Sequelize
const Connection = new sequelize('API-HEIPPI', 'postgres','aceballos', {
    'host': 'localhost', 
    'dialect': 'postgres'
})


module.exports = Connection