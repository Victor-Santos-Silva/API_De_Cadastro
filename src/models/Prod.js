const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Prod = sequelize.define('prod', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    qtd: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Prod;