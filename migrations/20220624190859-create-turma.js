'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Turma', {
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
      ID_professor: {
          type: Sequelize.INTEGER,
          references: {
              model: 'professor',
              key: 'id'

          }
      },
      ID_curso: {
          type: Sequelize.INTEGER,
      
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
    await queryInterface.dropTable('Turma');
  }
};