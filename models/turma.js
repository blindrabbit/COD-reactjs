'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Turma.init({
    nome: DataTypes.STRING,
    data_modificacao: DataTypes.DATE,
    data_criacao: DataTypes.DATE,
    ID_professor: DataTypes.INTEGER,
    ID_curso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Turma',
  });
  return Turma;
};