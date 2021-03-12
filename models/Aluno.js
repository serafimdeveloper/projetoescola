const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../db');

class Aluno extends Model {
   static init (sequelize) {
      super.init({
         usuario: DataTypes.STRING,
         senha: DataTypes.STRING,
      }, {
         sequelize,
         modelName: 'usuario',
         createdAt: false,
         updatedAt: false
      })          
      return this;
   }
}


module.exports = Aluno.init(sequelize);