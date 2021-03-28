'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Libro, {
        as: 'libros',
        foreignKey: 'autorId'
      });
    }
  };
  Autor.init({
    nombre: DataTypes.STRING(50),
    edad: DataTypes.INTEGER,
    nacionalidad: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'Autor',
  });
  return Autor;
};