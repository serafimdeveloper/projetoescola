const {Model, DataTypes } = require ('sequelize');
const sequelize = require('../db');

class Frequencia extends Model {
    static init (sequelize) {
        super.init({ 
           
        }, {
            sequelize,
            modelName: 'frequencia',
            createdAt: false,
            updatedAt: false
        })
        return this;
    }
}

module.exports = Frequencia.init(sequelize);