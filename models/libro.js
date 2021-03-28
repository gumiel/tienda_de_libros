'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Autor, {
        as: "autor",
        foreignKey: "autorId",
      });
    }
  };
  Libro.init({
    titulo: DataTypes.STRING(50),
    descripcion: DataTypes.STRING(200),
    precio: DataTypes.DECIMAL(12,2)
  }, {
    sequelize,
    modelName: 'Libro',
  });
  return Libro;
};