'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Politica_Laboratorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Politica_Laboratorio.init({
    ID_laboratorio_virtual: DataTypes.INTEGER,
    ID_politica: DataTypes.INTEGER,
    ID_politica_ativado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Politica_Laboratorio',
  });
  return Politica_Laboratorio;
};