const {Sequelize,DataTypes} = require('sequelize')
const config = require('./config.js')
const db = new Sequelize(config.db_name, config.db_username, config.db_password, {
    host: '0.0.0.0',
    port: 3306,
    dialect: 'mysql',
});
const User = db.define('User', {
    "id": { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    "username": DataTypes.STRING,
    "password": DataTypes.STRING,
})

db.sync({ force: false });

module.exports = {
    user : User
}