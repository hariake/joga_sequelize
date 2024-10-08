'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Tag extends Model {
    static associate(models) {
      
      this.belongsToMany(models.Article ,{
        foreignKey: 'tagId',
        through: 'ArticleTags',
      } )
    }
  }

  Tag.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Consider adding this if you want auto-increment
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false // Consider adding this to enforce a name
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });

  return Tag; // Return the Author model
};
