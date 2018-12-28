const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.use((req, res, next) => {
  req.message = 'Page Not Found!';
  next();
});

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');


app.use('/', mainRoutes);
app.use('/project', projectRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  console.log(req.message);
  next(err);
});

app.use((err, req, res, next) => { 
  res.locals.error = err;
  res.status('500');
  res.render('error');
});

// Listening on localhost:3000 
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

