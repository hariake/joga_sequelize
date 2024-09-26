const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const Article = require('../models/article')(sequelize, Sequelize.DataTypes);


const getAllArticles = async (req, res) => {
    const articles = await Article.findAll()
    res.json({articles: articles})
} 



module.exports= {
    getAllArticles
};  