const express = require('express');
const app = express(); 

app.use(express.json())

const rotaAlunos = require('./routes/alunos');
/* const rotaTurmas = require('./routes/turmas');
const rotaFrequencias = require('./routes/frequencias');
const rotaMatriculas = require('./routes/Matriculas'); */


app.use ('/alunos', rotaAlunos )
// app.use ('/turmas',rotaTurmas)
// app.use('/frequencias',rotaFrequencias)
// app.use('/matriculas',rotaMatriculas)
module.exports = app;
