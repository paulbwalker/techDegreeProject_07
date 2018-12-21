const express = require('express');
const createError = require('http-errors');
const app = express();
app.set('view engine', 'pug');


const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');


app.use(mainRoutes);
app.use('/project', projectRoutes);


app.use((req, res, next) => {
  return next(createError(404, 'file not found'));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  const status = err.status || 500;
  res.locals.status = status;
  res.status(status);
  res.locals.error = err;
  return res.render('error');
});

// Listening on localhost:3000 
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

