const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"escola"
})

connection.connect((err)=>{
    if(err){
        console.log("Erro ao conectar ao banco", err);
    }
    console.log("Conectado ao MySQL");
});

module.exports = connection;
