const { DataTypes } = require('sequelize');
const sequelize = require('../data/database');
const Autor = require('./Autor');
const Titulo = require('./Titulo');

const TituloAutor = sequelize.define('TitulosAutores', {
    FK_idAutor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Autor,
            key: 'idAutor'
        }
    },
    FK_idTitulo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Titulo,
            key: 'idTitulo'
        }
    }
}, {
    timestamps: false
});

module.exports = TituloAutor;