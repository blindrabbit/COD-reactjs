'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Politica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Politica.init({
    descricao: DataTypes.STRING,
    data_modificacao: DataTypes.DATE,
    data_criacao: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Politica',
  });
  return Politica;
};