const {Model, DataTypes } = require ('sequelize');
const sequelize = require('../mysql');

class Aluno extends Model {

     static init (sequelize) {

        super.init({
           nome: DataTypes.STRING,
           dataNascimento: DataTypes.STRING,
           cpf: DataTypes.STRING,
        }, {
            sequelize
        })
          
        }
     }

module.exports = Aluno;