const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
    "escola",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mysql"
    }
);
sequelize.sync()
    .then(() => {
        console.log("Banco conectado!")
    }).catch(err => console.error(err))

module.exports = sequelize;

