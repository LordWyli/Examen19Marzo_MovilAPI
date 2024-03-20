const { DataTypes } = require('sequelize');
const sequelize = require('../data/database');
const Categoria = require('./Categoria');

const Subcategoria = sequelize.define('Subcategorias', {
    idSubcategoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    subcategoria: { // Cambiado de subcategorias a subcategoria
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    FK_idCategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categoria,
            key: 'idCategoria'
        }
    }
}, {
    timestamps: false
});

module.exports = Subcategoria;
