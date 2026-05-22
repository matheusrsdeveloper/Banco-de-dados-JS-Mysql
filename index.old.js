let express = require('express');
let app = express();
app.use(express.json())
const PORT = 3000

const db = require('./db');

app.get('/alunos', function (req, res) {
    db.query("SELECT * FROM alunos", function (err, results) {
        if (err) {
            res.status(500).json({ erro: err.message })
        }
        res.json(results);
    });
});

app.post('/alunos', function (req, res) {
    const { nome } = req.body;
    db.query("INSERT INTO alunos (nome) VALUES (?)",
        [nome],(err, result)=>{
            if(err){
              res.status(500).json({ erro: err.message })  
            }
            res.status(201).json({
                "mensagem":"Usuario inserido com sucesso!",
                id:result.insertId,
                nome
            })
        })
})


app.listen(PORT, function () {
    console.log(`O servidor está rodando na porta ${PORT}`)
});