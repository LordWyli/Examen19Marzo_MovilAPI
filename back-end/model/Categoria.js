const {DataTypes} = require ('sequelize');
const sequelize = require('../data/database');


const Categoria = sequelize.define('Categorias',{
    idCategoria: {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    categoria: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
},{
    timestamps:false
});

module.exports = Categoria;