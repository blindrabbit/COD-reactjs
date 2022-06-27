'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Disciplina', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      data_modificacao: {
        type: Sequelize.DATE
      },
      data_criacao: {
        type: Sequelize.DATE
      },
      ID_curso: {
          type: Sequelize.INTEGER,
          references: {
              model: 'Curso',
              key: 'id'

          }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Disciplina');
  }
};