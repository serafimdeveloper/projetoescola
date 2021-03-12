const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../db');

class Matricula extends Model {
    static init (sequelize) {
      super.init({
        ano: DataTypes.STRING,
        status: DataTypes.STRING
      }, {
          sequelize,
          modelName: 'matricula',
          createdAt: false,
          updatedAt: false
      });
      return this;
    }
}

module.exports = Matricula.init(sequelize);