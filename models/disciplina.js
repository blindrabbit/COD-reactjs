'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Disciplina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Disciplina.init({
    nome: DataTypes.STRING,
    data_modificacao: DataTypes.DATE,
    data_criacao: DataTypes.DATE,
    ID_curso: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Disciplina',
  });
  return Disciplina;
};