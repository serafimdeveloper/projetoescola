const {Model, DataTypes } = require ('sequelize');
const sequelize = require('../mysql');

class turma extends Model {

     static init (sequelize) {

        super.init({
           nometurma: DataTypes.STRING,
           serie: DataTypes.STRING
        }, {
            sequelize
        })
          
        }
     }

module.exports = turma;