'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Producer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'producers',
    modelName: 'Producer',
    timestamps: false
  });
  return Producer;
};