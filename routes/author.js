const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author');

// Route to get all authors
router.get('/author', authorController.getAllAuthors);

// Route to get an author by their ID
router.get('/author/:id', authorController.getAuthorById);

module.exports = router;
