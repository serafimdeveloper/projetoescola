const {Model, DataTypes } = require ('sequelize');
const sequelize = require('../mysql');

class frequencia extends Model {

     static init (sequelize) {

        super.init({ 
           
        }, {
            sequelize
        })
          
        }
     }

module.exports = frequencia;