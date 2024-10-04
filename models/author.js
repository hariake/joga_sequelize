'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Author extends Model {
    static associate(models) {
      // Define association here
      this.hasMany(models.Article, {
        foreignKey: 'author_id', // Ensure this matches the foreign key in Article
        as: 'articles' // Optional alias for the relationship
      });
    }
  }

  Author.init({
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
    modelName: 'Author',
  });

  return Author; // Return the Author model
};
