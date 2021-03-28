'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Libro_carritos", "carritoId", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Carritos",
        },
        key: "id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Libro_carritos", "carritoId");
  }
};
