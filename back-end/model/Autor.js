const { DataTypes } = require('sequelize');
const sequelize = require('../data/database');

const Autor = sequelize.define('Autores', {
    idAutor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    nacionalidad: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    correoElectronico: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true, 
    }
}, {
    timestamps: false
});

module.exports = Autor;
