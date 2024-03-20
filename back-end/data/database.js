const {Sequelize} = require('sequelize');
const senquelize = new Sequelize('Biblioteca', 'root', 'Password20.wyliam', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql'
});

module.exports = senquelize;