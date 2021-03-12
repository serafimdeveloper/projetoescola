const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../db');

class Turma extends Model {
   static init (sequelize) {
      super.init({
         nometurma: DataTypes.STRING,
         serie: DataTypes.STRING
      }, {
         sequelize,
         modelName: 'turma',
         createdAt: false,
         updatedAt: false
      });
      return this;
         
   }
}

module.exports = Turma.init(sequelize);