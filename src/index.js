const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//initalizations
const app = express();

//settings
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}))
app.set('view engine', '.hbs')
//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json())

//Routes
app.use(require('./routes/index'));

//Static files
app.use(express.static(path.join(__dirname, 'public')))

//Start server
app.listen(3000, () => {
  console.log('Server on port', 3000)
});