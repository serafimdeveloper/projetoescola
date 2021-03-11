
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbescola, escola, tecalpha, {
  host: localhost,
  dialect: mysql,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./aluno.model.js")(sequelize, Sequelize);

module.exports = db;