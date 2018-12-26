const express = require('express');
const router = express.Router();
const assignment = require('../data/project.json');

// serve static files from the public folder
router.use(express.static('public'));

router.get('/', (req, res) => {
  res.render('index', { 
    myName: 'Paul B. Walker',
    heading: 'Welcome, to My Portfolio',
    assignment: assignment.projects
  });
});

router.get('/about', (req, res) => {
  res.render('about', { 
    myName: "Paul B. walker", 
    about: "a(href='/about') Learn More →"
  });
});


module.exports = router;