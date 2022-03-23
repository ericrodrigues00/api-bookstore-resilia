const { Model, DataTypes } = require("sequelize");
  const sequelize = require("../database/index");

  class Adress extends Model{}

  Adress.init({
      id: {
          type: DataTypes.STRING,
          primaryKey: true
      },
      country: {
          type: DataTypes.STRING,
      },
      city: {
          type: DataTypes.STRING,
      },
      street_name: {
          type: DataTypes.STRING,
      },
      number: {
          type: DataTypes.INTEGER
      },
      
  },{
      sequelize,
      modelName: "Adress",
      timestamps: false
  });

  module.exports = Adress;