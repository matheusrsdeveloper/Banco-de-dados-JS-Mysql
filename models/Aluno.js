const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Aluno = sequelize.define("Aluno", {
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email: DataTypes.STRING
},
{
    timestamps:false
}
);

module.exports = Aluno;
