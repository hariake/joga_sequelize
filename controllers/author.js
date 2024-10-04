const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require('../models');

// Get all authors with their articles
const getAllAuthors = (req, res) => {
    models.Author.findAll({
        include: [{
            model: models.Article,
            as: 'articles' // make sure you've defined this alias in your association
        }]
    })
    .then(authors => {
        return res.status(200).json({ authors });
    })
    .catch(error => {
        return res.status(500).send(error.message);
    });
};

// Get an author by primary key (id) with their articles
const getAuthorById = (req, res) => {
    const authorId = req.params.id;

    models.Author.findByPk(authorId, {
        include: [{
            model: models.Article,
            as: 'articles' // make sure you've defined this alias in your association
        }]
    })
    .then(author => {
        if (!author) {
            return res.status(404).send('Author not found');
        }
        return res.status(200).json({ author });
    })
    .catch(error => {
        return res.status(500).send(error.message);
    });
};

module.exports = {
    getAllAuthors,
    getAuthorById
};
