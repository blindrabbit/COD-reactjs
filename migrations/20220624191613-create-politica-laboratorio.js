'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Politica_Laboratorio', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_laboratorio_virtual: {
          type: Sequelize.INTEGER,
          references: {
              model: 'laboratorio_virtual',
              key: 'id'
          }
      },
      ID_politica: {
          type: Sequelize.INTEGER,
          references: {
              model: 'Politica',
              key: 'id'

          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
      },
      ID_politica_ativado: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Politica_Laboratorio');
  }
};