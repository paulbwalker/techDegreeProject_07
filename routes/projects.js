const express = require('express');
const router = express.Router();
const { data } = require('../data/projectsData.json');
const { projects } = data;


router.get('/:id', (req, res) => {
  res.render('project', { 
    project_name: projects[req.params.id].project_name,
    description: projects[req.params.id].description,
    technologies: projects[req.params.id].technologies,
    live_link: projects[req.params.id].live_link,
    github_link: projects[req.params.id].github_link,
    image_urls: projects[req.params.id].image_urls
  });
});


module.exports = router;