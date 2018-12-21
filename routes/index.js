const express = require('express');
const router = express.Router();
const { data } = require('../data/projectsData.json');
const { projects } = data;

router.use(express.static('public'));

router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Welcome, to My Portfolio.',
    project_thumbnails: projects[0].project_thumbnails,
    project_link: projects[0].project_link,
    project_name: projects[0].project_name
  });
});

router.get('/about', (req, res) => {
  res.render('about', { 
    name: "Paul B. walker", 
    about: "a(href='/about') Learn More →"
  });
});


module.exports = router;