'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro_carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Libro, {
        as: "libro",
        foreignKey: "libroId",
      });

      this.belongsTo(models.Carrito, {
        as: "carrito",
        foreignKey: "carritoId",
      });
    }
  };
  Libro_carrito.init({
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Libro_carrito',
  });
  return Libro_carrito;
};