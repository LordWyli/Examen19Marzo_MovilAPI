const { DataTypes } = require('sequelize');
const sequelize = require('../data/database');
const Subcategoria = require('./Subcategoria');

const Titulo = sequelize.define('Titulos', {
    idTitulo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    editorial: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    isbn: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    fechaPublicacion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    noEjemplares: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    FK_idSubcategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Subcategoria,
            key: 'idSubcategoria'
        }
    }
}, {
    timestamps: false
});

module.exports = Titulo;
