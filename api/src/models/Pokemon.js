const { UUID } = require("sequelize");
const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    special_aefense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    special_attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    front_default: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    front_shiny: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
