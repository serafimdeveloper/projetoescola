const {Model, DataTypes } = require ('sequelize');
const sequelize = require('../mysql');

class matricula extends Model {

     static init (sequelize) {

        super.init({
          ano: DataTypes.STRING,
          status: DataTypes.STRING
        }, {
            sequelize
        })
          
        }
     }

module.exports = matricula;