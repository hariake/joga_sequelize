const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const Article = require('../models/article')(sequelize, Sequelize.DataTypes);

//kogu data
const getAllArticles = async (req, res) => {
    const articles = await Article.findAll()
    res.json({articles: articles})
} 

//data slugi kaupa
const getArticleBySlug = async (req, res) => {
    const article = await Article.findOne()
    res.json({article: article})
} 


module.exports= {
    getAllArticles,
    getArticleBySlug
};  