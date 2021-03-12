const sequelize = require("../db");

const db = {};
db.aluno = require("./aluno");
db.matricula = require('./matricula');
db.turma = require('./turma');
db.frequencia = require('./frequencia');
module.exports = db;